import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Flex,
  Table,
  Box,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Text,
  Select, // Import Select component from Chakra UI
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

const Pendingdriverrequest = ({ children }) => {
  const [carData, setCarData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVehicleType, setSelectedVehicleType] = useState(""); // State for selected vehicle type
  const itemsPerPage = 5;
  const hubMangerId = sessionStorage.getItem("id");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/hub/driver-pending-list/1`
      );
      setCarData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleVehicleTypeChange = (event) => {
    setSelectedVehicleType(event.target.value);
  };

  const paginatedData = carData
    .filter((item) => {
      if (selectedVehicleType === "") return true; // If no filter selected, return all data
      return item.driver.driverType === selectedVehicleType; // Filter based on selected vehicle type
    })
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(paginatedData.length / itemsPerPage);

  return (
    <>
      <Flex direction="column" h="100vh" mt={10} ml={10}>
        <Text fontSize={20} textStyle={"bold"}>
          Pending Driver List
        </Text>

        {/* Dropdown to select vehicle type */}
        <Select
          value={selectedVehicleType}
          onChange={handleVehicleTypeChange}
          mt={4}
          w="100%"
          bg="#13C39C"
        //   color="white"
          marginTop={10}
        >
          <option value="">All</option>
          <option value="TWO_WHEELER">Two Wheeler</option>
          <option value="FOUR_WHEELER">Four Wheeler</option>
        </Select>

        <Table  mt={10}  variant="simple" sx={{ border: "3px solid #13C39C" }}>
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Name</Th>
              <Th>Driver ID</Th>
              <Th>Contact</Th>
              <Th>Email ID</Th>
              <Th>Vehicle Type</Th>
              <Th>View</Th>
              
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {paginatedData.map((item, index) => (
              <Tr key={index}>
                <Td>{(currentPage - 1) * itemsPerPage + index + 1}</Td>
                <Td>{item.driver.name}</Td>
                <Td>{item.driver.driverId}</Td>
                <Td>{item.driver.phoneNo}</Td>
                <Td>{item.driver.email}</Td>
               
                <Td>{item.driver.driverType}</Td>
                <Td>
                  <Link to={`/PendingDriverdetails/${item.driver.driverId}`}>
                    <Button bg="#13C39C" size="md">
                      Details
                    </Button>
                  </Link>
                </Td>
                <Td>
                  <Text bg={item.documentStatus} color="red" px={2} borderRadius="md">
                    {item.documentStatus}
                  </Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        {/* Pagination controls */}
        <Flex justify="center" mt={4}>
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            isDisabled={currentPage === 1}
            bg="#13C39C"
          >
            Previous
          </Button>
          <Text mx={4}>
            Page {currentPage} of {totalPages}
          </Text>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            isDisabled={currentPage === totalPages}
            bg="#13C39C"
          >
            Next
          </Button>
        </Flex>

        <Box flex="1">{children}</Box>
      </Flex>
    </>
  );
};

export default Pendingdriverrequest;
