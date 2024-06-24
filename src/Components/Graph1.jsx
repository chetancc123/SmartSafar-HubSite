import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";


const Chart1 = () => {
  const [interval, setInterval] = useState("daily");
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when component mounts

  const fetchData = () => {
    axios
      .get("http://localhost:8080/hub/comparisonChart/1")
      .then((response) => {
        // Extract relevant data from the response
        const {
          currentDailyBookings,
          previousDailyBookings,
          dailyPercentageChange,
          currentWeeklyBookings,
          previousWeeklyBookings,
          weeklyPercentageChange,
          currentMonthlyBookings,
          previousMonthlyBookings,
          monthlyPercentageChange,
          totalBookings,
        } = response.data;

        // Update chartData state with fetched data
        setChartData([
          {
            interval: "daily",
            value: currentDailyBookings,
            percentage: dailyPercentageChange,
          },
          {
            interval: "weekly",
            value: currentWeeklyBookings,
            percentage: weeklyPercentageChange,
          },
          {
            interval: "monthly",
            value: currentMonthlyBookings,
            percentage: monthlyPercentageChange,
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleIntervalChange = (newInterval) => {
    setInterval(newInterval);
  };

  const filteredData = () => {
    return chartData.filter((item) => item.interval === interval);
  };

  return (
    <>
   
    <Box p={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="md"></Heading>
        <Flex>
          <Button
            variant={interval === "daily" ? "solid" : "outline"}
            onClick={() => handleIntervalChange("daily")}
            mr={2}
          >
            Daily
          </Button>
          <Button
            variant={interval === "weekly" ? "solid" : "outline"}
            onClick={() => handleIntervalChange("weekly")}
            mr={2}
          >
            Weekly
          </Button>
          <Button
            variant={interval === "monthly" ? "solid" : "outline"}
            onClick={() => handleIntervalChange("monthly")}
          >
            Monthly
          </Button>
        </Flex>
      </Flex>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={filteredData()}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="interval" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={3}
          />{" "}
          {/* Adjust strokeWidth here */}
          <Line
            type="monotone"
            dataKey="percentage"
            stroke="#82ca9d"
            strokeWidth={2}
          />{" "}
          {/* Adjust strokeWidth and stroke color for percentage line */}
        </LineChart>
      </ResponsiveContainer>
    </Box>
    </>
  );
};

export default Chart1;
