import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Flex,
  Button,
  Text,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import axios from "axios";
import { IoIosArrowBack, IoMdArrowForward } from "react-icons/io";

const ApprovedFourWheelerTransportdriver = ({ children }) => {
  const [carData, setCarData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const hubMangerId = sessionStorage.getItem("id");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/hub/getCourierApprovedListForFour/${hubMangerId}`
        );
        setCarData(response.data.data); // Accessing the 'data' property of the response
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

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
      <Flex direction="column" h="100vh">
        <Flex alignItems="center" justify="space-between" p={4}>
          <Flex alignItems="center">
            <NavLink to={"/Driverlist"}>
              <IoIosArrowBack style={{ width: "30px", height: "30px" }} />
            </NavLink>
            <Text fontSize={20} fontWeight="bold" ml={4}>
              Approved Transport Driver
            </Text>
          </Flex>
          <Flex
            alignItems="center"
            backgroundColor="gray.100"
            borderRadius="10"
            padding="5"
          >
            <Text fontSize={16} fontWeight="bold">
              New Transport Driver
            </Text>
            <NavLink to={"/NewTransportDriverFourWheeler"}>
              <IoMdArrowForward
                style={{ width: "20px", height: "20px", marginLeft: "5px" }}
              />
            </NavLink>
          </Flex>
        </Flex>
        <Table variant="simple" sx={{ border: "3px solid #13C39C" }}>
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Name</Th>
              <Th>Driver Id</Th>
              <Th>Contact</Th>
              <Th>Email ID</Th>
              <Th>Details</Th>
              
            </Tr>
          </Thead>
          <Tbody>
            {paginatedData.map((driver, index) => (
              <Tr key={index}>
                <Td>{(currentPage - 1) * itemsPerPage + index + 1}</Td>
                <Td>{driver.name}</Td>
                <Td>{driver.id}</Td>
                <Td>{driver.phoneNo}</Td>
                <Td>{driver.email}</Td>
                <Td>
                  <Button backgroundColor="#13C39C" size="md">
                    <NavLink
                      to={`/ApprovedDetailFourWheelerDriver/${driver.id}`}
                    >
                      Details
                    </NavLink>
                  </Button>
                </Td>
                <Td>{driver.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Flex justify="center" mt={4}>
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            isDisabled={currentPage === 1}
          >
            Previous
          </Button>
          <Text mx={4}>
            Page {currentPage} of {totalPages}
          </Text>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            isDisabled={currentPage === totalPages}
          >
            Next
          </Button>
        </Flex>
        <Box flex="1">{children}</Box>
      </Flex>
    </>
  );
};

export default ApprovedFourWheelerTransportdriver;
