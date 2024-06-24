import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  Cell,
  ResponsiveContainer,
} from "recharts";

function TransportBarChart() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [graphType, setGraphType] = useState("daily"); // State to track graph type

  useEffect(() => {
    fetchData();
  }, [graphType]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/hub/get-rental-booking-details/1"
      );
      setData(response.data.data);
      setError(null);
    } catch (error) {
      setError("Error fetching data. Please try again.");
    }
  };

  const handleDataError = (error) => {
    console.error("Error fetching data: ", error);
    setError("Error fetching data. Please try again.");
  };

  const processChartData = (data) => {
    if (!data) return [];

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const dateCountsMap = data.reduce((acc, item) => {
      const startDate = new Date(item.timeDuration.startDateTime);
      const dayOfWeek = startDate.getDay(); // 0 (Sunday) to 6 (Saturday)
      // Increment count for each day of the week
      const dayName = daysOfWeek[dayOfWeek];
      acc[dayName] = (acc[dayName] || 0) + 1;
      return acc;
    }, {});

    // Map day of the week to their counts
    const formattedData = Object.keys(dateCountsMap).map((dayOfWeek) => ({
      dayOfWeek: dayOfWeek,
      count: dateCountsMap[dayOfWeek],
    }));

    return formattedData;
  };

  const formatDateString = (dateString) => {
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
    }).format(new Date(dateString));
  };

  const getMaxCount = (data) => {
    return Math.max(...Object.values(data.reduce((acc, item) => ({...acc, [item.dayOfWeek]: item.count }), {})));
  };

  const formattedData = processChartData(data);
  const maxCount = getMaxCount(formattedData);
  const maxCountIndex = formattedData.findIndex((item) => item.count === maxCount);

  return (
    <Box width="100%" height={400}>
      <ResponsiveContainer>
        <BarChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dayOfWeek" />
          <YAxis>
            <Label
              value="%"
              position="insideLeft"
              angle={-90}
              style={{ textAnchor: 'middle' }}
            />
          </YAxis>
          <Tooltip />
          <Legend />
          <Bar
            dataKey="count"
            fill={(data, index) =>
              index === maxCountIndex ? "#13C39C" : "#13C39C" // Red if count is max, otherwise #13C39C
            }
          >
            {formattedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === maxCountIndex ? '#13C39C' : '#13C39C'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default TransportBarChart;
