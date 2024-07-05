import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import theme from "../../theme";
import { useTheme } from "@emotion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const OurMissionSection = () => {


    const flexContainerRef = useRef(null);
    const BoxOneImage = useRef(null);
    const BoxTwoMatter = useRef(null);
    
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:flexContainerRef.current,
                start:'top 90%',
                end:'bottom 90%'
            }
        });

        tl.from(BoxOneImage.current,{
             scale:0,
             opacity:0,
             duration:0.5,
             ease: "power1.inOut",
        })

        tl.from(BoxTwoMatter.current.children,{
             x:100,
             duration:0.5,
             stagger:0.3,
             opacity:0,
             ease: "power1.inOut",
        })

        return ()=>{
             tl.kill();
        }



    },[])

  return (
    <Box width="100%" my={["2rem", "2rem", "2rem", "5rem"]} mt={{xl:'25rem'}}>
    <Container
      w={["100%", "100%", "90%", "90%"]}
      maxW="1500px"
      marginX="auto"
      overflowX={"hidden"}
    >
         <Flex ref={flexContainerRef} w={'100%'} flexDirection={['column','column','row']} justifyContent={'space-between'} p={['0','0','1rem','1rem','2rem']} gap={['1rem']}>


            {/* Box One  */}
              <Box ref={BoxOneImage} w={['100%','80%','50%','50%','48%']} mx={'auto'}>
                  <Box w={'100%'} h={['200px','300px','350px','300px','350px']}>
                       <Image objectFit={'cover'} objectPosition={'center'} w={'100%'} h={'100%'} src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                  </Box>
              </Box>


            {/* Box Two */}
              <Box ref={BoxTwoMatter} w={['100%','80%','50%','50%','48%']} mx={'auto'} textAlign={'left'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} gap={['1rem','1rem','1rem','0']}>

                {/* Heading */}
                <Box>
                     <Box color={theme.colors.col.secondary} fontSize={['0.9rem','0.9rem','0.9rem','0.9rem','1rem']} fontWeight={'bold'}>OUR MISSIONS.</Box>
                     <Box fontSize={['2rem','2.1rem','2rem','2.2rem','2.5rem']} fontWeight={'600'} lineHeight={['2.8rem','2.8rem','2.8rem','2.8rem','3.5rem']} maxW={['500px']}>
                         Support People in Extreme Need
                     </Box>
                </Box>


                    {/* Sub Heading  */}
                     <Box fontSize={['1rem','1.1rem','1rem','1rem','1.4rem']} fontWeight={'600'}>
                        Our promise that your giving is doing what it's supposed to changing lives.
                     </Box>
                     {/* Matter */}
                     <Text fontSize={['0.9rem','1rem','0.9rem','0.9rem','1rem']}>
                        We go to the extent of meeting the actual people that the nonprofits serve.Yes,they sometimes live i remote villages,but that doesn't stop us because because we take our promise to bring you truthworthy options very seriously.
                     </Text>
                </Box>
         </Flex>
         </Container>
     </Box>
  )
}

export default OurMissionSection
