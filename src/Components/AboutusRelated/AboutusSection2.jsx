import React from "react";
import theme from "../../theme";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import krishnaimage from "../../Assets/image2.png";
const AboutusSection2 = () => {
  return (
    <>
      <Box //overviewSection
        display={{ base: "row", md: "row", lg: "flex", xl: "flex" }}
        minHeight="calc(100vh - 450px)"
        justifyContent="center"
        alignItems="center"
        fontWeight="300"
        mt='30px'
      >
        <Box //textcontainer
          p="20px"
          w={{ base: "100%", md: "100%", lg: "650px", xl: "700px" }}
          lineHeight="2rem"
          textAlign="justify"
          fontSize="0.9rem"
          mr={{ base: "none", md: "none", lg: "50px", xl: "80px" }}
        >
          <Text fontSize="2.5rem">Overview</Text>
          <br />
          <Text>
            <span fontWeight="400">
              FOLK &#8722; Youth Empowerment Club aimed at crystallizing the
              formative phase of the younger generation with key values that
              guide them throughout their lives.
            </span>
            <br />
            Some of the most vital and practical knowledge has been inherited
            from the time-tested Vedic wisdom and woven into methodic workshops.
            For more than two decades, our programs have been catalyzing the
            youth culture by designing rich avenues in art, theatre, science,
            philosophy, and many more. A vibrant community of highly progressive
            young minds awaits you. Get going.
          </Text>
          <br />
          <Box //buttons
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            gap="10px"
          >
            <Button bg={theme.colors.col.secondary} color="white" borderRadius="5px" mr="20px" _hover={{backgroundColor: theme.colors.col.text, color: "white",}}>VIEW OUR HISTORY</Button>
            <Button color="black" border={theme.colors.col.text}  borderRadius="5px" _hover={{backgroundColor: theme.colors.col.text, color: "white",}}>JOIN OUR TEAM</Button>
          </Box>
        </Box>
        <Box //imagecontainer
          display={{ base: "flex", md: "flex"}}
          justifyContent="center"
          alignItems="center"
        >
          <Image src={krishnaimage} w={{ base: "350px", md: "350px", lg: "350px", xl: "400px" }}/>
        </Box>
      </Box>
    </>
  );
};
export default AboutusSection2;
