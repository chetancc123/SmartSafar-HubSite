import {
  Flex,
  Text,
  Button,
  Input,
  Grid,
  Box,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Settings = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSignature, setSelectedSignature] = useState(null);
  const [selectedPassbook, setSelectedPassbook] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const hubMangerId = sessionStorage.getItem("id");
  const [carData, setCarData] = useState({
    name: "",
    email: "",
    uidNo: "",
    address: "",
    phoneNumber: "",
    profilePic: '',
    signaturePic: '',
    passbookPic: '',
  });

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/hub/edit-hub-profile/${hubMangerId}` );

        setCarData({
          name: response.data.fullName,
          email: response.data.email,
          uidNo: response.data.uidNo,
          address: response.data.address,
          phoneNumber: response.data.phoneNumber,
          profilePic: response.data.profileImgLink,
          signaturePic: response.data.signatureImgLink,
          passbookPic: response.data.passbookImgLink,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [hubMangerId]);

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (type === "profilePic") {
      setSelectedImage(file);
    } else if (type === "signaturePic") {
      setSelectedSignature(file);
    } else if (type === "passbookPic") {
      setSelectedPassbook(file);
    }

    setCarData((prevFormData) => ({
      ...prevFormData,
      [type]: file,
    }));
  };

  const handleIconClick = (imgLink) => {
    setIsImageModalOpen(true);
    setModalImageSrc(imgLink);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePic", selectedImage || carData.profilePic);
    formData.append("signaturePic", selectedSignature || carData.signaturePic);
    formData.append("passbookPic", selectedPassbook || carData.passbookPic);
    formData.append("hubDataJson", JSON.stringify({
      hubMangerId: hubMangerId,
      name: carData.name,
      uidNo: carData.uidNo,
      address: carData.address,
      email: carData.email,
      phoneNumber: carData.phoneNumber
    }));

    try {
      const response = await axios.put(
        `http://localhost:8080/hub/edit-hub-profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Data successfully submitted:", response.data);
      alert("Data successfully submitted");
      setShowSuccessMessage(true);
      onOpen();
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting data");
    }
  };

  const handleIconPassBook = () => {
    setIsImageModalOpen(true);
    setModalImageSrc(carData.passbookPic);
  };

  const handleIconSignatore = () => {
    setIsImageModalOpen(true);
    setModalImageSrc(carData.signaturePic);
  };

  console.log(carData);
  return (
    <Box mt={10} >
      <form onSubmit={handleSubmit}>
        <Flex flexDirection="row">
          <Box justify="center" align="center" direction="row" height="5px" px={[4, 6]} left={10}>
            <NavLink to={"/LoginSecurity"}>
              <Button ml="500px" mt="14px" >
                Login & Security
              </Button>
            </NavLink>
          </Box>
          <Box>
            <NavLink to={"/Setting"}>
              <Button mt="14px" ml="-500px" bg="#13C39C"> 
                Account settings
              </Button>
            </NavLink>
          </Box>
        </Flex>

        <Input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "profilePic")}
          style={{ display: "none" }}
        />

        <Flex justify="center" align="center" direction="row" height="5px" px={[4, 6]}>
          <Flex
            bg="white.100"
            p={6}
            borderRadius="md"
            boxShadow="md"
            mb={4}
            marginTop="700px"
            marginRight="40px"
            ml={{ base: "none", md: "50px" }}
          
            border="1px solid #13C39C"
            flexDirection="column"
            py={5}
            pr={2}
            rounded="2xl"
            borderColor="#13C39C"
            borderOpacity="0.8"
          >
            <Flex paddingTop={10}>
              <label htmlFor="imageInput">
                <Image
                  boxSize="100px"
                  border="2px solid #13C39C"
                  objectFit="cover"
                  src={selectedImage ? URL.createObjectURL(selectedImage) : carData.profilePic || "https://via.placeholder.com/150"}
                  alt="Profile Picture"
                  mt={{ base: "none", md: "40px" }}
                  ml={{ base: "none", md: "100px" }}
                  cursor="pointer"
                  onClick={() => handleIconClick(carData.profilePic)}
                />
              </label>
            </Flex>
            <Grid templateColumns="1fr 1fr" gap={4} paddingTop={10}>
              <Text fontWeight="bold" textAlign="left">
                Full Name
              </Text>
              <Input
                placeholder="Full Name"
                name="name"
                value={carData.name}
                onChange={handleChange}
              />
              <Text fontWeight="bold" textAlign="left">
                Email
              </Text>
              <Input
                placeholder="Email Address"
                name="email"
                value={carData.email}
                onChange={handleChange}
                readOnly
              />
            </Grid>
            <Grid templateColumns="1fr 1fr" gap={4} paddingTop={10}>
              <Text fontWeight="bold" textAlign="left">
                Address
              </Text>
              <Input
                placeholder="address"
                name="address"
                value={carData.address}
                onChange={handleChange}
              />
              <Text fontWeight="bold" textAlign="left">
                Phone Number
              </Text>
              <Input
                placeholder="Phone Number"
                name="phoneNumber"
                value={carData.phoneNumber}
                onChange={handleChange}
                readOnly
              />
            </Grid>
            <Grid templateColumns="1fr 1fr" gap={4} paddingTop={10}>
              <Text fontWeight="bold" textAlign="left">
                U.Id No.
              </Text>
              <Input
                placeholder="Please Enter your U.Id NO."
                name="uidNo"
                value={carData.uidNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid templateColumns="auto 1fr" gap={4} paddingTop={10}>
              <Text fontWeight="bold" textAlign="left">
                Signature
              </Text>
              <Grid templateColumns="auto 1fr" alignItems="center">
                <Input
                  ml={350}
                  width={300}
                  placeholder="Please upload your signature"
                  name="signaturePic"
                  onClick={() => document.getElementById("signatureInput").click()}
                  readOnly
                />
                <Box ml={20}>
                  <Stack direction="row">
                    <Image
                      boxSize="50px"
                      objectFit="cover"
                      src={selectedSignature ? URL.createObjectURL(selectedSignature) : carData.signaturePic || "https://via.placeholder.com/150"}
                      alt="Signature"
                      mt={{ base: "none", md: "0px" }}
                      ml={{ base: "none", md: "0px" }}
                      cursor="pointer"
                      onClick={handleIconSignatore}
                    />
                  </Stack>
                </Box>
              </Grid>
            </Grid>

            <input
              id="signatureInput"
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "signaturePic")}
              style={{ display: "none" }}
            />
            <Grid templateColumns="auto 1fr" gap={4} paddingTop={10}>
              <Text fontWeight="bold" textAlign="left">
                Passbook Pic
              </Text>
              <Grid templateColumns="auto 1fr" alignItems="center">
                <Input
                  ml={330}
                  width={300}
                  placeholder="Please upload your Passbook"
                  name="passbookPic"
                  onClick={() => document.getElementById("passbookInput").click()}
                  readOnly
                />
                <Box ml={20}>
                  <Stack direction="row">
                    <Image
                      boxSize="50px"
                      objectFit="cover"
                      src={selectedPassbook ? URL.createObjectURL(selectedPassbook) : carData.passbookPic || "https://via.placeholder.com/150"}
                      alt="Passbook"
                      mt={{ base: "none", md: "0px" }}
                      ml={{ base: "none", md: "0px" }}
                      cursor="pointer"
                      onClick={handleIconPassBook}
                    />
                  </Stack>
                </Box>
              </Grid>
            </Grid>

            

            <input
              id="passbookInput"
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "passbookPic")}
              style={{ display: "none" }}
            />

            <Grid templateColumns="auto 1fr" gap={4} paddingTop={10} ml="40%">
              <Button colorScheme="orange" size="lg" type="submit">
                Update Profile
              </Button>
             
            </Grid>
          </Flex>
        </Flex>
      </form>
      {isImageModalOpen && (
        <Flex
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex="100"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            bg="white"
            p={4}
            borderRadius="md"
            boxShadow="lg"
            textAlign="center"
            height="250px"
            width="400px"
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Image
                src={modalImageSrc}
                alt="Modal Image"
                maxWidth="50%"
                maxHeight="50%"
              />
              <Button
                mt="20px"
                background="teal"
                onClick={() => setIsImageModalOpen(false)}
              >
                Close
              </Button>
            </Flex>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default Settings;
