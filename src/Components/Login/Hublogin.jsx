import React, { useState, useContext } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Box,
  Heading,
  Text,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/Authcontext";

const HubLogin = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    usernameOrEmailOrPhoneNumber: yup
      .string()
      .required("Username, Email, or Phone Number is required")
      .test(
        "test-name",
        "Invalid format",
        (value) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || // Email format
          /^[0-9]{10}$/.test(value) || // Phone number format
          /^[a-zA-Z0-9]+$/.test(value) // Username format
      ),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password must be at least 6 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/signin",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        const userIdResponse = await axios.get(
          `http://localhost:8080/hub/hub-profile-by-email?email=${data.usernameOrEmailOrPhoneNumber}`
        );

        if (userIdResponse.status === 200) {
          const { token, roles, driverType } = response.data;
          const { id, phoneNo, name, profileImgLink, email } = userIdResponse.data;

          const user = {
            id,
            phoneNo,
            name,
            profileImgLink,
            email,
            roles,
            driverType,
            token,
          };

          // Store user data in session storage
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("id", id);
          sessionStorage.setItem("phoneNo", phoneNo);
          sessionStorage.setItem("name", name);
          sessionStorage.setItem("profileImgLink", profileImgLink);
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("roles", JSON.stringify(roles));
          sessionStorage.setItem("driverType", driverType);

          login(user);

          alert("Login Successful");
          navigate("/dashboard");
        } else {
          console.error("Failed to fetch user profile:", userIdResponse.data);
          alert("Error: Login failed. Please check your credentials.");
        }
      } else {
        console.error("Login failed:", response.data);
        alert("Error: Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login Error: An error occurred while trying to log in.");
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" >
      <Box width="400px" p={8} borderWidth="1px" borderRadius="lg" boxShadow="lg">
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Login
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb={4} isInvalid={errors.usernameOrEmailOrPhoneNumber}>
            <FormLabel>Username, Email, or Phone Number</FormLabel>
            <Input
              type="text"
              placeholder="Username, Email, or Phone Number"
              {...register("usernameOrEmailOrPhoneNumber")}
            />
            <FormErrorMessage>{errors.usernameOrEmailOrPhoneNumber?.message}</FormErrorMessage>
          </FormControl>
          <FormControl mb={4} isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="blue" width="100%">
            Sign in
          </Button>
          <Flex mt={4} justifyContent="center">
            <Text mr={2}>Don't have an account?</Text>
            <Link href="/HubSignup" color="blue.500">
              Hub Signup
            </Link>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
};

export default HubLogin;
