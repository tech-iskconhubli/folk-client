import React from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import theme from "../../theme";
import { Link } from "react-router-dom";
import TripHeaderImage from '../../Assets/TripPageImages/TripHeaderImage/Trip_Header_Image.jpeg'

const TripHeader = () => {


  return (
    <Box
      style={{
        backgroundImage: `url(${TripHeaderImage})`,
      }}
      w={{sm:'100%',md:'100%',xl:'97%'}}
      mx={"auto"}
      h={["30vh", "40vh", "50vh", "75vh", "80vh"]}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"top center"}
      mt={{base:'6rem',xl:'9rem'}}
      overflow={"hidden"}
      borderRadius={{sm:'0',xl:'10px'}}
    >
      <Box
        gap={["0.5rem", "0.6rem", "0.8rem", "1rem"]}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"start"}
        flexDirection={"column"}
        bgColor={"rgb(0,0,0,0.65)"}
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
              fontWeight={"500"}
              fontFamily={theme.fonts.body}
              display={"inline-block"}
            >
              Explore Sacred Journeys
            </Box>
            <Box>
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
                fontWeight={'300'}
                fontFamily={theme.fonts.body}
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

          <Box>
          <Link to={'/trips/:singlePage'}>
            <Button
              fontSize={["0.7rem", "0.8rem", "1rem", "0.9rem", "1rem"]}
              p={["0.9rem", "1.2rem", "1.5rem", "2rem"]}
              colorScheme="orange"
              display={"flex"}
              alignItems={"center"}
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
