import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Badge,
} from "@chakra-ui/react";
import { FaAngleLeft } from "react-icons/fa6";

import { IoDocumentOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import axios from "axios"; // Assuming you are using react-router-dom for navigation


const Employesdetails = () => {
  const [isDocumentModalOpen, setIsDocumentModalOpen] = useState(false);
  const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);

  const [employeeData, setEmployeeData] = useState([]);

  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/hub/employee/get-hub-employee/1"
      );
      setEmployeeData(response.data);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const [paymentHistoryFromApi, setPaymentHistoryFromApi] = useState([]);

  const fetchPaymentHistory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/hub/employee/payment-history/1"
      );

      const { data } = response;

      setPaymentHistoryFromApi(data);
    } catch (error) {
      console.error("Error fetching payment history:", error);
    }
  };

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  const getCurrentDateTime = () => {
    const currentDate = new Date();
    return currentDate.toLocaleString(); // Format the date and time as per your requirement
  };
  const toggleDocumentModal = () => {
    setIsDocumentModalOpen(!isDocumentModalOpen);
  };

  const toggleSignatureModal = () => {
    setIsSignatureModalOpen(!isSignatureModalOpen);
  };

  const users = [
    { id: 1, name: "Available", isOnline: true },
    // Add more users as needed
    ,
  ];

  return (
    <>
    
      <Flex>
        <Box marginLeft="230">
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
            <Text fontWeight="500">Employes List</Text>
          </Box>
        </Box>
        <Box marginLeft="680px" width="1100">
          <Box
            fontSize="16px"
            fontWeight="400"
            fontFamily="Poppins, sans-serif"
            color="black"
            textAlign="left"
            ml="20px" // Add left margin for spacing
          >
            {getCurrentDateTime()}
          </Box>
        </Box>
      </Flex>
      {employeeData && (
        <Flex>
          <Box
            display="flex"
            flexWrap="wrap"
            position="relative"
            marginLeft="250"
            w={{ base: "80%", md: "80%" }}
            h={{ base: "25px", md: "200px" }}
            p={4}
            bg="white"
            boxShadow="md"
            mb={{ base: 4, md: 0 }}
            mt={{ base: 10, md: 10 }}
            mr={{ base: 0, md: 4 }}
            borderRadius="10px"
            border="3px solid #355EEF"
          >
            <Box>
              <Flex justifyContent="space-between">
                <Box marginRight="3">
                  <img
                    src={employeeData.profileImgLink}
                    width="150px"
                    height="150px"
                    borderRadius="50px"
                    alt="Profile"
                  />
                </Box>
                <Box marginLeft="6">
                  <Text fontSize="20" marginTop="3" fontWeight="500">
                    {employeeData.name}
                  </Text>

                  <Box marginTop="8">
                    <Flex align="center" fontSize="16">
                      <Text fontWeight="600">Email:</Text>
                      <Text marginLeft="4">{employeeData.email}</Text>
                    </Flex>
                  </Box>
                  <Box marginTop="2">
                    <Flex align="center" fontSize="14">
                      <Text fontWeight="600">Contact NO:</Text>
                      <Text marginLeft="4">{employeeData.phoneNo}</Text>
                    </Flex>
                  </Box>
                </Box>

                <Box marginLeft="35">
                  <Box marginTop="16">
                    <Flex align="center" fontSize="16">
                      <Text fontWeight="600"> Employe ID :</Text>
                      <Text marginLeft="4">{employeeData.hubEmployeeId}</Text>
                    </Flex>
                  </Box>
                </Box>

                <Box>
                  <Box padding="5" ml="15">
                    <Flex align="center">
                      <Text fontWeight="600">Passbook:</Text>
                      <Link onClick={toggleDocumentModal}>
                        <Icon
                          ml="15 "
                          as={IoDocumentOutline}
                          className="user-avatar"
                          fontSize="30px"
                          color="Black"
                        />
                      </Link>
                    </Flex>
                  </Box>

                  <Box padding="5" ml="15">
                    <Flex align="center">
                      <Text fontWeight="600">Signature:</Text>
                      <Link onClick={toggleSignatureModal}>
                        <Icon
                          ml="15    "
                          as={IoDocumentOutline}
                          className="user-avatar"
                          fontSize="30px"
                          color="Black"
                        />
                      </Link>
                    </Flex>
                  </Box>
                </Box>

                <Box ml="15" mt="3">
                  <Box padding="2">
                    <Flex align="center">
                      <Text fontWeight="600">Pan No.:</Text>
                      <Text marginLeft="4">{employeeData.panNo}</Text>
                    </Flex>
                  </Box>

                  <Box padding="2">
                    <Flex align="center">
                      <Text fontWeight="600">Address:</Text>
                      <Text marginLeft="4">{employeeData.address}</Text>
                    </Flex>
                  </Box>

                  <Box padding="2">
                    <Flex align="center">
                      <Text fontWeight="600">UID No.:</Text>
                      <Text marginLeft="4">{employeeData.adharNo}</Text>
                    </Flex>
                  </Box>
                </Box>

                <Modal
                  isOpen={isDocumentModalOpen}
                  onClose={toggleDocumentModal}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Document</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <img src={employeeData.passbookImg} alt="Passbook" />
                    </ModalBody>
                  </ModalContent>
                </Modal>

                {/* Signature Modal */}
                <Modal
                  isOpen={isSignatureModalOpen}
                  onClose={toggleSignatureModal}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Signature</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <img src={employeeData.empSignature} alt="Signature" />
                    </ModalBody>
                  </ModalContent>
                </Modal>

                {users.map((user) => (
                  <Box key={user.id} display="flex" alignItems="center" mb={2}>
                    <Badge
                      colorScheme={user.isOnline ? "green" : "gray"}
                      borderRadius="full"
                      ml="85"
                      mt="-20"
                      boxSize="10px"
                    />
                    <Text ml={2} mt={-20}>
                      {user.name}
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Box>
          </Box>
        </Flex>
      )}

      <Box marginLeft="250" marginBottom="-7" marginTop="5">
        <Text fontWeight="700">Payment & Previous ride</Text>
      </Box>

      <Flex>
        <Box
          position="relative"
          marginLeft="250"
          w={{ base: "80%", md: "80%" }}
          h={{ base: "25px", md: "250px" }}
          p={4}
          bg="white"
          boxShadow="md"
          mb={{ base: 4, md: 0 }}
          mt={{ base: 10, md: 10 }}
          mr={{ base: 0, md: 4 }}
          borderRadius="10px"
          border="3px solid #355EEF"
        >
          <Flex>
            <Box ml="5" width="100%">
              <Box flexDirection="row">
                <Text fontWeight="600">Payment History</Text>
                <Popover>
                  <PopoverTrigger>
                    <Box
                      border="1px solid #355EEF"
                      marginLeft="80"
                      padding="1"
                      bg="#F0F3FA"
                      borderRadius="10"
                      width="8%"
                      textAlign="center"
                      mt="-5"
                    >
                      <Text color="#355EEF" fontSize="12">
                        View All
                      </Text>
                    </Box>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>View All</PopoverHeader>
                    <PopoverBody></PopoverBody>
                  </PopoverContent>
                </Popover>

                {paymentHistoryFromApi.map((payment, index) => (
                  <Box
                    key={index}
                    borderBottom="1px solid #E2E8F0"
                    paddingY="2"
                  >
                    <Flex flexDirection="row" justifyContent="space-between">
                      <Text>
                        Payment ID: {payment.name} Date: {payment.localdatetime}
                      </Text>

                      <Text color="green">Amount: {payment.amount}</Text>
                    </Flex>
                  </Box>
                ))}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Employesdetails;
