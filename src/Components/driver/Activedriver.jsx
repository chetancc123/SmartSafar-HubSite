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
import { Link } from "react-router-dom";

const Activedriver = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [carData, setCarData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const hubMangerId = sessionStorage.getItem("id");
  useEffect(() => {
    fetchData(); // Fetch data from API when component mounts
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/hub/Online-Driver-list/${hubMangerId}`
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
      <Flex direction="row" h="100vh"  w="50vw" mt={10} ml="2">
        <Flex direction="column"  ml={5}>
          <Button
            mr={{ base: "none", md: "500px" }}
            variant="unstyled"
            display="flex"
            alignItems="start"
          >
            
            <Text marginRight="650px" fontSize={20}>
              Active Driver List
            </Text>
          </Button>
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
               
              </Tr>
            </Thead>
            <Tbody>
              {paginatedData.map((car, index) => (
                <Tr key={index}>
                  <Td>{(currentPage - 1) * itemsPerPage + index + 1}</Td> {/* S.No */}
                  <Td>{car.name}</Td>
                  <Td>{car.driverId}</Td>
                  <Td>{car.phoneNo}</Td>
                  <Td>{car.email}</Td>
                  <Td>
                    <Link to={`/Driverdetail/${car.driverId}`}>
                      <Button backgroundColor="#13C39C" size="md">
                        Details
                      </Button>
                    </Link>
                  </Td>
                  <Td>
                    <Text
                      bg={car.status === "online" ? "green" : "orange"}
                      color="white"
                      px={2}
                      borderRadius="md"
                    >
                      {car.status}
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

export default Activedriver;
