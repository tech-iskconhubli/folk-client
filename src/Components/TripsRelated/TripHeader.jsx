import React, { useRef } from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const TripHeader = () => {
  const mainHeading = useRef(null);
  const matter = useRef(null);
  const button = useRef(null);

  // Hero Section Animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(mainHeading.current, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
    tl.from(matter.current, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
    tl.from(button.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Box
      style={{
        backgroundImage: `url(https://ideogram.ai/assets/progressive-image/balanced/response/Zpza3NPFTKqLedvNKLvaPg)`,
      }}
      w={{sm:'100%',md:'100%',lg:'97%'}}
      mx={"auto"}
      h={["30vh", "40vh", "50vh", "75vh", "80vh"]}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"top center"}
      mt={["7rem", "7rem", "7rem", "10rem", "11rem"]}
      overflow={"hidden"}
      borderRadius={{sm:'0',lg:'10px'}}
    >
      <Box
        gap={["0.5rem", "0.6rem", "0.8rem", "1rem"]}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"start"}
        flexDirection={"column"}
        bgColor={"rgb(0,0,0,0.60)"}
        w={"100%"}
        h={"100%"}
        color={"white"}
        overflowX={"hidden"}
        px={["1rem", "0.7rem", "1.5rem", "1.5rem", "1.8rem", "3rem"]}
        borderRadius={["0"]}
      >
        <VStack
          alignItems={"flex-start"}
          gap={["0.5rem", "0.9rem", "1.5rem", "1.8rem", "2rem", "2.5rem"]}
          ml={{ xl: "3rem" }}
          w={["300px", "400px", "500px", "600px", "850px", "1000px"]}
        >
          <VStack
            gap={["0.5rem", "0.9rem", "1rem", "1.5rem", "1.5rem", "2rem"]}
            alignItems={"flex-start"}
          >
            <Box
              className="yoga-heading"
              fontSize={["1.2rem", "2rem", "3rem", "3.5rem", "5rem"]}
              lineHeight={["2rem", "2.8rem", "3.7rem", "4.8rem", "6rem"]}
              fontWeight={"600"}
              display={"inline-block"}
              ref={mainHeading}
            >
              Explore Sacred Journeys
            </Box>
            <Box ref={matter}>
              <Text
                fontSize={[
                  "0.6rem",
                  "0.7rem",
                  "0.9rem",
                  "1rem",
                  "1.1rem",
                  "1.2rem",
                ]}
                display={"inline-block"}
                lineHeight={["1rem", "1.2rem", "1.5rem", "1.7rem", "2rem"]}
              >
                Join our curated Hindu temple tours to explore ancient rituals,
                architectural marvels, and profound spiritual experiences across
                sacred destinations like Varanasi and Rameswaram. Our
                expert-guided journeys offer insights into Hindu traditions,
                providing a transformative pilgrimage of spiritual connection
                and cultural exploration.
              </Text>
            </Box>
          </VStack>

          <Box ref={button}>
          <Link to={'/singlePageWithAccordion'}>
            <Button
              fontSize={["0.6rem", "0.7rem", "1rem", "0.9rem", "1rem"]}
              p={["1rem", "0.8rem", "1.5rem", "2rem"]}
              colorScheme="orange"
              display={"flex"}
              alignItems={"center"}
              gap={["0.3rem"]}
              borderRadius={"10px"}
            >
              Register for Temple Tours
            </Button>
          </Link>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default TripHeader;
