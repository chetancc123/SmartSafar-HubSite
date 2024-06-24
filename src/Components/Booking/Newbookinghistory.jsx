import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Flex,
  Box,
  Icon,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Select,
} from "@chakra-ui/react";
import { IoChevronBack } from "react-icons/io5";

const Newbookinghistory = ({ children }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page
  const [sortBy, setSortBy] = useState("newest"); // State variable for sorting

  const fetchAPIData = async () => {
    axios
      .get("http://localhost:8080/hub/newBooking/1")
      .then((data) => {
        const convertedData = data.data.map((item) => ({
          ...item,
          startDateTime: new Date(item.startDateTime).toLocaleString(),
          endDateTime: new Date(item.endDateTime).toLocaleString(),
        }));
        setData(convertedData);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  // Logic to calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Logic to calculate the index of the last item for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Logic to calculate the index of the first item for the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Logic to get the current items to be displayed
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page navigation
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <Flex direction="row" h="100vh" w={"100%"} m={"auto"}>
        <Flex direction="column" flex="1">
          <Flex
            justify="space-between"
            p="10px"
            ml={{ base: "none", md: "100px" }}
            alignItems="center"
          >
            <Button>
              <Icon as={IoChevronBack} />
            </Button>
            <Text fontWeight="bold">New Booking</Text>
            <Flex alignItems="center">
              <Select value={sortBy} onChange={handleSortChange} mr="10px">
                <option value="newest">Newest to Oldest</option>
                <option value="oldest">Oldest to Newest</option>
              </Select>
            </Flex>
          </Flex>
          <Box
            w={{ base: "100%", md: "80%" }}
            p={4}
            bg="gray.100"
            boxShadow="md"
            mb={{ base: 4, md: 0 }}
            mt={{ base: 10, md: 10 }}
            ml={{ base: 10, md: "120px" }}
            overflowY="auto"
            border="1px solid red"
          >
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th color="blue">Customer Name</Th>
                  <Th color="blue">Trip From Booking Time</Th>
                  <Th color="blue">Trip To Reach Time</Th>
                  <Th color="blue">Distance</Th>
                  <Th color="blue">Assign Driver</Th>
                </Tr>
              </Thead>
              <Tbody>
                {currentItems.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.customerName}</Td>
                    <Td>{item.startDateTime}</Td>
                    <Td>{item.endDateTime}</Td>
                    <Td>{item.distance} 25</Td>

                    <Td>
                      <button
                        style={{
                          backgroundColor: "blue",
                          color: "white",
                          padding: "8px 12px",
                          borderRadius: "5px",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          console.log("Detail button clicked for index:", index)
                        }
                      >
                        Details
                      </button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            {/* Pagination */}
            <Flex justify="center" mt="2rem">
              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i}
                  mx="20"
                  colorScheme={currentPage === i + 1 ? "red" : "gray"}
                  onClick={() => handleClick(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
            </Flex>
          </Box>
          <Box flex="1">{children}</Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Newbookinghistory;
