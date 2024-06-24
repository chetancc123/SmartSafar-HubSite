import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Button,
  Tr,
  Th,
  Td,
  Table,
} from "@chakra-ui/react";
import { FaList } from "react-icons/fa";
import { IoPeopleCircleSharp } from "react-icons/io5";
import {} from "react-icons/fa";
import axios from "axios";

import { FaBriefcase } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { LuTarget } from "react-icons/lu";

import { NavLink } from "react-router-dom"; // Assuming you are using react-router-dom for navigation
import Activedrivercount from "./driver/Activedrivercount";
import NewBookingcount from "./Booking/NewbookingCount";


const Dashboard = () => {
  const [carData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [newBookingCount, setNewBookingCount] = useState(0);
  const [carCount, setCarCount] = useState();
  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => {
    // const [newBookingCount, setNewBookingCount] = useState(0);
    setIsOpen(!isOpen);
  };

  const getCurrentDateTime = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString(); // Format the date and time as per your requirement
  };

  return (
    <>
    
      <Flex
        marginBottom="5"
        marginLeft="150"
        direction="row"
        height="5px" // Adjust based on your header height
        px={[4, 6]}
        ml={{ base: "none", md: "40px" }}
      >
         <NavLink to={"/BookingHome"}>
        <Box
          position="relative"
          w={{ base: "80%", md: "200px" }}
          h={{ base: "25px", md: "150px" }}
          p={4}
          bg="white"
          border=" 3px solid #13C39C"
          boxShadow="md"
          mb={{ base: 4, md: 0 }}
          mt={{ base: 10, md: 10 }}
          mr={{ base: 0, md: 4 }}
          borderRadius="10px"        >
          <Text position="absolute" top="5px" left="5px" fontWeight="bold">
            New Booking
          </Text>
          <Text
            position="absolute"
            top="45px"
            left="90px"
            fontWeight="bold"
            fontSize={40}
          >
            <NewBookingcount />
          </Text>
         
            {" "}
            <Icon
              as={FaList}
              position="absolute"
              color="#13C39C"
              top="5px"
              right="5px"
            />
    
        </Box>

        </NavLink>
        <NavLink to={"/Activedriver"}>
          <Box
            position="relative"
            w={{ base: "80%", md: "200px" }}
            h={{ base: "25px", md: "150px" }}
            p={4}
            bg="white"
            boxShadow="md"
            mb={{ base: 4, md: 0 }}
            mt={{ base: 10, md: 10 }}
            mr={{ base: 0, md: 4 }}
            borderRadius="10px"
            border=" 3px solid #13C39C"
          >
            <Text position="absolute" top="5px" left="5px" fontWeight="bold">
              {" "}
              ACTIVE DRIVER
            </Text>
            <Icon
              as={FaBars}
              position="absolute"
              color="d"
              top="5px"
              right="5px"
            />
            <Box mt={6} ml={16}>
              <Activedrivercount setCarCount={setCarCount} />
            </Box>
          </Box>
        </NavLink>
        <NavLink to={"/Activebooking"}>
          <Box
            position="relative"
            w={{ base: "80%", md: "200px" }}
            h={{ base: "25px", md: "150px" }}
            p={4}
            bg="white"
            boxShadow="md"
            mb={{ base: 4, md: 0 }}
            mt={{ base: 10, md: 10 }}
            mr={{ base: 0, md: 4 }}
            borderRadius="10px"
            border=" 3px solid #13C39C"
          >
            <Text position="absolute" top="5px" left="5px" fontWeight="bold">
              {" "}
              ACTIVE RIDE
            </Text>
            <Icon
              as={IoPeople}
              position="absolute"
              color="#13C39C"
              top="5px"
              right="5px"
            />
          </Box>
        </NavLink>
        <NavLink to={"/Todaybookinghistory"}>
          
        </NavLink>{" "}
      </Flex>

      <Flex
        flexDirection="row"
        mt={{ base: "none", md: "220px" }}
        ml={{ base: "none", md: "50px" }}
      >
        <Box
          bg="green"
          p={6}
          borderRadius="md"
          boxShadow="md"
          mb={4}
          // marginTop="850px"
          marginRight="40px"
          ml={{ base: "none", md: "10px" }}
          height="450px"
          width="700px"
          border=" 3px solid #13C39C"
          backgroundColor="white"
        >
          <Text marginTop="-2" marginBottom="2" fontWeight="bold">
            Active Rides
          </Text>

          <Flex
            justify="space-between"
            bg="#E2E8F0"
            pb={2}
            mb={2}
            fontWeight="500"
          >
            <Table>
              <Tr>
                <Th>Driver name</Th>
                <Th>Distance</Th>
                <Th>Pickup</Th>
                <Th>Drop</Th>
                <Th>Status</Th>
              </Tr>
              {carData.map((car, index) => (
                <Tr key={index}>
                  <Td>{car.name}</Td>
                  <Td>{car.distance}</Td>
                  <Td>{car.pickup}</Td>
                  <Td>{car.drop}</Td>
                  <Td
                    style={{
                      backgroundColor:
                        car.status === "completed" ? "orange" : "red",
                      borderRadius: "10px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {car.status}
                  </Td>
                </Tr>
              ))}
              
            </Table>
            
          </Flex>
         

          {carData.map((car, index) => (
            <Flex
              key={index}
              justify="space-between"
              fontWeight="bold"
              marginBottom="2"
              alignContent="center"
            >
              <Box width="150px">{car.driverName}</Box>
              <Box width="150px">{car.distance}</Box>
              <Box width="200px">{car.pickup}</Box>
              <Box width="150px">{car.drop}</Box>
              <Box
                width="100px"
                backgroundColor={car.status === "completed" ? "orange" : "red"}
                borderRadius="10"
                alignItems="center"
                display="flex"
                justifyContent="center"
              >
                {car.status}
              </Box>
            </Flex>
          ))}
        </Box>
        <Box
          bg="gray.100"
          p={6}
          borderRadius="md"
          boxShadow="md"
          mb={4}
          height="450px"
          width="350px"
          border="3px solid #13C39C"
          backgroundColor="white"
        >
          <Text fontSize="sm" fontWeight="semibold" color="#13C39C.950">
            Today’s Booking
          </Text>
          <Flex gap={4} mt={2}>
            <Flex
              flexDir="column"
              flex="1"
              alignSelf="start"
              mt={1.5}
              fontSize="xs"
              color="stone.950"
            >
              <Flex dir="row">
                <Box>
                  <Icon
                    as={IoPeopleCircleSharp}
                    fontSize="50"
                    marginRight="5"
                    color="red"
                    top="5px"
                    right="5px"
                    mt="2"
                    border="4px solid black"
                    borderRadius="180"
                  />
                </Box>

                <Box>
                  <Text color="gray" fontSize="11">
                    9.20-10.20 am
                  </Text>
                  <Text fontWeight="medium" whiteSpace="nowrap">
                    Ride from telibanda to tatiband
                  </Text>
                  <Text color="gray" fontSize="11">
                    at Meeting Room
                  </Text>
                </Box>
              </Flex>
              <Flex direction="row">
                <Box>
                  <Icon
                    as={IoPeopleCircleSharp}
                    fontSize="50"
                    marginRight="5"
                    color="red"
                    top="5px"
                    right="5px"
                    mt="3"
                    border="4px solid black"
                    borderRadius="180"
                  />
                </Box>

                <Box>
                  <Text mt={3} color="gray" fontSize="11">
                    12.30-1.30 am
                  </Text>
                  <Text fontWeight="medium" whiteSpace="nowrap">
                    Ride from telibanda to tatiband
                  </Text>
                  <Text color="gray" fontSize="11">
                    4at Conference Room 2
                  </Text>
                </Box>
              </Flex>

              <Flex direction="row">
                <Box>
                  <Icon
                    as={IoPeopleCircleSharp}
                    fontSize="50"
                    marginRight="5"
                    color="red"
                    top="5px"
                    right="5px"
                    mt="3"
                    border="4px solid black"
                    borderRadius="180"
                  />
                </Box>

                <Box>
                  <Text mt={3} color="gray" fontSize="11">
                    12.30-1.30 pm
                  </Text>
                  <Text fontWeight="medium" whiteSpace="nowrap">
                    Ride from telibanda to tatiband
                  </Text>
                  <Text color="gray" fontSize="11">
                    at CEO’s Room
                  </Text>
                </Box>
              </Flex>

              <Flex direction="row">
                <Box>
                  <Icon
                    as={IoPeopleCircleSharp}
                    fontSize="50"
                    marginRight="5"
                    color="red"
                    top="5px"
                    right="5px"
                    mt="3"
                    border="4px solid black"
                    borderRadius="180"
                  />
                </Box>

                <Box>
                  <Text mt={3} color="gray" fontSize="11">
                    4.30-5.00 pm
                  </Text>
                  <Text fontWeight="medium" whiteSpace="nowrap">
                    Ride from telibanda to tatiband
                  </Text>
                  <Text color="gray" fontSize="11">
                    at Conference Room 1
                  </Text>

                  <Box mt="40" ml="-518">
            <Button colorScheme="#13C39C">View All Rides</Button>
          </Box>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Dashboard;