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
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

const Totallist = ({ children }) => {
  const [carData, setCarData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const hubMangerId = sessionStorage.getItem("id");
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/hub/get-all-driver-list/${hubMangerId}`
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

  const paginatedData = carData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(carData.length / itemsPerPage);

  return (
    <>
      <Flex direction="column" h="100vh" mt={10}>
        <NavLink to={"/driverlist"}>
          <Button
            marginLeft="20px"
            variant="unstyled"
            display="flex"
            alignItems="start"
            mr={{ base: "none", md: "-200px" }}
          >
            <Text fontSize={20}>Total Driver List</Text>
          </Button>
        </NavLink>

        <Table
          variant="simple"
          sx={{ border: "3px solid #13C39C" }}
        >
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Name</Th>
              <Th>Driver ID</Th>
              <Th>Contact</Th>
              <Th>Email ID</Th>
              <Th>View</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {paginatedData.map((item, index) => (
              <Tr key={index}>
                <Td>{(currentPage - 1) * itemsPerPage + index + 1}</Td>
                <Td>{item.name}</Td>
                <Td>{item.driverId}</Td>
                <Td>{item.phoneNo}</Td>
                <Td>{item.email}</Td>
                <Td>
                  <Link to={`/Driverdetail/${item.driverId}`}>
                    <Button bg="#13C39C" size="md">
                      Details
                    </Button>
                  </Link>
                </Td>
                <Td>
                  <Text
                    bg={item.status === "ongoing" ? "green" : "orange"}
                    color="white"
                    px={2}
                    borderRadius="md"
                  >
                    {item.status}
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

export default Totallist;
