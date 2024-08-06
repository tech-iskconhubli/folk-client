import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Image,
  VStack,
  SimpleGrid,
  GridItem,
  Container,
  Flex,
  useBreakpointValue, 
  HStack,
  Button,
  Divider,
  Input,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendar } from "react-icons/io5"; 
import { MdTimer } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { singleData } from "../../Components/SinglePages/SingleData"; 
import theme from "../../theme";
import {
  getSingleAdminYogaFormData,
  postYogaFormData,
} from "../../Redux/app/action";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const YogaSinglePage = () => {
  const [singleData, setSingleData] = useState({});

  const init = {
    name: "",
    watsAppNumber: "",
    email: "",
    age: "",
    collageOrCompany: "",
    BranchOfYear: "",
    eventId:""
  };

  const [formData, setFormData] = useState(init);
  const [errors, setErrors] = useState(init);

  const { singlePage } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleAdminYogaFormData(singlePage)).then((res) => {
      setSingleData(res?.payload?.data);
      setFormData({
        eventId:res.payload.data._id
      })
    });
  }, []);

  console.log(singleData._id)

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    const payload = {
      ...formData,
      [name]: value,
    };

    setFormData(payload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "name required";
    }
    if (!formData.watsAppNumber) {
      newErrors.watsAppNumber = "watsAppNumber required";
    }
    if (!formData.email) {
      newErrors.email = "email required";
    }
    if (!formData.age) {
      newErrors.age = "age required";
    }
    if (!formData.collageOrCompany) {
      newErrors.collageOrCompany = "collageOrCompany required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      dispatch(postYogaFormData(formData)).then((res) => {
        console.log("res", res);
      });
      console.log(formData);
    }
  };

  const containerWidth = useBreakpointValue({ base: "100%", md: "100%" });

  return (
    <Container maxW={containerWidth} margin="auto" p={["0", "0", "0", "2"]}>
      {/* Background Image with Heading */}
      <MotionBox
        // bgImage={`url(${img[0]})`}
        w={"100%"}
        borderRadius={{ lg: "10px" }}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height={["50vh", "50vh", "60vh", "80vh", "85vh"]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        position={"relative"}
        mt={{ base: "6rem", lg: "7rem" }}
      >
        <Box
          bg="rgba(0, 0, 0, 0.5)"
          p={6}
          borderRadius={{ lg: "10px" }}
          overflow={"hidden"}
          position={"absolute"}
          width={"100%"}
          h={"100%"}
          inset={0}
        ></Box>
        <VStack gap={["2rem"]}>
          <Heading
            position={"relative"}
            zIndex={"99"}
            size={["lg", "xl", "2xl", "2xl", "2xl"]}
          >
            {"Yoga for Happiness"}
          </Heading>
        </VStack>
      </MotionBox>

      {/* Details */}
      <Flex
        my={["2rem", "3rem", "4rem", "5rem"]}
        px={["4", "7", "7", "7", "5"]}
        w={["100%", "100%", "90%", "90%", "99%", "98%"]}
        boxSizing="border-box"
        mx={"auto"}
        gap={["2rem"]}
        flexDirection={{ base: "column", xl: "row" }}
      >
        <VStack
          w={["100%", "100%", "100%", "100%", "55%"]}
          h={"auto"}
          alignItems={"flex-start"}
          gap={["3rem", "3rem", "2.5rem"]}
        >
          <VStack alignItems={"flex-start"} w={"100%"} gap={"1.5rem"}>
            <VStack alignItems={"flex-start"}>
              <Box
                fontSize={[
                  "2.5rem",
                  "3rem",
                  "3.5rem",
                  "4rem",
                  "4rem",
                  "4.5rem",
                ]}
                lineHeight={{ lg: "5rem" }}
                fontWeight={"600"}
              >
                {"Yoga For Happiness Event"}
              </Box>
              <Box
                fontSize={["2rem", "2.5rem", "3rem", "3.5rem"]}
                color={theme.colors.col.secondary}
                fontWeight={"700"}
              >
                RS:{100}/-
              </Box>
            </VStack>
            <Divider border={"1px solid rgb(0,0,0,0.90)"} />

            <Box
              fontSize={["1rem", "1rem", "1.1rem", "1.2rem"]}
              lineHeight={"1.9rem"}
            >
              {singleData.description}
            </Box>
          </VStack>

          <Flex
            direction={{ base: "column", lg: "row" }}
            justifyContent={"space-between"}
            w={"100%"}
            gap={10}
            bgColor={"rgb(245,247,248)"}
            boxShadow={{ xl: " 1px 0px 10px 2px rgba(0,0,0,0.1)" }}
            p={8}
            borderRadius={"10px"}
          >
            <VStack spacing={6} align="start" w={["100%"]}>
              <Box fontSize={"1.5rem"} fontWeight={"700"}>
                Yoga Session Details
              </Box>

              <HStack fontSize="lg" gap={"1rem"}>
                <Box fontSize={"lg"} color={"orange"}>
                  <MdTimer />
                </Box>

                <HStack>
                  <strong>Duration:</strong>
                  <Box fontWeight={"500"} fontSize={"1rem"}>
                    {singleData.duration}
                  </Box>
                </HStack>
              </HStack>

              <HStack fontSize="lg" gap={"1rem"}>
                <Box fontSize={"lg"} color={"orange"}>
                  <FaLocationDot />
                </Box>
                <HStack>
                  <strong>Location:</strong>
                  <Box fontWeight={"500"} fontSize={"1rem"}>
                    {singleData.location}
                  </Box>
                </HStack>
              </HStack>

              <HStack fontSize="lg" gap={"1rem"}>
                <Box fontSize={"lg"} color={"orange"}>
                  <IoCalendar />
                </Box>
                <HStack>
                  <strong>Session Date:</strong>{" "}
                  <Box fontWeight={"500"} fontSize={"1rem"}>
                    {singleData.date}
                  </Box>
                </HStack>
              </HStack>

              <HStack fontSize="lg" gap={"1rem"}>
                <Box fontSize={"lg"} color={"orange"}>
                  <IoTimeSharp />
                </Box>
                <HStack>
                  <strong>Time:</strong>{" "}
                  <Box fontWeight={"500"} fontSize={"1rem"}>
                    {singleData.time}
                  </Box>
                </HStack>
              </HStack>
            </VStack>
          </Flex>
        </VStack>

        <VStack
          w={["100%", "100%", "100%", "100%", "50%"]}
          h={"auto"}
          alignItems={"flex-start"}
          gap={"2rem"}
          bg={"rgb(245,248,249)"}
          px={["3", "4", "8"]}
          py={["5", "8", "8"]}
          borderRadius={"10px"}
          boxShadow={{ xl: " 1px 0px 10px 2px rgba(0,0,0,0.1)" }}
        >
          <Box
            fontSize={["1.6rem", "2rem", "2.5rem", "3rem"]}
            fontWeight={"700"}
          >
            ENROLL NOW
          </Box>

          <form
            onSubmit={handleSubmit}
            style={{ width: "100%", height: "100%" }}
          >
            <VStack
              w={"100%"}
              h={"100%"}
              gap={["2rem", "2rem", "2rem", "2rem", "2.5rem"]}
            >
              <HStack
                w={"100%"}
                gap={["2rem", "1rem", "1.2rem"]}
                flexDirection={["column", "row"]}
              >
                <Input
                  size={"lg"}
                  border={errors.name ? "2px solid red" : "1px solid lightgrey"}
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  
                />
                <Input
                  size={"lg"}
                  border={errors.watsAppNumber ? "2px solid red" : "1px solid lightgrey"}
                  type="number"
                  placeholder="WhatsApp Number"
                  name="watsAppNumber"
                  value={formData.watsAppNumber}
                  onChange={handleChange}
                />
              </HStack>
              <HStack
                w={"100%"}
                gap={["2rem", "1rem", "1.2rem"]}
                flexDirection={["column", "row"]}
              >
                <Input
                  size={"lg"}
                  border={errors.email ? "2px solid red" : "1px solid lightgrey"}
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  size={"lg"}
                  border={errors.age ? "2px solid red" : "1px solid lightgrey"}
                  type="tel"
                  placeholder="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </HStack>
              <HStack
                w={"100%"}
                gap={["2rem", "1rem", "1.2rem"]}
                flexDirection={["column", "row"]}
              >
                <VStack alignItems={"flex-start"} w={"100%"}>
                  <Input
                    size={"lg"}
                    border={errors.collageOrCompany ? "2px solid red" : "1px solid lightgrey"}
                    type="text"
                    placeholder="College or Company"
                    name="collageOrCompany"
                    value={formData.collageOrCompany}
                    onChange={handleChange}
                  />
                </VStack>
                <VStack
                  alignItems={"flex-start"}
                  w={"100%"}
                  gap={"0"}
                  position={"relative"}
                >
                  <Input
                    size={"lg"}
                    
                    type="text"
                    placeholder="Branch of Year"
                    name="BranchOfYear"
                    value={formData.BranchOfYear}
                    onChange={handleChange}
                  />
                  <Box
                    position={"absolute"}
                    bottom={"-6"}
                    fontWeight={"500"}
                    fontSize={"0.9rem"}
                    left={"1"}
                    opacity={"0.8"}
                  >
                    (If your a student)
                  </Box>
                </VStack>
              </HStack>

              <HStack
                w={"100%"}
                gap={["2rem", "1rem", "1.2rem"]}
                flexDirection={["column", "row"]}
              >
                <Input
                  size={"lg"}
                  border={"1px solid black"}
                  type="number"
                  placeholder="Register Amount"
                  value={100}
                  disabled={true}
                />
              </HStack>

              <Box mt={"auto"} w={"100%"}>
                <Input
                  colorScheme="orange"
                  w={"100%"}
                  fontSize={["1rem"]}
                  px={["1rem"]}
                  py={["1.5rem"]}
                  type="submit"


                />
                 
              </Box>
            </VStack>
          </form>
        </VStack>
      </Flex>

      {/* Related Images */}
      <Box
        w={["100%", "100%", "90%", "90%", "95%"]}
        p={["1rem"]}
        maxW={"1500px"}
        mx={"auto"}
        my={["7rem"]}
      >
        <Heading
          size={{ base: "2xl", xl: "3xl" }}
          color={theme.colors.col.secondary}
          mb={"9"}
        >
          Related Images
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={5}
          bgColor={"rgb(245,247,248)"}
          p={"1rem"}
          borderRadius={"10px"}
        >
          {/* {img.slice(1).map((image, index) => (
          <GridItem
            key={index}
            w={"100%"}
            h={"100%"}
            overflow={"hidden"}
            position={"relative"}
          >
            <MotionImage
              src={image}
              w={"100%"}
              h={"100%"}
              alt={`Trip Image ${index + 1}`}
              borderRadius="md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </GridItem>
        ))} */}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default YogaSinglePage;
