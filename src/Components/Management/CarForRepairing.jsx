import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Box, Th, Td, Button, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

const CarForRepairing = ({ setCarCount }) => {
  const [carData, setCarData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/admin/CarRepairsList");
      const filteredData = response.data.filter(car => car.carRepairStatus !== 'READY_FOR_RIDE');
      setCarData(filteredData);
      setCarCount(filteredData.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = carData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
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
        </Box>
        <Text ml="10" fontSize={20} fontWeight="bold">
          Car For Repairing
        </Text>
        <Box
          w="1000px"
          bg="white"
          borderRadius="10px"
          border="3px solid blue"
          overflowY="auto"
          ml="10"
          mt="10"
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th style={{ background: "#13C39C", color: "black" }}>S.No </Th>
                <Th style={{ background: "#13C39C", color: "black" }}>Car Name</Th>
                <Th style={{ background: "#13C39C", color: "black" }}>Car Number</Th>
                <Th style={{ background: "#13C39C", color: "black" }}>Return time</Th>
                <Th style={{ background: "#13C39C", color: "black" }}>Message</Th>
                <Th style={{ background: "#13C39C", color: "black" }}>Send to Repair</Th>
                <Th style={{ background: "#13C39C", color: "black" }}>Send invoice to admin</Th>
                <Th style={{ background: "#13C39C", color: "black" }}>Vehicle Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentItems.map((car, index) => (
                <Tr key={index}>
                  <Td>{index + 1 + indexOfFirstItem}</Td>
                  <Td>{car.vehicleName}</Td>
                  <Td>{car.vehicleNo}</Td>
                  <Td>{car.returnTime}</Td>
                  <Td>{car.message}</Td>
                  <Td>
                    <Link to={`/RequestforRepair/${car.carRepairId}`}>
                      <Button colorScheme="blue">Send</Button>
                    </Link>
                  </Td>
                  <Td>
                    <Link to={`/ExactRepairAmount/${car.carRepairId}`}>
                      <Button colorScheme="blue">Send</Button>
                    </Link>
                  </Td>
                  <Td>{car.carRepairStatus}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CarForRepairing;
