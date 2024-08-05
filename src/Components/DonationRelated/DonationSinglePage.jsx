import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormLabel,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, {  useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import theme from "../../theme";
import { singleData } from "../SinglePages/SingleData";
import { IoClose } from "react-icons/io5";


const DonationSinglePage = () => {

  const [toggle, setToggle] = useState(false);
  const [toggleImage,setToggleImage] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
  ];


  const handleRegisterForm = () =>{
   setToggle(!toggle)
  }

  const handleClose = () =>{
    if(toggle){
      setToggle(false)
    }
    else{
      setToggle(true)
    }
  }


  const handleOpenImage = () =>{
    setToggleImage(!toggle)
  }

  const handleCloseImage = () =>{
    if(toggleImage){
      setToggleImage(false)
    }
    else{
      setToggleImage(true)
    }
  }



  const {
    title,
    date,
    description,
    time,
    duration,
    location,
    state,
    img
  } = singleData;





  const dt = new Date(date);
  const dayIndex = dt.getDay();
  const monthIndex = dt.getMonth();
  const dateIndex = dt.getDate();

  const day = daysOfWeek[dayIndex] || "";
  const month = months[monthIndex] || "";



  return (
    <Box w={"100%"} position={"relative"}>
      {/* Register Form */}
     
     <Box
        position={"fixed"}
        inset={0}
        zIndex={9999999999}
        w={"100%"}
        h={"100vh"}
        display={'flex'}
        bgColor={"rgb(0,0,0,0.9)"}
        overflow={"hidden"}
        alignItems={"center"}
        justifyContent={"center"}
        backdropFilter={'blur(20px)'}
        transition="opacity 0.4s ease-in-out, transform 0.4s ease-in-out"
       transform={toggle ? 'scale(1)':'scale(0)'}
       opacity={toggle ? 1 : 0}
      >

        {/* close button */}
        <Box onClick={handleClose} bgColor={'#2C3133'} color={'white'} position={'absolute'} top={{base:'1rem',lg:'2rem'}} right={{base:'1rem',lg:'2rem'}} p={2} fontSize={'1.5rem'} borderRadius={'50%'} overflow={'hidden'} cursor={'pointer'}>
        <IoClose />
        </Box>
       

       {/* Form */}
        <Box w={['90%']} maxW={'400px'}>
          <form style={{ width: "100%"}}>
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
            <Input type="text" placeholder="Your Name" variant={'filled'} _placeholder={{color:'#6E7272',fontWeight:'600'}} bgColor={'#2C3133'} _hover={{bgColor:'#2C3133'}} focusBorderColor="white"/>


            <FormLabel>Email *</FormLabel>
            <Input type="email" _placeholder={{color:'#6E7272',fontWeight:'600'}} placeholder="you@email.com" variant={'filled'} bgColor={'#2C3133'} _hover={{bgColor:'#2C3133'}} focusBorderColor="white"/>


            <FormLabel>Phone Number *</FormLabel>
            <Input type="number" placeholder="+919876543210" _placeholder={{color:'#6E7272',fontWeight:'600'}} variant={'filled'} bgColor={'#2C3133'} _hover={{bgColor:'#2C3133'}} focusBorderColor="white"/>


            <FormLabel>College/Company *</FormLabel>
            <Input type="text"  variant={'filled'} bgColor={'#2C3133'} _hover={{bgColor:'#2C3133'}} focusBorderColor="white"/>


            <FormLabel>Course(Only for students)</FormLabel>
            <Input type="text"  variant={'filled'} bgColor={'#2C3133'} _hover={{bgColor:'#2C3133'}} focusBorderColor="white"/>


            <FormLabel>Amount *</FormLabel>
            <Input type="number"  variant={'filled'} bgColor={'#2C3133'} _hover={{bgColor:'#2C3133'}} focusBorderColor="white"/>

            </Stack>
             <Box w={'100%'}>
               <Button w={'100%'} bgColor={'white'} size={'md'}>Register</Button>
             </Box>

            </VStack>
          </form>
        </Box>


      </Box>

      {/* View Image */}

     {toggleImage &&  <Box
        position={"fixed"}
        inset={0}
        zIndex={9999999999}
        w={"100%"}
        h={"100vh"}
        display={'flex'}
        bgColor={"rgb(0,0,0,0.9)"}
        overflow={"hidden"}
        alignItems={"center"}
        justifyContent={"center"}
        backdropFilter={'blur(20px)'}
      >
        {/* close button */}
        <Box onClick={handleCloseImage} bgColor={'#2C3133'} color={'white'} position={'absolute'} top={{base:'1rem',lg:'2rem'}} right={{base:'1rem',lg:'2rem'}} p={2} fontSize={'1.5rem'} borderRadius={'50%'} overflow={'hidden'} cursor={'pointer'}>
        <IoClose />
        </Box>

        {/* Image */}
        
        <Box w={['90%','90%','auto']} h={['400px','500px','550px']}>
           <Image w={'100%'} h={'100%'} src={img} objectFit={'cover'} />
        </Box>


      </Box>}

      <Container mt={['8rem']} w={["100%"]} maxW={"1200px"} mx={"auto"}>
      
        <Flex gap={['3rem','3rem','3rem','1.5rem']} w={"100%"} flexDirection={['column','column','column','row']}>
          <VStack w={['100%','100%','100%','40%']} h={"auto"} alignItems={"flex-start"} gap={['2rem']}>
            <Box
              w={['100%','100%']}
              mx={'auto'}
              height={['350px','450px','500px','400px','450px']}
              overflow={"hidden"}
              borderRadius={"5px"}
            >
              {/* Main Image */}
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                onClick={handleOpenImage}
                src={img}
              />
            </Box>

            <VStack w={"100%"} alignItems={"flex-start"}>
              <Box fontWeight={"600"} fontSize={"1rem"} opacity={"0.8"}>
                Hosted By
              </Box>
              <Divider borderBottom={"1px solid rgb(0,0,0,0.3)"} />
            </VStack>

            <HStack
              justifyContent={"space-between"}
              w={"100%"}
              alignItems={"center"}
            >
              <HStack>
                <Box w={"35px"} overflow={"hidden"} borderRadius={"50%"}>
                  <Image
                    w={"100%"}
                    h={"100%"}
                    objectFit={"cover"}
                    
                    src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=112,height=112/avatars/rr/7cebffaf-fda4-4b9f-9006-b5de52b1c478"
                  />
                </Box>
                <Box fontWeight={"600"}>Folk vizag</Box>
              </HStack>

              <Box>
                <Box
                  cursor={"pointer"}
                  fontSize={"1.2rem"}
                  color={theme.colors.col.secondary}
                >
                  <FaInstagram />
                </Box>
              </Box>
            </HStack>
          </VStack>

          <VStack w={['100%','100%','100%','60%']} h={"auto"} alignItems={"flex-start"} gap={"2.1rem"}>

            {/* Event Title */}
            <Box
              fontSize={['1.8rem','2.5rem','3rem','2.5rem','3rem']}
              lineHeight={['2.2rem','2.3rem','2.4rem','2.5rem','4rem']}
              fontWeight={"600"}
              color={theme.colors.col.secondary}
              textTransform={'capitalize'}
            >
              {title}
            </Box>



            <VStack w={"100%"} alignItems={"flex-start"} gap={'1rem'}>

              {/* Event Calender */}
              <HStack gap={"0.8rem"} w={'100%'} alignItems={['flex-start','center']}>
                <Box
                  border={"1px solid orange"}
                  w={['45px']}
                  h={['48px']}
                  borderRadius={"5px"}
                  overflow={"hidden"}
                >
                  <Box>
                    <Box
                      w={"100%"}
                      h={"40%"}
                      bgColor={"orange"}
                      color={"white"}
                      fontSize={"0.6rem"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      fontWeight={"bold"}
                      overflow={"hidden"}
                      textTransform={'uppercase'}
                    >
                     {month.length > 4 ? month.substring(0,3) : month}
                    </Box>
                  </Box>
                  <Box
                    w={"100%"}
                    h={"60%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    fontWeight={"500"}
                    color={"orange"}
                    overflow={"hidden"}
                    fontSize={"1rem"}
                  >
                    {dateIndex}
                  </Box>
                </Box>
                <VStack h={"auto"} gap={"0"} w={['80%']} alignItems={"flex-start"}>
                  <Box fontWeight={"bold"} fontSize={['0.8rem','0.9rem','0.9rem','0.9rem']}>{`${month}, ${day} ${dateIndex}`}</Box>
                  <Box fontWeight={"500"} fontSize={['0.8rem','0.9rem','0.9rem','0.9rem']}>{time}- {duration > 1 ? duration + 'hours' : duration + 'hour'}</Box>
                </VStack>
              </HStack>



              {/* Event Location */}
              <HStack gap={"0.8rem"} w={'100%'} alignItems={['flex-start','center']}>
                <Box
                  w={['45px']}
                  h={['48px']}
                  overflow={"hidden"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  fontSize={"1.5rem"}
                  border={"1px solid orange"}
                  color={"orange"}
                  borderRadius={"5px"}
                >
                  <IoLocationOutline />
                </Box>
               
              
                <Box w={['80%']}>
                  <Box fontWeight={"bold"} fontSize={['0.8rem','0.9rem','0.9rem','0.9rem']}>
                  {location.length > 67 ? `${location.substring(0,68)}...` : location}
                  </Box>
                  <Box fontWeight={"500"} fontSize={['0.8rem','0.9rem','0.9rem','0.9rem']}>{state}</Box>
                </Box>
               
              </HStack>
            </VStack>

            <VStack
              bgColor={"rgb(245,247,248)"}
              w={['100%']}
              alignItems={"flex-start"}
              overflow={"hidden"}
              borderRadius={"10px"}
              gap={"1rem"}
            >

              <Box
                bgColor={"lightgray"}
                w={"100%"}
                p={"3"}
                fontWeight={"bold"}
                color={theme.colors.col.secondary}
                fontSize={"1.5rem"}
                textTransform={"uppercase"}
              >
                Registartion
              </Box>

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
                    This event ended 13 hours ago.
                  </Box>
                </VStack>
              </HStack>
              <Divider
                borderBottom={"1px solid rgb(0,0,0,0.3)"}
                w={"96%"}
                mx={"auto"}
              />


               {/* Register Button */}
              <VStack p={3} alignItems={"flex-start"} w={"100%"} gap={"1rem"}>
                <Box fontWeight={"500"} fontSize={['0.9rem']}>
                  Welcome! To join the event, please register below.
                </Box>
                <Box w={"100%"}>
                  <Button    onClick={handleRegisterForm} w={"100%"} colorScheme="orange">
                    Register
                  </Button>
                </Box>
              </VStack>
            </VStack>


            {/* About Event */}

            <VStack w={"100%"} alignItems={"flex-start"}>
              <VStack w={"100%"} alignItems={"flex-start"}>
                <Box fontWeight={"600"} fontSize={['1.5rem']}>About Event</Box>
                <Divider borderBottom={"1px solid rgb(0,0,0,0.3)"} />
              </VStack>

              <Box>
                <Text fontSize={"0.9rem"} lineHeight={"1.8rem"}>
                 {description}
                </Text>
              </Box>
            </VStack>


         
         





           {/* Location of Event */}
            <VStack>
              <VStack w={"100%"} alignItems={"flex-start"}>
                <Box fontWeight={"600"} fontSize={['1.5rem']}>Location</Box>
                <Divider borderBottom={"1px solid rgb(0,0,0,0.3)"} />
              </VStack>

              <Box>
                <Text fontSize={"0.9rem"} lineHeight={"1.8rem"}>
                 {location}
                </Text>
              </Box>
            </VStack>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default DonationSinglePage
