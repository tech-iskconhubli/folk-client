import React from "react";
import {
  Box,
  Heading,
  Image,
  VStack,
  SimpleGrid,
  GridItem,
  Container,
  List,
  ListItem,
  Flex,
  useBreakpointValue,
  HStack,
  Button,
  Divider,
  Input,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendar } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa";
import { motion } from "framer-motion";
import { tripData } from "../SinglePages/TripsDate";
import theme from "../../theme";
const MotionBox = motion(Box);
const MotionImage = motion(Image);

const GallerySinglePage = () => {

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
    <Container maxW={containerWidth} margin="auto" p={["0", "0", "0", "2"]}>
    {/* Background Image with Heading */}
    <MotionBox
      bgImage={`url(${img[0]})`}
      w={"100%"}
      borderRadius={{ lg: "10px" }}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      height={["50vh", "50vh", "60vh", "80vh",'85vh']}
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      position={"relative"}
      mt={{base:'6rem',lg:'7rem'}}
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
          {tripName}
        </Heading>
      </VStack>
    </MotionBox>

    {/* Trip Details */}
    <Flex
      my={["2rem",'3rem','4rem','5rem']}
      px={['4','7','7','7','5']}
      w={["100%", "100%", "90%", "90%", "99%",'98%']}
      boxSizing="border-box"
      mx={"auto"}
      gap={['2rem']}
      flexDirection={{base:'column' ,xl:'row'}}
    >
      <VStack w={['100%','100%','100%','100%','55%']} h={'auto'} alignItems={"flex-start"} gap={['3rem','3rem','2.5rem']}>

        <VStack alignItems={"flex-start"} w={"100%"} gap={"1.5rem"}>
          <VStack alignItems={"flex-start"}>
            <Box fontSize={['2.5rem','3rem','3.5rem','4rem','4rem','4.5rem']} lineHeight={{lg:'5rem'}} fontWeight={"600"}>
              {tripName}
            </Box>
            <Box fontSize={['2rem','2.5rem','3rem','3.5rem']} color={theme.colors.col.secondary} fontWeight={"700"}>
            RS:{price}/-
            </Box>
          </VStack>
          <Divider border={"1px solid rgb(0,0,0,0.90)"} />

          <Box fontSize={['1rem','1rem','1.1rem','1.2rem']} lineHeight={"1.9rem"}>
            {description}
          </Box>
        </VStack>

        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          w={"100%"}
          gap={10}
          bgColor={"rgb(245,247,248)"}
          boxShadow={{xl:" 1px 0px 10px 2px rgba(0,0,0,0.1)"}}
          p={8}
          borderRadius={"10px"}
        >
          <VStack spacing={6} align="start" w={['100%']}>
            <Box fontSize={"1.5rem"} fontWeight={"700"}>
              TRIP DETAIL
            </Box>

            <HStack fontSize="lg" gap={"1rem"}>
              <Box fontSize={"lg"} color={"orange"}>
                <FaLocationDot />
              </Box>

              <HStack>
                <strong>From:</strong>
                <Box fontWeight={"500"} fontSize={"1rem"}>
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
                <Box fontWeight={"500"} fontSize={"1rem"}>
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
                <Box fontWeight={"500"} fontSize={"1rem"}>
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
                <Box fontWeight={"500"} fontSize={"1rem"}>
                  {toDate}
                </Box>
              </HStack>
            </HStack>
          </VStack>

          <VStack w={['100%']} spacing={6} alignItems={["flex-start"]}>
            <Box fontSize={"1.5rem"} fontWeight={"700"}>
              PLACE OF VISIT
            </Box>

            <List spacing={5}>
              {placesOfVisit.map((place, index) => (
                <ListItem key={index}>
                  <HStack gap={"0.8rem"}>
                    <Box fontSize={"lg"} color={"orange"}>
                      <FaMapPin />
                    </Box>
                    <Box fontSize={["1rem"]} fontWeight={"500"}>
                      {place}
                    </Box>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </VStack>
        </Flex>
      </VStack>

     
        <VStack
          w={['100%','100%','100%','100%','50%']}
          h={"auto"}
          alignItems={"flex-start"}
          gap={"2rem"}
          bg={"rgb(245,248,249)"}
          px={['3','4','8']}
          py={['5','8','8']}
          borderRadius={"10px"}
          boxShadow={{xl:" 1px 0px 10px 2px rgba(0,0,0,0.1)"}}
        >
          <Box fontSize={['1.6rem','2rem','2.5rem','3rem']} fontWeight={"700"}>
          REGISTER TRIP
          </Box>

          <form style={{ width: "100%", height: "100%" }}>
            <VStack w={"100%"} h={"100%"} gap={['2rem','2rem','2rem','2rem','2.5rem']}>
              <HStack w={"100%"} gap={['2rem','1rem','1.2rem']} flexDirection={['column','row']}>
                <Input
                  size={"lg"}
                  border={"1px solid black"}
                  type="text"
                  placeholder="Full Name"
                />
                <Input
                  size={"lg"}
                  border={"1px solid black"}
                  type="number"
                  placeholder="WhatsApp Number"
                />
              </HStack>
              <HStack w={"100%"} gap={['2rem','1rem','1.2rem']} flexDirection={['column','row']}>
                <Input
                  size={"lg"}
                  border={"1px solid black"}
                  type="email"
                  placeholder="Email"
                />
                <Input
                  size={"lg"}
                  border={"1px solid black"}
                  type="tel"
                  placeholder="age"
                />
              </HStack>
              <HStack w={"100%"} gap={['2rem','1rem','1.2rem']} flexDirection={['column','row']}>
                <VStack alignItems={'flex-start'} w={'100%'}>
                <Input
                  size={"lg"}
                  border={"1px solid black"}
                  type="text"
                  placeholder="College or Company"
                />
                </VStack>
                <VStack alignItems={'flex-start'} w={'100%'} gap={'0'} position={'relative'}>
                <Input
                  size={"lg"}
                  border={"1px solid black"}
                  type="number"
                  placeholder="Branch of Year"
                />
                 <Box position={'absolute'} bottom={'-6'} fontWeight={'500'} fontSize={'0.9rem'} left={'1'} opacity={'0.8'}>(If your a student)</Box>
                </VStack>
              
              </HStack>

              <HStack w={"100%"} gap={['2rem','1rem','1.2rem']} flexDirection={['column','row']}>
              <Input
                  size={"lg"}
                  border={"1px solid black"}
                  type="number"
                  placeholder="Register Amount"
                />
                </HStack>

              <Box mt={"auto"} w={"100%"}>
                <Button
                  colorScheme="orange"
                  w={"100%"}
                  fontSize={['1rem']}
                  px={['1rem']}
                  py={['1.5rem']}
                >
                  REGSITER NOW
                </Button>
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
        {img.slice(1).map((image, index) => (
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
        ))}
      </SimpleGrid>
    </Box>
  </Container>
  )
}

export default GallerySinglePage
