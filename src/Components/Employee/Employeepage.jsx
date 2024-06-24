import React, { useState, useEffect } from "react";
import { FaBars, FaUserAlt, FaRegChartBar, FaThList, FaUser } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { Table, Thead, Tbody, Tr, Th, Td, Button, Text, Flex, Box, Icon, Spinner } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import axios from "axios";


const Employeepage = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/hub/list-of-hub-employee/1")
      .then(response => {
        setEmployees(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);
  

  return (
   <>

   <Flex direction="column" h="100vh">
      <Box
        position="relative"
        w={{ base: "100%", md: "20%" }}
        h="40px"
        p={4}
        bg="white"
        mb={4}
      >
        <Text fontWeight="bold">Management Page</Text>
        <Icon as={IoChevronBack} position="absolute" top="50%" left="5px" transform="translateY(-50%)" />
      </Box>

      <Box
        w="100%"
        bg="white"
        borderRadius="10px"
        border="1px solid black"
        borderColor="blue.200"
        p={4}
        overflow="auto"
        flex="1"
      >
        {isLoading ? (
          <Flex justify="center" align="center" h="100%">
            <Spinner size="xl" color="blue.500" />
          </Flex>
        ) : (
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>S.No</Th>
                <Th>Name</Th>
                <Th>Employee Id</Th>
                <Th>Contact</Th>
                <Th>Email Id</Th>
                <Th>Details</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {employees.map((employee, index) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>{employee.name}</Td>
                  <Td>{employee.hubEmpId}</Td>
                  <Td>{employee.phoneNo || "N/A"}</Td>
                  <Td>{employee.email || "N/A"}</Td>
                  <Td>
                    <NavLink to={`/Employesdetails/${employee.id}`}>
                      <Button colorScheme="blue" size="sm">Details</Button>
                    </NavLink>
                  </Td>
                  <Td>
                    <Text color="green">Online</Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </Box>
    </Flex>
   </>
  );
};

export default Employeepage;
