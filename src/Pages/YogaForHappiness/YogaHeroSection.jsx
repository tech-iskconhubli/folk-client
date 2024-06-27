import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import YogaBgImage from "../../../src/Assets/Monk.jpg";
import { GoNorthStar } from "react-icons/go";
import "../../Styles/YogaStyles.css";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



const YogaHeroSection = () => {
  
  console.log('yoga hero section')

  useGSAP(()=>{
    
  })




  return (
    <Box
      style={{ backgroundImage: `url(${YogaBgImage})` }}
      w={"100%"}
      h={["25vh", "40vh", "50vh", "75vh", "98vh"]}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"center bottom"}
    >
      <Box
        gap={['0.5rem','0.6rem','0.8rem','1rem']}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"start"}
        flexDirection={"column"}
        bgColor={"rgb(0,0,0,0.25)"}
        w={"100%"}
        h={"100%"}
        color={"white"}
        overflowX={"hidden"}
        px={["0.9rem",'1rem','1.5rem','2rem','3rem']}
      >
        <Box>
          <Box
            className="yoga-heading"
            fontSize={['1.2rem','2rem','3rem','3.5rem','5rem']}
            fontWeight={"600"}
            display={"inline-block"}
          >
            BODY <span>&</span> MIND
          </Box>
          <Box>
            <Text fontSize={["0.5rem","0.8rem",'1rem','1.2rem','1.5rem']} fontWeight={'400'} display={"inline-block"}>
              Connect to your inner flow.
            </Text>
          </Box>
        </Box>

        <Box>
          <Button
            fontSize={["0.5rem",'0.7rem','0.8rem','0.9rem','1rem']}
            px={["0.4rem",'0.5rem','0.8rem','0.9rem','1rem']}
            py={['0.3rem','0.5rem','1rem','1.5rem','2rem']}
            colorScheme="orange"
            display={"flex"}
            alignItems={"center"}
            gap={["0.3rem"]}
            borderRadius={"10px"}
          >
            {" "}
            <span>
              <GoNorthStar />
            </span>{" "}
            Join Our Classes
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default YogaHeroSection;
