import React from "react";
import theme from "../../theme";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import backgroundimage from "../../Assets/sosimage1.jpg";
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
      >
        <Box
          position="absolute"
          fontSize="4rem"
          color="white"
          fontWeight="500"
          top="25%"
          left="8%"
          ref={heading}
        >
          Secret of Success
          <Box fontSize="1.5rem">
            <q>Self-Control is the mantra for Success</q>
          </Box>
          <Button
            bg="#DE8D38"
            color="white"
            _hover={{ bg: theme.colors.col.secondary }}
            ref={regbutton}
            onMouseEnter={handleButtonEnter}
            onMouseLeave={handleButtonLeave}
          >
            Register now
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default SecretofSuccessSection1;
