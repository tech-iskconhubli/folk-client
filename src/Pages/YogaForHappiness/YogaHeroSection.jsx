import React from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import YogaBgImage from '../../Assets/YogaPageImages/YogaHeaderImage/Monk.jpg';
import { GoNorthStar } from "react-icons/go";
import { Link } from "react-router-dom";
import theme from "../../theme";


const YogaHeroSection = () => {
  
  return (
    <Box
      style={{ backgroundImage: `url(${YogaBgImage})` }}
      w={"100%"}
      h={["25vh", "40vh", "50vh", "75vh", "90vh"]}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"center bottom"}
      mt={['6rem']}
    >
      <Box
        gap={['0.5rem','0.6rem','0.8rem','1rem']}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"start"}
        flexDirection={"column"}
        bgColor={"rgb(0,0,0,0.65)"}
        w={"100%"}
        h={"100%"}
        color={"white"}
        overflowX={"hidden"}
        px={["0.5rem",'0.7rem','1.5rem','1.5rem','2rem','3rem']}
      >
        <VStack alignItems={'flex-start'} gap={['0.5rem','0.9rem','1rem','1.5rem','2rem','2.5rem']} ml={{xl:'3rem'}}  w={['200px','320px','350px','450px','650px']}>
          <VStack gap={['0.5rem','0.9rem','1rem','1.5rem','1.5rem','2rem']} alignItems={'flex-start'}>
          <Box
            className="yoga-heading"
            fontSize={['1.2rem','2rem','3rem','3.5rem','6rem']}
            fontWeight={"500"}
            display={"inline-block"}
            fontFamily={theme.fonts.body}
          >
            BODY <span>&</span> MIND
          </Box>
          <Box>
            <Text fontWeight={'300'} fontFamily={theme.fonts.body} fontSize={["0.5rem","0.7rem",'0.9rem','1rem','1rem']}  display={"inline-block"} lineHeight={['0.7rem','1.2rem','1.3rem','1.5rem']}>
            "Body and mind refer to the interconnected aspects of human existence: the physical body, encompassing its health and functions, and the mind, encompassing thoughts, emotions, and cognitive processes. Together, they shape our perception, behavior, and overall well-being."
            </Text>
          </Box>

          </VStack>


        <Box> 
        <Link to={'/yogaForHappiness/:singlePage'}> 
          <Button
           
            fontSize={["0.6rem",'0.7rem','1rem','0.9rem','1rem']}
             p={['0.5rem','0.8rem','1.5rem','2rem']}
            colorScheme="orange"
            display={"flex"}
            alignItems={"center"}
            gap={["0.3rem"]}
            borderRadius={"10px"}
          >
           
            <span>
              <GoNorthStar />
            </span>
            Join Our Classes
          </Button>
          </Link>
        </Box>
        </VStack>

      </Box>
    </Box>
  );
};

export default YogaHeroSection;
