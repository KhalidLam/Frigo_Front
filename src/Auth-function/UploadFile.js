import React, { useState, useEffect } from "react";
import {
  Heading,
  Stack,
  Box,
  Input,
  Button,
  Flex,
  Text,
  Image,
} from "@chakra-ui/core";
import Axios from "axios";

export const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [items, setItems] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [show, setShow] = useState(null);
  const fileInput = React.createRef();
  const onFileChange = (event) => {
    console.log(event.target.files[0]);
    // setSelectedFile(event.target.files[0]);
    setSelectedFile(fileInput.current.files[0]);
    // console.log(fileInput.current.files[0]);
  };
  useEffect(() => {
    const token = "Bearer " + localStorage.getItem("userToken");
    Axios.get("http://localhost:8000/api/v1/images", {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res);
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("didmount");
  }, [show]);

  const onFileUpload = async () => {
    const token = "Bearer " + localStorage.getItem("userToken");

    // console.log(fileInput.current.files[0]);

    // console.log("upload");
    const formData = new FormData();
    formData.append("file", selectedFile);
    await Axios.post("http://localhost:8000/api/v1/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setShow(!show);
  };
  return (
    <Stack>
      <Box
        bg="#F0FFF4"
        p={5}
        mt="120px"
        mx="auto"
        w="500px"
        h="200px"
        borderWidth="1px"
        shadow="lg"
        rounded="lg"
      >
        <Heading mb="20px">Upload Components</Heading>
        <Stack w="80%" mb={5} isInline spacing={10}>
          <Input
            flex="4"
            type="file"
            placeholder="large size"
            size="xs"
            onChange={onFileChange}
            ref={fileInput}
            _hover={{ bg: "red.500", color: " white" }}
          />
          {/* <input type="file" onChange={onFileChange} ref={fileInput} /> */}

          <Button
            flex="1"
            variantColor="#000"
            variant="outline"
            _hover={{ bg: "blue.500", color: " white" }}
            onClick={onFileUpload}
            _hover={{ bg: "green.500", color: " white" }}
          >
            Upload
          </Button>
        </Stack>
      </Box>

      <Stack
        maxWidth="1000px"
        spacing={4}
        mx="auto"
        isInline
        shouldWrapChildren={true}
        flexWrap="wrap"
      >
        {items.map((item) => (
          <Box
            w="300px"
            h="350px"
            rounded="lg"
            shadow="lg"
            borderWidth="1px"
            bg="gray.100"
            mb={5}
          >
            <Box bg="#fff" _hover={{ bg: "red.500", color: " white" }}>
              <Image
                p={3}
                src={`http://localhost:8000/storage/${item.uri}`}
                _hover={{ bg: "red.500", color: " white" }}
              />
            </Box>

            <Box>
              <Text
                p={2}
                fontSize="20px"
                _hover={{ bg: "red.500", color: " white" }}
              >
                {item.uri.substring(24, 34)}
              </Text>
              <Text p={2} color="gray.500" fontSize="15px">
                Created at: {item.created_at}
              </Text>
            </Box>
          </Box>
        ))}
      </Stack>
      {/* <Box
        bg="gray.200"
        p={5}
        mt="120px"
        mx="auto"
        w="800px"
        borderWidth="1px"
        shadow="lg"
        rounded="lg"
        mx="auto"
      >
        {items.map((item) => (
          <Flex isInline>
            <Heading flex="2">{item.created_at}</Heading>

            <Image
              flex="2"
              w="100%"
              src={`http://localhost:8000/storage/${item.uri}`}
              alt="Dan Abramov"
            />
          </Flex>
        ))}
      </Box> */}
    </Stack>
  );
};
