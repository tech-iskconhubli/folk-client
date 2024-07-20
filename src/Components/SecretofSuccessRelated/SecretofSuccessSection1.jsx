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
        h={{base:'50vh',md:'50vh',lg:'97vh',xl:'97vh'}}
        backgroundSize="cover"
        backgroundPosition={{base:'right',md:'right',lg:'center',xl:'center'}}
        position="relative"
        ref={container}
        mt={{base:'100px',md:'100px',lg:'150px',xl:'250px'}}
        fontFamily={theme.fonts.body}
      >
        <Box bg='rgba(0,0,0,0.25)' w='100%' h='100%'>
        <Box
          position="absolute"
          color="white"
          fontWeight="500"
          top={{base:'none',md:'25%',lg:'20%',xl:'25%'}}
          bottom={{base:'5%',md:'none'}}
          left={{base:'5%',md:'5%',lg:'8%',xl:'14%'}}
          ref={heading}
          w={{base:'auto',md:'300px',lg:'500px',xl:'710px'}}
          textAlign='justify'
        >
          <Heading fontSize={{base:'1.5rem',md:'2rem',lg:'3.5rem',xl:'5rem'}} fontWeight={500} fontFamily={theme.fonts.body}>Secret of Success</Heading>
          <Box fontSize={{base:'0.5rem',md:'0.5rem',lg:'14px',xl:'18px'}} m={{base:'5px 0px',md:'20px 0px',lg:'25px 0px'}}>
            <Text fontWeight={400}  fontFamily={theme.fonts.body} display={{base:'none',md:'block'}}>You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction</Text>
          </Box>
          <Button
            bg={theme.colors.col.text}
            color="white"
            _hover={{ bg: theme.colors.col.text }}
            ref={regbutton}
            onMouseEnter={handleButtonEnter}
            onMouseLeave={handleButtonLeave}
            p={{base:'5px 10px',md:'10px 20px',lg:'25px 50px'}}
            fontSize={{base:'15px',md:'25px'}}
            fontWeight={400}
            mt={{base:'0px',md:'5px',lg:'10px',xl:'10px'}}
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
