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
  import React, { useRef } from "react";
  import theme from "../../theme";
  import gsap from "gsap";
  import { useGSAP } from "@gsap/react";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { FiArrowUpRight } from "react-icons/fi";
  gsap.registerPlugin(ScrollTrigger);


  const festivalImages = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1567591391293-f9a99c77e128?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHZpbmF5YWthJTIwY2hhdml0aGl8ZW58MHx8MHx8fDA%3D",
      festivalName: "Vinayaka Chavithi",
       date:' 07-Sep-2024',
       desc:' Vinayaka Chavithi celebrates Lord Ganeshas birth with decorations, sweets, prayers, and idol immersion, promoting community unity and eco-consciousness.'
    },
  {
    imageUrl:
      "https://i.pinimg.com/564x/22/eb/a2/22eba2405402e8cd184142895d4f4095.jpg",
       festivalName: "Maha Shivaratri",
       date:'08-March-2024',
       desc:'Maha Shivaratri is a Hindu festival dedicated to Lord Shiva, marked by fasting, prayers, and night-long vigils. It signifies devotion and spiritual renewal.'
  },
  {
    imageUrl:
      "https://i.pinimg.com/564x/48/de/06/48de060c9b2bd71629ca0e54ba25d180.jpg",
    festivalName: "Rath Yatra",
    date:'07-July-2024',
    desc:'Rath Yatra is a Hindu festival known for its grand processions of chariots carrying deities, celebrating the journey of Lord Jagannath, Balabhadra, and Subhadra.'
  },
  {
    imageUrl:
      "https://i.pinimg.com/564x/fb/78/5c/fb785cf2f8a94df58e39b3e85a332108.jpg",
    festivalName: "Janmaashtami",
    date:'26-Aug-2024',
    desc:'Krishna Janmashtami celebrates the birth of Lord Krishna, marked with fasting, devotional songs, and midnight festivities.'
  },
];


const ResidencyCardsSection = () => {
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
             Residency Related
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
             festivalImages.map((singleImage,index)=>(
               <Card key={index} bgColor={'rgb(245,247,248)'} overflow={'hidden'} p={3} borderRadius={'10px'}>
               <Box w={'100%'} h={['250px']} position={['relative']} overflow={'hidden'} borderRadius={'10px'}>
                  <Image w={'100%'} h={'100%'} objectFit={'cover'} src={singleImage.imageUrl} />
 
                  <Box position={'absolute'} top={'4%'} left={'3%'} bgColor={theme.colors.col.secondary} color={'white'} boxShadow={'0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.10)'} borderRadius={'10px'} p={2} fontWeight={'600'} pointerEvents={'none'} fontSize={'0.9rem'}>
                     {singleImage.date}
                  </Box>
               </Box>
 
              <CardBody px={2}>
                   <VStack alignItems={'flex-start'}>
                     <Box fontSize={'1.5rem'} fontWeight={'600'} color={theme.colors.col.secondary}>
                    {singleImage.festivalName.length >= 18 ? `${singleImage.festivalName.substring(0,19)}...`: singleImage.festivalName}
                     </Box>
                     <Text lineHeight={['1.7rem']} fontSize={['0.9rem']}>
                      {singleImage.desc.length >= 150 ? `${singleImage.desc.substring(0,150)}...` : singleImage.desc}
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
                       <FiArrowUpRight  />
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

export default ResidencyCardsSection
