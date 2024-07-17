import React from "react";
import theme from "../../theme";
import backgroundimage from "../../Assets/image1.jpg";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
const AboutusSection1 = () => {
  return (
    <>
      <Box
      mt={"155px"} 
      //backgroundimage
        backgroundImage={backgroundimage}
        w="100%"
        h={{ base: "300px", md: "300px", lg: "450px", xl: "450px" }}
        backgroundSize="cover"
        backgroundPosition={{
          base: "center",
          md: "bottom -80px right",
          lg: "bottom -80px right",
          xl: "bottom -200px right",
        }}
        position="relative"
      >
        <Box //backgroundtext
          position="absolute"
          top="50%"
          left={{ base: "5%", md: "5%", lg: "10%", xl: "20%" }}
          zIndex="1"
          color="white"
          textAlign="left"
        >
          <Box //topheading
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            gap={{ base: "2px", md: "5px", lg: "10px", xl: "10px" }}
          >
            <Box
              w={{ base: "40px", md: "40px", lg: "60px", xl: "60px" }}
              h="1px"
              bg="white"
            ></Box>
            <Box
              fontSize={{
                base: "0.5rem",
                md: "0.8rem",
                lg: "1rem",
                xl: "1.5rem",
              }}
            >
              Energizing Youth Culture
            </Box>
          </Box>
          <Box //middletext
            fontSize={{ base: "2rem", md: "3rem", lg: "3rem", xl: "4rem" }}
            fontWeight="100"
          >
            FOLK
          </Box>
          <Box //lowertext
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            fontSize={{
              base: "0.5rem",
              md: "0.6rem",
              lg: "0.8rem",
              xl: "0.9rem",
            }}
            mt={{ base: "none", md: "none", lg: "20px", xl: "30px" }}
            gap={{ base: "2px", md: "5px", lg: "10px", xl: "10px" }}
          >
            <Link to="/"><Box color="gray" _hover={{ color: "white" }}>Home</Box></Link>
            <Box color="gray" _hover={{ color: "white" }}><FaChevronRight /></Box>
            <Box color="gray">About us</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default AboutusSection1;
