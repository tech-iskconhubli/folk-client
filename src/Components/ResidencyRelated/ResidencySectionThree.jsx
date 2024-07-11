import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React, { useRef } from "react";
import theme from "../../theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ResidencySectionThree = () => {
     const flexContainerRef = useRef(null);

    useGSAP(()=>{
        const tl = gsap.timeline({
          scrollTrigger:{
            trigger:flexContainerRef.current,
            start:'top 90%',
            end:'bottom 90%'
          }
        });

        tl.from(flexContainerRef.current.children,{
           scale:0.7,
           duration:0.5,
           opacity:0,
           stagger:0.3,
           ease:'power1.inOut'
        })
    })




  return (
    <Box width="100%" my={["5rem", "5rem", "7rem", "5rem", "10rem"]}>
      <Container
        w={["100%", "100%", "95%", "95%"]}
        maxW="1500px"
        marginX="auto"
      >
        <Flex ref={flexContainerRef} flexDirection={['column','column','column','row']} gap={['2rem']} justifyContent={'space-between'}>

          <Box w={['100%','100%','100%','60%']} h={['auto','auto','auto','450px']} borderRadius={'10px'} p={['1.5rem']} bgColor={'rgb(245, 247, 248)'}>
              <VStack gap={['1rem']} justifyContent={'space-around'} h={'100%'} alignItems={'flex-start'}>
                <Box fontSize={['1.5rem','2rem']} fontWeight={'bold'} color={theme.colors.col.secondary}>
                LIFE = LifeStyle. Period.
                </Box>
                 
                 <Text fontSize={['0.9rem','1rem']} lineHeight={['1.7rem','2rem','1.7rem','1.7rem','2.5rem']}>
                 The way we live defines our personality. Unless enforced, or unless someone is heavily self-driven, the natural lifestyle a youngster lives is adorned with clumsiness. If our surroundings are neat, our mind will also function in an organized fashion.   
                 </Text>

                 <Text fontSize={['0.9rem','1rem']} lineHeight={['1.7rem','2rem','1.7rem','1.7rem','2.5rem']}>
                 At the Residency, the residents are trained to culture a refined ambience, notwithstanding their past. The mind is trained to gain sensitivity to cleanliness; both of the surroundings and the mind. Hygiene, health and spiritual progress emerge as a natural effect. One can actualize endless rewards of immaculate dwelling and a pristine heart.
                 </Text>
              </VStack>
          </Box>
          <Box w={['100%','100%','100%','40%']} borderRadius={'10px'} >
             <Box w={'100%'} h={['300px','400px','450px','450px'] } borderRadius={'10px'} overflow={'hidden'}>
                  <Image w={'100%'} h={'100%'} borderRadius={'10px'} objectFit={'cover'} src="https://folknet.in/wp-content/uploads/2018/04/FOlk-Residency-1.jpg" />
             </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ResidencySectionThree;
