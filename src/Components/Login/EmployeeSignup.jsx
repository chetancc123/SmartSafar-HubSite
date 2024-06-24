import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EmployeeSignup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [hubLocation, setLocation] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [smsOtp, setSmsOtp] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [hubLocations, setHubLocations] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/hub/getHubLocation"
      );
      setHubLocations(response.data);
    } catch (error) {
      console.log("Error fetching locations:", error);
    }
  };

  const handleEmailVerification = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/emailSendOtp",
        { email }
      );
      console.log("Success:", response.data);
      setIsEmailVerified(true);
    } catch (error) {
      if (error.response && error.response.status === 302) {
        alert("User with this email already exists");
      } else {
        console.log(
          "Server responded with error:",
          error.response ? error.response.data : error.message
        );
      }
    }
  };

  const handlePhoneVerification = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/signUpWithPhone",
        { phoneNo }
      );
      console.log("Success:", response.data);
      setIsPhoneVerified(true);
    } catch (error) {
      if (error.response && error.response.status === 302) {
        alert("User with this PhoneNumber already exists");
      } else {
        console.log(
          "Server responded with error:",
          error.response ? error.response.data : error.message
        );
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if both email and phone number are verified
    if (!isEmailVerified || !isPhoneVerified) {
      alert("Please verify email and phone number first!");
      return;
    }

    const payload = {
      username,
      email,
      phoneNo,
      password,
      hubLocation, // Assuming location is the field expected by the server
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/hub/employee/signup",
        payload
      );
      console.log(response.data);
      alert("Employee registered successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register Employee. Please try again later.");
    }
  };

  const handleEmailVerify = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/verify-email-otp",
        { email, emailOtp }
      );
      console.log(response.data);
      if (response.data.success) {
        setIsEmailVerified(true);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to verify email. Please try again later.");
    }
  };

  const handlePhoneVerify = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/verify-phoneno",
        { phoneNo, smsOtp }
      );
      console.log(phoneNo, smsOtp);
      console.log(response.data);
      if (response.data.success) {
        setIsPhoneVerified(true);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to verify phone number. Please try again later.");
    }
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box
        w={{ base: "90%", md: "400px" }}
        mt={{ base: "15px", md: "px0" }}
        ml={{ base: "15px" }}
      >
        <Heading as="h2" size="lg" mb={4}>
          Sign up
        </Heading>
        <Text mb={4} fontWeight={"bold"}>Employee Provide details to create an account</Text>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder=" Enter Full Name"
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <SimpleGrid columns={2} spacing={5}>
              <Box>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=" Enter Email"
                  required
                />
              </Box>
              <Box>
                <Button
                  colorScheme="blue"
                  style={{ marginLeft: "23%" }}
                  onClick={handleEmailVerification}
                >
                  Send Email OTP
                </Button>
              </Box>
            </SimpleGrid>
          </FormControl>
          <FormControl mb={4}>
            <SimpleGrid columns={2} spacing={5}>
              <Box>
                <Input
                  type="text"
                  value={emailOtp}
                  onChange={(e) => setEmailOtp(e.target.value)}
                  placeholder="Enter Email OTP"
                  required
                />
              </Box>
              <Box>
                <Button
                  colorScheme="blue"
                  style={{ marginLeft: "20%" }}
                  onClick={handleEmailVerify}
                >
                  Verify Email OTP
                </Button>
              </Box>
            </SimpleGrid>
          </FormControl>
          <FormControl mb={4}>
            <SimpleGrid columns={2} spacing={5}>
              <Box>
                <Input
                  type="text"
                  value={smsOtp}
                  onChange={(e) => setSmsOtp(e.target.value)}
                  placeholder="Enter Phone OTP"
                  required
                />
              </Box>
              <Box>
                <Button
                  colorScheme="blue"
                  style={{ marginLeft: "17%" }}
                  onClick={handlePhoneVerify}
                >
                  Verify Phone OTP
                </Button>
              </Box>
            </SimpleGrid>
          </FormControl>
          <FormControl mb={4}>
            <SimpleGrid columns={2} spacing={5}>
              <Box>
                <Input
                  type="tel"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  placeholder="Enter Phone Number"
                  required
                />
              </Box>
              <Box>
                <Button
                  colorScheme="blue"
                  style={{ marginLeft: "20%" }}
                  onClick={handlePhoneVerification}
                >
                  Send Phone OTP
                </Button>
              </Box>
            </SimpleGrid>
          </FormControl>
          <FormControl mb={4}>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter  password"
              required
            />
          </FormControl>
          <FormControl mb={4}>
            <Select
              value={hubLocation}
              name="hubLocation"
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Select location"
            >
              {hubLocations.map((loc, index) => (
                <option key={index} value={loc.location}>
                  {loc.location}
                </option>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="blue" width="100%" mt={4}>
            Sign up
          </Button>
          <Text mt={4} textAlign="center">
  Already have an account? <Link  to="/Hublogin" color="blue.500">Sign In</Link>
</Text>
        </form>
      </Box>

      <Box
        p={10}
        w={{ base: "300px", md: "500px" }}
        mt={{ base: "0px", md: "-450px" }}
        h={{ base: "100%", md: "0px" }}
      >
        <Heading
          as="h1"
          fontFamily="Arial, sans-serif"
          textAlign={{ base: "center" }}
        >
          Smart-Safar
        </Heading>
        <Text ml={{ base: "25%" }}>Your travel recommendations</Text>
        <Image src="photo.png" mt="200px" />
      </Box>
    </Flex>
  );
};

export default EmployeeSignup;
