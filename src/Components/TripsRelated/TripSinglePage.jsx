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
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import theme from "../../theme";

import React, {  useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import theme from "../../theme";
import { singleData as Data } from "../SinglePages/SingleData";
import { IoClose } from "react-icons/io5";
import { FaHandPointRight } from "react-icons/fa";
import { postTripsFormData, singleAdminTripsFormData } from "../../Redux/app/action";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

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

    title,
    description,
    time,
    duration,
    location,
    img,
  } = Data;



  const init = {
    name: "",
    watsAppNumber: "",
    email: "",
    age: "",
    collageOrCompany: "",
    BranchOfYear: "",
    eventId:""
  };


  const [singleData,setSingleData] = useState({})
  const [formData, setFormData] = useState(init);
  const [errors, setErrors] = useState(init);

  const { singlePage } = useParams();




 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleAdminTripsFormData(singlePage)).then((res) => {
      console.log("res",res)
      setSingleData(res?.payload?.data);
      setFormData({
        eventId:res.payload.data?._id
      })
    });
  }, []);

  console.log("single data",singleData)



 
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
    console.log("clicked")

    if (Object.keys(newErrors)?.length ===0) {
      dispatch(postTripsFormData(formData)).then((res) => {
        console.log("res", res);
      });    
    }
  };


  const dt = new Date(singleData?.fromDate);
  const dayIndex = dt.getDay();
  const monthIndex = dt.getMonth();
  const dateIndex = dt.getDate();

  const day = daysOfWeek[dayIndex] || "";
  const month = months[monthIndex] || "";


  console.log("singdata", singleData)
  
  console.log(singleData?.img?.map(item=>item))




  return (
    <Container maxW={containerWidth} margin="auto" p={["0", "0", "0", "2"]}>
      {/* Background Image with Heading */}
      <MotionBox
        bgImage={`url(${img[0]})`}
        mt={["6rem", "6rem", "6rem", "7rem"]}
        w={"100%"}
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
        gap={{ base: "2rem", xl: "1.5rem" }}
        flexDirection={{ base: "column", xl: "row" }}
      >
        <VStack
          w={["100%", "100%", "100%", "100%", "55%", "50%"]}
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


        {/* close button */}
        <Box onClick={handleClose} bgColor={'#2C3133'} color={'white'} position={'absolute'} top={{base:'1rem',lg:'2rem'}} right={{base:'1rem',lg:'2rem'}} p={2} fontSize={'1.5rem'} borderRadius={'50%'} overflow={'hidden'} cursor={'pointer'}>
        <IoClose />
        </Box>
       

       {/* Form */}
        <Box w={['90%']} maxW={'400px'}>
          <form style={{ width: "100%"}} onSubmit={handleSubmit}>
            <VStack
              w={"100%"}
              h={"100%"}
              gap={['2rem']}
              alignItems={'flex-start'}
              color={'white'}
            >
              <Box fontSize={'1.5rem'} fontWeight={'600'}>
                 Your Info
              </Box>
            <Stack w={'100%'} alignItems={'flex-start'} gap={'0.5rem'}>

            <FormLabel>Name *</FormLabel>
            <Input border={errors.name ? "2px solid red" : "1px solid lightgrey"} name="name" value={formData.name} onChange={handleChange} type="text"  placeholder="Your Name" variant={'filled'} _placeholder={{color:'#6E7272',fontWeight:'600'}} bgColor={'#2C3133'} _hover={{bgColor:'#2C3133'}} focusBorderColor="white" />


            <FormLabel>Email *</FormLabel>
            <Input border={errors.email ? "2px solid red" : "1px solid lightgrey"} name="email" value={formData.email} onChange={handleChange} type="email" _placeholder={{color:'#6E7272',fontWeight:'600'}} placeholder="you@email.com" variant={'filled'} bgColor={'#2C3133'} _hover={{bgColor:'#2C3133'}} focusBorderColor="white"/>


            <FormLabel>Phone Number *</FormLabel>
            <Input border={errors.watsAppNumber ? "2px solid red" : "1px solid lightgrey"} name="watsAppNumber" value={formData.watsAppNumber} onChange={handleChange} type="number" placeholder="+919876543210" _placeholder={{color:'#6E7272',fontWeight:'600'}} variant={'filled'} bgColor={'#2C3133'} _hover={{bgColor:'#2C3133'}} focusBorderColor="white"/>

            <FormLabel>Age *</FormLabel>
            <Input border={errors.age ? "2px solid red" : "1px solid lightgrey"} name="age" value={formData.age} onChange={handleChange} type="number" placeholder="+919876543210" _placeholder={{color:'#6E7272',fontWeight:'600'}} variant={'filled'} bgColor={'#2C3133'} _hover={{bgColor:'#2C3133'}} focusBorderColor="white"/>



            <FormLabel>College/Company *</FormLabel>
            <Input border={errors.collageOrCompany ? "2px solid red" : "1px solid lightgrey"} name="collageOrCompany" value={formData.collageOrCompany} onChange={handleChange} type="text"  variant={'filled'} bgColor={'#2C3133'} _hover={{bgColor:'#2C3133'}} focusBorderColor="white"/>


            <FormLabel>Course(Only for students)</FormLabel>
            <Input  name="BranchOfYear" value={formData.BranchOfYear} onChange={handleChange} type="text"  variant={'filled'} bgColor={'#2C3133'} _hover={{bgColor:'#2C3133'}} focusBorderColor="white"/>


            <FormLabel>Amount *</FormLabel>
            <Input disabled="true" value={100} type="number"  variant={'filled'} bgColor={'#2C3133'} _hover={{bgColor:'#2C3133'}} focusBorderColor="white"/>

            </Stack>
             <Box w={'100%'}>
               <Input value={"register"} type="submit" w={'100%'} bgColor={'white'} color={"black"} size={'md'}/>
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
            p={8}
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

                <HStack>
                  <strong>From:</strong>
                  <Box fontWeight={"500"} fontSize={"1rem"}>
                    {from}
                  </Box>
                </HStack>
              </HStack>

        {/* Image */}
        
        <Box w={['90%','90%','auto']} h={['400px','500px','550px']}>
          
            
              <Image w={'100%'} h={'100%'} src={img} objectFit={'cover'} />
          
          
        </Box>


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


       {/* form container */}
        <VStack
          w={["100%", "100%", "100%", "100%", "45%", "50%"]}
          h={"auto"}
          alignItems={"flex-start"}
          gap={"1.5rem"}
          justifyContent={'space-between'}
        >
          <VStack
            w={"100%"}
            alignItems={"flex-start"}
            gap={"2rem"}
            boxShadow={{ xl: " 1px 0px 10px 2px rgba(0,0,0,0.1)" }}
            borderRadius={"10px"}
            bg={"rgb(245,248,249)"}
            px={["3", "4", "8"]}
            py={["5", "8", "8"]}
          >
            <HStack w={"100%"} gap={"2.5rem"}>
              {/* Duration */}
              <VStack alignItems={'flex-start'}>
                <Box
                  fontSize={["1.2rem"]}
                  fontWeight={"bold"}
                  color={theme.colors.col.secondary}
                >
                  Duration
                </Box>
                <Box
                  fontSize={["1.1rem"]}
                  fontWeight={"bold"}
                  color={"rgb(0,0,0,0.6)"}
                >
                  5N/6D
                </Box>
              </VStack>

              {/* Price */}
              <VStack alignItems={'flex-start'}>
                <Box
                  fontSize={["1.2rem"]}
                  fontWeight={"bold"}
                  color={theme.colors.col.secondary}
                >
                  Price
                </Box>
                <Box
                  fontSize={["1.1rem"]}
                  fontWeight={"bold"}
                  color={"rgb(0,0,0,0.6)"}
                >
                  ₹2,94,999
                </Box>
              </VStack>
            </HStack>

            <VStack w={"100%"} alignItems={"flex-start"}>
              <HStack>
                <Box fontSize={["1.5rem"]} color={theme.colors.col.secondary}>
                  <TiTick />
                </Box>
                <Box
                  fontSize={["1.2rem"]}
                  fontWeight={"600"}
                  color={"rgb(0,0,0,0.6)"}
                >
                  Best Price Gauranteed
                </Box>
              </HStack>

              <HStack>
                <Box fontSize={["1.5rem"]} color={theme.colors.col.secondary}>
                  <TiTick />
                </Box>
                <Box
                  fontSize={["1.2rem"]}
                  fontWeight={"600"}
                  color={"rgb(0,0,0,0.6)"}
                >
                  No Booking Amount
                </Box>
              </HStack>


              <HStack>
                <Box fontSize={["1.5rem"]} color={theme.colors.col.secondary}>
                  <TiTick />
                </Box>
                <Box
                  fontSize={["1.2rem"]}
                  fontWeight={"600"}
                  color={"rgb(0,0,0,0.6)"}
                >
                  No Hidden Charges
                </Box>
              </HStack>
            </VStack>

            <HStack gap={["1.5rem",'2rem']}>
              {/* Whats app */}

              <HStack>
                <Box fontSize={["1.4rem",'1.5rem']} color={"green"}>
                  <FaWhatsappSquare />
                </Box>
                <Box
                  fontSize={["0.9rem",'1.1rem']}
                  fontWeight={"600"}
                  color={"rgb(0,0,0,0.6)"}
                >
                  Discuss On WhatsApp
                </Box>
              </HStack>

              {/* Phone */}
              <HStack>
                <Box fontSize={["1.4rem",'1.5rem']} color={"green"}>
                  <FaPhoneSquareAlt />
                </Box>
                <Box
                  fontSize={["0.9rem",'1.1rem']}
                  fontWeight={"600"}
                  color={"rgb(0,0,0,0.6)"}
                >
                  Call us
                </Box>
              </HStack>
            </HStack>

            <VStack alignItems={'flex-start'}>
              {singleData?.placesOfVisit?.map((item,index)=>(
                   <HStack key={index}>
                   <Box color={theme.colors.col.secondary}>
                   <FaHandPointRight />
                   </Box>
                    <Box fontWeight={500}>
                      {item}
                    </Box>
                </HStack>
              ))}
            </VStack>


          </VStack>

          <VStack
           w={'100%'}
            boxShadow={{ xl: " 1px 0px 10px 2px rgba(0,0,0,0.1)" }}
            borderRadius={"10px"}
            bg={"rgb(245,248,249)"}
            px={["3", "4", "8"]}
            py={["5", "8", "8"]}
            alignItems={'flex-start'}
            gap={"1rem"}
          >
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
                gap={["2rem", "2rem", "2rem", "2.5rem", "2.5rem"]}
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

                     {month?.length > 4 ? month.substring(0,3) : month}
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

       {/* Icons related */}
       <Box
        w={["100%", "100%", "90%", "90%", "95%"]}
        p={["1rem"]}
        maxW={"1500px"}
        mx={"auto"}
        my={["7rem"]}
      >
        <VStack gap={"5rem"}>
          <Box
            fontSize={["1.7rem", "2.5rem", "2.6rem", "2.8rem", "2.5rem"]}
            lineHeight={["3.2rem", "3.3rem"]}
            textAlign={"center"}
            fontWeight={"bold"}
            color={theme.colors.col.secondary}
          >
            Experience the spiritual dham yatra with
          </Box>

          <SimpleGrid
            columns={[1, 1, 1, 1, 4]}
            gap={["5rem", "5rem", "5rem", "5rem", "5rem"]}
            w={"100%"}
          >
            {/* Icon One */}
            <VStack w={["90%", "70%", "65%", "50%", "100%"]} mx={"auto"}>
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

               
              
                <Box w={['80%']}>
                  <Box fontWeight={"bold"} fontSize={['0.8rem','0.9rem','0.9rem','0.9rem']}>
                  {singleData.to?.length > 67 ? `${singleData.to.substring(0,68)}...` : singleData.to}
                  </Box>
                  <Box fontWeight={"500"} fontSize={['0.8rem','0.9rem','0.9rem','0.9rem']}></Box>
                </Box>
               
              </HStack>

            </VStack>

            {/* Icon Two */}
            <VStack w={["90%", "70%", "65%", "50%", "100%"]} mx={"auto"}>
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
            <VStack w={["90%", "70%", "65%", "50%", "100%"]} mx={"auto"}>
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
            <VStack w={["90%", "70%", "65%", "50%", "100%"]} mx={"auto"}>
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
            columns={[1, 1, 1, 1, 3]}
            gap={["5rem", "5rem", "5rem", "5rem", "5rem"]}
            w={"100%"}
          >
            {/* Icon Five */}
            <VStack w={["90%", "70%", "65%", "50%", "100%"]} mx={"auto"}>
              <IconButton
                boxSize={"80px"}
                size={"lg"}
                colorScheme="orange"
                variant={"outline"}
                borderRadius={"50%"}
                fontSize={"2.5rem"}
                icon={<GiDrumKit />}

              <HStack p={3} gap={['1rem']} alignItems={['flex-start']}>
                <Box
                  bg={"orange"}
                  color={"white"}
                  w={['45px']}
                  h={['48px']}
                  overflow={"hidden"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"1.2rem"}
                  borderRadius={"5px"}
                >
                  <FaCalendarAlt />
                </Box>
                <VStack w={['80%']}  alignItems={"flex-start"} gap={"0"}>
                  <Box fontWeight={"bold"} fontSize={['1rem']}>Past Events</Box>
                  <Box fontSize={"0.9rem"} fontWeight={"500"}>
                    please register for this tour.
                  </Box>
                </VStack>
              </HStack>
              <Divider
                borderBottom={"1px solid rgb(0,0,0,0.3)"}
                w={"96%"}
                mx={"auto"}

              />
              <Box fontSize={"1.3em"} textAlign={"center"} fontWeight={"bold"}>
                Bhajans and Kirtans
              </Box>
              <Text
                textAlign={"center"}
                fontSize={"1rem"}
                color={"rgb(0,0,0,0.5)"}
                fontWeight={"bold"}
              >
                Whenever we visit a temple,we do lots of kirtans and katha
              </Text>
            </VStack>

            {/* Icon Six */}
            <VStack w={["90%", "70%", "65%", "50%", "100%"]} mx={"auto"}>
              <IconButton
                boxSize={"80px"}
                size={"lg"}
                colorScheme="orange"
                variant={"outline"}
                borderRadius={"50%"}
                fontSize={"2.5rem"}
                icon={<FaMicrophoneAlt />}
              />
              <Box fontSize={"1.3em"} textAlign={"center"} fontWeight={"bold"}>
                Yatra Katha
              </Box>
              <Text
                textAlign={"center"}
                fontSize={"1rem"}
                color={"rgb(0,0,0,0.5)"}
                fontWeight={"bold"}
              >
                Yatra Kath Darshans are meant to be heard,not seen. We discuss
                temple's spiritual meaning.
              </Text>
            </VStack>

            {/* Icon Seven */}
            <VStack w={["90%", "70%", "65%", "50%", "100%"]} mx={"auto"}>
              <IconButton
                boxSize={"80px"}
                size={"lg"}
                colorScheme="orange"
                variant={"outline"}
                borderRadius={"50%"}
                fontSize={"2.5rem"}
                icon={<FaLeaf />}
              />
              <Box fontSize={"1.3em"} textAlign={"center"} fontWeight={"bold"}>
                Relaxed Itinerary
              </Box>
              <Text
                textAlign={"center"}
                fontSize={"1rem"}
                color={"rgb(0,0,0,0.5)"}
                fontWeight={"bold"}
              >
                Itineraries are designed to give relaxing and spiritual
                experience
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
        <Heading
          size={{ base: "2xl", xl: "3xl" }}
          color={theme.colors.col.secondary}
          mb={"9"}
        >
          Tour Plan
        </Heading>
        <Accordion allowMultiple>
          {additionalFields.map((field, index) => (
            <AccordionItem py={"1rem"} key={index}>
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
              <Box
                fontWeight={"500"}
                color={theme.colors.col.secondary}
                fontSize={"1.5rem"}
              >
                @hare_krishna_
              </Box>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Box>



           <Box w={["100%"]}>
         <Box fontWeight={"600"} fontSize={['1.5rem']} mb={'5'}>Tour Plan</Box>
          <Accordion allowMultiple>
            {singleData?.additionalFields?.map((field, index) => (
              <AccordionItem
               py={'0.5rem'}
                key={index}
              >
                <h2>
                  <AccordionButton _hover={"none"}>
                    <Box
                      flex="1"
                      textAlign="left"
                      fontSize={["1rem"]}
                      color={theme.colors.col.secondary}
                      fontWeight={"600"}
                    >
                      {field.title}
                    </Box>
                    <Box fontSize={"1.1rem"}>
                      <AccordionIcon color={"orange"} />
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel py={5} px={8} fontWeight={"500"} fontSize={'1.1rem'}>
                  {field.description}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
         







   
    </Container>
  );
};

export default TripSinglePage;
