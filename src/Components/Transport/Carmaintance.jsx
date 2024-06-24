import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { CSVLink } from "react-csv";

const Carmaintance = ({ children, setCarCount, width }) => {
  const [carData, setCarData] = useState([]);
  const [csvData, setCsvData] = useState([]);
  const hubMangerId = sessionStorage.getItem("id");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/hub/get-all/returncar/${hubMangerId}/driverlist`
        );
        const formattedData = response.data.map((car) => ({
          ...car,
          returnTime: new Date(car.returnTime).toLocaleString(), // Convert to local time
        }));
        setCarData(formattedData);
        setCsvData(
          formattedData.map((car) => ({
            "S.No": car.id,
            "Car Name": car.vehicleName,
            "Car Number": car.vehicleNo,
            "Report date&Time": car.returnTime,
            "Car condition": car.carCondition,
            "Details": car.message,
          }))
        );
        setCarCount(formattedData.length); // Update car count
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setCarCount]);

  return (
    <>
      <Flex direction="row" h="100vh" mt={10}>
        <Flex direction="column" flex="1">
          <Box
            position="relative"
            w={{ base: "50%", md: "20%" }}
            h={{ base: "25px", md: "10px" }}
            p={4}
            bg="white"
            mb={{ base: 4, md: 0 }}
            mt={{ base: 10, md: "-33px" }}
            mr={{ base: 0, md: 1 }}
          >
            <Text position="absolute" top="5px" left="50px" fontWeight="bold">
              {/* Management Page */}
            </Text>
            {/* <Icon as={IoChevronBack} position="absolute" top="8px" left="5px" /> */}
          </Box>

          <Box
            w={width ? width : "90%"}
            m={"auto"}
            bg="white"
            borderRadius="10px"
            border="1px solid #13C39C"
            borderColor="#13C39C"
            overflowY="auto"
            position="relative"
            maxH="70vh" // Set max height for the table container
          >
            <Table variant="simple">
              <Thead position="sticky" top="0" bg="#13C39C" zIndex="1">
                <Tr>
                  <Th style={{ color: "black" }}>S.No</Th>
                  <Th style={{ color: "black" }}>Car Name</Th>
                  <Th style={{ color: "black" }}>Car Number</Th>
                  <Th style={{ color: "black" }}>Report date&Time</Th>
                  <Th style={{ color: "black" }}>Car condition</Th>
                  <Th style={{ color: "black" }}>Details</Th>
                  
                </Tr>
              </Thead>
              <Tbody>
                {carData.map((car, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{car.vehicleName}</Td>
                    <Td>{car.vehicleNo}</Td>
                    <Td>{car.returnTime}</Td>
                    <Td>
                      {car.carCondition === "GOOD" && (
                        <Button colorScheme="green" size="xs" variant="outline">
                          GOOD
                        </Button>
                      )}
                      {car.carCondition === "NORMAL" && (
                        <Button colorScheme="yellow" size="xs" variant="outline">
                          NORMAL
                        </Button>
                      )}
                      {car.carCondition === "WORST" && (
                        <Button colorScheme="red" size="xs" variant="outline">
                          WORST
                        </Button>
                      )}
                    </Td>
                    <Td>{car.message}</Td>
                   
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
          <Box position="absolute" bottom="10px" ml={500}>
            <CSVLink data={csvData} filename={"car_data.csv"}>
              <Button colorScheme="teal">Download Excel</Button>
            </CSVLink>
          </Box>
          <Box flex="1">{children}</Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Carmaintance;
