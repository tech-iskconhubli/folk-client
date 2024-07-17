import React from "react";
import theme from "../theme";
import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  GridItem,
  Container,
  List,
  ListItem,
  Flex,
  useBreakpointValue,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendar } from "react-icons/io5";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaMapSigns } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { motion } from "framer-motion";
import { tripData } from "./TripForm";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const TripDetailPage = () => {
  const {
    tripName,
    from,
    to,
    fromDate,
    toDate,
    img,
    description,
    price,
    placesOfVisit,
    additionalFields,
  } = tripData;
  const containerWidth = useBreakpointValue({ base: "100%", md: "100%" });

  return (
    <Container
      fontFamily={theme.fonts.body}
      maxW={containerWidth}
      margin="auto"
      p={["0", "0", "0", "2"]}
    >
      {/* Background Image with Heading */}
      <MotionBox
        bgImage={`url(${img[0]})`}
        w={"100%"}
        borderRadius={{ lg: "10px" }}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height={["45vh", "50vh", "60vh", "65vh"]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        position={"relative"}
      >
        <Box
          bg="rgba(0, 0, 0, 0.7)"
          p={6}
          borderRadius={{ lg: "10px" }}
          overflow={"hidden"}
          position={"absolute"}
          width={"100%"}
          h={"100%"}
          inset={0}
        ></Box>
        <VStack gap={["1rem"]}>
          <Heading position={"relative"} zIndex={"99"} fontSize={["lg", "lg", "70px", "80px", "80px"]}>
            {tripName}
          </Heading>

          <Box display={{ sm: "block", lg: "none" }}>
            <Button colorScheme="orange" px={"2rem"} py={"1.5rem"}>
              Register Now
            </Button>
          </Box>
        </VStack>
      </MotionBox>

      {/* Trip Details */}
      <Box
        my={["2rem"]}
        w={["100%", "100%", "90%", "95%"]}
        boxSizing="border-box"
        p={["1rem"]}
        maxW={"1500px"}
        mx={"auto"}
        zIndex={"9"}
        position={["", "", "", "absolute", "absolute"]}
        top={{ lg: "14%", xl: "14%" }}
        left={["", "", "", "", "5%"]}
      >
        <Heading display={{ sm: "block", lg: "none" }} mb={{ sm: "8", lg: "" }} size="xl" color={"orange"}>
          {tripName}
        </Heading>

        <VStack
          w={"100%"}
          bgColor={"rgb(245,247,248)"}
          borderRadius={"10px"}
          p={8}
          gap={"2.5rem"}
          alignItems={"flex-start"}
        >
          <Heading fontFamily={theme.fonts.body} fontWeight={400} display={{ sm: "none", lg: "block" }} fontSize={"50px"} color={"orange"}>
            {tripName}
          </Heading>
          <Flex
            direction={{ base: "column", lg: "row" }}
            justifyContent={"space-between"}
            gap={10}
          >
            <VStack spacing={6} align="start" flex="1">
              <HStack fontSize="lg" gap={"1rem"}>
                <Box fontSize={"lg"} color={"orange"}>
                  <FaLocationDot />
                </Box>

                <HStack>
                  <strong>From:</strong>
                  <Box fontFamily={theme.fonts.body} fontWeight={"400"} fontSize={"1rem"}>
                    {from}
                  </Box>
                </HStack>
              </HStack>

              <HStack fontSize="lg" gap={"1rem"}>
                <Box fontSize={"lg"} color={"orange"}>
                  <FaLocationDot />
                </Box>
                <HStack>
                  <strong>To:</strong>{" "}
                  <Box fontFamily={theme.fonts.body} fontWeight={"400"} fontSize={"1rem"}>
                    {to}
                  </Box>
                </HStack>
              </HStack>

              <HStack fontSize="lg" gap={"1rem"}>
                <Box fontSize={"lg"} color={"orange"}>
                  <IoCalendar />
                </Box>
                <HStack>
                  <strong>From Date:</strong>{" "}
                  <Box fontFamily={theme.fonts.body} fontWeight={"400"} fontSize={"1rem"}>
                    {fromDate}
                  </Box>
                </HStack>
              </HStack>

              <HStack fontSize="lg" gap={"1rem"}>
                <Box fontSize={"lg"} color={"orange"}>
                  <IoCalendar />
                </Box>
                <HStack>
                  <strong>To Date:</strong>{" "}
                  <Box fontFamily={theme.fonts.body} fontWeight={"400"} fontSize={"1rem"}>
                    {toDate}
                  </Box>
                </HStack>
              </HStack>

              <HStack fontSize="lg" gap={"1rem"}>
                <Box fontSize={"lg"} color={"orange"}>
                  <FaMoneyCheckDollar />
                </Box>
                <HStack>
                  <strong>Price:</strong>{" "}
                  <Box fontFamily={theme.fonts.body} fontWeight={"400"} fontSize={"1rem"}>
                    ${price}
                  </Box>
                </HStack>
              </HStack>

              <HStack fontSize="lg" gap={"1rem"} alignItems={"flex-start"}>
                <Box fontSize={"lg"} color={"orange"} mt={1}>
                  <BsInfoCircleFill />
                </Box>
                <HStack alignItems={"flex-start"} flexDirection={["column"]}>
                  <strong>Description:</strong>{" "}
                  <Box fontFamily={theme.fonts.body} fontWeight={"400"} fontSize={"1rem"}>
                    {description}
                  </Box>
                </HStack>
              </HStack>
            </VStack>

            <Box
              flex="1"
              display={"flex"}
              flexDirection={"column"}
              alignItems={["flex-start", "flex-start", "flex-start", "center"]}
            >
              <HStack fontSize="lg" mb={4} gap={["0.8rem"]}>
                <Box fontSize={"lg"} color={"orange"}>
                  <FaMapSigns />
                </Box>
                <strong>Places of Visit:</strong>
              </HStack>
              <List spacing={5} pl={4}>
                {placesOfVisit.map((place, index) => (
                  <ListItem key={index}>
                    <HStack gap={["0.8rem"]}>
                      <Box fontSize={"lg"} color={"orange"}>
                        <FaMapPin />
                      </Box>
                      <Box fontSize={["1rem"]} fontFamily={theme.fonts.body} fontWeight={"400"}>
                        {place}
                      </Box>
                    </HStack>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Flex>

          <Box display={{ sm: "none", lg: "block" }}>
            <Button colorScheme="orange" px={"2rem"} py={"1.5rem"}>
              Register Now
            </Button>
          </Box>
        </VStack>
      </Box>

      {/* Additional Fields (Accordion) */}
      <Box w={["100%", "100%", "90%"]} p={["1rem"]} maxW={"1500px"} mx={"auto"} mt={["2rem", "2rem", "2rem", "35rem"]}>
        <Heading size="xl" color={"orange"} mb={"8"}>
          Tour Plan
        </Heading>
        <Accordion allowMultiple>
          {additionalFields.map((field, index) => (
            <AccordionItem
              mt={["1rem", "1rem", "1rem", "1.5rem"]}
              p={["0.5rem", "0.5rem", "0.5rem", "1rem"]}
              borderRadius={"10px"}
              bgColor={"rgb(245,247,248)"}
              key={index}
            >
              <h2>
                <AccordionButton _hover={"none"}>
                  <Box flex="1" textAlign="left" fontSize={["1rem", "1rem", "1rem", "1.1rem"]} fontWeight={"600"}>
                    {field.title}
                  </Box>
                  <Box fontSize={"1.1rem"}>
                    <AccordionIcon color={"orange"} />
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel py={3} px={6} fontSize={"0.9rem"} fontWeight={"400"}>
                {field.description}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>

      {/* Related Images */}
      <Box w={["100%", "100%", "90%"]} p={["1rem"]} maxW={"1500px"} mx={"auto"} my={["2rem"]}>
        <Heading size="xl" color={"orange"} mb={"8"}>
          Related Images
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} bgColor={"rgb(245,247,248)"} p={"1rem"} borderRadius={"10px"}>
          {img.slice(1).map((image, index) => (
            <GridItem key={index} w={"100%"} h={"100%"} overflow={"hidden"} position={"relative"}>
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
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default TripDetailPage;
