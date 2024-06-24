import {
  Flex,
      Button,
  Input,
  Grid,
  Box,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Employeepaymentdetail = () => {
  const [carData, ] = useState({
    name: "",
    email: "",
    username: "",
    phonenumber: "",
  });





  return (
    <>

      {/* Header and Navigation Links */}

      {/* Profile Picture */}
      <form>
        {/* <Box mt={"100px"}> */}

        <Flex flexDirection="row">
          {/* Account Setting */}
          <Box
            justify="center"
            align="center"
            direction="row"
            height="5px" // Adjust based on your header height
            px={[4, 6]}
            left={10}
            // mt={-100}
          ></Box>
        </Flex>

        <Input
          id="imageInput"
          type="file"
          accept="image/*"
          
          style={{ display: "none" }}
        />
        {/* </Box> */}

        {/* Profile Settings */}
        <Box ml={300} mt={10}>
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ec2d05f0c8c6e70040bb612e93ccca83669cd9d67d5bff4396c76cbcc20793e?apiKey=6e819305aff14a71a524c5abb40332f8&"
            alt="Driver icon"
            className="w-16 aspect-[0.85]"
          />
        </Box>

        <Flex
          justify="center"
          align="center"
          direction="row"
          height="5px"
          px={[4, 6]}
        >
          <Flex
            bg="white.100"
            p={6}
            borderRadius="md"
            boxShadow="md"
            mb={4}
            marginTop="600px"
            marginRight="40px"
            ml={{ base: "none", md: "50px" }}
            height="400px"
            width="1000px"
            border="1px solid red"
            flexDirection="column"
            py={5}
            pr={2}
            rounded="2xl"
            borderColor="blue.600"
            borderOpacity="0.8"
          >
            <Flex paddingTop={1}>
              <label htmlFor="imageInput"></label>
              {/* <Text
                  fontSize="16px"
                  fontWeight="400"
                  fontFamily="Poppins, sans-serif"
                  color="black"
                >
                  Profile Picture
                </Text> */}
            </Flex>

            <Grid templateColumns="1fr 1fr" gap={4} paddingTop={10}>
              <Input
                placeholder="Employee Id"
                name="name"
                value={carData.name}
               
              />
              <Input
                placeholder="Email Address"
                name="email"
                value={carData.email}
               
              />
            </Grid>

            <Grid templateColumns="1fr 1fr" gap={4} paddingTop={10}>
              <Input
                placeholder="Phone Number"
                name="username"
                value={carData.username}
               
              />
              <Input
                placeholder="Address"
                name="phonenumber"
                value={carData.phonenumber}
               
              />
              <Input
                placeholder="Number Of Ride"
                name="phonenumber"
                value={carData.phonenumber}
               
              />
              <Input
                placeholder="Phone Number"
                name="phonenumber"
                value={carData.phonenumber}
               
              />
            </Grid>

            <Flex justifyContent="space-between" mt={120} ml={350}>
            <NavLink to={"/Employeepayment"}>
              <Button colorScheme="orange" size="lg" type="submit">
                Do Payment
              </Button></NavLink>
            </Flex>
          </Flex>
        </Flex>
      </form>

      {/* Modal */}
     
    </>
  );
};

export default Employeepaymentdetail;