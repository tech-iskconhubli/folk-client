import React, { useRef } from 'react'
import { Box, Container, Flex, Image, Text} from "@chakra-ui/react";
import theme from "../../theme";
import { useTheme } from "@emotion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const TripSectionOne = () => {

  const flexContainer  = useRef(null);
  const boxOneMatter = useRef(null);
  const boxTwoImages = useRef(null);

   useGSAP(()=>{
       const tl = gsap.timeline({
         scrollTrigger:{
          trigger:flexContainer.current,
          start :'top 90%',
          end:'bottom 90%'
         }
       });

       tl.from(boxOneMatter.current.children,{
          x:'-200',
          opacity:0,
          stagger:'0.3',
          duration:'0.8',
          ease: "power1.inOut",
       });

       tl.from(boxTwoImages.current.children,{
         y:100,
         duration:0.5,
         opacity:0,
         stagger:0.3
       })
      
       return ()=>{
         tl.kill();
       }

   },[])



  
  return (
    <Box width="100%" my={["3rem", "3rem", "4rem", "5rem"]}>
      <Container
        w={["100%", "100%", "90%", "90%"]}
        maxW="1500px"
        marginX="auto"
        overflow={'hidden'}
      >
             <Flex ref={flexContainer} flexDirection={['column','column','column','column','row']} p={['0.8rem','0.9rem','1rem','2rem']} gap={['2rem','2rem','2rem','2rem','3rem']}>

                 <Box ref={boxOneMatter} w={['100%','100%','100%','100%','50%']} display={'flex'} flexDirection={['column']} gap={'1.5rem'}>
                    <Box fontSize={['1.5rem','1.5rem','2.5rem','3rem']} w={['100%','100%','90%','85%']}  lineHeight={['2.1rem','2.1rem','3rem','3.5rem']} letterSpacing={['0.2rem']} color={theme.colors.col.secondary}>
                      TRAVEL AROUND THE WORLD IN 10 DAYS
                    </Box>
                  
                       <Text fontSize={['0.9rem','0.9rem','1rem']} lineHeight={['1.5rem','1.5rem','1.9rem','2rem']}>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam est laborum delectus repellat quia, dolorum iusto rerum molestiae labore blanditiis et reiciendis. Fugiat officia rerum aperiam reprehenderit doloribus hic qui ratione corporis voluptates inventore tempora ullam voluptate debitis vel laboriosam dolorum in corrupti quod quos maiores quaerat consectetur, eum odit?
                       </Text>

                       <Text fontSize={['0.9rem','0.9rem','1rem']} lineHeight={['1.5rem','1.5rem','1.9rem','2rem']}>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus odio, explicabo sequi nihil quibusdam alias ullam iste commodi voluptates, iusto, necessitatibus similique animi exercitationem cupiditate ab natus doloremque blanditiis labore.
                       </Text>
                 </Box>


                 <Box ref={boxTwoImages} w={['100%','100%','100%','100%','50%']} position={'relative'} display={'flex'} flexDirection={'column'} alignItems={['center','flex-end']}>

                     <Box w={['100%','80%','80%','70%','80%']} h={['200px','200px','300px','350px','300px']} bg={'white'} p={'0.5rem'}>

                     <Image w={'100%'} h={'100%'} objectFit={'cover'} src='https://i.pinimg.com/564x/9d/6f/06/9d6f06c35a6056b3bf4df4e58e55a864.jpg' />

                     </Box>
                     
                     <Box w={['80%','60%','50%','50%','50%']} h={['150px','180px','200px','250px','220px']} bg={'white'} p={'0.5rem'} position={['absolute']} zIndex={'10'} top={['80%','75%','75%','75%','55%']} left={['10%','0']}>
                     <Image w={'100%'} h={'100%'} objectFit={'cover'}  src='https://i.pinimg.com/564x/fa/0c/98/fa0c983d3e9e9e8aadd8e665d7b711ad.jpg' />
                     </Box>

                   
                 </Box>
             </Flex>
          </Container>
     </Box>
  )
}

export default TripSectionOne
