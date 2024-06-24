import { useState, useEffect } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import {
  Flex,
  Box,
  Icon,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import Ebikecount from "./E-bike/EbikeCount";
import { CSVLink } from "react-csv";

const Carlist = ({ children }) => {
  const [carData, setCarData] = useState([]);
  const [assignCarCount, setAssignCarCount] = useState(0);
  const [engagedCarsCount, setEngagedCarsCount] = useState(0);
  const [returnCarCount, setReturnCarCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const hubMangerId = sessionStorage.getItem("id");
  const fetchAPIData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/hub/all-vehicles-list/${hubMangerId}`
      );
      const activeCount = response.data.filter(
        (car) => car.vehicleStatus === "AVAILABLE"
      ).length;
      setAssignCarCount(activeCount);

      const engagedCount = response.data.filter(
        (car) => car.vehicleStatus === "ENGAGED"
      ).length;
      setEngagedCarsCount(engagedCount);
      setCarData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchReturnCarCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/hub/get-total-number/returncar/1/driver"
      );
      setReturnCarCount(response.data);
    } catch (error) {
      console.error("Error fetching return car count:", error);
    }
  };

  useEffect(() => {
    fetchAPIData();
    fetchReturnCarCount();
  }, []);

  const extractRequiredColumns = () => {
    return carData.map((car, index) => ({
      "S.No": index + 1,
      "Car Name": car.vehicleName,
      "Car Number": car.vehicleNo,
      "Car Type": car.vehicleType,
      Capacity: car.seatingCapacity,
      Range: car.range,
    }));
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
      <Flex direction="row" h="100vh" ml="-5%" width="auto">
        <Flex direction="column" flex="1" >
          <Flex
            direction={{ base: "column", md: "row" }}
            ml={{ base: "none", md: "90px"  }} 
          >
            {/* Boxes 1 to 4 */}
            {/* Box 1 */}
            <Box
              as={Link} // Use Link component as the root element
              to={"/Assigningdriver"} // Specify the link destination
              position="relative"
              w={{ base: "100%", md: "20%" }}
              h={{ base: "100px", md: "150px" }}
              p={4}
              bg="white"
              boxShadow="md"
              mb={{ base: 4, md: 0 }}
              mt={{ base: 10, md: 10 }}
              mr={{ base: 0, md: 6 }}
              borderRadius="10px"
              border="2px solid #13C39C"
            >
              <Text fontWeight={"bold"}>Assigned Vehicle</Text>
              <Text
                position="absolute"
                top="45px"
                left="105px"
                fontWeight="bold"
                fontSize={40}
              >
                {assignCarCount}
              </Text>
              <Icon
                as={FaBars}
                position="absolute"
                color="#13C39C"
                top="5px"
                right="5px"
              />
            </Box>

            {/* Box 2 */}
            <Box
              as={Link} // Use Link component as the root element
              to={"/Runningcar"} // Specify the link destination
              position="relative"
              w={{ base: "100%", md: "20%" }}
              h={{ base: "100px", md: "150px" }}
              p={4}
              bg="white"
              boxShadow="md"
              mb={{ base: 4, md: 0 }}
              mt={{ base: 10, md: 10 }}
              mr={{ base: 0, md: 6 }}
              borderRadius="10px"
              border="2px solid #13C39C"
            >
              <Text fontWeight={"Bold"}>Running Car</Text>
              <Text
                position="absolute"
                top="45px"
                left="105px"
                fontWeight="bold"
                fontSize={40}
              >
                {engagedCarsCount}
              </Text>
              <Icon as={FaUser} position="absolute" top="5px" right="5px" />
            </Box>

            {/* Box 3 */}
            <Box
              as={Link} // Use Link component as the root element
              to={"/Returncar"} // Specify the link destination
              position="relative"
              w={{ base: "100%", md: "20%" }}
              h={{ base: "100px", md: "150px" }}
              p={4}
              bg="white"
              boxShadow="md"
              mb={{ base: 4, md: 0 }}
              mt={{ base: 10, md: 10 }}
              mr={{ base: 0, md: 6 }}
              borderRadius="10px"
              border="2px solid #13C39C"
            >
              <Text position="absolute" top="5px" left="5px" fontWeight="bold">
                Return Car
              </Text>
              <Text
                position="absolute"
                top="45px"
                left="105px"
                fontWeight="bold"
                fontSize={40}
              >
                {returnCarCount}
              </Text>
              <Icon
                as={FaBars}
                position="absolute"
                color="#13C39C"
                top="5px"
                right="5px"
              />
            </Box>

            <Box
              as={Link} // Use Link component as the root element
              to={"/Ebikelist"} // Specify the link destination
              position="relative"
              w={{ base: "100%", md: "20%" }}
              h={{ base: "100px", md: "150px" }}
              p={4}
              bg="white"
              boxShadow="md"
              mb={{ base: 4, md: 0 }}
              mt={{ base: 10, md: 10 }}
              mr={{ base: 0, md: 6 }}
              borderRadius="10px"
              border="2px solid #13C39C"
            >
              <Text position="absolute" top="5px" left="5px" fontWeight="bold">
                E-bike list{" "}
              </Text>
              <Icon as={FaBars} position="absolute" top="5px" right="5px" />
              <Box mt={10} ml={10}>
                <Ebikecount />
              </Box>
            </Box>
          </Flex>
          <Box
            w={{ base: "100%", md: "80%" }}
            p={4}
            bg="gray.100"
            boxShadow="md"
            mb={{ base: 4, md: 0 }}
            mt={{ base: 10, md: 10 }}
            border="3px solid #13C39C"
            ml={{ base: "none", md: "100px" }}
          >
            {/* Table component */}
            <TableContainer>
            <Table variant="striped" colorScheme="#13C39C" size="sm" w="100%">
                <Thead>
                  <Tr>
                    <Th>S.No</Th>
                    <Th>Car Name</Th>
                    <Th>Car Number</Th>
                    <Th>Car Type</Th>
                    <Th>Capacity</Th>
                    <Th>Image</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {paginatedData.map((car, index) => (
                    <Tr key={index}>
                      <Td>{(currentPage - 1) * itemsPerPage + index + 1}</Td>
                      <Td>{car.vehicleName}</Td>
                      <Td>{car.vehicleNo}</Td>
                      <Td>{car.vehicleType}</Td>
                      <Td>{car.seatingCapacity}</Td>
                      <Td>
                        <Image
                          src={car.hub.vehicleImgLink}
                          style={{
                            width: "53px",
                            height: "53px",
                            borderRadius: "50%",
                          }}
                        />
                      </Td>
                      <Td>
                        <NavLink
                          to="/Assigningdriver"
                          style={{ textDecoration: "none" }}
                        >
                          <Text
                            style={{
                              backgroundColor:
                                car.vehicleStatus === "Available"
                                  ? "green"
                                  : "orange",
                              color: "white",
                              padding: "5px 10px",
                              borderRadius: "5px",
                              textAlign: "center",
                            }}
                          >
                            {car.vehicleStatus}
                          </Text>
                        </NavLink>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>

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
          </Box>

          <Box position="fixed" bottom="20px" right="20px" textAlign="right">
            <CSVLink data={extractRequiredColumns()} filename={"car_data.csv"}>
              <Button colorScheme="teal">Download Excel</Button>
            </CSVLink>
          </Box>
          <Box flex="1">{children}</Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Carlist;
