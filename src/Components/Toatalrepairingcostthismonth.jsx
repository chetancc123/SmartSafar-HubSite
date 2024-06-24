import { useState, useEffect } from "react";
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
import { IoIosArrowBack } from "react-icons/io";

const Totalrepairingcost = ({ children }) => {
  const [carData, setCarData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchData(); // Fetch data from API when component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/hub/carRepairDetailCostHistory"
      );
      setCarData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
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

  return (
    <>
      <Flex direction="row" h="100vh" mt={10}>
        <Flex direction="column" flex="1">
                    
            <Text ml="10" fontSize={20} fontWeight="bold">
              Total Repairing Cost This Month
            </Text>
         
          <Table variant="simple" mt={10}  ml="10" border="3px solid blue">
            <Thead>
              <Tr>
                <Th>S.No</Th>
                <Th>Vehicle Name</Th>
                <Th>Vehicle Number</Th>
                <Th>Start Date</Th>
                <Th>End Date</Th>
                <Th>Cost</Th>
                <Th>Issue Detail</Th>
              </Tr>
            </Thead>
            <Tbody>
              {paginatedData.map((car, index) => (
                <Tr key={index}>
                  <Td>{(currentPage - 1) * itemsPerPage + index + 1}</Td>
                  <Td>{car.vehicleName}</Td>
                  <Td>{car.vehicleNo}</Td>
                  <Td>{car.dateOfRepairing}</Td>
                  <Td>{car.dateOfCarRepaired}</Td>
                  <Td>{car.totalCostOfRepairing}</Td>
                  <Td>{car.issueDetail}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          {/* Pagination controls */}
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
      </Flex>
    </>
  );
};

export default Totalrepairingcost;
