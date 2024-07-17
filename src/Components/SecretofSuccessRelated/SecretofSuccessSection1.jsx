import React from "react";
import theme from "../../theme";
import { Box, Text, Image, Button } from "@chakra-ui/react";
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
        h="100vh"
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        ref={container}
        mt='150px'
      >
        <Box bg='rgba(0,0,0,0.25)' w='100%' h='100%'>
        <Box
          position="absolute"
          fontSize="5rem"
          color="white"
          fontWeight="500"
          top="20%"
          left="15%"
          ref={heading}
          w='710px'
          textAlign='justify'
        >
          Secret of Success
          <Box fontSize="1rem">
            <q>Perform your obligatory duty, because action is indeed better than inaction. Even the maintenance of your body would not be possible through inaction.</q>
          </Box>
          <Button
            bg={theme.colors.col.text}
            color="white"
            _hover={{ bg: theme.colors.col.text }}
            ref={regbutton}
            onMouseEnter={handleButtonEnter}
            onMouseLeave={handleButtonLeave}
            fontSize='2rem'
            p='25px'
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
