import { Box, Button, Container, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import KrishnaLogo from "../../Assets/KrishnaLogo.png";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import theme from "../../theme";

const TripSocialMediaIoncs = () => {
  return (
    <Box width="100%" my={["5rem", "5rem", "7rem", "5rem", "5rem"]}>
      <Container
        w={["100%", "100%", "100%", "90%"]}
        maxW="1500px"
        marginX="auto"
        overflow={'hidden'}
      >
        <SimpleGrid
          p={["0.8rem", "0.9rem", "1rem", "2rem"]}
          columns={["1",'1','2','3']}
          spacing={['10','10','10','5']}
        >
          <Box w={["100%"]} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} flexDirection={'column'}  gap={'1rem'}>
            <Box fontSize={['2rem','2rem','2rem','1.5rem','2rem']} fontWeight={'bold'} color={theme.colors.col.secondary}>
                GET IN TOUCH
            </Box>
            <Box w={["50%"]} mx={"auto"}>
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                src={KrishnaLogo}
              />
            </Box>
          </Box>

          <Box>

            <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
              <Box height={"2px"} bgColor={theme.colors.col.secondary} flex={"1"}></Box>
              <Box
                color={theme.colors.col.secondary}
                fontWeight={"bold"}
                letterSpacing={"0.1rem"}
              >
                FOLLOW US
              </Box>
              <Box height={"2px"} bgColor={theme.colors.col.secondary} flex={"1"}></Box>
            </Box>


            <SimpleGrid columns={"2"} spacing={['10','10','10','5']} mt={["2rem"]}>

              <Box  display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={['0.5rem']} p={'1rem'} cursor={'pointer'}>
                <Box fontSize={['2rem','2rem','2rem','1.5rem']} color={theme.colors.col.secondary}>
                  <FaFacebookF />
                </Box>
                <Box fontSize={['0.9rem','0.9rem','0.9rem','0.8rem']} fontWeight={'bold'} letterSpacing={'0.1rem'}>FACEBOOK</Box>
              </Box>

              <Box  display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={['0.5rem']} p={'1rem'} cursor={'pointer'}>
              <Box fontSize={['2rem','2rem','2rem','1.5rem']} color={theme.colors.col.secondary}>
                  <GrInstagram />
                </Box>
               <Box fontSize={['0.9rem','0.9rem','0.9rem','0.8rem']}  fontWeight={'bold'} letterSpacing={'0.1rem'}>INSTAGRAM</Box>
              </Box>

              <Box  display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={['0.5rem']} p={'1rem'} cursor={'pointer'}>
              <Box fontSize={['2rem','2rem','2rem','1.5rem']} color={theme.colors.col.secondary}>
                  <FaTwitter />
                </Box>
               <Box fontSize={['0.9rem','0.9rem','0.9rem','0.8rem']}  fontWeight={'bold'} letterSpacing={'0.1rem'}>TWITTER</Box>
              </Box>

              <Box  display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={['0.5rem']} p={'1rem'} cursor={'pointer'}>
              <Box fontSize={['2rem','2rem','2rem','1.5rem']} color={theme.colors.col.secondary}>
                  <FaYoutube />
                </Box>
               <Box fontSize={['0.9rem','0.9rem','0.9rem','0.8rem']}  fontWeight={'bold'} letterSpacing={'0.1rem'}>YOUTUBE</Box>
              </Box>
            </SimpleGrid>
          </Box>

          <Box gridColumn={['auto','auto','span 2','auto']}>
            <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
              <Box height={"2px"} bgColor={theme.colors.col.secondary} flex={"1"}></Box>
              <Box
                color={theme.colors.col.secondary}
                letterSpacing={"0.1rem"}
                fontWeight={"bold"}
              >
                NEWSLETTER
              </Box>
              <Box height={"2px"} bgColor={theme.colors.col.secondary} flex={"1"}></Box>
            </Box>

             <Box  h={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} px={'2rem'} gap={['2rem']}>
                 <Box width={'100%'}>
                     <input className="input" type="text" placeholder="Enter Email"/>
                 </Box>
                 <Box w={'100%'}>
                     <Button w={'100%'} p={'1.5rem'} fontSize={['1.1rem']} colorScheme="orange" letterSpacing={'0.1rem'}>SUBSCRIBE</Button>
                 </Box>
             </Box>




          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default TripSocialMediaIoncs;
