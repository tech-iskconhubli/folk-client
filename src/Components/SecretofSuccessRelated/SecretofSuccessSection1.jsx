import React from "react";
import theme from "../../theme";
import { Box, Text, Image, Button,Heading } from "@chakra-ui/react";
import backgroundimage from "../../Assets/sosbg.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
const SecretofSuccessSection1 = () => {

    //backgroundTextAnimation
    const container=useRef()
    const heading=useRef()
    const regbutton=useRef()
    
    const { contextSafe } = useGSAP({scope: container});
    useGSAP(()=>{
    gsap.from(heading.current,{
      scale:0,
      opacity:0,
      duration:0.5})
    });
    const handleButtonEnter=contextSafe(()=>{
      gsap.to(regbutton.current,{scale:1.2,duration:0.1})
    });
    const handleButtonLeave=contextSafe(()=>{
      gsap.to(regbutton.current,{scale:1,duration:0.1})
    })

  return (
    <>
      <Box
        backgroundImage={backgroundimage}
        w="100%"
        h="96vh"
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        ref={container}
        mt='150px'
        fontFamily={theme.fonts.body}
      >
        <Box bg='rgba(0,0,0,0.25)' w='100%' h='100%'>
        <Box
          position="absolute"
          color="white"
          fontWeight="500"
          top="25%"
          left="14%"
          ref={heading}
          w='710px'
          textAlign='justify'
        >
          <Heading fontSize="5rem" fontWeight={500} fontFamily={theme.fonts.body}>Secret of Success</Heading>
          <Box fontSize="1rem" m={'25px 0px'}>
            <Text fontWeight={400} fontSize={'18px'} fontFamily={theme.fonts.body}>You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction</Text>
          </Box>
          <Button
            bg={theme.colors.col.text}
            color="white"
            _hover={{ bg: theme.colors.col.text }}
            ref={regbutton}
            onMouseEnter={handleButtonEnter}
            onMouseLeave={handleButtonLeave}
            p={'25px 50px'}
            fontSize={'20px'}
            fontWeight={400}
            mt='10px'
            
          >
            Register now
          </Button>
        </Box>
        </Box>
      </Box>
    </>
  );
};
export default SecretofSuccessSection1;
