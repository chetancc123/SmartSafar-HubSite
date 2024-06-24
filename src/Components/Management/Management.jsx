import {
  Box,
  Flex,
  Button,
  Text,
  Badge,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Carmaintance from "../Transport/Carmaintance";
import CarForRepairing from "./CarForRepairing";
import CarRepairingAppointment from "../IssueDetails";


const Management = () => {
  const [totalRepairCost, setTotalRepairCost] = useState(null);
  const [carCount, setCarCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/hub/totalCostOfRepairingForCurrentMonth", {
        headers: {
          Cookie: "JSESSIONID=8983F1A13AA6D38696F64F7583C030D7",
        },
      })
      .then((response) => {
        setTotalRepairCost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching total repair cost:", error);
      });
  }, []);

  return (
    <>
      <Flex flexDirection="row" mt="4%">
       

        <NavLink to="/Totalrepairingcost" style={{ textDecoration: "none" }}>
          <Button
            ml={100}
            textColor="white"
            fontWeight="bold"
            variant="outline"
            borderColor="blue.600"
            backgroundColor="#13C39C"
          >
            Total repair cost this month = {totalRepairCost || "..."}
          </Button>
        </NavLink>
        <NavLink to={"/CarForRepairing"}>
          <Button
            ml={100}
            textColor="white"
            fontWeight="bold"
            variant="outline"
            borderColor="blue.600"
            backgroundColor="#13C39C"
          >
            Car for Repairing  {" "}
            {carCount > 0 && (
              <Badge
              ml="1"
              mb={14}
              fontSize={20}
              colorScheme="red"
              borderRadius="full"
              px={2}
              boxShadow="md" // or boxShadow="lg" for a larger shadow
            >
              {carCount}
            </Badge>
            )}
          </Button>
        </NavLink>
      </Flex>

      <Text mt={10} ml={10} fontWeight="bold" fontSize="20px">
        Car return to hub
      </Text>
      <Carmaintance />
      

      <CarForRepairing setCarCount={setCarCount} />

      <Box mt="55%" marginLeft="-32%">
        {/* <BarChart /> */}
      </Box>
    </>
  );
};

export default Management;
