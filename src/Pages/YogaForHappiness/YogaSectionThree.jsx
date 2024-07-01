import { Box, Button, Container, Flex, Image } from "@chakra-ui/react";
import { TbClockHour5 } from "react-icons/tb";
import theme from "../../theme";
import { useTheme } from "@emotion/react";
import React, { useRef } from "react";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);


const YogaSectionThree = () => {
   
  const smallHeading = useRef(null);
  const bigHeading = useRef(null);
  const flexContainer = useRef(null);
  const boxOne = useRef(null);
  const boxTwo = useRef(null);

  useGSAP(()=>{

      gsap.from(smallHeading.current,{
         y:100,
         opacity:0,
         duration:0.4,
         ease: 'power1.inOut',
         scrollTrigger:{
          trigger:smallHeading.current,
          start:'top 100%',
          end:'bottom center'
         }
      });
      gsap.from(bigHeading.current,{
         y:100,
         opacity:0,
         duration:0.5,
         ease: 'power1.inOut',
         scrollTrigger:{
          trigger:smallHeading.current,
          start:'top 90%',
          end:'bottom center'
         }
      });
  },[])

useGSAP(()=>{
   const tl = gsap.timeline({
    scrollTrigger:{
      trigger:flexContainer.current,
      start:'top 90%',
      end:'bottom 90%',
    }
   });

   tl.from(boxTwo.current,{
     scale:0,
     opacity:0,
     duration:1,
   });

   tl.from(boxOne.current,{
    scale:0,
    opacity:0,
    duration:0.8,
    ease: 'power1.inOut',
   });

   tl.from(boxOne.current.children,{
      y:100,
      opacity:0,
      stagger:0.3,
      duration:0.5,
      ease: 'power1.inOut',
   });
   return () => {
    tl.kill();
  };
},[])

  return (
    <Box width="100%" my={['2rem','2rem','2rem','5rem']}>
      <Container
        w={["100%", "100%", "90%", "90%"]}
        maxW="1500px"
        marginX="auto"
      >

        {/* Box One */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          my={["2rem",'2rem','2rem','2rem','2.5rem']}
          gap={["8px"]}
        >
          <Box
          ref={smallHeading}
            fontSize={[".7rem", "1rem"]}
            color={theme.colors.col.secondary}
            fontWeight={"bold"}

          >
            EVENT
          </Box>
          <Box
          ref={bigHeading}
            px={[".55rem"]}
            fontSize={["1.4rem", "2.5rem", "2.5rem", "3rem"]}
            fontWeight={"600"}
            maxW={"700px"}
            minW={"320px"}
            textAlign={"center"}
            lineHeight={["", "3.5rem"]}
          >
            JOIN US AND BECOME PART OF SOMETHING GREAT
          </Box>
        </Box>


      {/* Box Two Image */}
        <Box>
          <Flex ref={flexContainer} flexDirection={["column-reverse",'column-reverse','column-reverse','row']}>
            <Box
            ref={boxOne}
              w={["100%",'100%', '100%' ,'40%','50%']}
              bg={theme.colors.col.secondary}
              display={"flex"}
              flexDirection={"column"}
              gap={['10px','15px',"15px","12px",'16px','22px']}
              py={["1rem","1.3rem","1.5em","1.3rem","2rem",'2.6rem']}
              px={["1.5rem","1.5rem","1.8rem",'1.5rem','2rem','2.3rem']}
              alignItems={"start"}
            >
              <Box fontSize={["0.8rem",'0.8rem','0.9rem','0.8rem','0.9rem','1rem']} color={"white"} fontWeight={"600"}>
                Upcoming Event
              </Box>

              <Box
                fontSize={["1rem","1.2rem",'1.3rem', '1.3rem','1.5rem','1.9rem']}
                fontWeight={"600"}
                display={"inline-block"}
                w={['250px','300px','350px','350px','350px','450px']}
              >
                WATCH AND LISTEN TO OUR SERMONS
              </Box>

              <Box fontSize={["0.8rem",'0.8rem','0.9rem','0.9rem','0.95rem','1rem']} >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet. Maxime, minima.
              </Box>

              <Box
                fontSize={['.8rem','0.8rem','0.9rem','0.9rem','1rem','1.1rem']}
                fontWeight={"600"}
                display={"flex"}
                alignItems={"center"}
                gap={".3rem"}
              >
                <span>
                  <TbClockHour5 />
                </span>
                Friday 23:39 IST Saturday 11:20 ISD
              </Box>
              <Box
              fontSize={['.8rem','0.8rem','0.9rem','0.9rem','1rem','1.1rem']}
                fontWeight={"600"}
                display={"flex"}
                alignItems={"center"}
                gap={".3rem"}
              >
                <span>
                  <LiaMapMarkedAltSolid />
                </span>
                No 233 Main St.New York, United States
              </Box>

              <Box>
              <Button fontSize={['.8rem','0.8rem','0.9rem','0.9rem','1rem','1.1rem']} px={['0.5rem','0.7rem','0.9rem','1rem']} py={['.3rem','0.3rem','0.9rem','1rem']} colorSchem="white" color={theme.colors.col.secondary}>
                Visit Now!
              </Button>
              </Box>
            </Box>

            {/* Image Box */}
            <Box   ref={boxTwo}  w={["100%",'100%','100%', '60%','50%']}>
              <Image
             
                objectFit={"cover"}
                w={"100%"}
                src="https://images.unsplash.com/photo-1544588440-fc7551331160?q=80&w=2122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default YogaSectionThree;
