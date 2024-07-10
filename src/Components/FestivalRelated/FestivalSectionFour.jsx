import { Box, Button, Container, Flex, HStack, Image, SimpleGrid } from '@chakra-ui/react'
import React, { useRef } from 'react'
import theme from "../../theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const festivalImages = [
     {
         imageUrl : 'https://i.pinimg.com/564x/22/eb/a2/22eba2405402e8cd184142895d4f4095.jpg',
         festivalName : 'Maha Shivaratri',
     },
     {
         imageUrl : 'https://i.pinimg.com/564x/c0/de/c5/c0dec5493c875dc6726119f8dc5ac73c.jpg',
         festivalName : '  Holi',
     },
     {
         imageUrl : 'https://i.pinimg.com/564x/a7/f3/57/a7f3577e7dbfbf7775c64e3523a77be9.jpg',
         festivalName : 'Hanuman Jayanti',
     },
     {
         imageUrl : 'https://i.pinimg.com/564x/48/de/06/48de060c9b2bd71629ca0e54ba25d180.jpg',
         festivalName : 'Rath Yatra',
     },
     {
         imageUrl : 'https://i.pinimg.com/564x/fb/78/5c/fb785cf2f8a94df58e39b3e85a332108.jpg',
         festivalName : 'Krishna Janmaashtami',
     },
     {
         imageUrl : 'https://i.pinimg.com/564x/11/ef/75/11ef75b36b7f5d441bd87e7eb38db03b.jpg',
         festivalName : 'Ganesh Chaturthi',
     },
     {
         imageUrl : 'https://i.pinimg.com/564x/e2/95/a1/e295a1889eae1dc60c3f6099e75617b2.jpg',
         festivalName : 'Dussehra',
     },
     {
         imageUrl : 'https://i.pinimg.com/564x/5c/23/90/5c2390ee9e94f8c4213b0b12eb5f3557.jpg',
         festivalName : 'Diwali',
     },

]






const FestivalSectionFour = () => {

 const headingContainerRef = useRef(null);
 const gridContainer = useRef(null);


 useGSAP(()=>{
     const tl = gsap.timeline({
        scrollTrigger:{
            trigger:headingContainerRef.current,
            start:'top 90%',
            end:'bottom 90%'
        }
     });

     tl.from(headingContainerRef.current.children,{
         y:'-200',
         opacity:0,
         duration:0.5,
         stagger:'0.3',
         ease:'power1.inOut'
     })

     return ()=>{
        tl.kill()
     }
 },[]);

 useGSAP(()=>{
     const tl = gsap.timeline({
        scrollTrigger:{
            trigger:gridContainer.current,
            start:'top 90%',
            end:'bottom 90%'
        }
     });

     tl.from(gridContainer.current.children,{
        scale:0.7,
        opacity:0,
        duration:0.5,
        stagger:0.3,
        ease:'power1.inOut'
     });

     return ()=>{
        tl.kill()
     }
 },[])









  return (
    <Box width="100%" my={["5rem", "5rem", "7rem", "5rem", "10rem"]}>
    <Container
      w={["100%", "100%", "95%", "95%"]}
      maxW="1500px"
      marginX="auto"
    > 
       
      <HStack ref={headingContainerRef} w={'100%'} justifyContent={['space-between']} gap={['1rem']} alignItems={'flex-end'}>
          <Box fontSize={['1.2rem','1.5rem','1.8rem','2.5rem']} fontWeight={'600'} color={theme.colors.col.secondary}>
              Recent Festivals
          </Box>
          <Box>
          <Button size={['sm','sm','md']} fontSize={['0.8rem','0.8rem','0.9rem']} variant={'outline'}  colorScheme='orange'>View all</Button>
          </Box>
      </HStack>
       
       <SimpleGrid ref={gridContainer} columns={['1','1','2','3','4']} spacing={['5','5','10']} mt={['4rem','3rem']}>

          {festivalImages.map((eachObj,index)=>(

              <Flex key={index} bgColor={'rgb(245, 247, 248)'} p={'1rem'} borderRadius={'10px'} gap={['1rem']}>

              <Box w={['40%']} h={['110px','150px','100px']} borderRadius={'10px'} overflow={'hidden'}>
                  <Image w={'100%'} borderRadius={'10px'} h={'100%'} objectFit={'cover'} src={eachObj.imageUrl} />
              </Box>

              <Box w={['60%']} display={'flex'} justifyContent={['space-between']} flexDirection={'column'}>
                  <Box fontSize={['1rem','1.3rem','1rem']} fontWeight={'700'} color={theme.colors.col.secondary}>
                     {eachObj.festivalName}
                  </Box>
                  <Box>
                       <Button px={['1.5rem','2rem']}  fontSize={['0.8rem']} colorScheme='orange'>View</Button>
                  </Box>
              </Box>
          </Flex>
          ))}
           
       </SimpleGrid>
        </Container>
    </Box>
  )
}

export default FestivalSectionFour
