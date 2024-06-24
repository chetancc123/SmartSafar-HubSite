import React, { useState } from "react";
import Bankpayment2 from "../Bankpayment2"; // Import Bankpayment2 component
import Bankpayment3 from "../Bankpayment3"; // Import Bankpayment3 component
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  Text,
  Select,
} from "@chakra-ui/react";


const PaymentOption = ({ altText, label, isSelected, onClick }) => (
  <Flex gap={2}>
    <Button
      variant="unstyled"
      rounded="full"
      w="30px"
      h="30px"
      bg={isSelected ? "green.500" : "transparent"}
      borderWidth="1px"
      borderColor="neutral.400"
      _hover={{ bg: isSelected ? "green.600" : "neutral.100" }}
      onClick={onClick}
    />
    <Text
      className={
        isSelected
          ? "text-base font-medium leading-6 text-zinc-950"
          : "grow text-base font-medium leading-6 text-neutral-400"
      }
    >
      {label}
    </Text>
  </Flex>
);

const Employeepayment = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedBank, setSelectedBank] = useState("");
  const [currentPage, setCurrentPage] = useState("Bankpayment1");

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    if (index === 0) {
      setCurrentPage("Bankpayment1");
    } else if (index === 1) {
      setCurrentPage("Bankpayment2");
    } else if (index === 2) {
      setCurrentPage("Bankpayment3");
    }
  };

  const handleBankSelect = (e) => {
    setSelectedBank(e.target.value);
  };

  const SectionHeader = ({ children }) => (
    <Text className="text-2xl font-semibold tracking-tight leading-7 text-zinc-950 max-md:max-w-full">
      {children}
    </Text>
  );

  return (
    <>
    
      {currentPage === "Bankpayment1" ? (
        <Flex
          flex={5}
          maxW="full"
          flexDirection="column"
          maxMd={{ flexDirection: "column", gap: 0 }}
        >
          <Flex w="44%" maxMd={{ ml: 0, w: "full" }} flexDirection="column">
            <Box
              p={12}
              mt={20}
              rounded="lg"
              maxMd={{ px: 5, mt: 10, maxW: "full" }}
            >
              <Text className="text-2xl font-semibold tracking-tight leading-7 text-zinc-950 max-md:max-w-full">
                Payment
              </Text>
              <Divider mt={2} />
              <Text
                mt={9}
                fontSize="lg"
                fontWeight="semibold"
                leading="3"
                color="zinc.950"
              >
                Pay With:
              </Text>
              <Flex gap={5} mt={4}>
                <PaymentOption
                  label="Card"
                  isSelected={selectedOption === 0}
                  onClick={() => handleOptionClick(0)}
                />
                <PaymentOption
                  label="Bank"
                  isSelected={selectedOption === 1}
                  onClick={() => handleOptionClick(1)}
                />
                <PaymentOption
                  label="Transfer"
                  isSelected={selectedOption === 2}
                  onClick={() => handleOptionClick(2)}
                />
              </Flex>
              <Flex
                gap={5}
                justify="between"
                px={4}
                py={3}
                mt={9}
                fontSize="base"
                leading="6"
                rounded="md"
                borderWidth="1.5px"
                borderColor="neutral.400"
                maxMd={{ flexWrap: "wrap", maxW: "full" }}
              >
                <Select
                  flex="auto"
                  placeholder="Choose your bank"
                  value={selectedBank}
                  onChange={handleBankSelect}
                >
                  <option value="Bank 1">Bank 1</option>
                  <option value="Bank 2">Bank 2</option>
                  <option value="Bank 3">Bank 3</option>
                  {/* Add more bank options */}
                </Select>
              </Flex>
              <Button
                mt={56}
                px={16}
                py={5}
                fontSize="base"
                fontWeight="bold"
                bgColor="green.500"
                color="zinc.100"
                maxMd={{ px: 5, mt: 10, maxW: "full" }}
              >
                Pay ₹59.28
              </Button>
              <Text mt={6} fontSize="sm" leading="6" color="neutral.400">
                Your personal data will be used to process, support your
                experience throughout this website, and for other purposes
                described in our privacy policy.
              </Text>
            </Box>
          </Flex>
          <Flex ml={5} marginLeft={670} w="56%" flexDirection="column">
            <Box
              flexGrow={1}
              justify="center"
              items="start"
              py={12}
              pr={16}
              pl={5}
              bg="gray.50"
              borderWidth="1px"
              borderColor="zinc.300"
              maxMd={{ pr: 5, mt: 5 }}
              mt={-750}
            >
              <Box p={12} mt={6} maxW="full" w="[593px]" maxMd={{ px: 5 }}>
                <SectionHeader>Payment Detail</SectionHeader>
                <Divider mt={2} />
                <Flex
                  gap={4}
                  justify="between"
                  mt={9}
                  fontWeight="medium"
                  maxMd={{ flexWrap: "wrap", maxW: "full" }}
                >
                  <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ec2d05f0c8c6e70040bb612e93ccca83669cd9d67d5bff4396c76cbcc20793e?apiKey=6e819305aff14a71a524c5abb40332f8&"
                    alt="Driver icon"
                    className="w-16 aspect-[0.85]"
                  />
                  <Flex flex="1" self="start" flexDirection="column">
                    <Flex
                      gap={5}
                      justify="between"
                      fontSize="lg"
                      color="zinc.950"
                    >
                      <Box flex="auto" lineHeight="122%">
                        Tushar Sahu
                      </Box>
                      <Box>₹49.80</Box>
                    </Flex>
                    <Text
                      mt={1}
                      fontSize="base"
                      leading="3"
                      color="neutral.400"
                    >
                      Employee Id: 123456
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  gap={4}
                  justify="between"
                  mt={20}
                  fontSize="base"
                  maxMd={{ flexWrap: "wrap", maxW: "full", mt: 10 }}
                >
                  <Box
                    flex="auto"
                    p={3.5}
                    bgColor="white"
                    rounded="md"
                    borderWidth="1.5px"
                    borderColor="neutral.400"
                    lineHeight="112.5%"
                    color="neutral.400"
                  >
                    <Input placeholder="Incentive" />
                  </Box>
                  <Button
                    p={3.5}
                    fontWeight="medium"
                    rounded="md"
                    borderWidth="1.5px"
                    bgColor="neutral.400"
                    borderColor="neutral.400"
                    lineHeight="75%"
                    color="zinc.100"
                  >
                    Apply
                  </Button>
                </Flex>
                <Flex
                  gap={5}
                  justify="between"
                  mt={16}
                  fontSize="base"
                  fontWeight="medium"
                  color="zinc.950"
                  maxMd={{ flexWrap: "wrap", mt: 10, mr: 1.5 }}
                >
                  <Box self="start" fontSize="base" lineHeight="3">
                    Subtotal
                  </Box>
                  <Box flex="auto" fontSize="4xl" lineHeight="5">
                    ₹49.80
                  </Box>
                </Flex>
                <Flex
                  gap={5}
                  justify="between"
                  mt={24}
                  fontWeight="medium"
                  color="zinc.950"
                  maxMd={{ flexWrap: "wrap", mt: 10, mr: 1.5 }}
                >
                  <Box self="start" fontSize="base" lineHeight="3">
                    Total
                  </Box>
                  <Box flex="auto" fontSize="4xl" lineHeight="5">
                    ₹49.28
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>
      ) : currentPage === "Bankpayment2" ? (
        <Bankpayment2 />
      ) : (
        <Bankpayment3 />
      )}
    </>
  );
};

export default Employeepayment;
