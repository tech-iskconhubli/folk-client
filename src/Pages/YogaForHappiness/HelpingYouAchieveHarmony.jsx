import { Box, Button, Text, VStack } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HelpYouAchieveImage from '../../Assets/YogaPageImages/HelpYouAchieveImage/Help_You_Achieve_Image.webp'
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const HelpingYouAchieveHarmony = () => {
  const mainContainer = useRef(null);
  const container = useRef(null);
  useGSAP(()=>{
    const tl = gsap.timeline({ repeat: -1, yoyo: true ,scrollTrigger:{
      trigger:container.current,
      start:'top 90%',
      end:'bottom 90%',
    } });
      tl.to(container.current,{
        scale: 1.1, 
        duration: 3, 
        ease: 'power1.inOut', 
      })

  },[])

  return (
    <Box
      my={"2rem"}
      ref={mainContainer}
      overflow={"hidden"}
      boxSizing="border-box"
      h={["35vh", "40vh", "50vh", "60vh", "90vh"]}
    >
      <Box
        ref={container}
        backgroundAttachment={"fixed"}
        bgRepeat={"no-repeat"}
        bg={
          `url(${HelpYouAchieveImage})`
        }
        h={"100%"}
        w={"100%"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        color={"white"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        py={["1.5rem", "1.5rem"]}
        px={["1.5rem", "2rem", "5rem", "6rem"]}
        position={"relative"}
      >
        <Box
          position={"absolute"}
          bgColor={"rgb(0,0,0,0.75)"}
          w={"100%"}
          h={"100%"}
          inset={"0"}
        ></Box>
        <VStack zIndex={"99"} gap={["0.9rem", "1.5rem", "1.5rem", "1.5rem",'2rem']}>
          <VStack gap={["1rem"]} textAlign={"center"} overflow={"hidden"}>
            <Box
              fontSize={["0.8rem", "1rem", "1rem", "1.3rem",'1.4rem']}
              fontWeight={["300"]}
            >
              Take the First Step to Hinduism
            </Box>
            <Box
              fontSize={["1.2rem", "1.5rem", "2rem", "2.4rem",'3rem']}
              fontWeight={"semibold"}
              lineHeight={["2rem", "2.5rem", "3rem", "4rem"]}
            >
              Helping You Achieve Harmony
            </Box>
          </VStack>

          <Box textAlign={"center"} maxW={"600px"}>
            <Text
              fontSize={["0.7rem", "0.9rem", "1rem", "1.1rem"]}
              fontWeight={"300"}
              lineHeight={["1.1rem",'1.3rem','1.5rem','1.8rem','2rem']}
            >
              Our Website works to provide you with any information and
              resources on Hinduism to help you find out more about it and
              achieve inner harmony.
            </Text>
          </Box>

          <Box>
            <Button
              colorScheme="orange"
              fontSize={["0.7rem", "1rem", "1.1rem", "1.2rem"]}
              px={["0.8rem", "1rem", "1.5rem", "1.7rem"]}
              py={["0.8rem", "1rem", "1.5rem", "1.7rem"]}
            >
              VIEW MORE
            </Button>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default HelpingYouAchieveHarmony;
