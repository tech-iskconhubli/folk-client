import React from 'react'
import theme from "../../theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react';
gsap.registerPlugin(ScrollTrigger);


const MindControlSectionOne = () => {
  return (
    <Box width="100%" my={["5rem", "5rem", "7rem", "5rem", "5rem"]}>
    <Container
      w={["100%", "100%", "95%", "95%"]}
      maxW="1500px"
      marginX="auto"
    >
        <Flex w={['100%','100%','90%','100%']} mx={'auto'} flexDirection={['column-reverse','column-reverse','column-reverse','row']} justifyContent={'space-between'} gap={['2rem','2rem','2rem','2.5rem','1rem']} bgColor={'rgb(245,247,248)'} p={['0.5rem','0.5rem','1rem','1.5rem','2rem']}>

             <VStack w={['100%','100%','100%','70%','80%']}   alignItems={'flex-start'} gap={['1rem']}  p={['0rem','0','0','0','1.5rem']} borderRadius={'15px'}>
                 <Box fontSize={['1.5rem','1.8rem','1.9rem','2.5rem']} fontWeight={'600'} color={theme.colors.col.secondary}>
                  Understanding Mind Control
                 </Box>
                 <Text lineHeight={['1.8rem','1.9rem','2.1rem','1.8rem','2.5rem']} fontSize={['0.9rem','0.9rem','1rem','0.9rem','1.1rem']} fontWeight={['500']}>
                 Mind control refers to the covert manipulation of an individual's thoughts, behavior, or emotions, often through psychological techniques or external influences. Historically, mind control has been associated with propaganda campaigns, cult practices, and covert government experiments. In modern contexts, it extends to advertising, social media algorithms, and even advanced neurotechnologies. Understanding the mechanisms behind mind control involves studying cognitive biases, persuasion techniques, and the psychological vulnerabilities that make individuals susceptible to manipulation.
                 </Text>
             </VStack>


             <Box w={['100%','100%','100%','30%','20%']} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                 
                   <Box w={'100%'} h={['360px','450px','510px','250px','300px']} borderRadius={'10px'} overflow={'hidden'}  >
                      <Image w={'100%'} h={'100%'} objectFit={'cover'} borderRadius={'10px'} src='https://ideogram.ai/assets/progressive-image/balanced/response/9Q6jEveCT267_Kyj0kJlrw' />
                   </Box>
                
             </Box>

        </Flex>

        </Container>
     </Box>
  )
}

export default MindControlSectionOne
