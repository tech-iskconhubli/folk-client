import { Box, Container, Flex, Image } from "@chakra-ui/react";
import theme from "../../theme";
import { useTheme } from "@emotion/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const HelpingSection = () => {

    const flexContainerRef = useRef(null);
    const BoxOneHeadingRef = useRef(null);
    const BoxOneImageRef = useRef(null);
    const BoxOneImgRef = useRef(null);
    const BoxTwoRef = useRef(null);
      

    useGSAP(()=>{
         const tl = gsap.timeline({
            scrollTrigger:{
                trigger:flexContainerRef.current,
                start:'top 90%',
                end:'bottom 90%'
            }
         });

         tl.from(BoxOneImageRef.current,{
             scale:0,
             opacity:0,
             duration:0.5,
             ease: "power1.inOut",
         });
         tl.from(BoxOneImgRef.current,{
             scale:0,
             opacity:0,
             duration:0.4,
             ease: "power1.inOut",
         });
         tl.from(BoxOneHeadingRef.current,{
             x:'100',
             opacity:0,
             duration:0.5,
             ease: "power1.inOut",
         });

         tl.from(BoxTwoRef.current.children,{
            x:100,
            duration:0.5,
            ease: "power1.inOut",
            stagger:0.3,
            opacity:0
         });



         return ()=>{
             tl.kill();
         }

    },[])

 





  return (
    <Box width="100%" my={["4rem", "2rem", "2rem", "5rem"]}>
      <Container
        w={["100%", "100%", "90%", "90%"]}
        maxW="1500px"
        marginX="auto"
       
      >
        <Flex
          w={"100%"}
          flexDirection={['column','column','row']}
          justifyContent={"space-between"}
           h={['auto','auto','auto','500px']}
           gap={['1rem','1rem','1rem','1.5rem','1rem']}
           p={['0','0','1rem']}
           ref={flexContainerRef}
        >

            {/* Box One */}
          <Box w={['100%','80%','50%','50%','48%']} mx={'auto'} position={'relative'} >
          

          {/* Heading */}
            <Box ref={BoxOneHeadingRef} color={theme.colors.col.secondary} textAlign={['left','left','left','left','right']} display={['inline-block','inline-block','none','inline-block']} position={['relative','relative','relative','relative','absolute']} right={['','','','','20%']} top={['','','','','9%']} zIndex={'10'}>
              <Box fontSize={['3rem','3rem','3rem','4rem','5rem']} fontWeight={'bold'} lineHeight={['2rem','2rem','2rem','3rem','4rem']}>1995</Box>
              <Box fontWeight={'bold'} fontSize={['0.7rem','0.7rem','0.7rem','0.9rem','1rem']} letterSpacing={['.1rem']}>HELPING SINCE</Box>
            </Box>
            
            {/* Box One Image */}
            <Box ref={BoxOneImageRef} display={['none','none','none','block']} w={['100%','100%','100%','250px','350px']} h={["300px",'350px','300px','250px','400px']} position={['relative','relative','relative','absolute']} top={['','','','15%','20%']} left={['','','','0','15%']}>
              <Image
                objectFit={"cover"}
                objectPosition={'center'}
                w={"100%"}
                h={"100%"}
                 src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Box>
           
             {/* Box Two Image */}
            <Box ref={BoxOneImgRef} w={["100%",'100%','100%','250px','350px']} h={["300px",'350px','300px','250px','400px']} zIndex={'10'} position={['relative','relative','relative','absolute']} top={['','','','50%','70%']} left={['','','','40%','50%']}>
              <Image
               objectFit={"cover"}
               objectPosition={'center'}
                w={"100%"}
                h={"100%"}
                 src="https://images.unsplash.com/photo-1494386346843-e12284507169?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhlbHBpbmclMjBoYW5kc3xlbnwwfHwwfHx8MA%3D%3D"
              
              />
            </Box>
          </Box>
         

         {/* Box Two  */}
          <Box ref={BoxTwoRef} w={['100%','80%','50%','50%','48%']} mx={'auto'} display={'flex'} flexDirection={'column'}  justifyContent={['center','center','space-between','center','center']} px={['0.5rem','0','0','0','2rem']} py={['0.5rem']} gap={['0.5rem','0.5rem','0','0.5rem','1rem']}>
          
          {/* Box Two heading */}
          <Box color={theme.colors.col.secondary} textAlign={['left']} display={['none','none','inline-block','none']} position={['relative']} right={['']} top={['']} zIndex={'10'}>
              <Box fontSize={['3rem']} fontWeight={'bold'} lineHeight={['2rem']}>1995</Box>
              <Box fontWeight={'bold'} fontSize={['0.7rem']} letterSpacing={['.1rem']}>HELPING SINCE</Box>
            </Box>
           
           {/* Box Two Heading */}
            <Box fontSize={['1.5rem','1.8rem','1.8rem','2.5rem','3rem']} w={['auto','auto','auto','400px','500px']} textAlign={'left'} lineHeight={['','2.5rem','2.5rem','3.5rem','4rem']} fontWeight={'bold'}>We are stronger when united!</Box>
            
            {/* Box Two Matter */}
            <Box fontSize={['0.9rem','1rem']}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
              deleniti iusto id possimus itaque natus minus corporis veritatis,
              quidem labore.
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default HelpingSection;
