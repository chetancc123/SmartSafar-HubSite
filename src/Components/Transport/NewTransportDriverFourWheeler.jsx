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
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { IoIosArrowBack, IoMdArrowForward } from "react-icons/io";

const NewtransportdriverFourWheeler = ({ children }) => {
  const [carData, setCarData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const hubMangerId = sessionStorage.getItem("id");
  useEffect(() => {
    axios
      .get(`http://localhost:8080/hub/getCourierPendingListForFour/${hubMangerId}`)
      .then((response) => {
        if (response.data && response.data.data) {
          setCarData(response.data.data);
        } else {
          console.error("No data received from the API");
        }
      })
      .catch((error) => {
        console.error("Error fetching car data: ", error);
      });
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
            <NavLink to={"/Transportdriver"}>
              <IoIosArrowBack style={{ width: "30px", height: "30px" }} />
            </NavLink>
            <Text fontSize={20} fontWeight="bold" ml={4}>
              Four Wheeler New Transport Driver
            </Text>
          </Flex>
        </Flex>
        <Table variant="simple" sx={{ border: "3px solid #13C39C" }}>
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Driver Image</Th>
              <Th>Name</Th>
              <Th>Driver ID</Th>
              <Th>Contact</Th>
              <Th>Email ID</Th>
              <Th>Status</Th>
              <Th>Details</Th>
            </Tr>
          </Thead>
          <Tbody>
            {paginatedData.map((car, index) => (
              <Tr key={index}>
                <Td>{(currentPage - 1) * itemsPerPage + index + 1}</Td>
                <Td>
                  <Image
                    src={car.imageUrl}
                    alt={car.name}
                    borderRadius="full"
                    boxSize="50px"
                  />
                </Td>
                <Td>{car.name}</Td>
                <Td>{car.id}</Td>
                <Td>{car.phoneNo}</Td>
                <Td>{car.email}</Td>
                <Td>
                  <Text
                    bg={car.status === "OK" ? "green" : "orange"}
                    color="white"
                    px={2}
                    borderRadius="md"
                    padding="2"
                  >
                    {car.status}
                  </Text>
                </Td>
                <Td>
                  <Button  backgroundColor="#13C39C" size="md">
                    <NavLink to={`/PendingDetailDriverFourWheeler/${car.id}`}>
                      Details
                    </NavLink>
                  </Button>
                </Td>
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

export default NewtransportdriverFourWheeler;
