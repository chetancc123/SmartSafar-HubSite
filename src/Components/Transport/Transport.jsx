import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Flex, Box, Icon, Text } from "@chakra-ui/react";
import { FaMixcloud, FaList, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";
import Graph2 from "../Graph2";
import TransportBarChart from "./TransportBarchart";

const Transport = ({ children }) => {
  return (
    <>
      <Flex direction="column" h="100vh" p={4} mt={10}>
        <Flex
          direction={{ base: "column", xl: "row" }}
          justify="space-between"
          alignItems={{ base: "center", xl: "flex-start" }}
          flexWrap="wrap"
        >
          {/* Boxes 1 to 5 */}
          <Box
            as={Link}
            to={"/TransportRequestDriver"}
            position="relative"
            w={{ base: "100%", md: "48%", xl: "19%" }}
            h={{ base: "auto", xl: "150px" }}
            p={4}
            bg="white"
            border="2px solid #13C39C"
            boxShadow="md"
            mb={4}
            borderRadius="10px"
          >
            <Text position="absolute" top="5px" left="5px" fontWeight="bold">
              Request Driver’s List
            </Text>
            <Text
              position="absolute"
              top="45px"
              left="50%"
              transform="translateX(-50%)"
              fontWeight="bold"
              fontSize={40}
            >
              22
            </Text>
            <Icon
              as={FaList}
              position="absolute"
              color="#13C39C"
              top="5px"
              right="5px"
            />
          </Box>

          <Box
            as={Link}
            to={"/Approveddriverlisttransport"}
            position="relative"
            w={{ base: "100%", md: "48%", xl: "19%" }}
            h={{ base: "auto", xl: "150px" }}
            p={4}
            bg="white"
            border="2px solid #13C39C"
            boxShadow="md"
            mb={4}
            borderRadius="10px"
          >
            <Text position="absolute" top="5px" left="5px" fontWeight="bold">
              Approved Driver’s List
            </Text>
            <Text
              position="absolute"
              top="45px"
              left="50%"
              transform="translateX(-50%)"
              fontWeight="bold"
              fontSize={40}
            >
              4
            </Text>
            <Icon as={FaList} position="absolute" top="5px" right="5px" />
          </Box>

          <Box
            as={Link}
            to={"/Map1"}
            position="relative"
            w={{ base: "100%", md: "48%", xl: "19%" }}
            h={{ base: "auto", xl: "150px" }}
            p={4}
            bg="white"
            border="2px solid #13C39C"
            boxShadow="md"
            mb={4}
            borderRadius="10px"
          >
            <Text position="absolute" top="5px" left="5px" fontWeight="bold">
              GPS Tracker
            </Text>
            <Icon
              as={FaMapMarkerAlt}
              position="absolute"
              color="#13C39C"
              top="5px"
              right="5px"
            />
          </Box>

          <Box
            as={Link}
            to={"/TransportHome"}
            position="relative"
            w={{ base: "100%", md: "48%", xl: "19%" }}
            h={{ base: "auto", xl: "150px" }}
            p={4}
            bg="white"
            border="2px solid #13C39C"
            boxShadow="md"
            mb={4}
            borderRadius="10px"
          >
            <Text position="absolute" top="5px" left="5px" fontWeight="bold">
              Trasnsport driver
            </Text>
            <Icon
              as={FaMapMarkerAlt}
              position="absolute"
              color="#13C39C"
              top="5px"
              right="5px"
            />
          </Box>
        </Flex>

        <Flex
          direction={{ base: "column", xl: "row" }}
          justify="space-between"
          mt={4}
        >
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
         
            <TransportBarChart />
          </Box>

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
            <Graph2 />
          </Box>
        </Flex>

        <Box flex="1" mt={4}>
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default Transport;
