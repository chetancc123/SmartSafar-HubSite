import React, { useState, useRef } from "react";
import { Box, Button, Flex, IconButton, Input, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { FaUpload } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ExactRepairAmount = () => {
  const { carRepairId } = useParams(); // Get carRepairId from the URL
  const [selectedFile, setSelectedFile] = useState(null);
  const [totalCost, setTotalCost] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setTotalCost("");
    setPreviewUrl(null);
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("invoice", selectedFile);
    formData.append("totalCostOfRepairing", totalCost);

    try {
      const response = await axios.post(
        `http://localhost:8080/hub/carRepairDetailCost/${carRepairId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Data successfully submitted:", response.data);
      setSuccessMessage("Report submitted successfully!");
      handleCancel(); // Clear the form after successful submission
    } catch (error) {
      console.error("Error submitting data:", error);
      // Handle error here, maybe display an error message
    }
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      px={16}
      py={20}
      bg="white"
      maxW="1080px"
      mx="auto"
    >
      <Box
        py={5}
        mt={-20}
        w="100%"
        rounded="xl"
        borderWidth="1px"
        borderColor="rgba(227, 227, 227, 0.2)"
        _hover={{ borderColor: "rgba(227, 227, 227, 0.2)" }}
      >
        <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
          <Button
            as="span"
            bg="transparent"
            color="white"
            fontWeight="semibold"
            fontSize="base"
            backgroundColor={"blue"}
            mt={10}
            onClick={handleButtonClick}
          >
            Click to select Document
          </Button>

          <IconButton
            aria-label="Upload"
            icon={<FaUpload />}
            variant="outline"
            colorScheme="blue"
            mt={40}
            ml="-125px"
            onClick={handleButtonClick}
          />
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
          ref={fileInputRef}
        />

        {previewUrl && (
          <Box mt={4}>
            <Image src={previewUrl} alt="Selected File Preview" maxH="200px" />
          </Box>
        )}

        <Input
          placeholder="Total Cost of repairing"
          p={4}
          mt={8}
          rounded="xl"
          borderWidth="1px"
          borderColor="black"
          color="zinc.400"
          opacity="0.8"
          value={totalCost}
          onChange={(e) => setTotalCost(e.target.value)}
        />

        <Flex
          justifyContent="flex-end"
          mt={40}
          maxW="427px"
          fontSize="base"
          fontStyle="light"
          whiteSpace="nowrap"
          flexWrap="wrap"
        >
          <Button
            flex="1"
            justifyContent="center"
            alignItems="center"
            px={16}
            py={3.5}
            rounded="xl"
            borderWidth="1px"
            borderColor="black"
            color="zinc.900"
            maxW="50%"
            mr={2.5}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            flex="1"
            justifyContent="center"
            px={14}
            py={3.5}
            rounded="xl"
            bg="blue.600"
            color="white"
            maxW="50%"
          >
            Send report
          </Button>
        </Flex>

        {successMessage && (
          <Text color="green.500" mt={4}>
            {successMessage}
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default ExactRepairAmount;
