import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { FaChevronRight } from "react-icons/fa6";
import theme from "../../theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FestivalSectionThree = () => {

  const flexContainerRef = useRef(null);
  const imageRef = useRef(null);
  const textRefOne = useRef(null);
  const textRefTwo = useRef(null);
  const gridImageRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null)


  useGSAP(()=>{
     const tl = gsap.timeline({
      scrollTrigger:{
        trigger:flexContainerRef.current,
        start:'top 90%',
        end:'bottom 90%'
      }
     });

     tl.from(imageRef.current,{
        scale:0,
        opacity:0,
        duration:0.5,
        ease: 'power1.inOut'
     });
     tl.from(textRefOne.current,{
        x:-200,
        opacity:0,
        duration:0.5,
        ease: 'power1.inOut',
     })
     tl.from(textRefTwo.current,{
        x:-200,
        opacity:0,
        duration:0.5,
        ease: 'power1.inOut',
     })
     tl.from(iconRef.current,{
      scale:0,
        opacity:0,
        duration:0.5,
        ease:'bounce'
     });

     tl.from(textRef.current,{
       x:-100,
       opacity:0,
       duration:0.3,
       ease: 'power1.inOut',
     });

     tl.from(gridImageRef.current.children,{
      scale:0,
      opacity:0,
      duration:0.5,
      ease: 'power1.inOut',
      stagger:0.3
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
        <Flex w={['100%','90%','100%']} mx={'auto'} ref={flexContainerRef} gap={['1.5rem','1.5rem','1.5rem','1rem','2rem']} flexDirection={['column','column','column','row']} justifyContent={'space-between'}>

          <Box ref={imageRef} w={["100%",'100%','100%','45%','40%']} h={['400px','450px','650px']}>
            <Image w={'100%'} h={'100%'} objectFit={'cover'} objectPosition={['center','center','left center']} src="https://i.pinimg.com/564x/89/47/38/8947388c67a6eef9470a75fb4fd982b8.jpg" />
          </Box>

          <Box w={["100%",'100%','100%','55%','60%']} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'flex-start'} gap={['1.5rem','1.5rem','2.5rem','1rem','0']}>

         
             <Text ref={textRefOne} lineHeight={['1.7rem','1.7rem','2.5rem','2rem','1.7rem']} fontSize={['0.85rem','0.85rem','0.9rem','0.8rem','0.9rem','1rem']} fontWeight={'500'}>
             Diwali, also known as Deepavali, is a prominent Hindu festival celebrated worldwide. It symbolizes the victory of light over darkness and good over evil. Homes and streets are adorned with oil lamps (diyas) and colorful decorations, creating a festive ambiance. Families exchange sweets, offer prayers to Goddess Lakshmi for prosperity, and enjoy fireworks displays. Diwali is a time of joyous celebration, unity, and the renewal of relationships.
             </Text>
            
             <Text ref={textRefTwo} lineHeight={['1.7rem','1.7rem','2.5rem','2rem','1.7rem']} fontSize={['0.85rem','0.85rem','0.9rem','0.8rem','0.9rem','1rem']} fontWeight={'500'}>
            Beyond its religious origins, Diwali holds cultural significance as a time for reconciliation and community bonding. It marks the start of the Hindu New Year in some regions, symbolizing new beginnings and the pursuit of happiness and prosperity. Diwali transcends religious boundaries, celebrated by people of various faiths who join in the spirit of festivity and goodwill. It exemplifies the spirit of compassion, generosity, and the triumph of knowledge over ignorance.
            </Text>


            <HStack  spacing={['2','2','3','3']}>
              <Box ref={iconRef}>
              <IconButton
                icon={<FaChevronRight />}
                size={['sm','sm','sm']}
                colorScheme="orange"
              />

              </Box>
              <Box ref={textRef} cursor={'pointer'} color={theme.colors.col.secondary} fontWeight={'600'}>Read More</Box>
            </HStack>
            
            <SimpleGrid ref={gridImageRef} columns={['1','1','3']} spacing={['10','10','5','2','5']} w={'100%'}>

                  <Box w={['100%','80%','100%']} mx={'auto'} h={['300px','400px','250px','150px','220px']}>
                    <Image objectFit={'cover'} w={'100%'} h={'100%'} src="https://i.pinimg.com/564x/27/f5/10/27f510e49cee636f8dff87f6964899cc.jpg" />
                  </Box>
                  
                 <Box w={['100%','80%','100%']} mx={'auto'} h={['300px','400px','250px','150px','220px']}>
                    <Image objectFit={'cover'} objectPosition={['center','center','center','center']} w={'100%'} h={'100%'} src="https://i.pinimg.com/564x/c0/07/5f/c0075ffb6458db5768f9985537555464.jpg" />
                  </Box>
                 <Box w={['100%','80%','100%']} mx={'auto'} h={['300px','400px','250px','150px','220px']}>
                    <Image objectFit={'cover'} objectPosition={['center','center','center','bottom']} w={'100%'} h={'100%'} src="https://i.pinimg.com/564x/88/58/80/88588015519ffd00de9c958cafb7583a.jpg" />
                  </Box>
            </SimpleGrid>

          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FestivalSectionThree;
