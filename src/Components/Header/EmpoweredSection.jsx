import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { PiFlowerLotusBold } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import { TbBulbFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaMountainSun } from "react-icons/fa6";
import React, { useRef } from "react";
import theme from "../../theme"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "@emotion/react";
gsap.registerPlugin(ScrollTrigger);

const EmpowerdSection = () => {

  const theme = useTheme();

 const container = useRef(null);
 const heading = useRef(null)
 const para = useRef(null)
 const box1 = useRef(null);
 const box2 = useRef(null);
 const box3 = useRef(null);
 const box4 = useRef(null);
 const box5 = useRef(null);
 const box6 = useRef(null);

  // Animation

  useGSAP(()=>{
     const tl = gsap.timeline({
      scrollTrigger:{
        trigger: container.current,
        start:'top 90%',
        end:'bottom center',
      }
     });
     tl.from(heading.current,{y:100,opacity:0,duration:0.4})
     tl.from(para.current,{y:100,opacity:0,duration:0.4})
     tl.from(box1.current,{scale:0, duration:0.4});
     tl.from(box2.current,{scale:0, duration:0.4});
     tl.from(box3.current,{scale:0, duration:0.4});
     tl.from(box4.current,{scale:0, duration:0.4});
     tl.from(box5.current,{scale:0, duration:0.4});
     tl.from(box6.current,{scale:0, duration:0.4});

     return () => {
      tl.kill();
    };
  },[])




  return (
    <Container
      w={["100%", "100%", "90%", "90%"]}
      maxW="1500px"
      marginX="auto"
      my="2rem"
      padding={"2rem"}
      ref={container}
    >
      <Box textAlign={"center"}>
        {/* Heading */}
        <Box py={'20px'}>
          <Heading ref={heading} fontSize={['2.2rem','2.5rem','3rem','4rem']} fontWeight="900">
            GET EMPOWERED
          </Heading>
        </Box>

        {/* Para */}
        <Box maxW="700px" m="auto" mt={['.5rem','.5rem','1rem']} mb={['0','0','0','1rem','2rem']}>
          <Text ref={para} display={"inline-block"} fontSize={['.9rem','0.9rem','0.9rem','1rem']} fontWeight={"400"}>
            Learning is a lifelong process. But the right lessons can scale your
            personality to unprecedented levels. Get connected with our wide
            array of programs.
          </Text>
        </Box>
      </Box>

      {/* Gird Icons */}
      <SimpleGrid
     
        columns={[1, 1, 1, 3]}
        spacing={10}
        padding={"2rem"}
      >

        {/* Box 1 */}
        <Box
        ref={box1}
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          textAlign={"center"}
          py={"2.5rem"}
          px={['.5rem','.5rem','2rem']}
          gap={"1.5rem"}
        >
          <Box fontSize={"5rem"}>
            <PiFlowerLotusBold color={theme.colors.col.secondary} />
          </Box>
          <Box>
             <Box fontSize={'1.5rem'} color={theme.colors.col.secondary}   fontWeight={'bold'}>Spiritual Retreats</Box>
            <Text mt={'1rem'}>
              Enter the Spiritual Domain. Discover the Mysteries of the Self.
            </Text>
          </Box>
        </Box>
        
        {/* Box 2 */}
        <Box
         ref={box2}
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          py={"2.5rem"}
          px={['.5rem','.5rem','2rem']}
          textAlign={"center"}
          gap={"1.5rem"}
        >
          <Box fontSize={"5rem"}>
            <AiOutlineGlobal color={theme.colors.col.secondary}/>
          </Box>
          <Box>
          <Box fontSize={'1.5rem'} color={theme.colors.col.secondary} fontWeight={'bold'}>Web Events</Box>
            <Text mt={'1rem'}>Sit in your place and access Priceless wisdom.</Text>
          </Box>
        </Box>
       
       {/* Box 3 */}
        <Box
         ref={box3}
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          py={"2.5rem"}
          px={['.5rem','.5rem','2rem']}
          textAlign={"center"}
          gap={"1.5rem"}
        >
          <Box fontSize={"5rem"}>
            <TbBulbFilled color={theme.colors.col.secondary}/>
          </Box>
          <Box>
          <Box fontSize={'1.5rem'} color={theme.colors.col.secondary} fontWeight={'bold'}>Clubs</Box>
            <Text mt={'1rem'}>Explore your hidden Skills. Unleash your Talents</Text>
          </Box>
        </Box>

       {/* Box 4 */}
        <Box
         ref={box4}
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          py={"2.5rem"}
          px={['.5rem','.5rem','2rem']}
          textAlign={"center"}
          gap={"1.5rem"}
        >
          <Box fontSize={"5rem"}>
            <FaHeart color={theme.colors.col.secondary} />
          </Box>
          <Box>
          <Box fontSize={'1.5rem'} color={theme.colors.col.secondary} fontWeight={'bold'}>Re-Life Workshops</Box>
            <Text mt={'1rem'}>Discover a new way of living. Enrich your Lifestyle.</Text>
          </Box>
        </Box>
   
       {/* Box 5 */}
        <Box
         ref={box5}
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          py={"2.5rem"}
          px={['.5rem','.5rem','2rem']}
          textAlign={"center"}
          gap={"1.5rem"}
        >
          <Box fontSize={"5rem"}>
            <FaPeopleGroup color={theme.colors.col.secondary} />
          </Box>
          <Box>
          <Box fontSize={'1.5rem'} color={theme.colors.col.secondary} fontWeight={'bold'}>Residency</Box>
            <Text mt={'1rem'}>Reside with Like Minded and Progressive companions.</Text>
          </Box>
        </Box>
         
         {/* Box 6 */}
        <Box
         ref={box6}
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          py={"2.5rem"}
          px={['.5rem','.5rem','2rem']}
          textAlign={"center"}
          gap={"1.5rem"}
        >
          <Box fontSize={"5rem"}>
            <FaMountainSun color={theme.colors.col.secondary} />
          </Box>
          <Box>
          <Box fontSize={'1.5rem'} color={theme.colors.col.secondary} fontWeight={'bold'}>Expeditions</Box>
            <Text mt={'1rem'}>Enter the Divine Realms. Experience the Transcendence.</Text>
          </Box>
        </Box>


      </SimpleGrid>

      
    </Container>
  );
};

export default EmpowerdSection;
