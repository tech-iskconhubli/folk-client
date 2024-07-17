import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useTheme } from "@emotion/react";
import theme from "../../theme";
import '../../Styles/TimeLine.css';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);


const TimeLIneSection = () => {

   const headingBox = useRef(null);

    const BoxOneContainer = useRef(null);
    const DotOne = useRef(null);
    const imageOne = useRef(null)
    const matterContainerOne = useRef(null);

    const BoxTwoContainer = useRef(null);
    const DotTwo = useRef(null);
    const imageTwo = useRef(null)
    const matterContainerTwo = useRef(null);

    const BoxThreeContainer = useRef(null);
    const DotThree = useRef(null);
    const imageThree = useRef(null)
    const matterContainerThree = useRef(null);


    useGSAP(()=>{
       const tl = gsap.timeline({
        scrollTrigger:{
          trigger:headingBox.current,
          start:'top 90%',
          end:'bottom center'
        }
       });


       tl.from(headingBox.current.children,{
        y:100,
        opacity:0,
        duration:0.5,
        stagger:0.4,
     });
     return () => {
       tl.kill();
     };


    },[])

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:BoxOneContainer.current,
                start:'top 90%',
                end:'bottom center'
            }
        });

        tl.from(DotOne.current,{
            opacity:0,
            y:'-150',
            duration:0.5
        });
        tl.from(imageOne.current,{
             opacity:0,
             scale:0,
             duration:0.5
        });
        tl.from(matterContainerOne.current.children,{
             opacity:0,
             y:'-80',
             duration:0.5,
             stagger:0.3
        })

        return () => {
            tl.kill();
          };
    },[])
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:BoxTwoContainer.current,
                start:'top 90%',
                end:'bottom center'
            }
        });

        tl.from(DotTwo.current,{
            opacity:0,
            y:'-150',
            duration:0.5
        });
        tl.from(imageTwo.current,{
             opacity:0,
             scale:0,
             duration:0.5
        });
        tl.from(matterContainerTwo.current.children,{
             opacity:0,
             y:'-80',
             duration:0.5,
             stagger:0.3
        })

        return () => {
            tl.kill();
          };
    },[])
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:BoxThreeContainer.current,
                start:'top 90%',
                end:'bottom center'
            }
        });

        tl.from(DotThree.current,{
            opacity:0,
            y:'-150',
            duration:0.5
        });
        tl.from(imageThree.current,{
             opacity:0,
             scale:0,
             duration:0.5
        });
        tl.from(matterContainerThree.current.children,{
             opacity:0,
             y:'-80',
             duration:0.5,
             stagger:0.3
        })

        return () => {
            tl.kill();
          };
    },[])
   
  return (
    <Box w={'100%'} overflowX={'hidden'} mmy={['1rem','1rem','2rem', '3rem']}>
      <Container
        w={["100%", "100%", "90%", "90%"]}
        maxW="1500px"
        marginX="auto"
        my={'2rem'}
      >
        <Box textAlign={"center"}  ref={headingBox}>
          <Box
           fontSize={['0.9rem']}
            fontWeight={"bold"}
            letterSpacing={".25rem"}
            color={theme.colors.col.secondary}
          >
            PROGRAMS
          </Box>
          <Box mt={['0.7rem']} maxW={'700px'} fontSize={['1.2rem','1.6rem','2rem',]} fontWeight={"bold"} lineHeight={['auto',]} w={['auto','450px']} mx={'auto'}>
            Meditation, Yoga, Retreats, Free Programs & More...
          </Box>
        </Box>


        <Flex width={'100%'}  className="timeLine" direction={['column']} gap={['0.5rem','0.5rem','1rem','1rem','1rem']} my={['1rem','1rem','1rem','2rem']}>


         {/* Box one Container */}
        <Box ref={BoxOneContainer} w={['90%','70%','100%']} mx={'auto'} display={'flex'} flexDirection={['column','column','row']} alignItems={'start'} justifyContent={'space-between'} py={['1rem','1rem','1rem','1rem','2rem']}>

            {/* Dot */}
            <Box ref={DotOne} w={'15px'} h={'15px'} borderRadius={'50%'} bg={theme.colors.col.secondary} position={'absolute'} top={'2%'} left={['0','10%','50%']} ml={'-7px'}></Box>

            {/* Image One Container */}
            <Box ref={imageOne} w={['100%','100%','48%']} h={['200px','300px','210px','210px','300px']}>
              <Image
              w={'100%'}
              h={'100%'}
              objectFit={'cover'}
                src="https://images.unsplash.com/photo-1559595500-e15296bdbb48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaXRhdGlvbiUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </Box>

            {/* Matter Container  */}
            <VStack mt={['1rem','1rem','0']} ref={matterContainerOne} gap={['0.8rem','0.8rem','0.7rem','0.7rem','1rem']} alignItems={'start'} w={['100%','100%','48%']} >
              <Box color={theme.colors.col.secondary} fontWeight={'bold'} w={['auto','auto','auto','auto','450px']} fontSize={['1.4rem','1.8rem','1.5rem','2rem','2.5rem']}>The Happiness Program</Box>
              <Text fontSize={['0.8rem','1rem']} lineHeight={['1.5rem','1.8rem','1.8rem','1.9rem','2rem']}>
                The practiacal knowledge of breathing teachniques gives you
                balance and wisdom that will transform your life by unlocking
                the true potential of your mind and soul by brining them
                fullness.
              </Text>
            </VStack>
          </Box>

          {/* Box Two Container */}
          <Box ref={BoxTwoContainer} w={['90%','70%','100%']} mx={'auto'} display={'flex'} flexDirection={['column-reverse','column-reverse','row']} alignItems={'start'} justifyContent={'space-between'} py={['1rem','1rem','1rem','1rem','2rem']}>
            {/* DotTwo */}
          <Box ref={DotTwo} w={'15px'} h={'15px'} borderRadius={'50%'} bg={theme.colors.col.secondary} position={'absolute'} top={'38%'} left={['0','10%','50%']} ml={'-7px'}></Box>

          <VStack mt={['1rem','1rem','0']} ref={matterContainerTwo} gap={['0.8rem','0.8rem','0.7rem','0.7rem','1rem']} alignItems={['start','start','end']} w={['100%','100%','48%']} >

          <Box color={theme.colors.col.secondary} fontWeight={'bold'} w={['auto','auto','auto','auto','450px']} fontSize={['1.4rem','1.8rem','1.5rem','2rem','2.5rem']} textAlign={['left','left','right']}>Sahaj Samadhi Meditation</Box>
          <Text fontSize={['0.8rem','1rem']} lineHeight={['1.5rem','1.8rem','1.8rem','1.9rem','2rem']}>
                The state of samadhi will help you experience deep inner peace
                as well as increase self-awareness. It's really easy to become
                fully poticient.
              </Text>
            </VStack>
            <Box ref={imageTwo} w={['100%','100%','48%']} h={['200px','300px','210px','300px']}>
              <Image
              w={'100%'}
              h={'100%'}
              objectFit={'cover'}
                src="https://images.unsplash.com/photo-1611800065908-233b597db552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhaGFqJTIwc2FtYWRoaSUyMG1lZGl0YXRpb258ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </Box>
          </Box>


         {/* Box Three Container */}
          <Box ref={BoxThreeContainer} w={['90%','70%','100%']} mx={'auto'} display={'flex'}  flexDirection={['column','column','row']} alignItems={'start'} justifyContent={'space-between'} py={['1rem','1rem','1rem','1rem','2rem']}>
            {/* DotThree */}
          <Box ref={DotThree} w={'15px'} h={'15px'} borderRadius={'50%'} bg={theme.colors.col.secondary} position={'absolute'} top={'72%'} left={['0','10%','50%']} ml={'-7px'}></Box>

          <Box   ref={imageThree} w={['100%','100%','48%']} h={['200px','300px','210px','300px']}>
              <Image
              w={'100%'}
              h={'100%'}
              objectFit={'cover'}
                src="https://plus.unsplash.com/premium_photo-1676111266245-7c8822d29a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9yZCUyMGtyaXNobmF8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </Box>

            <VStack mt={['1rem']} ref={matterContainerThree} gap={['0.8rem','0.8rem','0.7rem']} alignItems={'start'} w={['100%','100%','48%']} >
            <Box color={theme.colors.col.secondary} fontWeight={'bold'} w={['auto','auto','auto','auto','450px']} fontSize={['1.4rem','1.8rem','1.5rem','2rem','2.5rem']}>Advanced Meditation Program</Box>
            <Text fontSize={['0.8rem','1rem']} lineHeight={['1.5rem','1.8rem','1.8rem','1.9rem','2rem']}>
              For an extrodinary sence of peace ,go beyond your habitual active mind.Get renewed vitality with the help of our guided meditation processos.</Text>
            </VStack>
          </Box>


        </Flex>
      </Container>
    </Box>
  );
};

export default TimeLIneSection;
