import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Flex,
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Stack,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import Activedrivercount from "./Activedrivercount";
import { CSVLink } from "react-csv";

const Driverlist = ({ children }) => {
  const [carData, setCarData] = useState([]);
  const [activeDriverCount, setActiveDriverCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const boxWidth = useBreakpointValue({ base: "100%", md: "30%" });
  const boxHeight = useBreakpointValue({ base: "100px", md: "150px" });
  const hubMangerId = sessionStorage.getItem("id");
  useEffect(() => {
    fetchData();
  }, []);

  const extractRequiredColumns = () => {
    return carData.map((car, index) => ({
      "S.No": index + 1,
      Name: car.name,
      "Driver ID": car.driverId,
      Contact: car.phoneNo,
      "Email ID": car.email,
      Status: car.status,
    }));
  };

  const fetchData = async () => {
    try {
      console.log("Fetching data...");
      // Simulate loading time
      setTimeout(async () => {
        const response = await axios.get(
          `http://localhost:8080/hub/get-all-driver-list/${hubMangerId}`
        );
        console.log("Data fetched:", response.data);
        setCarData(response.data);
        // Calculate active driver count
        const activeCount = response.data.filter(
          (car) => car.status === "ONGOING"
        ).length;
        console.log("Active driver count:", activeCount);
        setActiveDriverCount(activeCount);
        setIsLoading(false); // Set loading to false after data is fetched
      }, 500); // 1-second delay
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false); // Ensure loading state is set to false even in case of error
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginatedData = carData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(carData.length / itemsPerPage);

  // Render loading state
  if (isLoading) {
    return (
      <Flex align="center" justify="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <>
      <Flex direction="column" h="100vh" ml={{ base: "0", md: "10px" }} p={4} mt={10}>
        <Stack direction={{ base: "column", md: "row" }} spacing={16} mb={6}>
          <NavLink to="/Activedriver" style={{ width: boxWidth }}>
            <Box
              h={boxHeight}
              p={4}
              bg="white"
              boxShadow="md"
              borderRadius="10px"
              border="2px solid #13C39C"
            >
              <Text fontWeight="bold">
                Active Driver
                <Text fontSize="2xl">
                  <Activedrivercount />
                </Text>
              </Text>
            </Box>
          </NavLink>
          <NavLink to="/Totallist" style={{ width: boxWidth }}>
            <Box
              h={boxHeight}
              p={4}
              bg="white"
              boxShadow="md"
              borderRadius="10px"
              border="2px solid #13C39C"
            >
              <Text fontWeight="bold">
                Total Driver
                <Text fontSize="2xl">{carData.length}</Text>
              </Text>
            </Box>
          </NavLink>
          <NavLink to="/Pendingdriverrequest" style={{ width: boxWidth }}>
            <Box
              h={boxHeight}
              p={4}
              bg="white"
              boxShadow="md"
              borderRadius="10px"
              border="2px solid #13C39C"
            >
              <Text fontWeight="bold">
                Driver Request
                <Text fontSize="2xl">{carData.length}</Text>
              </Text>
            </Box>
          </NavLink>


          
        </Stack>
        <Box
          w="100%"
          p={4}
          bg="gray.100"
          boxShadow="md"
          border="2px solid #13C39C"
          mb={6}
          borderRadius="10px"
          overflowX="auto"
        >
          <Table variant="striped" colorScheme="#13C39C" size="sm" w="100%">
            <Thead>
              <Tr>
                <Th>S.No</Th>
                <Th>Name</Th>
                <Th>Driver ID</Th>
                <Th>Contact</Th>
                <Th>Email ID</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {paginatedData.map((car, index) => (
                <Tr key={index}>
                  <Td>{(currentPage - 1) * itemsPerPage + index + 1}</Td>
                  <Td>{car.name}</Td>
                  <Td>{car.driverId}</Td>
                  <Td>{car.phoneNo}</Td>
                  <Td>{car.email}</Td>
                  <Td>
                    <Text
                      bg={car.status === "online" ? "green.500" : "orange.500"}
                      color="white"
                      px={2}
                      py={1}
                      borderRadius="md"
                      textAlign="center"
                    >
                      {car.status}
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Flex justify="center" mt={4}>
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              isDisabled={currentPage === 1}
              mr={2}
            >
              Previous
            </Button>
            <Text mx={4}>
              Page {currentPage} of {totalPages}
            </Text>
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              isDisabled={currentPage === totalPages}
              ml={2}
            >
              Next
            </Button>
          </Flex>
          <Box textAlign="right" mt={4}>
            <CSVLink
              data={extractRequiredColumns()} // Pass only required columns
              filename={"driver_data.csv"}
            >
              <Button colorScheme="teal">Download CSV</Button>
            </CSVLink>
          </Box>
        </Box>
        <Box flex="1">{children}</Box>
      </Flex>
    </>
  );
};

export default Driverlist;
