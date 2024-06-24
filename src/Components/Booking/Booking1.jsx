import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon,
  Text,
  Checkbox,
  Box,
} from "@chakra-ui/react";
import { FaPhone, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa"; // Import the calendar icon
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Booking1 = () => {
  const [bookingData, setBookingData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAllDates, setShowAllDates] = useState(false);
  const hubMangerId = sessionStorage.getItem("id");
  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/hub/getRentalBookingList/${hubMangerId}`
        );
        setBookingData(response.data);
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    };

    fetchBookingData();
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleShowAllDatesChange = (e) => {
    setShowAllDates(e.target.checked);
  };

  const filteredData = showAllDates
    ? bookingData
    : bookingData.filter((booking) => {
        const bookingDate = new Date(booking.timeDuration.startDateTime)
          .toISOString()
          .split("T")[0];
        const selectedDateString = selectedDate.toISOString().split("T")[0];
        return bookingDate === selectedDateString;
      });

  return (
    <>
      <Text fontSize="xl" fontWeight="bold" mb="4">
        Rental List
      </Text>
      <Box display="flex" alignItems="center" mb="4">
        <FaCalendarAlt style={{ marginRight: "10px" }} /> {/* Calendar icon */}
        <DatePicker selected={selectedDate} onChange={handleDateChange} />
        <Checkbox
          ml="4"
          isChecked={showAllDates}
          onChange={handleShowAllDatesChange}
        >
          Show All Dates
        </Checkbox>
      </Box>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>S No</Th>
              <Th>Label</Th>
              <Th>Booking Data</Th>
              <Th>Booking Date</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.length === 0 ? (
              <Tr>
                <Td colSpan="5">
                  No data found for {selectedDate.toDateString()}
                </Td>
              </Tr>
            ) : (
              filteredData.map((booking, index) => (
                <Tr key={index} borderBottom="2px solid gray">
                  <Td>{index + 1}</Td>
                  <Td>
                    Hours: {booking.hours}
                    <br />
                    Driver - {booking.driver ? booking.driver.name : "N/A"}
                  </Td>
                  <Td>
                    <div>
                      {booking.userName}
                      <br />
                      <Icon as={FaPhone} /> <span>{booking.userPhoneNo}</span>{" "}
                      <br />
                      <Icon as={FaMapMarkerAlt} />{" "}
                      <span>{booking.distance} Km</span>
                    </div>
                  </Td>
                  <Td>
                    {new Date(
                      booking.timeDuration.startDateTime
                    ).toDateString()}
                  </Td>
                  <Td>{booking.rideOrderStatus}</Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
