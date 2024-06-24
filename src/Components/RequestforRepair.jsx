import React, { useState, useRef, useEffect } from "react";
import { Box, Button, Flex, Grid, IconButton, Input, Image, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { FaTimes, FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";

const RequestforRepair = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [hubMessage, setHubMessage] = useState("");
  const [videoError, setVideoError] = useState("");
  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const [carData, setCarData] = useState(null);
  const { carRepairId } = useParams(); // Fetching carRepairId from route params
  const toast = useToast(); // Initialize useToast

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(prevFiles => [...prevFiles, ...files]);
    event.target.value = null; // Reset input value to allow re-selection of the same files
  };

  const handleVideoChange = (event) => {
    const files = Array.from(event.target.files);
    const isValid = files.every(file => file.size <= 50 * 1024 * 1024); // 50 MB limit

    if (isValid) {
      setSelectedVideos(prevVideos => [...prevVideos, ...files]);
      setVideoError("");
    } else {
      setVideoError("One or more videos exceed the 50 MB size limit.");
    }
    event.target.value = null; // Reset input value to allow re-selection of the same files
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleVideoButtonClick = () => {
    videoInputRef.current.click();
  };

  const handleRemoveImage = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleRemoveVideo = (index) => {
    setSelectedVideos((prevVideos) => prevVideos.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("hubMessage", hubMessage); // Assuming hubMessage holds the message value

    // Append each selected file
    selectedFiles.forEach(file => {
      formData.append("damageCarImgs", file);
    });

    // Append each selected video
    selectedVideos.forEach(video => {
      formData.append("damageCarVideo", video);
    });

    try {
      const response = await axios.post(
        `http://localhost:8080/hub/carRepairApproval/${carRepairId}`, // Replace with actual endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            // Add other headers if needed
          },
        }
      );
      console.log("Data successfully submitted:", response.data);
      toast({
        title: "Success",
        description: "Data successfully submitted.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error submitting data:", error.message);
      toast({
        title: "Error",
        description: "Error submitting data. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/admin/CarRepairById/${carRepairId}`
      );
      console.log("Data successfully fetched:", response.data);
      // Filter and map the data according to fields you want
      const { vehicleName, message, vehicleNo } = response.data;
      setCarData({ vehicleName, message, vehicleNo });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [carRepairId]); // Remove fetchData from dependencies

  return (
    <Flex
      justifyContent="center"
      alignItems="flex-start"
      px={16}
      py={20}
      bg="white"
      maxW="1080px"
      mx="auto"
    >
      <Box
        py={5}
        w="100%"
        rounded="xl"
        borderWidth="1px"
        borderColor="rgba(227, 227, 227, 0.2)"
        _hover={{ borderColor: "rgba(227, 227, 227, 0.2)" }}
      >
        {selectedFiles.length > 0 && (
          <Box
            ml={1}
            p={5}
            rounded="xl"
            borderWidth="1px"
            borderColor="rgba(227, 227, 227, 0.2)"
            _hover={{ borderColor: "rgba(227, 227, 227, 0.2)" }}
          >
            <h3>Selected Images</h3>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {selectedFiles.map((file, index) => (
                <Box key={index} position="relative" borderWidth="1px" borderColor="gray.200" rounded="md" overflow="hidden">
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={`Selected file ${index + 1}`}
                    objectFit="cover"
                    boxSize="100px"
                  />
                  <IconButton
                    icon={<FaTimes />}
                    size="sm"
                    colorScheme="red"
                    position="absolute"
                    top="5px"
                    right="5px"
                    onClick={() => handleRemoveImage(index)}
                  />
                </Box>
              ))}
            </Grid>
          </Box>
        )}

        {selectedVideos.length > 0 && (
          <Box
            ml={1}
            p={5}
            rounded="xl"
            borderWidth="1px"
            borderColor="rgba(227, 227, 227, 0.2)"
            _hover={{ borderColor: "rgba(227, 227, 227, 0.2)" }}
          >
            <h3>Selected Videos</h3>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {selectedVideos.map((video, index) => (
                <Box key={index} position="relative" borderWidth="1px" borderColor="gray.200" rounded="md" overflow="hidden">
                  <video width="100px" height="100px" controls>
                    <source src={URL.createObjectURL(video)} type={video.type} />
                    Your browser does not support the video tag.
                  </video>
                  <IconButton
                    icon={<FaTimes />}
                    size="sm"
                    colorScheme="red"
                    position="absolute"
                    top="5px"
                    right="5px"
                    onClick={() => handleRemoveVideo(index)}
                  />
                </Box>
              ))}
            </Grid>
            {videoError && <Text color="red.500">{videoError}</Text>}
          </Box>
        )}

        <Flex alignItems="center" mt={10}>
          <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
            <Button
              as="span"
              bg="transparent"
              color="white"
              fontWeight="semibold"
              fontSize="base"
              backgroundColor={"blue"}
              onClick={handleButtonClick}
            >
              Click to select Document
            </Button>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            multiple
            style={{ display: "none" }}
            onChange={handleFileChange}
            ref={fileInputRef}
          />

          <label htmlFor="video-upload" style={{ cursor: "pointer", marginLeft: "10px" }}>
            <Button
              as="span"
              bg="transparent"
              color="white"
              fontWeight="semibold"
              fontSize="base"
              backgroundColor={"blue"}
              onClick={handleVideoButtonClick}
            >
              Click to select Video
            </Button>
          </label>
          <input
            id="video-upload"
            type="file"
            accept="video/*"
            multiple
            style={{ display: "none" }}
            onChange={handleVideoChange}
            ref={videoInputRef}
          />
        </Flex>

        <Flex alignItems="center" mt={4}>
          <Button
            leftIcon={<FaPlus />}
            colorScheme="green"
            onClick={handleButtonClick}
          >
            Add More Images
          </Button>
        </Flex>

        <Grid>
          {carData && (
            <>
              <Input
                placeholder="Vehicle Name"
                p={4}
                mt={8}
                rounded="xl"
                borderWidth="1px"
                borderColor="black"
                color="zinc.400"
                opacity="0.8"
                value={carData.vehicleName}
                isReadOnly
              />
              <Input
                placeholder="Vehicle Number"
                p={4}
                mt={8}
                rounded="xl"
                borderWidth="1px"
                borderColor="black"
                color="zinc.400"
                opacity="0.8"
                value={carData.vehicleNo}
                isReadOnly
              />
              <Input
                placeholder="Message"
                p={4}
                mt={8}
                rounded="xl"
                borderWidth="1px"
                borderColor="black"
                color="zinc.400"
                opacity="0.8"
                value={carData.message}
                isReadOnly
              />
            </>
          )}
        </Grid>

        <Input
          placeholder="Hub Message"
          p={4}
          mt={8}
          rounded="xl"
          borderWidth="1px"
          borderColor="black"
          color="zinc.400"
          opacity="0.8"
          value={hubMessage}
          onChange={(e) => setHubMessage(e.target.value)}
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
      </Box>
    </Flex>
  );
};

export default RequestforRepair;
