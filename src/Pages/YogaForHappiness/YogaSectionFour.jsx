import { Box, Container, Image, SimpleGrid } from "@chakra-ui/react";
import theme from "../../theme";
import { useTheme } from "@emotion/react";
import React, { useRef } from "react";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);

const YogaSectionFour = () => {

        const boxOne = useRef(null);
        const gridContainer = useRef(null);

       
       
        const imageRefOne = useRef(null);
        const textRefContainerOne  = useRef(null);
       
        const imageRefTwo = useRef(null);
        const textRefContainerTwo  = useRef(null);
       
        const imageRefThree = useRef(null);
        const textRefContainerThree  = useRef(null);
       
        const imageRefFour = useRef(null);
        const textRefContainerFour  = useRef(null);
      

        useGSAP(()=>{
          const tl = gsap.timeline({
           scrollTrigger:{
             trigger:boxOne.current,
             start:'top 90%',
             end:'bottom center'
           }
          });

          tl.from(boxOne.current.children,{
             y:100,
             opacity:0,
             duration:0.8,
             stagger:0.4
          })
       },[]);

       useGSAP(()=>{
          const tl = gsap.timeline({
           scrollTrigger:{
             trigger:gridContainer.current,
             start:'top 90%',
             end:'bottom center'
           }
          });

          tl.from(gridContainer.current.children,{
            scale:0,
            opacity:0,
            duration:0.6,
            stagger:0.4
          })
       },[])


        useGSAP(()=>{
           const imageOne = imageRefOne.current;
           const textOverlayOne = textRefContainerOne.current

           const imageTwo = imageRefTwo.current;
           const textOverlayTwo = textRefContainerTwo.current;

           const imageThree = imageRefThree.current;
           const textOverlayThree = textRefContainerThree.current;

           const imageFour = imageRefFour.current;
           const textOverlayFour = textRefContainerFour.current;
           
           const tl1 = gsap.timeline({paused:true});
           const tl2 = gsap.timeline({paused:true});
           const tl3 = gsap.timeline({paused:true});
           const tl4 = gsap.timeline({paused:true});
           tl1.to(textOverlayOne,{opacity:1,duration:0.5});
           tl2.to(textOverlayTwo,{opacity:1,duration:0.5});
           tl3.to(textOverlayThree,{opacity:1,duration:0.5});
           tl4.to(textOverlayFour,{opacity:1,duration:0.5});

           imageOne.addEventListener('mouseenter', () => {
            tl1.play();
            console.log('mouse enter')
          });
          imageOne.addEventListener('mouseleave', () => {
            tl1.reverse();
            console.log('mouse leave')
          });


          imageTwo.addEventListener('mouseenter', () => {
            tl2.play();
            console.log('mouse enter')
          });
          imageTwo.addEventListener('mouseleave', () => {
            tl2.reverse();
            console.log('mouse leave')
          });


          imageThree.addEventListener('mouseenter', () => {
            tl3.play();
            console.log('mouse enter')
          });
          imageThree.addEventListener('mouseleave', () => {
            tl3.reverse();
            console.log('mouse leave')
          });


          imageFour.addEventListener('mouseenter', () => {
            tl4.play();
            console.log('mouse enter')
          });
          imageFour.addEventListener('mouseleave', () => {
            tl4.reverse();
            console.log('mouse leave')
          });




          return () => {
            imageOne.removeEventListener('mouseenter', () => {});
            imageOne.removeEventListener('mouseleave', () => {});

            imageTwo.removeEventListener('mouseenter', () => {});
            imageTwo.removeEventListener('mouseleave', () => {});

            imageThree.removeEventListener('mouseenter', () => {});
            imageThree.removeEventListener('mouseleave', () => {});

            imageFour.removeEventListener('mouseenter', () => {});
            imageFour.removeEventListener('mouseleave', () => {});
          };
        },[])
     
       


  return (
    <Box width="100%" my={["2rem", "2rem", "2rem", "5rem"]} overflow={'hidden'}>
      <Container
        w={["100%", "100%", "90%", "90%"]}
        maxW="1500px"
        marginX="auto"
      >
        <Box
         ref={boxOne}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          my={["2rem", "2rem", "2rem", "2rem", "2.5rem"]}
          gap={["8px"]}
        >
          <Box
            fontSize={[".7rem", "1rem"]}
            color={theme.colors.col.secondary}
            fontWeight={"bold"}
          >
            WATCH AND LISTEN
          </Box>
          <Box
            px={[".55rem"]}
            fontSize={["1.4rem", "2.5rem", "2.5rem", "3rem"]}
            fontWeight={"600"}
            maxW={"700px"}
            minW={"320px"}
            textAlign={"center"}
            lineHeight={["", "3.5rem"]}
          >
            THE BENEFITS OF JOINING OUR RECENT EVENTS
          </Box>
        </Box>

        <Box>
          <SimpleGrid ref={gridContainer} w={'100%'} columns={['1','1','4']} spacing={['5']}>
          <Box  ref={imageRefOne} w={['100%','100%','160px','210px','300px','350px']} h={['auto','550px','250px','300px','350px','400px']} position={'relative'}>
              <Image
              
               objectFit={'cover'}
               objectPosition={['center','center']}
               display={'block'}
                w={"100%"}
                h={"100%"}
                src="https://images.unsplash.com/photo-1629780595644-51ae076d8396?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vbmt8ZW58MHx8MHx8fDA%3D"
              />
             
             <Box ref={textRefContainerOne} opacity={'0'} width={'100%'} h={'100%'} position={'absolute'} inset={'0'} display={'flex'} alignItems={'end'}>
                  <Box  bgGradient={'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,162,0,0.80) 0%, rgba(255,162,0,0.80) 100%)'} p={'1rem'} fontWeight={'600'} width={'100%'} fontSize={['1.5rem']} color={'white'}>WATCH AND LISTEN TO OUR SERMONS</Box>
              </Box>
    
            </Box>


              <Box ref={imageRefTwo} w={['100%','100%','160px','210px','300px','350px']} h={['auto','550px','250px','300px','350px','400px']} position={'relative'}>
              <Image
               objectFit={'cover'}
               objectPosition={['center','center']}
                w={"100%"}
                h={"100%"}
                src="https://images.unsplash.com/photo-1610978710007-758ad97bb3e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
                <Box ref={textRefContainerTwo} opacity={'0'} width={'100%'} h={'100%'} position={'absolute'} inset={'0'} display={'flex'} alignItems={'end'}>
                  <Box  bgGradient={'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,162,0,0.80) 0%, rgba(255,162,0,0.80) 100%)'} p={'1rem'} fontWeight={'600'} width={'100%'} fontSize={['1.5rem']} color={'white'}>WATCH AND LISTEN TO OUR SERMONS</Box>
              </Box>
            </Box>


              <Box ref={imageRefThree} w={['100%','100%','160px','210px','300px','350px']} h={['auto','550px','250px','300px','350px','400px']} position={'relative'}>
              <Image
               objectFit={'cover'}
             objectPosition={['center','center']}
                w={"100%"}
                h={"100%"}
                src="https://images.unsplash.com/photo-1538460120076-604b93a2ce88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVtcGxlfGVufDB8fDB8fHww"
              />
                <Box ref={textRefContainerThree} opacity={'0'}  width={'100%'} h={'100%'} position={'absolute'} inset={'0'} display={'flex'} alignItems={'end'}>
                  <Box  bgGradient={'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,162,0,0.80) 0%, rgba(255,162,0,0.80) 100%)'} p={'1rem'} fontWeight={'600'} width={'100%'} fontSize={['1.5rem']} color={'white'}>WATCH AND LISTEN TO OUR SERMONS</Box>
              </Box>
            </Box>


              <Box ref={imageRefFour} w={['100%','100%','160px','210px','300px','350px']} h={['auto','550px','250px','300px','350px','400px']} position={'relative'}>
              <Image
               objectFit={'cover'}
             objectPosition={['center','center']}
                w={"100%"}
                h={"100%"}
                src="https://images.unsplash.com/photo-1554554497-0095c34db3ec?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
                <Box ref={textRefContainerFour} opacity={'0'} width={'100%'} h={'100%'} position={'absolute'} inset={'0'} display={'flex'} alignItems={'end'}>
                  <Box  bgGradient={'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,162,0,0.80) 0%, rgba(255,162,0,0.80) 100%)'} p={'1rem'} fontWeight={'600'} width={'100%'} fontSize={['1.5rem']} color={'white'}>WATCH AND LISTEN TO OUR SERMONS</Box>
              </Box>
            </Box>

          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default YogaSectionFour;
