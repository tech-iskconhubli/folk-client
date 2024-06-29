import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useTheme } from "@emotion/react";
import theme from "../../theme";
import { GiJusticeStar } from "react-icons/gi";
import { GiFlowerStar } from "react-icons/gi";
import { GiPolarStar } from "react-icons/gi";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);


const WelcomSection = () => {

  const flexContainer = useRef(null);
  const flexBoxOne = useRef(null);
  const flexBoxTwo = useRef(null);
  const gridBox = useRef(null)


  useGSAP(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:flexContainer.current,
          start:'top 90%',
          end:'bottom center'
        }
      });

      tl.from(flexBoxOne.current.children,{
         x:-100,
         opacity:0,
         duration:0.9,
         stagger:0.6,
         ease:'power1.inOut'
      });
      tl.from(flexBoxTwo.current.children,{
         x:100,
         opacity:0,
         duration:0.9,
         stagger:0.6,
          ease:'power1.inOut'
      });

      return () => {
        tl.kill();
      };
 

  },[])
 
  useGSAP(()=>{
     const tl = gsap.timeline({
      scrollTrigger:{
        trigger:gridBox.current,
        start:'top 90%',
        end:'bottom center'
      }
     });

     tl.from(gridBox.current.children,{
        scale:0,
        opacity:0,
        duration:1,
        stagger:0.5,
        ease:'power1.inOut'
     });

     return () => {
      tl.kill();
    };


  },[])




  return (
    <Box width={'100%'} overflowX={'hidden'} my={['1rem','1rem','2rem', '3rem']}>
      <Container
        w={["100%", "100%", "90%", "90%"]}
        maxW="1500px"
        marginX="auto"
       
      >
        <Flex ref={flexContainer} flexDirection={['column','column','row']} justifyContent={"space-between"} py={['2rem','2rem','2rem','2rem']} px={['1rem','1rem','1rem','1rem','2rem']} gap={['1rem','1rem','1rem','1rem',0]}>
          <Box  ref={flexBoxOne} width={['100%','100%','50%','50%','47%']} textAlign={['center','center','left']} alignItems={'start'}>
            <Box
           
              fontWeight={"bold"}
              letterSpacing={".25rem"}
              color={theme.colors.col.secondary}
              fontSize={['0.9rem']}
            >
              WELCOME
            </Box>
            <Box mt={['0.7rem']} fontSize={['1.3rem','1.6rem','1.8rem','2.5rem','3rem']} maxW={'500px'} fontWeight={"bold"} lineHeight={['auto','auto','2.5rem','3rem','3.5rem']}>
              Experience Yoga at Our Vihara Ashram Studio
            </Box>
          </Box>


          <Box
           ref={flexBoxTwo}
            width={['100%','100%','50%','50%','47%']}
            display={"flex"}
            flexDirection={"column"}
            gap={['0.8rem','0.8rem','0.5rem','0.5rem','2.5rem']}
          >
            <Text fontSize={['0.9rem','1rem','0.9rem','1rem','1.1rem']}>
              we are happy to see newcomers at any of our yoga and meditation
              classes. Join the community to participate in the center's life
              and the discussion club.
            </Text>
            <Text fontSize={['0.9rem','1rem','0.9rem','1rem','1.1rem']}>
              Story at the Ashram and immerse yourself in our wonderful yogic
              lifestyle program with other like minded members.
            </Text>
          </Box>
        </Flex>

        <SimpleGrid ref={gridBox} my={"2rem"} columns={['1','1','3']} spacing={['10','10','4']}>
          <VStack
          w={['100%','66%','auto']}
          mx={'auto'}
            bg={theme.colors.col.secondary}
            py={['2rem','2.5rem','2rem','2rem','2.5rem']}
            px={['1.5rem','1.4rem','1rem','1rem','3rem']}
            gap={"1rem"}
            textAlign={"center"}
            
          >
            <Box color={"white"}  fontSize={['5rem','4rem','4rem','4rem','5rem']}>
              <GiJusticeStar />
            </Box>
            <Box color={"white"} fontSize={['2rem','1.5rem','1.5rem','1.5rem','2rem']} fontWeight={"bold"}>
              Ashram
            </Box>
            <Text fontSize={['0.9rem','0.9rem','0.8rem','0.8rem','1rem']}>
              A spiritual hermitage in green valley's of the mountain's where
              you can see millions of stars at night.
            </Text>
          </VStack>

          <VStack
           w={['100%','66%','auto']}
              mx={'auto'}
            bg={theme.colors.col.secondary}
            py={['2rem','2.5rem','2rem','2rem','2.5rem']}
            px={['1.5rem','1.4rem','1rem','1rem','3rem']}
            gap={"1rem"}
            textAlign={"center"}
          
          >
           <Box color={"white"} fontSize={['5rem','4rem','4rem','4rem','5rem']}>
              <GiFlowerStar />
            </Box>
            <Box color={"white"} fontSize={['2rem','1.5rem','1.5rem','1.5rem','2rem']} fontWeight={"bold"}>
              Get Involved
            </Box>
            <Text fontSize={['0.9rem','0.9rem','0.8rem','0.8rem','1rem']}>
              Our Community is activiely involved in the life of that require
              support on a regular basis.
            </Text>
          </VStack>

          <VStack
           w={['100%','66%','auto']}
              mx={'auto'}
            bg={theme.colors.col.secondary}
            py={['2rem','2.5rem','2rem','2rem','2.5rem']}
            px={['1.5rem','1.4rem','1rem','1rem','3rem']}
            gap={"1rem"}
            textAlign={"center"}
           
          >
           <Box color={"white"} fontSize={['5rem','4rem','4rem','4rem','5rem']}>
              <GiPolarStar />
            </Box>
            <Box color={"white"} fontSize={['2rem','1.5rem','1.5rem','1.5rem','2rem']} fontWeight={"bold"}>
              Donation
            </Box>
            <Text fontSize={['0.9rem','0.9rem','0.8rem','0.8rem','1rem']}>
              We appreciate your contribution to the donating programs and will
              happily accept any help we can get.
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default WelcomSection;
