import { useState, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";
import { Flex, Box, Icon, Text } from "@chakra-ui/react";

import { FaMixcloud } from "react-icons/fa";
import { FaList } from "react-icons/fa";

import axios from "axios";
import { Chart } from "react-chartjs-2";
import Chart1 from "../Graph1";
import BarChart from "../Barchart";

const Booking = ({ children }) => {
  const [newBookingCount, setNewBookingCount] = useState(0);
  const [totalBookingCount, settotalBookingCount] = useState(0);

  useEffect(() => {
    fetchNewBookingCount();
    fetchtotalBookingCount(); // Fetch new booking count when component mounts
  }, []);
  const fetchtotalBookingCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/hub/count-today-bookings/1"
      );
      settotalBookingCount(response.data);
    } catch (error) {
      console.error("error fetching total booking count", error);
    }
  };
  const fetchNewBookingCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/hub/countNewBooking/1"
      );
      setNewBookingCount(response.data); // Update state with the count received from the API
    } catch (error) {
      console.error("Error fetching new booking count:", error);
    }
  };

  return (
    <>
      <Flex direction="row" h="100vh">
        <Flex direction="column" flex="1">
          <Flex
            direction={{ base: "column", md: "row" }}
            ml={{ base: "none", md: "80px" }}
          >
            {/* Boxes 1 to 4 */}

            <Box
            as={Link} // Use Link component as the root element
            to={"/BookingHome"} // Specify the link destination
              position="relative"
              w={{ base: "80%", md: "20%" }}
              h={{ base: "25px", md: "150px" }}
              p={4}
              bg="white"
              border="2px solid #13C39C"
              boxShadow="md"
              mb={{ base: 4, md: 0 }}
              mt={{ base: 10, md: 10 }}
              mr={{ base: 0, md: 4 }}
              borderRadius="10px"
            >
              <Text position="absolute" top="5px" left="5px" fontWeight="bold">
                New Booking
              </Text>
              <Text
                position="absolute"
                top="45px"
                left="105px"
                fontWeight="bold"
                fontSize={40}
              >
                {newBookingCount}
              </Text>
             
                <Icon
                  as={FaList}
                  position="absolute"
                  color="#13C39C"
                  top="5px"
                  right="5px"
                />
              
            </Box>

            {/* Box 2 */}
            <Box
            as={Link} // Use Link component as the root element
            to={"/Todaybookinghistory"} // Specify the link destination
              position="relative"
              w={{ base: "50%", md: "20%" }}
              h={{ base: "auto", md: "150px" }}
              p={4}
              bg="white"
              border="2px solid #13C39C"
              boxShadow="md"
              mb={{ base: 4, md: 0 }}
              mt={{ base: 10, md: 10 }}
              mr={{ base: 0, md: 4 }}
              borderRadius="10px"
            >
              <Text position="absolute" top="5px" left="5px" fontWeight="bold">
                {" "}
                Today's Booking History
              </Text>
              
                <Icon as={FaList} position="absolute" top="5px" right="5px" />
              
            </Box>
            {/* Box 3 */}
            <Box
              position="relative"
              w={{ base: "50%", md: "25%" }}
              h={{ base: "auto", md: "150px" }}
              p={4}
              bg="white"
              border="2px solid #13C39C"
              boxShadow="md"
              mb={{ base: 4, md: 0 }}
              mt={{ base: 10, md: 10 }}
              mr={{ base: 0, md: 4 }}
              borderRadius="10px"
            >
              <Text position="absolute" top="5px" left="5px" fontWeight="bold">
                {" "}
                Total Booking Completed
              </Text>
              <Text
                position="absolute"
                top="45px"
                left="105px"
                fontWeight="bold"
                fontSize={40}
              >
                {totalBookingCount}
              </Text>
              <Link>
                <Icon
                  as={FaMixcloud}
                  position="absolute"
                  color="#13C39C"
                  top="5px"
                  right="5px"
                />
              </Link>
            </Box>
          </Flex>
          <Flex flexDirection="row"  ml={"6.5%"} justifyContent={"space-between"} mt={"3%"}>
          <Box
            width="50%"
            p={4}
            bg="gray.100"
            boxShadow="md"
            border="2px solid #13C39C"
            borderRadius="10px"
            // overflowY="auto"
            h={{ base: "auto", xl: "450px" }}
          >
              <BarChart />
            </Box>
            {/* Table header */}

            <Box
            width="45%"
            p={4}
            bg="gray.100"
            boxShadow="md"
            border="2px solid #13C39C"
            borderRadius="10px"
            // overflowY="auto"
            h={{ base: "auto", xl: "450px" }}
          >
              <Box mt={-7}>
                <Chart1 />
              </Box>
              {/* Table header */}
            </Box>
          </Flex>

          <Box flex="1">{children}</Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Booking;
