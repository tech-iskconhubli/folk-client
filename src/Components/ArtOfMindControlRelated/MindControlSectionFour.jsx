import React from 'react'
import theme from "../../theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react';
gsap.registerPlugin(ScrollTrigger);


const MindControlSectionFour = () => {
  return (
    <Box width="100%" my={["5rem", "5rem", "7rem", "5rem", "5rem"]}>
    <Container
      w={["100%", "100%", "95%", "95%"]}
      maxW="1500px"
      marginX="auto"
    >
        <Flex w={['100%','100%','90%','100%']} mx={'auto'} flexDirection={['column','column','column','row']} justifyContent={'space-between'} gap={['2rem','2rem','2rem','2.5rem','1rem']} bgColor={'rgb(245,247,248)'} p={['0.5rem','0.5rem','1rem','1.5rem','2rem']}>


        <Box w={['100%','100%','100%','30%','20%']} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                 
                 <Box w={'100%'} h={['360px','450px','510px','250px','300px']} borderRadius={'10px'} overflow={'hidden'}  >
                    <Image w={'100%'} h={'100%'} objectFit={'cover'} borderRadius={'10px'} src='https://ideogram.ai/assets/progressive-image/balanced/response/ch67TORITLmHOpsCCKdztg' />
                 </Box>
              
           </Box>

           <VStack w={['100%','100%','100%','70%','80%']}   alignItems={'flex-start'} gap={['1rem']}  p={['0rem','0','0','0','1.5rem']} borderRadius={'15px'}>
                 <Box fontSize={['1.5rem','1.8rem','1.9rem','2.5rem']} fontWeight={'600'} color={theme.colors.col.secondary}>
                 Influence of Belief Systems on Spiritual Control
                 </Box>
                 <Text lineHeight={['1.8rem','1.9rem','2.1rem','1.8rem','2.5rem']} fontSize={['0.9rem','0.9rem','1rem','0.9rem','1.1rem']} fontWeight={['500']}>
                 Explore how deeply held beliefs and ideologies within spiritual communities can contribute to susceptibility to manipulation. Discuss the impact of rigid doctrines, groupthink, and the reinforcement of specific belief systems on individuals' susceptibility to external influence. Analyze case studies or historical examples where belief systems were used to justify or reinforce spiritual control tactics.
                 </Text>
             </VStack>


            

        </Flex>

        </Container>
     </Box>
  )
}

export default MindControlSectionFour
