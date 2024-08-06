import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Container,
    HStack,
    Image,
    SimpleGrid,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import React, { useEffect, useRef } from "react";
  import theme from "../../theme";
  import gsap from "gsap";
  import { useGSAP } from "@gsap/react";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { FiArrowUpRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getAdminMindControlFormData } from "../../Redux/app/action";
import { Link } from "react-router-dom";
  gsap.registerPlugin(ScrollTrigger);

  

const MindControlCardsSection = () => {
    const gridContainer = useRef();

    useGSAP(()=>{
      const tl = gsap.timeline({
       scrollTrigger:{
         trigger:gridContainer.current,
         start:'top 90%',
         end:'bottom 90%',
       }
      });
 
       tl.from(gridContainer.current.children,{
          scale:0.9,
          duration:0.5,
          stagger:0.3,
          ease:'power1.inOut',
          opacity:0
       })
 
 
 
    },[])

    const store = useSelector(store=>store.AppReducer.adminMindControlData);
    const dispatch = useDispatch();
  
    
  
    useEffect(()=>{
      dispatch(getAdminMindControlFormData())
      .then(res=>{
        console.log(res)
      })
    },[])
  
   
 
 
 
   return (
     <Box width="100%" my={["5rem", "5rem", "7rem", "5rem", "10rem"]}>
       <Container
         w={["100%", "100%", "95%", "95%"]}
         maxW="1500px"
         marginX="auto"
       >
         <HStack
           w={['100%','90%','100%']}
           mx={'auto'}
           justifyContent={["space-between"]}
           gap={["1rem"]}
           alignItems={"flex-end"}
         >
           <Box
             fontSize={["1.2rem", "1.5rem", "1.8rem", "2.5rem"]}
             fontWeight={"600"}
             color={theme.colors.col.secondary}
           >
             Recent Festivals
           </Box>
           <Box>
             <Button
               size={["sm", "sm", "md",'lg']}
               fontSize={["0.8rem", "0.8rem", "0.9rem"]}
               variant={"outline"}
               colorScheme="orange"
             >
               View all
             </Button>
           </Box>
         </HStack>
 
         <SimpleGrid ref={gridContainer} w={'100%'}  columns={['1','1','2','2','4']} mt={['3rem']} spacing={[10,10,5,10,4]}>
         {
             store?.slice(0,4).map((item,index)=>(
               <Card key={index} bgColor={'rgb(245,247,248)'} overflow={'hidden'} p={3} borderRadius={'10px'}>
               <Box w={'100%'} h={['250px']} position={['relative']} overflow={'hidden'} borderRadius={'10px'}>
                  <Image w={'100%'} h={'100%'} objectFit={'cover'} src={"https://images.pexels.com/photos/161183/thailand-monks-temple-tourism-161183.jpeg?auto=compress&cs=tinysrgb&w=800"} />
 
                  <Box position={'absolute'} top={'4%'} left={'3%'} bgColor={theme.colors.col.secondary} color={'white'} boxShadow={'0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.10)'} borderRadius={'10px'} p={2} fontWeight={'600'} pointerEvents={'none'} fontSize={'0.9rem'}>
                     {item.date}
                  </Box>
               </Box>
 
              <CardBody px={2}>
                   <VStack alignItems={'flex-start'}>
                     <Box fontSize={'1.5rem'} fontWeight={'600'} color={theme.colors.col.secondary}>
                    {"Art Of Mind Control"}
                     </Box>
                     <Text lineHeight={['1.7rem']} fontSize={['0.9rem']}>
                      {item.description}
                     </Text>
                   </VStack>
              </CardBody>
 
              <CardFooter py={'1'} px={2}>
                   <HStack  w={'100%'} justifyContent={'space-between'}>
                      <Box fontSize={'1rem'} fontFamily={theme.fonts.body} fontWeight={'bold'} color={theme.colors.col.secondary} letterSpacing={'0.1rem'} textShadow={'1px 1px 1px rgba(0, 0, 0, 0.4)'} pointerEvents={'none'}>
                          HARE KRISHNA
                      </Box>
                       <Box role="group" bgColor={theme.colors.col.secondary} display={'inline-flex'} w={'40px'} h={'40px'}  justifyContent={'center'} alignItems={'center'} fontSize={'1.1rem'} color={'white'} borderRadius={'10px'} boxShadow={'0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.10)'} cursor={'pointer'}>
                        <Box _groupHover={{transform:'rotate(45deg)'}} transition={'all 0.2s linear'}>
                       <Link to={`/artOfMindControl/${item._id}`}><FiArrowUpRight  /></Link>
                        </Box>
                       </Box>
                   </HStack>
              </CardFooter>
 
          </Card>
             ))
           }
         </SimpleGrid>
       </Container>
     </Box>
   );
}

export default MindControlCardsSection


