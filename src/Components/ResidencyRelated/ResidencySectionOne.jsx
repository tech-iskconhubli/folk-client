import { Box, Button, Container, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import theme from "../../theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const ResidencySectionOne = () => {


    const flexContainerRef = useRef(null);
    const gridContainerOne = useRef(null);
    const gridContainerTwo = useRef(null);
    const gridContainerThree = useRef(null);
    const imageContainerRef = useRef(null);
    const matterContainerRef = useRef(null);
   

    useGSAP(()=>{
         const tl = gsap.timeline({
            scrollTrigger:{
                trigger:flexContainerRef.current,
                start:'top 90%',
                end:'bottom 90%'
            }
         });
         
         tl.from(gridContainerOne.current,{
             scale:0.7,
             opacity:0,
             duration:0.3,
             ease:'power1.inOut'
         })
         tl.from(gridContainerTwo.current,{
             scale:0.7,
             opacity:0,
             duration:0.3,
             ease:'power1.inOut'
         })
         tl.from(gridContainerThree.current,{
             scale:0.7,
             opacity:0,
             duration:0.3,
             ease:'power1.inOut'
         })
         tl.from(imageContainerRef.current,{
             scale:0.7,
             opacity:0,
             duration:0.3,
             ease:'power1.inOut'
         })
         tl.from(matterContainerRef.current,{
             scale:0.7,
             opacity:0,
             duration:0.3,
             ease:'power1.inOut'
         })


         return ()=>{
           tl.kill();
         }

    },[])







  return (
    <Box width="100%" my={["5rem", "5rem", "7rem", "5rem", "10rem"]}>
      <Container
        w={["100%", "100%", "95%", "95%"]}
        maxW="1500px"
        marginX="auto"
      >
        <Flex ref={flexContainerRef} gap={['2rem']} flexDirection={['column','column','column','column','row']}>
             <Box w={['100%','100%','100%','100%','55%']}>
               <SimpleGrid columns={['1','1','2']} spacing={['5']}>

                   <Box ref={gridContainerOne} gridColumn={['auto','auto','span 2']} bgColor={'rgb(245, 247, 248)'} p={'1.5rem'} borderRadius={'10px'} display={'flex'} flexDirection={'column'} gap={['1rem']}>

                      <Box fontSize={['1.5rem','1.5rem','1.5rem']} color={theme.colors.col.secondary} fontWeight={'bold'}> 
                        What Residents Say
                      </Box>


                      <Text lineHeight={['1.8rem','1.8rem','1.8rem']} fontSize={['0.9rem','0.9rem','0.9rem','1rem']}>
                      A real Home away from Home. I had my concerns to stay in Bangalore amidst new people, not because they were bad, but I knew I would absorb their perceptions inadvertently. Now I feel safe at my new home- the FOLK residency, which has given me companions who help me grow in all aspects.
                      </Text>

                      <Box fontSize={['0.9rem','0.9rem','0.9rem','1rem']} fontWeight={'500'}> 
                      – Saurav Singh, Engineer at Wipro,
                      </Box>

                      <Box fontSize={['0.9rem','0.9rem','0.9rem','1rem']} color={theme.colors.col.secondary} fontWeight={'500'}>
                      [Resident of ITPL FOLK Residency]
                      </Box>

                   </Box>


                   <Box ref={gridContainerTwo} bgColor={'rgb(245, 247, 248)'} p={'1.5rem'} borderRadius={'10px'} display={'flex'} flexDirection={'column'} gap={['1rem']}>

                      <Box color={theme.colors.col.secondary} fontSize={['1.5rem','1.5rem','1.5rem']} fontWeight={'bold'} lineHeight={['2rem']}>
                      Benefits of Good Association
                      </Box>

                      
                      <Text fontSize={['0.9rem','0.9rem','0.9rem','1rem']} lineHeight={['1.8rem']}>
                      When one associates or dwells with new friends, one is dragged involuntarily to adopt their lifestyle, language, and mindset, absorb their habits, at times bad ones too. When the same association is directed towards the swan like saintly persons, one will beam with spiritual radiance and will bloom like a lotus. Get a unique opportunity at the FOLK Residency to live with broad-minded individuals with high goals in life.
                      </Text>
                   </Box>


                   <Box ref={gridContainerThree} bgColor={'rgb(245, 247, 248)'} p={'1.5rem'} borderRadius={'10px'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} gap={['1rem']}>

                   <Box color={theme.colors.col.secondary} fontSize={['1.5rem']} fontWeight={'bold'} lineHeight={['2rem']}>
                     Fees and Policies
                     </Box>
                     <Box display={'flex'} flexDirection={'column'} gap={['0.8rem']}>
                        <Text fontSize={['0.9rem','0.9rem','0.9rem','1rem']} lineHeight={['1.8rem']}>
                        At FOLK Residency, we have established a uniform decorum in order to ensure a smooth order for all the residents.
                        </Text>

                         <Text fontSize={['0.9rem','0.9rem','0.9rem','1rem']} lineHeight={['1.8rem']}>
                        We have hence framed certain policies that apply to all the residents and thereby ensure mutual cohesive environment at the residency.
                        </Text>

                         <Text fontSize={['0.9rem','0.9rem','0.9rem','1rem']} lineHeight={['1.8rem']}>
                        The following document will help you understand the basic principles of residency dwelling.
                        </Text>
                     </Box>
                    
                    <Box>
                        <Button colorScheme='orange'> Read More</Button>
                    </Box>

                   </Box>




               </SimpleGrid>
             </Box>



             <Box w={['100%','100%','100%','100%','45%']}  h={'100%'}>
                <Flex flexDirection={'column'} gap={['1rem']}>
                   <Box ref={imageContainerRef} w={['100%']} h={['300px','350px','400px','500px','500px']} borderRadius={'10px'} overflow={'hidden'}>
                     <Image w={'100%'} h={'100%'} borderRadius={'10px'} objectFit={'cover'} src='https://folknet.in/wp-content/uploads/2018/04/Residency-1.jpg' />
                   </Box>

                   <Box ref={matterContainerRef} bgColor={'rgb(245, 247, 248)'} p={['2rem','2rem','2rem','2rem','2.2rem']} borderRadius={'10px'} display={'flex'}  flexDirection={'column'} gap={['1.5rem','1.5rem','1.5rem','1.5rem','2rem']} textAlign={'center'}>
                      <Box fontSize={['1.5rem','2.2rem','2.5rem']} w={['auto','auto','500px','500px','auto']} mx={'auto'}  lineHeight={['2.3rem','3rem']} fontWeight={'bold'} color={theme.colors.col.secondary} >
                      Get Set for an Exciting Journey.
                      </Box>
                      <Text   fontSize={['0.9rem','1.1rem','1.1rem','1.1rem','1.2rem']} w={['auto','auto','500px']} mx={'auto'}>
                      Contact our Residency coordinator and visit the nearest residency NOW !
                      </Text>
                   </Box>
                </Flex>
             </Box>
        </Flex>

        </Container>
    </Box>
  )
}

export default ResidencySectionOne
