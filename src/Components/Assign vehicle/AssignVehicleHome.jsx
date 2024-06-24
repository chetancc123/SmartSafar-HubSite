import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Flex, Box, Text, Button, Select, Checkbox } from "@chakra-ui/react";
import axios from "axios";

const AssignVehicleHome = ({ children }) => {
  const [carData, setCarData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [selectedCars, setSelectedCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Items per page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/hub/get-all-driver-list/1`);
        const filteredData = response.data.filter(car => car.vehicleAssignStatus === "CHECKOUT");
        setCarData(filteredData);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCarData();
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleCheckboxChange = (event, car) => {
    if (event.target.checked) {
      setSelectedCars([...selectedCars, car]);
    } else {
      setSelectedCars(
        selectedCars.filter(
          (selectedCar) => selectedCar.vehicle.vehicleNo !== car.vehicle.vehicleNo
        )
      );
    }
  };

  const handleSaveAndContinue = () => {
    navigate("/SelectedAssignVehicle", { state: { selectedCars } });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const filteredCarData = carData.filter((car) => {
    if (filter === "All") return true;
    if (filter === "TWO_WHEELER") return car.driverType === "TWO_WHEELER";
    if (filter === "FOUR_WHEELER") return car.driverType === "FOUR_WHEELER";
    return false;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredCarData.slice(indexOfFirstItem, indexOfLastItem);

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredCarData.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <Flex mt={4} justifyContent="center">
        {pageNumbers.map((number) => (
          <Button
            key={number}
            onClick={() => handlePageChange(number)}
            colorScheme={currentPage === number ? "teal" : "gray"}
            mx={1}
          >
            {number}
          </Button>
        ))}
      </Flex>
    );
  };

  return (
    <>
      <Flex direction="row" h="100vh" ml="10px" width="auto">
        <Flex direction="column" flex="1">
          <Box display="flex" justifyContent="flex-end" mt={14}></Box>
          <Box
            w={{ base: "100%", md: "80%" }}
            p={4}
            bg="gray.100"
            boxShadow="md"
            mb={{ base: 4, md: 0 }}
            mt={{ base: 10, md: 10 }}
            overflowY="auto"
            border="3px solid #13C39C"
            ml={{ base: "none", md: "100px" }}
          >
            {/* Dropdown filter */}
            <Box mb={4}>
              <Select value={filter} onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="TWO_WHEELER">BIKE</option>
                <option value="FOUR_WHEELER">CAR</option>
              </Select>
            </Box>

            {/* Table header */}
            <>
              <Flex
                direction={{ base: "column", md: "row" }}
                alignItems="center"
                justifyContent="space-between"
                mb={4}
              >
                <Box flex="1" order={{ base: 1, md: 2 }}>
                  <Text as="strong">Select</Text>
                </Box>
                <Box flex="1" order={{ base: 2, md: 1 }}>
                  <Text as="strong">S.No</Text>
                </Box>
                <Box flex="2" order={{ base: 3, md: 3 }}>
                  <Text as="strong">Available Vehicle</Text>
                </Box>
                <Box flex="2" order={{ base: 4, md: 4 }}>
                  <Text as="strong">Vehicle Number</Text>
                </Box>
                <Box flex="2" order={{ base: 5, md: 5 }}>
                  <Text as="strong">Vehicle Type</Text>
                </Box>
                <Box flex="2" order={{ base: 6, md: 6 }}>
                  <Text as="strong">Driver Id</Text>
                </Box>
                <Box flex="2" order={{ base: 8, md: 8 }}>
                  <Text as="strong">Vehicle ID</Text>
                </Box>
              </Flex>
              <Box borderBottom="1px solid #ccc" pb={2} mb={4}></Box>

              {/* Dynamically render data */}
              {currentData &&
                currentData.map(
                  (car, index) =>
                    car.vehicle && (
                      <Flex
                        key={index}
                        fontWeight="bold"
                        direction={{ base: "column", md: "row" }}
                        mt={2}
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box flex="1" order={{ base: 1, md: 2 }}>
                          <Checkbox onChange={(e) => handleCheckboxChange(e, car)} />
                        </Box>
                        <Box flex="1" order={{ base: 2, md: 1 }}>
                          <Text>{indexOfFirstItem + index + 1}</Text>
                        </Box>
                        <Box flex="2" order={{ base: 3, md: 3 }}>
                          <Text>{car.vehicle.vehicleName}</Text>
                        </Box>
                        <Box flex="2" order={{ base: 4, md: 4 }}>
                          <Text>{car.vehicle.vehicleNo}</Text>
                        </Box>
                        <Box flex="2" order={{ base: 5, md: 5 }}>
                          <Text>{car.vehicle.vehicleType}</Text>
                        </Box>
                        <Box flex="2" ml={14} order={{ base: 6, md: 6 }}>
                          <Text>{car.driverId}</Text>
                        </Box>
                        <Box flex="2" order={{ base: 8, md: 8 }}>
                          <NavLink
                            to="/SelectedAssignVehicle"
                            style={{ textDecoration: "none" }}
                          >
                            <Text>{car.vehicle.vehicleId}</Text>
                          </NavLink>
                        </Box>
                      </Flex>
                    )
                )}
            </>
          </Box>

          {renderPagination()}

          <Box position="fixed" bottom="20px" right={80}>
            <Button colorScheme="teal" onClick={handleSaveAndContinue}>
              Save and Continue
            </Button>
          </Box>
          <Box flex="1">{children}</Box>
        </Flex>
      </Flex>
    </>
  );
};

export default AssignVehicleHome;
