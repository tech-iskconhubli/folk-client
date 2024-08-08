import React from "react";
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
  Divider,
  Input,
  Card,
  CardBody,
  CardFooter,
  IconButton,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendar } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa";
import { motion } from "framer-motion";
import { tripData } from "../SinglePages/TripsDate";
import { RiHeartLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { LuShare } from "react-icons/lu";
import { RiBookmarkLine } from "react-icons/ri";
import { GiPublicSpeaker } from "react-icons/gi";
import { FaHandHoldingHand } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { GiDrumKit } from "react-icons/gi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import theme from "../../theme";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const TripSinglePage = () => {
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
      mt={{base:'6rem',lg:'7rem'}}
      borderRadius={{ lg: "10px" }}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      height={["50vh", "50vh", "60vh", "80vh"]}
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
      my={["2rem", "3rem", "4rem", "5rem"]}
      px={["4", "7", "7", "7"]}
      w={["100%", "100%", "90%", "90%", "100%"]}
      boxSizing="border-box"
      mx={"auto"}
      gap={{base:'2rem',xl:'1.5rem'}}
      flexDirection={{ base: "column", xl: "row" }}
    >
      <VStack
        w={["100%", "100%", "100%", "100%",'55%','50%']}
        h={"auto"}
        alignItems={"flex-start"}
        gap={["3rem", "3rem", "2.5rem"]}
        justifyContent={'space-between'}
      >
        <VStack alignItems={"flex-start"} w={"100%"} gap={"1.5rem"}>
          <VStack alignItems={"flex-start"}>
            <Box
              fontSize={["2.5rem", "3rem", "3.5rem", "4rem", "4.5rem"]}
              lineHeight={{ lg: "5.5rem" }}
              fontWeight={"600"}
            >
              {tripName}
            </Box>
            <Box
              fontSize={["2rem", "2.5rem", "3rem", "3.5rem"]}
              color={theme.colors.col.secondary}
              fontWeight={"700"}
            >
              RS:{price}/-
            </Box>
          </VStack>
          <Divider border={"1px solid rgb(0,0,0,0.90)"} />

          <Box
            fontSize={["1rem", "1rem", "1.1rem", "1.2rem"]}
            lineHeight={"1.9rem"}
          >
            {description}
          </Box>
        </VStack>

        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent={"space-between"}
          w={"100%"}
          gap={10}
          bgColor={"rgb(245,247,248)"}
          boxShadow={{ xl: " 1px 0px 10px 2px rgba(0,0,0,0.1)" }}
          px={["4", "4", "8"]}
          py={["5", "8", "8"]}
          borderRadius={"10px"}
        >
          <VStack spacing={6} align="start" w={["100%"]}>
            <Box fontSize={"1.5rem"} fontWeight={"700"} color={theme.colors.col.secondary}>
              TRIP DETAIL
            </Box>

            <HStack fontSize="lg" gap={"1rem"}>
              <Box fontSize={"lg"} color={"orange"}>
                <FaLocationDot />
              </Box>

              <HStack alignItems={'center'}>
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
              <HStack alignItems={'center'}>
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
              <HStack alignItems={'center'}>
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
              <HStack alignItems={'center'}>
                <strong>To Date:</strong>{" "}
                <Box fontWeight={"500"} fontSize={"1rem"}>
                  {toDate}
                </Box>
              </HStack>
            </HStack>
          </VStack>

          <VStack w={["100%"]} spacing={6} alignItems={["flex-start"]}>
            <Box fontSize={"1.5rem"} fontWeight={"700"} color={theme.colors.col.secondary}>
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
        w={["100%", "100%", "100%", "100%",'45%','50%']}
        h={"auto"}
        alignItems={"flex-start"}
        gap={"1.5rem"}
        justifyContent={'space-between'}
      > 
     

      
       <VStack alignItems={'flex-start'} w={'100%'}  bg={"rgb(245,248,249)"}
        px={["4", "4", "8"]}
        py={["5", "8", "8"]}
        borderRadius={"10px"}
        boxShadow={{ xl: " 1px 0px 10px 2px rgba(0,0,0,0.1)" }} gap={['2rem','2rem','2rem','2.5rem','1rem']}>
        
        {/* Duration And Price */}
         <HStack w={'100%'} gap={'2rem'}>
            <VStack alignItems={'flex-start'}>
                <Box color={theme.colors.col.secondary} fontWeight={'bold'} fontSize={{base:'1.1rem',sm:'1.2rem'}}>
                   Duration
                </Box>
                <Box fontWeight={'bold'} fontSize={{base:'0.9rem',sm:'1rem'}} color={'rgb(0,0,0,0.6)'}>
                  5N/6D
                </Box>
            </VStack>
            <VStack alignItems={'flex-start'}>
            <Box color={theme.colors.col.secondary} fontWeight={'bold'} fontSize={{base:'1.1rem',sm:'1.2rem'}}>
                  Price
                </Box>
                <Box fontWeight={'bold'} color={'rgb(0,0,0,0.6)'} fontSize={{base:'0.9rem',sm:'1rem'}} >
                 2,94,999
                </Box>
            </VStack>
         </HStack>

         {/* Points */}
         <VStack alignItems={'flex-start'} w={'100%'} gap={['1rem']}>
             <HStack>
                <Box fontSize={{base:'1.4rem',sm:'1.5rem'}} color={theme.colors.col.secondary}>
                <TiTick />
                </Box>
                <Box fontSize={{base:'1rem',sm:'1.1rem'}} fontWeight={'600'} color={'rgb(0,0,0,0.6)'}>
                  Best Price Gauranteed
                </Box>
             </HStack>



             <HStack>
              <Box fontSize={{base:'1.4rem',sm:'1.5rem'}} color={theme.colors.col.secondary}>
                <TiTick />
                </Box>
                <Box fontSize={{base:'1rem',sm:'1.1rem'}} fontWeight={'600'} color={'rgb(0,0,0,0.6)'}>
                No Booking Amount
                </Box>
             </HStack>



             <HStack>
              <Box fontSize={{base:'1.4rem',sm:'1.5rem'}} color={theme.colors.col.secondary}>
                <TiTick />
                </Box>
                <Box fontSize={{base:'1rem',sm:'1.1rem'}} fontWeight={'600'} color={'rgb(0,0,0,0.6)'}>
                 No Hidden charges
                </Box>
             </HStack>
         </VStack>


         {/* Contact */}
         <HStack w={'100%'} gap={{base:'1rem',sm:'2rem'}}>
           {/* WhatsApp */}
           <HStack gap={{base:'0.3rem',sm:'0.5rem'}}>
             <Box fontSize={{base:'1.3rem',sm:'1.5rem'}} color={'green'}>
             <FaSquareWhatsapp />
             </Box>
             <Box fontSize={{base:'0.8rem',sm:'1.1rem'}} fontWeight={'600'} color={'rgb(0,0,0,0.6)'}>
              Discuss On WhatsApp
             </Box>
           </HStack>

           {/* Phone */}
           <HStack gap={{base:'0.3rem'}}>
           <Box fontSize={{base:'1.3rem'}} color={'green'}>
             <FaSquarePhone />
             </Box>
             <Box  fontSize={{base:'0.8rem',sm:'1.1rem'}} fontWeight={'600'} color={'rgb(0,0,0,0.6)'}>
              Call us
             </Box>
           </HStack>


         </HStack>

       </VStack>

        
        {/* Form Details */}
        <VStack alignItems={'flex-start'} w={'100%'}  bg={"rgb(245,248,249)"}
        px={["3", "4", "8"]}
        py={["5", "8", "8"]}
        borderRadius={"10px"}
        boxShadow={{ xl: " 1px 0px 10px 2px rgba(0,0,0,0.1)" }} gap={['2rem','2rem','2rem','2rem','3rem','1rem']}>

        <Box
          fontSize={["1.6rem", "2rem", "2.5rem", "3rem", "2.1rem"]}
          fontWeight={"700"}
          color={theme.colors.col.secondary}
        >
          ENROLL NOW
        </Box>

        <form style={{ width: "100%", height: "100%" }}>
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
            <HStack
              w={"100%"}
              gap={["2rem", "1rem", "1.2rem"]}
              flexDirection={["column", "row"]}
            >
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
            <HStack
              w={"100%"}
              gap={["2rem", "1rem", "1.2rem"]}
              flexDirection={["column", "row"]}
            >
              <VStack alignItems={"flex-start"} w={"100%"}>
                <Input
                  size={"lg"}
                  border={"1px solid black"}
                  type="text"
                  placeholder="College or Company"
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
                  border={"1px solid black"}
                  type="number"
                  placeholder="Branch of Year"
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
              />
            </HStack>

            <Box mt={"auto"} w={"100%"}>
              <Button
                colorScheme="orange"
                w={"100%"}
                fontSize={["1rem"]}
                px={["1rem"]}
                py={["1.5rem"]}
              >
                REGSITER NOW
              </Button>
            </Box>
          </VStack>
        </form>
        </VStack>




      </VStack>
    </Flex>


     {/* Icons */}
     <Box
      w={["100%", "100%", "90%", "90%", "95%"]}
      p={["1rem"]}
      maxW={"1500px"}
      mx={"auto"}
      my={["7rem"]}
    >
      <VStack gap={"5rem"}>
        <Box
          fontSize={["1.7rem",'2.5rem','2.6rem','2.8rem','2.5rem']}
          lineHeight={['3.2rem','3.3rem']}
          textAlign={"center"}
          fontWeight={"bold"}
          color={theme.colors.col.secondary}
        >
          Experience the spiritual dham yatra with
        </Box>

        <SimpleGrid
          columns={[1, 1, 1, 1,4]}
          gap={["5rem", "5rem", "5rem", "5rem", "5rem"]}
          w={"100%"}
        >
          {/* Icon One */}
         <VStack w={['90%','70%','65%','50%','100%']}  mx={'auto'}>
            <IconButton
              boxSize={"80px"}
              colorScheme="orange"
              variant={"outline"}
              borderRadius={"50%"}
              fontSize={"2.5rem"}
              icon={<GiPublicSpeaker />}
            />
            <VStack w={"100%"}>
              <Box
                fontSize={"1.3em"}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                Sthala Purana Narrations
              </Box>
              <Text
                textAlign={"center"}
                fontSize={"1rem"}
                color={"rgb(0,0,0,0.5)"}
                fontWeight={"bold"}
              >
                Learn the spiritual history of the dham in your local language
              </Text>
            </VStack>
          </VStack>

          {/* Icon Two */}
         <VStack w={['90%','70%','65%','50%','100%']}  mx={'auto'}>
            <IconButton
              boxSize={"80px"}
              size={"lg"}
              colorScheme="orange"
              variant={"outline"}
              borderRadius={"50%"}
              fontSize={"2.5rem"}
              icon={<FaHandHoldingHand />}
            />
            <Box fontSize={"1.3em"} textAlign={"center"} fontWeight={"bold"}>
              Sr.Citizen Friendly
            </Box>
            <Text
              textAlign={"center"}
              fontSize={"1rem"}
              color={"rgb(0,0,0,0.5)"}
              fontWeight={"bold"}
            >
              Because you entrust your parents with us on trust,we take
              special care
            </Text>
          </VStack>

          {/* Icon Three */}
         <VStack w={['90%','70%','65%','50%','100%']}  mx={'auto'}>
            <IconButton
              boxSize={"80px"}
              size={"lg"}
              colorScheme="orange"
              variant={"outline"}
              borderRadius={"50%"}
              fontSize={"2.5rem"}
              icon={<ImSpoonKnife />}
            />
            <Box fontSize={"1.3em"} textAlign={"center"} fontWeight={"bold"}>
              Satvic Food
            </Box>
            <Text
              textAlign={"center"}
              fontSize={"1rem"}
              color={"rgb(0,0,0,0.5)"}
              fontWeight={"bold"}
            >
              Delicious food, offered to the Lord is served.
            </Text>
          </VStack>

          {/* Icon Four */}
         <VStack w={['90%','70%','65%','50%','100%']}  mx={'auto'}>
            <IconButton
              boxSize={"80px"}
              size={"lg"}
              colorScheme="orange"
              variant={"outline"}
              borderRadius={"50%"}
              fontSize={"2.5rem"}
              icon={<FaCrown />}
            />
            <Box fontSize={"1.3em"} textAlign={"center"} fontWeight={"bold"}>
              Premium Stay
            </Box>
            <Text
              textAlign={"center"}
              fontSize={"1rem"}
              color={"rgb(0,0,0,0.5)"}
              fontWeight={"bold"}
            >
              We understand you,and hence,make you stay in premium categories
              of choices
            </Text>
          </VStack>
        </SimpleGrid>






        
        <SimpleGrid
          columns={[1, 1, 1, 1,3]}
          gap={["5rem", "5rem", "5rem", "5rem", "5rem"]}
          w={"100%"}
        >
           {/* Icon Five */}
           <VStack w={['90%','70%','65%','50%','100%']}  mx={'auto'}>
                 <IconButton
                   boxSize={'80px'}
                   size={'lg'}
                   colorScheme="orange"
                   variant={'outline'}
                   borderRadius={'50%'}
                   fontSize={'2.5rem'}
                   icon={<GiDrumKit />}
                  />
                      <Box fontSize={'1.3em'} textAlign={'center'} fontWeight={'bold'}>
                      Bhajans and Kirtans
                     </Box>
                     <Text textAlign={'center'} fontSize={'1rem'} color={'rgb(0,0,0,0.5)'} fontWeight={'bold'}>
                       Whenever we visit a temple,we do lots of kirtans and katha
                     </Text>
              </VStack>


              {/* Icon Six */}
              <VStack w={['90%','70%','65%','50%','100%']}  mx={'auto'}>
                 <IconButton
                   boxSize={'80px'}
                   size={'lg'}
                   colorScheme="orange"
                   variant={'outline'}
                   borderRadius={'50%'}
                   fontSize={'2.5rem'}
                   icon={<FaMicrophoneAlt />}
                  />
                      <Box fontSize={'1.3em'} textAlign={'center'} fontWeight={'bold'}>
                       Yatra Katha
                     </Box>
                    <Text textAlign={'center'} fontSize={'1rem'} color={'rgb(0,0,0,0.5)'} fontWeight={'bold'}>
                      Yatra Kath Darshans are meant to be heard,not seen. We discuss temple's spiritual meaning.
                     </Text>
              </VStack>


              {/* Icon Seven */}
              <VStack w={['90%','70%','65%','50%','100%']}  mx={'auto'}>
                 <IconButton
                   boxSize={'80px'}
                   size={'lg'}
                   colorScheme="orange"
                   variant={'outline'}
                   borderRadius={'50%'}
                   fontSize={'2.5rem'}
                   icon={<FaLeaf />}
                  />
                   <Box fontSize={'1.3em'} textAlign={'center'} fontWeight={'bold'}>
                      Relaxed Itinerary
                     </Box>
                    <Text textAlign={'center'} fontSize={'1rem'} color={'rgb(0,0,0,0.5)'} fontWeight={'bold'}>
                      Itineraries are designed to give relaxing and spiritual experience
                     </Text>
              </VStack>
        </SimpleGrid>
      </VStack>
    </Box>


    {/* Additional Fields (Accordion) */}
    <Box
      w={["100%", "100%", "90%", "90%", "95%"]}
      maxW={"1500px"}
      p={["1rem"]}
      mx={"auto"}
      mt={["2rem", "2rem", "2rem", "7rem"]}
    >
      <Heading size={{ base: "2xl", xl: "3xl" }} color={theme.colors.col.secondary} mb={"9"}>
        Tour Plan
      </Heading>
      <Accordion allowMultiple>
        {additionalFields.map((field, index) => (
          <AccordionItem py={{base:'0.5rem',md:'1rem'}} key={index}>
            <h2>
              <AccordionButton _hover={"none"}>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize={["1rem", "1rem", "1rem", "1.2rem"]}
                  fontWeight={"700"}
                  color={theme.colors.col.secondary}
                >
                  {field.title}
                </Box>
                <Box fontSize={"1.1rem"}>
                  <AccordionIcon color={"orange"} />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel
              py={5}
              px={8}
              fontWeight={"500"}
              fontSize={"1.1rem"}
            >
              {field.description}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>

    {/* Related Images */}
    <Box
      w={["100%", "100%", "90%", "90%", "95%"]}
      p={["1rem"]}
      maxW={"1500px"}
      mx={"auto"}
      my={["7rem"]}
    >
      <Heading size={{ base: "2xl", xl: "3xl" }} color={theme.colors.col.secondary} mb={"9"}>
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

    {/* Relate Videos */}
    <Box
      w={["100%", "100%", "95%", "95%", "95%"]}
      p={["0rem", "0rem", "0", "0", "1rem"]}
      maxW={"1500px"}
      mx={"auto"}
      my={["7rem"]}
    >
      <Heading
        size={{ base: "2xl", xl: "3xl" }}
        color={theme.colors.col.secondary}
        mb={"9"}
        px={"1rem"}
      >
        Related Videos
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={[5, 5, 5]}
        p={"1rem"}
        borderRadius={"10px"}
      >
        <Card p={5} bgColor={"rgb(245,247,248)"}>
          <Box
            w={"100%"}
            h={["400px", "450px", "400px", "350px", "400px"]}
            borderRadius={"5px"}
            overflow={"hidden"}
          >
            <Image
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              src="https://i.pinimg.com/564x/66/64/98/666498d43107aa1628224c8f6278120c.jpg"
            />
          </Box>

          <CardBody w={"100%"} px={"0"}>
            <VStack w={"100%"}>
              <HStack
                justifyContent={"space-between"}
                w={"100%"}
                alignItems={"flex-start"}
              >
                <VStack alignContent={"flex-start"} p={0}>
                  <HStack
                    gap={"1.1rem"}
                    alignItems={"flex-start"}
                    justifyContent={"flex-start"}
                  >
                    <Box fontSize={"1.7rem"} cursor={"pointer"}>
                      <RiHeartLine />
                    </Box>
                    <Box fontSize={"1.7rem"} cursor={"pointer"}>
                      <FaRegComment />
                    </Box>
                    <Box fontSize={"1.7rem"} cursor={"pointer"}>
                      <LuShare />
                    </Box>
                  </HStack>
                  <Box fontWeight={"700"}>10,00000 likes</Box>
                </VStack>

                <Box fontSize={"1.7rem"} cursor={"pointer"}>
                  <RiBookmarkLine />
                </Box>
              </HStack>
            </VStack>
            <Divider mt={4} border={"1px solid rgb(0,0,0,0.3)"} />
          </CardBody>

          <CardFooter p={0}>
            <Box fontWeight={"500"} color={theme.colors.col.secondary} fontSize={"1.5rem"}>
              @hare_krishna_
            </Box>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>



  </Container>
  );
};

export default TripSinglePage;
