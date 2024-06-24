import React, { useState, useEffect, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Flex, Box, Icon, Text } from "@chakra-ui/react";

import { BiLogOutCircle } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { FaListCheck, FaCar } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import TimeUpdate from "./Timeupdate";
import { Image } from "@chakra-ui/react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { AuthContext } from "../AuthContext/Authcontext";
import { IoIosPeople } from "react-icons/io";
import { IoIosCar } from "react-icons/io";
import { IoIosBus } from "react-icons/io";
import { BsCardList } from "react-icons/bs";
import { color } from "framer-motion";

const Home = () => {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const { state } = location;
  const emailFromState = state?.email || localStorage.getItem("email") || null;
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768); // Sidebar is open by default on larger screens
  const [userData, setUserData] = useState({
    name: localStorage.getItem("name") || "",
    email: emailFromState,
    profileImgLink: localStorage.getItem("profileImgLink") || "",
  });

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      to: "/dashboard",
      name: "Dashboard",
      icon: IoMdHome,
    },
    {
      to: "/driverlist",
      name: "Driver List",
      icon: IoIosPeople,
    },
   
    {
      to: "/Carlist",
      name: "VEHICLE LIST",
      icon: IoIosCar,
    },
    {
      to: "/Transport",
      name: "Transport",
      icon: IoIosBus,
    },
    {
      to: "/booking",
      name: "Booking",
      icon: BsCardList,
      color: "black",
      fontWeight:"bold"
    },
    {
      to: "/management",
      name: "Management",
      icon: IoPeopleSharp,
    },

    
    {
      to: "/setting",
      name: "Setting",
      icon: IoIosSettings,
    },
  ];

  useEffect(() => {
    if (emailFromState) {
      axios
        .get("http://localhost:8080/hub/hub-profile-by-email", {
          params: {
            email: emailFromState,
          },
        })
        .then((response) => {
          console.log("User profile:", response.data);
          setUserData(response.data);
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("email", emailFromState);
          localStorage.setItem("profileImgLink", response.data.profileImgLink);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [emailFromState]); // Include email in the dependency array

  const handleLogout = async () => {
    const token = sessionStorage.getItem('token'); 
    if (!token) {
      console.error("No token found");
      return;
    }

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/logout',
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };

    try {
      const response = await axios.request(config);
      console.log("Logout successful:", response.data);
      sessionStorage.clear();
      logout();
      Navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <Box direction="row" h="100vh">
      <Flex direction="column" flex="1">
        <Flex
          as="header"
          className="header"
          bg="#13C39C"
          justify="space-between"
          px={[2, 6]} // Adjust horizontal padding for smaller screens
          py={[3, 4]}
          mb={isOpen ? "0" : "4"} // Add margin bottom only when sidebar is closed
          position="fixed" // Add this line
          top="0" // Add this line
          zIndex="10" // Add this line
          width="100%"
        >
          <Box
            fontSize="32px"
            fontWeight="500"
            fontFamily="Poppins, sans-serif"
            color="white"
          >
          <Image src="Logo.png" borderRadius="50%" height="100%" width="40%" />
          </Box>
          <Flex align="center" className="user-info">
            <Popover>
              <PopoverTrigger>
                <Icon
                  as={FaRegBell}
                  fontSize="33px"
                  color="white"
                  margin="3"
                  cursor="pointer"
                />
              </PopoverTrigger>
              <PopoverContent
                color="black"
                border="1px solid"
                marginLeft="1000"
                w={{ base: "80%", md: "40%" }}
                h={{ base: "25px", md: "400px" }}
                marginTop="81"
                borderColor="gray.200"
                boxShadow="lg"
                p={4}
                borderRadius="md"
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Notifications</PopoverHeader>
                <PopoverBody>
                  {/* Notification content */}
                  <Text>Notification 1</Text>
                  <Text>Notification 2</Text>
                  <Text>Notification 3</Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            {userData.name && userData.email && (
              <>
                <img
                  src={userData.profileImgLink}
                  alt={userData.name}
                  className="user-avatar"
                  style={{ width: "53px", height: "53px", borderRadius: "50%" }}
                />
                <Box
                  className="user-details"
                  fontSize="12px"
                  fontWeight="300"
                  fontFamily="Lexend, sans-serif"
                  color="white"
                  ml={10}
                >
                  {userData.name} <br /> {userData.email}{" "}
                  {/* Display email here */}
                </Box>
              </>
            )}
            <Icon
              as={BiLogOutCircle}
              fontSize="25px"
              color="white"
              ml={5}
              cursor="pointer"
              onClick={handleLogout} // Call handleLogout function on click
            />
          </Flex>
        </Flex>
      </Flex>
      <TimeUpdate />
      <Flex>
        <Box
          w={isOpen ? "200px" : "50px"}
          bg="green.100"
          overflowY="auto"
          transition="width 0.3s ease"
          flexShrink="0"
          position="sticky"
          height="120vh"
          mt={{ base: "none", md: "30px" }}
          display={{ base: isOpen ? "block" : "none", md: "block" }}
        >
          <Flex direction="column">
            <Box p="20px 10px" borderBottom="1px solid #ccc">
              {" "}
              {/* Reduce horizontal padding */}
              <Box
                ml={isOpen ? "2" : "0"} // Adjust margin left when sidebar is closed
                cursor="pointer"
                onClick={toggleSidebar}
              >
                <FaBars />
              </Box>
            </Box>
            <Box></Box>
            {menuItem.map((item, index) => (
              <NavLink to={item.to} key={index} activeClassName="active">
                <Flex
                  alignItems="center"
                  p="15px 20px"
                  textDecoration="none"
                  _hover={{ bg: "#f5f5f5" }}
                >
                  <Icon
                    as={item.icon}
                    mr="15px"
                    color={item.color || "inherit"}
                    style={{ fontWeight: "bold", color: "black" }}
                  />{" "}
                  {/* Apply font weight and color */}
                  <Text display={isOpen ? "block" : "none"}>{item.name}</Text>
                </Flex>
              </NavLink>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
