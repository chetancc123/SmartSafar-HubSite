import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaBars, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Flex, Box, Icon, Text, Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import Carmaintance from "../Transport/Carmaintance";
import Carmaintancecount from "./Carformaintainencecount";


const Managermanagemant = ({ children }) => {
  const [employeeCount, setEmployeeCount] = useState(null);
  const [carCount, setCarCount] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/hub/employee/employeeCount/1"
        );
        setEmployeeCount(response.data);
      } catch (error) {
        console.error("Error fetching employee count:", error);
      }
    };

    fetchData();
  }, []);

  const demoData = [
    // Your demo data
  ];

  const paymentDetails = [
    // Your payment details
  ];

  return (
    <>
    
      <Flex
        direction={{ base: "column", md: "row" }}
        ml={{ base: "none", md: "90px" }}
      >
        {/* Boxes 1 to 4 */}

        <Box
          position="relative"
          w={{ base: "80%", md: "20%" }}
          h={{ base: "25px", md: "150px" }}
          p={4}
          bg="white"
          boxShadow="md"
          border="3px solid  blue"
          mb={{ base: 4, md: 0 }}
          mt={{ base: 10, md: 10 }}
          mr={{ base: 0, md: 4 }}
          borderRadius="10px"
        >
          <Text position="absolute" top="5px" left="5px" fontWeight="bold">
            {" "}
            Car for Return
          </Text>
          <NavLink to={"/Carmaintance"}>
            {" "}
            <Icon
              as={FaBars}
              position="absolute"
              color="blue"
              top="5px"
              right="5px"
            />
          </NavLink>
          <Text
            position="absolute"
            top="45px"
            left="105px"
            fontWeight="bold"
            fontSize={40}
          >
            <Carmaintancecount setCarCount={setCarCount} />
            {/* {carCount} */}
          </Text>
        </Box>
        {/* Box 2 */}
        {/* <Box
          position="relative"
          w={{ base: "50%", md: "20%" }}
          h={{ base: "auto", md: "150px" }}
          p={4}
          bg="white"
          boxShadow="md"
          border="3px solid  blue"
          mb={{ base: 4, md: 0 }}
          mt={{ base: 10, md: 10 }}
          mr={{ base: 0, md: 4 }}
          borderRadius="10px"
        >
          <Text position="absolute" top="5px" left="5px" fontWeight="bold">
            Employee Detail
          </Text>
          <NavLink to={"/Employeepage"}>
            <Icon as={FaUser} position="absolute" top="5px" right="5px" />
          </NavLink>{" "}
          <Text
            position="absolute"
            top="45px"
            left="105px"
            fontWeight="bold"
            fontSize={40}
          >
            {employeeCount}
          </Text>
        </Box> */}
     

        <Box
          position="relative"
          w={{ base: "80%", md: "20%" }}
          h={{ base: "25px", md: "150px" }}
          p={4}
          bg="white"
          boxShadow="md"
          border="3px solid  blue"
          mb={{ base: 4, md: 0 }}
          mt={{ base: 10, md: 10 }}
          mr={{ base: 0, md: 4 }}
          borderRadius="10px"
        >
          <Text position="absolute" top="5px" left="5px" fontWeight="bold">
            {" "}
            Car for Repairing
          </Text>
          <NavLink to={"/CarForRepairing"}>
            {" "}
            <Icon
              as={FaBars}
              position="absolute"
              color="blue"
              top="5px"
              right="5px"
            />
          </NavLink>
          <Text
            position="absolute"
            top="45px"
            left="105px"
            fontWeight="bold"
            fontSize={40}
          >
            {/* <Carmaintancecount setCarCount={setCarCount} /> */}
            {/* {carCount} */}
          </Text>
        </Box>
      </Flex>

      <Flex direction="row" h="40vh" marginTop="10">
        
      <Carmaintance width="100%"   >{/* Children components */}</Carmaintance>

      </Flex>
   
    </>
  );
};

export default Managermanagemant;
