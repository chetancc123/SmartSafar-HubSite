import { useState, useEffect } from "react";
import {
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaThList,
  FaUser,
} from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import { Flex, Box, Icon, Text, Button } from "@chakra-ui/react";


const Employeedetailpage = ({ children }) => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [otherCharacter, setOtherCharacter] = useState("");

  const handleInputToggle = () => {
    setIsInputOpen(!isInputOpen);
  };

  const handleOtherCharacterChange = (event) => {
    setOtherCharacter(event.target.value);
  };

  const demoData = [
    {
      sNo: 1,
      carName: "Toyota Camry",
      EmployeeId: "XYZ123",
      contact: "942414461",
      emailId: "yashjsd@gmail.com",
      Status: "Details",
      sendTORepair: "Send",
    },

    {
      sNo: 1,
      carName: "Toyota Camry",
      EmployeeId: "XYZ123",
      contact: "942414461",
      emailId: "yashjsd@gmail.com",
      Status: "Details",
      sendTORepair: "Send",
    },
    {
      sNo: 1,
      carName: "Toyota Camry",
      EmployeeId: "XYZ123",
      contact: "942414461",
      emailId: "yashjsd@gmail.com",
      Status: "Details",
      sendTORepair: "Send",
    },
    // Add more sample data objects as needed
  ];

  return (
   <>
  
   <Flex direction="row" h="100vh">
      <Flex direction="column" flex="1">
        <Box
          position="relative"
          w={{ base: "50%", md: "20%" }}
          h={{ base: "25px", md: "10px" }}
          p={4}
          bg="white"
          mb={{ base: 4, md: 0 }}
          mt={{ base: 10, md: "10px" }}
          mr={{ base: 0, md: 10 }}
        >
          <Text position="absolute" top="5px" left="50px" fontWeight="bold">
            Management Page
          </Text>
          <Icon as={IoChevronBack} position="absolute" top="8px" left="5px" />
        </Box>

        <Box
          w="1000px"
          bg="white"
          borderRadius="10px"
          border="1px solid black"
          borderColor="blue.200"
          marginTop="10px"
          marginLeft={{ base: "none", md: "80px" }}
          overflowY="auto"
        >
          {/* Table */}
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th style={{ background: "#355eef", color: "black" }}>S.No </Th>
                <Th style={{ background: "#355eef", color: "black" }}>Name</Th>
                <Th style={{ background: "#355eef", color: "black" }}>
                  Employee Id
                </Th>
                <Th style={{ background: "#355eef", color: "black" }}>
                  Contact
                </Th>
                <Th style={{ background: "#355eef", color: "black" }}>
                  Email Id
                </Th>
                <Th style={{ background: "#355eef", color: "black " }}></Th>
                <Th style={{ background: "#355eef", color: "black " }}>
                  Status
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {demoData.map((car, index) => (
                <Tr key={index}>
                  <Td>{car.sNo}</Td>
                  <Td>{car.carName}</Td>
                  <Td>{car.EmployeeId}</Td>
                  <Td>{car.contact}</Td>
                  <Td>
                    {car.emailId}
                    <Td />
                  </Td>

                  <Td>
                    <Button colorScheme="blue">{car.Status}</Button>
                  </Td>
                  <Td>
                    <Button colorScheme="blue">{car.sendTORepair}</Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Box flex="1">{children}</Box>
      </Flex>
    </Flex>
   </>
  );
};

export default Employeedetailpage;
