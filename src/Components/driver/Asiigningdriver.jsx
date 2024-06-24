import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Assigningdriver = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [driverGet, setDriverGet] = useState([]);
  const [carGet, setCarGet] = useState([]);
  const [twoWheelerDrivers, setTwoWheelerDrivers] = useState([]);
  const [fourWheelerDrivers, setFourWheelerDrivers] = useState([]);
  const hubMangerId = sessionStorage.getItem("id");
  const fetchDriver = async () => {
    try {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:8080/hub/get-all-driver-list/${hubMangerId}`,
        headers: {}
      };

      const response = await axios.request(config);
      const drivers = response.data.filter(driver => driver.vehicleAssignStatus === "CHECKOUT");
      setDriverGet(drivers);

      setTwoWheelerDrivers(drivers.filter(driver => driver.driverType === "TWO_WHEELER"));
      setFourWheelerDrivers(drivers.filter(driver => driver.driverType === "FOUR_WHEELER"));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDriver();
  }, []);

  const fetchCarData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/hub/getAvailableCars"
      );
      setCarGet(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCarData();
  }, []);

  const [formData, setFormData] = useState({
    driverId: "",
    vehicleId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "name") {
      const SelectedDriver = driverGet.find(
        (driver) => driver.name === value
      );
      if (SelectedDriver) {
        setFormData((prevState) => ({
          ...prevState,
          driverId: SelectedDriver.driverId,
        }));
      }
    }

    if (name === "vehicleName") {
      const SelectedVehicle = carGet.find(
        (vehicle) => vehicle.vehicleName === value
      );
      if (SelectedVehicle) {
        setFormData((prevState) => ({
          ...prevState,
          vehicleId: SelectedVehicle.vehicleId,
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const assignments = driverGet.map((driver) => {
      const randomCar = carGet[Math.floor(Math.random() * carGet.length)];
      return {
        driverId: driver.driverId,
        vehicleId: randomCar.vehicleId,
      };
    });

    try {
      for (const assignment of assignments) {
        const data = JSON.stringify({
          driverId: assignment.driverIds,
          vehicleId: assignment.vehicleIds
        });

        const config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `http://localhost:8080/hub/assignCarToDriver/${hubMangerId}`,
          headers: { 
            'Content-Type': 'application/json'
          },
          data: data
        };

        await axios.request(config);
      }
      console.log("All drivers successfully assigned to cars");
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Flex direction="column" h="100vh" position="relative" mt="20px">
        {/* Navigation Header */}
        <Text
          position="absolute"
          mt={{ base: "20px", md: "20px" }}
          ml={{ base: "50px", md: "30px" }}
          fontWeight="bold"
          display="flex"
          alignItems="center"
        >
          <NavLink to={"/Carlist"} style={{ textDecoration: "none" }}>
            <FaArrowLeft />
          </NavLink>
          <Text ml="10px">Vehicle assigning to Drive</Text>
        </Text>
      </Flex>

      <Box
        w={{ base: "100%", md: "80%" }}
        p={4}
        bg="gray.100"
        boxShadow="md"
        mb={{ base: 4, md: 0 }}
        mt={{ base: 10, md: "-580px" }}
        ml={{ base: "none", md: "20px" }}
        overflowY="auto"
        border="2px solid blue"
      >
        <Tabs>
          <TabList>
            <Tab>Two Wheeler</Tab>
            <Tab>Four Wheeler</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <form onSubmit={handleSubmit}>
                <Flex align="center" mb="4">
                  <Text fontSize="14" fontWeight="bold" mr="2">
                    Name of Driver:
                  </Text>
                  <Select
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  >
                    <option value="">Select driver...</option>
                    {twoWheelerDrivers.map((driver, index) => (
                      <option key={index} value={driver.name}>
                        {driver.name}
                      </option>
                    ))}
                  </Select>
                </Flex>

                <Flex align="center" mb="4">
                  <Text fontSize="14" fontWeight="bold" mr="2">
                    Driver ID:
                  </Text>
                  <Input
                    variant="outline"
                    placeholder="Enter driver's ID"
                    name="driverId"
                    value={formData.driverId}
                    onChange={handleChange}
                    backgroundColor="blue.100"
                    width="400px"
                    borderRadius="lg"
                    focusBorderColor="blue.400"
                  />
                </Flex>

                <Flex align="center" mb="4">
                  <Text fontSize="14" fontWeight="bold" mr="2">
                    Available Cars:
                  </Text>
                  <Select
                    name="vehicleName"
                    value={formData.vehicleName}
                    onChange={handleChange}
                  >
                    <option value="">Select car...</option>
                    {carGet.map((item, index) => (
                      <option key={index} value={item.vehicleName}>
                        {item.vehicleName}
                      </option>
                    ))}
                  </Select>
                </Flex>

                <Flex align="center" mb="4">
                  <Text fontSize="14" fontWeight="bold" mr="2">
                    Vehicle ID:
                  </Text>
                  <Input
                    variant="outline"
                    placeholder="Enter vehicle's ID"
                    name="vehicleId"
                    value={formData.vehicleId}
                    onChange={handleChange}
                    backgroundColor="blue.100"
                    width="400px"
                    borderRadius="lg"
                    focusBorderColor="blue.400"
                  />
                </Flex>

                <Box mt="4">
                  <Button type="submit" colorScheme="green">
                    Assign
                  </Button>
                </Box>
              </form>
            </TabPanel>

            <TabPanel>
              <form onSubmit={handleSubmit}>
                <Flex align="center" mb="4">
                  <Text fontSize="14" fontWeight="bold" mr="2">
                    Name of Driver:
                  </Text>
                  <Select
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  >
                    <option value="">Select driver...</option>
                    {fourWheelerDrivers.map((driver, index) => (
                      <option key={index} value={driver.name}>
                        {driver.name}
                      </option>
                    ))}
                  </Select>
                </Flex>

                <Flex align="center" mb="4">
                  <Text fontSize="14" fontWeight="bold" mr="2">
                    Driver ID:
                  </Text>
                  <Input
                    variant="outline"
                    placeholder="Enter driver's ID"
                    name="driverId"
                    value={formData.driverId}
                    onChange={handleChange}
                    backgroundColor="blue.100"
                    width="400px"
                    borderRadius="lg"
                    focusBorderColor="blue.400"
                  />
                </Flex>

                <Flex align="center" mb="4">
                  <Text fontSize="14" fontWeight="bold" mr="2">
                    Available Cars:
                  </Text>
                  <Select
                    name="vehicleName"
                    value={formData.vehicleName}
                    onChange={handleChange}
                  >
                    <option value="">Select car...</option>
                    {carGet.map((item, index) => (
                      <option key={index} value={item.vehicleName}>
                        {item.vehicleName}
                      </option>
                    ))}
                  </Select>
                </Flex>

                <Flex align="center" mb="4">
                  <Text fontSize="14" fontWeight="bold" mr="2">
                    Vehicle ID:
                  </Text>
                  <Input
                    variant="outline"
                    placeholder="Enter vehicle's ID"
                    name="vehicleId"
                    value={formData.vehicleId}
                    onChange={handleChange}
                    backgroundColor="blue.100"
                    width="400px"
                    borderRadius="lg"
                    focusBorderColor="blue.400"
                  />
                </Flex>

                <Box mt="4">
                  <Button type="submit" colorScheme="green">
                    Assign
                  </Button>
                </Box>
              </form>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent
          backgroundColor="white"
          height={{ base: "100px", md: "150px" }}
        >
          <ModalCloseButton />
          <ModalBody fontWeight="bold">
            You Have Successfully Assigned Car As A Driver
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={handleCloseModal}>
              <NavLink to={"/Carlist"}>Dashboard</NavLink>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Assigningdriver;
