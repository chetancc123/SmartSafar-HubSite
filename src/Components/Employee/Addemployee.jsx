import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios"; // Import Axios
import {
  Box,
  Flex,
  Text,
  Input,
  Image,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";


const AddEmployee = () => {
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);

  const [empData, setEmpData] = useState({
    name: "",
    email: "",
    adharNo: "",
    panNo: "",
    address: "",
  });

  const onDrop1 = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageDataURL = reader.result;
      setSelectedImage1({ file, imageDataURL }); // Store file and its dataURL
    };

    reader.readAsDataURL(file);
  }, []);

  const onDrop2 = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageDataURL = reader.result;
      setSelectedImage2({ file, imageDataURL }); // Store file and its dataURL
    };

    reader.readAsDataURL(file);
  }, []);

  const onDrop3 = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageDataURL = reader.result;
      setSelectedImage3({ file, imageDataURL }); // Store file and its dataURL
    };

    reader.readAsDataURL(file);
  }, []);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", empData.name);
      formData.append("email", empData.email);
      formData.append("adharNo", empData.adharNo);
      formData.append("panNo", empData.panNo);
      formData.append("address", empData.address);

      // Append image files
      if (selectedImage1) {
        formData.append("image1", selectedImage1.file);
      }
      if (selectedImage2) {
        formData.append("image2", selectedImage2.file);
      }
      if (selectedImage3) {
        formData.append("image3", selectedImage3.file);
      }

      // Make POST request using Axios
      const response = await axios.post(
        "http://localhost:8080/hub/employee/add-employee-information/8",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const { getRootProps: getRootProps1, getInputProps: getInputProps1 } =
    useDropzone({
      onDrop: onDrop1,
    });
  const { getRootProps: getRootProps2, getInputProps: getInputProps2 } =
    useDropzone({
      onDrop: onDrop2,
    });
  const { getRootProps: getRootProps3, getInputProps: getInputProps3 } =
    useDropzone({
      onDrop: onDrop3,
    });

  return (
   <>
   
   <Flex justifyContent="center" marginTop="10">
      <Box
        w="80%"
        h="fit-content"
        p={4}
        bg="white"
        boxShadow="md"
        mb={10}
        borderRadius="10px"
        border="2px solid gray"
      >
        <Text fontWeight="700" fontSize="16" mb={4}>
          Add Employee
        </Text>
        <hr style={{ border: "1px solid gray" }} />

        <Flex
          alignItems="center"
          flexDirection="row"
          justifyContent="space-around "
        >
          <Box>
            {selectedImage3 && (
              <Box mt={4} height="fit-content" width="fit-content">
                <Image
                  height="140"
                  width="140"
                  src={selectedImage3.imageDataURL}
                  alt="Selected Image"
                />
              </Box>
            )}
            <Flex
              {...getRootProps3()}
              alignItems="center"
              justifyContent="center"
              marginTop="2"
            >
              <input {...getInputProps3()} />
              <EditIcon />
              Profile Photo
            </Flex>
          </Box>
          <Box>
            {selectedImage2 && (
              <Box mt={4} height="fit-content" width="fit-content">
                <Image
                  height="140"
                  width="140"
                  src={selectedImage2.imageDataURL}
                  alt="Selected Image"
                />
              </Box>
            )}
            <Flex
              {...getRootProps2()}
              alignItems="center"
              justifyContent="center"
              marginTop="2"
            >
              <input {...getInputProps2()} />
              <EditIcon />
              Passbook
            </Flex>
          </Box>
          <Box>
            {selectedImage1 && (
              <Box mt={4} height="fit-content" width="fit-content">
                <Image
                  height="140"
                  width="140"
                  src={selectedImage1.imageDataURL}
                  alt="Selected Image"
                />
              </Box>
            )}
            <Flex
              {...getRootProps1()}
              alignItems="center"
              justifyContent="center"
              marginTop="2"
            >
              <input {...getInputProps1()} />
              <EditIcon />
              Signature
            </Flex>
          </Box>
        </Flex>

        <Flex justifyContent="space-around" flexDirection="row" marginTop="5">
          <Flex flexDirection="column" width="35%">
            <Box>
              <Input
                placeholder="Enter Your Name"
                size="lg"
                mt={4}
                onChange={(e) =>
                  setEmpData({ ...empData, name: e.target.value })
                }
              />
            </Box>
            <Box>
              <Input
                placeholder="Email"
                size="lg"
                mt={4}
                onChange={(e) =>
                  setEmpData({ ...empData, email: e.target.value })
                }
              />
            </Box>
            <Box>
              <Input
                placeholder="Adhar No"
                size="lg"
                mt={4}
                onChange={(e) =>
                  setEmpData({ ...empData, adharNo: e.target.value })
                }
              />
            </Box>
          </Flex>
          <Flex flexDirection="column" width="35%">
            <Box>
              <Input
                placeholder="Pan No"
                size="lg"
                mt={4}
                onChange={(e) =>
                  setEmpData({ ...empData, panNo: e.target.value })
                }
              />
            </Box>
            <Box>
              <Input
                placeholder="Address"
                size="lg"
                mt={4}
                onChange={(e) =>
                  setEmpData({ ...empData, address: e.target.value })
                }
              />
            </Box>
          </Flex>
        </Flex>
        <Box marginTop="5">
          <Flex justifyContent="flex-end">
            <Button margin="1" colorScheme="blue" onClick={handleSubmit}>
              Submit
            </Button>

            <Button margin="1" colorScheme="red">
              {" "}
              Cancel
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
   </>
  );
};

export default AddEmployee;
