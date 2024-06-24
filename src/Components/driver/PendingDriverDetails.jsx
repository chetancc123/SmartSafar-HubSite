import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Flex,
  Icon,
  Text,
  Link,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Image,
  Heading,
  Stack,
  Badge,
  Center,
  ButtonGroup,
  useToast,
} from "@chakra-ui/react";
import { FaAngleLeft } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";

const PendingDriverDetails = () => {
  const [driverData, setDriverData] = useState({});
  const [isAdharCardModalOpen, setIsAdharCardModalOpen] = useState(false);
  const [isPassbookModalOpen, setIsPassbookModalOpen] = useState(false);
  const [isLicenceModalOpen, setIsLicenceModalOpen] = useState(false);
  const [isRegisterCertificateModalOpen, setIsRegisterCertificateModalOpen] =
    useState(false);
  const { driverId } = useParams();
  const toast = useToast();

  useEffect(() => {
    if (driverId) {
      const fetchDriverData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/hub/document_details/${driverId}`
          );
          setDriverData(response.data);
        } catch (error) {
          console.error("Error fetching driver data: ", error);
        }
      };

      fetchDriverData();
    } else {
      console.error("No driverId found in URL parameters");
    }
  }, [driverId]);

  const toggleAdharCardModal = () => {
    setIsAdharCardModalOpen(!isAdharCardModalOpen);
  };

  const togglePassbookModal = () => {
    setIsPassbookModalOpen(!isPassbookModalOpen);
  };

  const toggleLicenseModal = () => {
    setIsLicenceModalOpen(!isLicenceModalOpen);
  };

  const toggleRegisterCertificateModal = () => {
    setIsRegisterCertificateModalOpen(!isRegisterCertificateModalOpen);
  };

  const handleApprove = async () => {
    const data = {
      status: "APPROVED"
    };
  
    const config = {
      method: "post",
      url: `http://localhost:8080/hub/document_status/${driverId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
  
    try {
      const response = await axios.request(config);
      console.log("Driver approved successfully", response.data);
      toast({
        title: "Success",
        description: "Driver approved successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error approving driver: ", error);
      toast({
        title: "Error",
        description: "Error approving driver",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  
  const handleReject = async () => {
    const data = {
      status: "REJECTED"
    };
  
    const config = {
      method: "post",
      url: `http://localhost:8080/hub/document_status/${driverId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
  
    try {
      const response = await axios.request(config);
      console.log("Driver rejected successfully", response.data);
      toast({
        title: "Success",
        description: "Driver rejected successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error rejecting driver: ", error);
      toast({
        title: "Error",
        description: "Error rejecting driver",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  

  return (
    <>
      {/* Header */}
      <Flex>
        <Box marginLeft="3">
          <Box>
            <Icon
              as={FaAngleLeft}
              className="user-avatar"
              fontSize="33px"
              color="Black"
              margin="3"
            />
          </Box>
          <Box marginTop="-12" marginLeft="10" width="80">
            <NavLink to={"/Driverlist"}>
              <Text fontWeight="500" mr={50}>
                New Request Driver Details
              </Text>
            </NavLink>
          </Box>
        </Box>
        <Box ml={{ base: "none", md: "10px" }} width="1100"></Box>
      </Flex>

      {/* Driver Details */}
      <Flex>
        <Box
          position="relative"
          marginLeft="250"
          w={{ base: "80%", md: "80%" }}
          p={4}
          bg="white"
          boxShadow="md"
          mb={{ base: 4, md: 0 }}
          mt={{ base: 10, md: 10 }}
          mr={{ base: 0, md: 4 }}
          borderRadius="10px"
          border="3px solid purple"
          ml={{ base: "none", md: "10px" }}
          justifyContent="center"
        >
          <Box
            p={8}
            maxWidth="1200px"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Box>
                <Image
                  borderRadius="full"
                  boxSize="105px"
                  src={driverData.driverImage}
                  alt="Profile Image"
                />
              </Box>
              <Flex direction={"column"} mr={"10%"}>
                <Badge colorScheme="orange" fontSize="sm">
                  <Text marginLeft="3" fontWeight="700">
                    {driverData.documentStatus}
                  </Text>
                </Badge>
                <Text fontSize="lg" color="gray.500" ml={2}>
                  IFSC Code - {driverData.ifsc}
                </Text>
                <Text fontSize="lg" color="gray.500" ml={2}>
                  Address - {driverData.address}
                </Text>
                <Text fontSize="lg" color="gray.500" ml={2}>
                  panNo - {driverData.panNo}
                </Text>
                <Text fontSize="lg" color="gray.500" ml={2}>
                  DL NO. - {driverData.dlNumber}
                </Text>
                <Text fontSize="lg" color="gray.500" ml={2}>
                  Aadhar No. - {driverData.adharNo}
                </Text>
              </Flex>
            </Flex>
            <Box mt={-32}>
              <Center mt={"-10%"}>
                <Stack spacing={2}>
                  <Heading fontSize="40px" fontWeight="bold" mr={300}>
                    {driverData.driver?.name}
                  </Heading>
                  <Text fontSize="lg" color="gray.500">
                    Email - {driverData.driver?.email}
                  </Text>
                  <Text fontSize="lg" color="gray.500">
                    Contact - {driverData.driver?.phoneNo}
                  </Text>
                </Stack>
              </Center>
            </Box>
          </Box>
        </Box>
      </Flex>

      {/* Document Details */}
      <Box ml={{ base: "none", md: "10px" }} marginBottom="-7" marginTop="5">
        <Text fontWeight="700">Document Details</Text>
      </Box>
      <Flex>
        <Box
          position="relative"
          marginLeft="250"
          w={{ base: "80%", md: "80%" }}
          p={4}
          bg="white"
          boxShadow="md"
          mb={{ base: 4, md: 0 }}
          mt={{ base: 10, md: 10 }}
          mr={{ base: 0, md: 4 }}
          borderRadius="10px"
          border="3px solid green"
          ml={{ base: "none", md: "10px" }}
        >
          <Box>
            <Flex align="center">
              <Box>
                <Box padding="2"></Box>
                <Box padding="2"></Box>
                <Modal
                  isOpen={isAdharCardModalOpen}
                  onClose={toggleAdharCardModal}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Aadhar Card</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <img src={driverData.adharCard} alt="Aadhar Card" />
                    </ModalBody>
                  </ModalContent>
                </Modal>
                <Box padding="2">
                  <Flex align="center">
                    <Text fontWeight="600">Aadhar Card:</Text>
                    <Link onClick={toggleAdharCardModal}>
                      <Icon
                        as={IoDocumentOutline}
                        className="user-avatar"
                        fontSize="30px"
                        color="Black"
                      />
                    </Link>
                  </Flex>
                </Box>
                <Modal
                  isOpen={isPassbookModalOpen}
                  onClose={togglePassbookModal}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Passbook</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <img src={driverData.passbookPic} alt="Passbook" />
                    </ModalBody>
                  </ModalContent>
                </Modal>
                <Box padding="2">
                  <Flex align="center">
                    <Text fontWeight="600">Passbook:</Text>
                    <Link onClick={togglePassbookModal}>
                      <Icon
                        as={IoDocumentOutline}
                        className="user-avatar"
                        fontSize="30px"
                        color="Black"
                      />
                    </Link>
                  </Flex>
                </Box>
                <Modal isOpen={isLicenceModalOpen} onClose={toggleLicenseModal}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>License</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <img src={driverData.licence} alt="License" />
                    </ModalBody>
                  </ModalContent>
                </Modal>
                <Box padding="2">
                  <Flex align="center">
                    <Text fontWeight="600">License:</Text>
                    <Link onClick={toggleLicenseModal}>
                      <Icon
                        as={IoDocumentOutline}
                        className="user-avatar"
                        fontSize="30px"
                        color="Black"
                      />
                    </Link>
                  </Flex>
                </Box>
                <Modal
                  isOpen={isRegisterCertificateModalOpen}
                  onClose={toggleRegisterCertificateModal}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Signature</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <img
                        src={driverData.driverSignature}
                        alt="Signature"
                      />
                    </ModalBody>
                  </ModalContent>
                </Modal>
                <Box padding="2">
                  <Flex align="center">
                    <Text fontWeight="600">Signature:</Text>
                    <Link onClick={toggleRegisterCertificateModal}>
                      <Icon
                        as={IoDocumentOutline}
                        className="user-avatar"
                        fontSize="30px"
                        color="Black"
                      />
                    </Link>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Flex ml={"30%"} mt={"2%"}>
        <ButtonGroup spacing="6">
          <Button colorScheme="blue" onClick={handleApprove}>
            Approve
          </Button>
          <Button colorScheme="red" onClick={handleReject}>
            Reject
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default PendingDriverDetails;
