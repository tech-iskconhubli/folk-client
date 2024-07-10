import { Box, Container, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import theme from "../../theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FestivalOverView = () => {


  const textContainerRef = useRef(null);

  useGSAP(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:textContainerRef.current,
          start:'top 90%',
          end:'bottom 90%'
        }
      });
      tl.from(textContainerRef.current,{
        scale:0,
         opacity:0,
         duration:0.5
      })
      tl.from(textContainerRef.current.children,{
          x:'-100',
          opacity:0,
          duration:0.5,
          stagger:0.3,
          ease:'power1.inOut'
      });

      return ()=>{
        tl.kill();
      }
  },[])


  return (
    <Box width="100%" my={["5rem", "5rem", "7rem", "5rem",'5rem']}>
    <Container
      w={["100%", "100%", "100%", "90%"]}
      maxW="1300px"
      marginX="auto"
      overflowX={"hidden"}
    >
              <Box p={['0','0','0','0','1.5rem']} w={'100%'}>

                  <Box ref={textContainerRef} borderLeft={['','','','','5px solid orange']} py={['0.5rem']} px={['1rem','1.5rem','2rem']} display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={['1rem','1.5rem']}>
                     <Box fontSize={['2rem']} color={theme.colors.col.secondary} fontWeight={'bold'}>
                         Overview
                     </Box>
                     <Text wordBreak={'break-word'} lineHeight={['1.6rem','1.6rem','2rem','2.5rem']} fontSize={['0.9rem','1rem','1.1rem']}>
                     Hinduism, one of the world's oldest religions, celebrates a diverse array of festivals throughout the year. These festivals, deeply rooted in mythology and tradition, serve as occasions for spiritual renewal, community bonding, and cultural expression. From Diwali, the Festival of Lights symbolizing the victory of good over evil, to Holi, the Festival of Colors marking the arrival of spring with joyous revelry, each festival holds unique significance. They honor various deities, commemorate mythological events, and emphasize values such as compassion, devotion, and the pursuit of righteousness. Through rituals, prayers, and festive gatherings, Hindu festivals strengthen family ties, promote unity among communities, and preserve the rich cultural heritage of India.
                     </Text>
                  </Box>
              </Box>
         </Container>
     </Box>
  )
}

export default FestivalOverView
