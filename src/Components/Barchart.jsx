import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Sample data for the bar graph
const barChartDataDailyTraffic = [
  { label: "MONDAY", value: 10 },
  { label: "TUESDAY", value: 0 },
  { label: "WEDNESDAY", value: 0 },
  { label: "THURSDAY", value: 0 },
  { label: "FRIDAY", value: 0 },
  { label: "SATURDAY", value: 0 },
  { label: "SUNDAY", value: 10 },
];

// Function to convert day abbreviation to full day name
const getFullDayName = (abbreviation) => {
  switch (abbreviation) {
    case "MON":
      return "Monday";
    case "TUE":
      return "Tuesday";
    case "WED":
      return "Wednesday";
    case "THU":
      return "Thursday";
    case "FRI":
      return "Friday";
    case "SAT":
      return "Saturday";
    case "SUN":
      return "Sunday";
    default:
      return abbreviation;
  }
};

// Main component for the BarChart
function BarChart() {
  const [barChartData, setBarChartData] = useState(barChartDataDailyTraffic);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/hub/weeklyGraph");
      const data = response.data;
      // Update the barChartData values based on the response
      const updatedChartData = barChartDataDailyTraffic.map((item) => {
        const label = getFullDayName(item.label.substr(0, 3)); // Get the first three characters of the label
        return {
          label: label,
          value: data[label.toUpperCase()] || 0, // If data for the label is not available, default to 0
        };
      });
      setBarChartData(updatedChartData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Determine the maximum value in the data
  const maxValue = Math.max(...barChartData.map((item) => item.value));

  return (
    <Box
      p="4"
      bg="gray.100"
      borderRadius="md"
      boxShadow="md"
      w="100%" // Adjusted width for better alignment
      border="2px solid #13C39C"
      // overflowX="auto" // Enable horizontal scrolling on smaller screens
    >
      <Flex alignItems="flex-end" justify="space-between" >
        {barChartData.map((item, index) => (
          <Flex
            key={index}
            direction="column"
            alignItems="center"
            flex={{ base: "1 1 40px", md: "1" }} // Responsive flex basis
            mx={{ base: "1", md: "2" }} // Margin for spacing
          >
            <Box
              w={{ base: "20px", md: "30px" }} // Responsive width
              h={`${(item.value / maxValue) * 200}px`} // Scale the height based on the value
              bg="#13C39C"
              borderRadius="md"
              textAlign="center"
              color="white"
              fontWeight="bold"
              fontSize="sm"
              mb="2"
            >
              {item.value}
            </Box>
            <Text fontSize={{ base: "xs", md: "sm" }}>{item.label}</Text>{" "}
            {/* Responsive font size */}
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}

export default BarChart;
