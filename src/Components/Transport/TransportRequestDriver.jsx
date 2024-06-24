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


const TransportRequestDriver = ({ children }) => {
    const [carData, setCarData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Adjust the number of items per page here

    useEffect(() => {
        fetchData(); // Fetch data from API when component mounts
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/hub/Online-Driver-list/1"
            );
            setCarData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = carData.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
     <>
     
     <Flex direction="row" h="100vh" mt={10} ml={14}>
            <Flex direction="column" flex="1">
                <Button
                    mr={{ base: "none", md: "500px" }}
                    variant="unstyled"
                    display="flex"
                    alignItems="center" // Adjusted alignment to center vertically
                    marginLeft={"-50%"}
                >
                
                    <Text fontSize={20} ml="52">
                        Request Driver’s
                    </Text>
                </Button>
                <Table variant="simple" sx={{ border: "3px solid #13C39C" }}>
                    <Thead>
                        <Tr>
                            <Th>S.No</Th>
                            <Th>Driver Name</Th>
                            <Th>Driver ID</Th>
                            <Th>Contact</Th>
                            <Th>Date of Request</Th>
                            <Th>View</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {currentItems.map((car, index) => (
                            <Tr key={index}>
                                <Td>{index + 1 + indexOfFirstItem}</Td> {/* S.No */}
                                <Td>mani</Td>
                                <Td>{car.driverId}</Td>
                                <Td>{car.phoneNo}</Td>
                                <Td>
                                    March 12, 2023
                                </Td>
                                <Td>
                                    <Button bg="#13C39C" size="md">
                                        <NavLink to={"/TransportDriverDetails"} >Details</NavLink>
                                    </Button>
                                </Td>
                                <Td>
                                    <Text
                                        px={2}
                                        borderRadius="md"
                                    >
                                       Pending
                                    </Text>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                <Box flex="1">{children}</Box>
            </Flex>
        </Flex>
        {/* Pagination */}
        <Flex justify="center" mt={4}>
            {Array.from({ length: Math.ceil(carData.length / itemsPerPage) }, (_, i) => (
                <Button key={i} colorScheme="#13C39C" variant={currentPage === i + 1 ? "solid" : "outline"} onClick={() => paginate(i + 1)}>
                    {i + 1}
                </Button>
            ))}
        </Flex>
     </>
    );
};

export default TransportRequestDriver;
