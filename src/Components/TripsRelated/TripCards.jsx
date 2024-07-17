import { Box, Button, Card, CardBody, CardFooter, Container, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import theme from "../../theme";
import { useTheme } from "@emotion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TripCards = () => {

    const flexContainer = useRef(null);
    const matterContainer = useRef(null);
    const cardContainer = useRef(null);
    const boxOneContainer = useRef(null);
    const boxTwoContainer = useRef(null);

    useGSAP(()=>{
         const tl = gsap.timeline({
            scrollTrigger:{
                trigger:flexContainer.current,
                start:'top 90%',
                end:'bottom 90%',
            }
         });

         tl.from(matterContainer.current.children,{
            y:200,
            opacity:0,
            duration:0.5,
            stagger:0.3,
         });

         return ()=>{
             tl.kill();
         }
    

    },[])

 useGSAP(()=>{
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:cardContainer.current,
            start:'top 90%',
            end:'bottom 90%',
        }
     });
     tl.from(boxOneContainer.current.children,{
        y:300,
        opacity:0,
        duration:0.5,
        stagger:0.3,
    });
    tl.from(boxTwoContainer.current.children,{
        y:300,
        opacity:0,
        duration:0.5,
        stagger:0.3,
    });
    return ()=>{
        tl.kill();
    }
 },[])




  return (
    <Box width="100%" my={["5rem", "5rem", "7rem", "5rem",'5rem']} background={['none','none','none','none','linear-gradient(90deg, rgba(255, 255, 255, 0.5) 50%, #DF8C38 50%)']} >
    <Container
      w={["100%", "100%", "100%", "90%"]}
      maxW="1500px"
      marginX="auto"
      overflow={'hidden'}
    >


        {/* Flex Container */}
          <Flex ref={flexContainer} flexDirection={['column','column','column','column','row']} p={["0", "0.9rem", "0rem", "2rem"]} alignItems={'center'} gap={['2.5rem']}>

             {/* Matter Container */}
               
                <Box w={['100%','100%','90%','100%','35%']} p={['0.8rem','0.8rem','0.8rem','0.8rem','0']}>
                    <Box ref={matterContainer} display={'flex'} flexDirection={'column'} gap={['1.2rem','1.2rem','1.3rem','1.3rem','1.5rem']} alignItems={'flex-start'}>


                     <Box color={theme.colors.col.secondary} fontSize={['0.9rem','0.9rem','1rem']} fontWeight={'bold'}>Discover Sacred Destinations</Box>

                     <Box fontWeight={'bold'} lineHeight={['auto','auto','auto','auto','4rem']} display={'flex'} alignItems={'center'} gap={['0.2rem']} fontSize={['1.5rem','1.6rem','2rem','2.5rem','2.5rem']}>
                     Explore Spiritual Tranquility
                     </Box>


                     <Text lineHeight={['1.5rem','1.5rem','1.9rem','2rem']} fontSize={['0.8rem','0.9rem','0.9rem','0.9rem']}>
                     Embark on a profound pilgrimage experience with us. Our temple trips are meticulously designed to enrich your soul and connect you with ancient traditions and spiritual serenity. Whether you seek solace in quiet prayer or wish to marvel at the intricate beauty of historic temples, our carefully planned journeys cater to every aspect of your spiritual adventure. Join us on a transformative expedition where spirituality meets exploration, and where each temple visit becomes a cherished memory. Start your journey today and discover the peace and tranquility that temple travel can bring.
                     </Text>

                     <Box>
                     <Button colorScheme='orange' fontSize={['0.8rem','0.8rem','0.9rem']} display={'inline-block'}>View More</Button>
                     </Box>
                    </Box>
                </Box>






                {/* Card Container */}
                 
                 <Box ref={cardContainer} w={['100%','100%','100%','100%','65%']} flexDirection={['column','column','row']} display={'flex'} alignItems={'flex-start'}  gap={['1.5rem','1.5rem','0.7rem','1rem','2rem']}>

                    {/* Box One Container*/}
                     <Box ref={boxOneContainer} w={['100%','100%','100%','100%','auto']} display={'flex'} flexDirection={['column']} gap={['1.5rem','1.5rem','1.5rem','1.5rem','2rem']}>
                        {/* Box 1 Card One */}
                         <Box>
                             <Card  w={['auto','80%','sm','sm','sm']} mx={['auto','auto','auto','auto','0']}>
                                 <CardBody>

                                    {/* Image Box */}
                                 <Box  w={['100%']} h={['250px','280px','200px','250px']} borderRadius={'5px'} overflow={'hidden'}>
                                  <Image className='image' w={'100%'} h={'100%'} objectFit={'cover'} borderRadius={'5px'} src='https://i.pinimg.com/564x/8e/18/97/8e1897f7dbdfa6146dac00886a33b4eb.jpg' />
                                 </Box>


                                  <Stack mt={'1rem'} spacing={3}>

                                  {/* Heading Box */}
                                  <Box color={theme.colors.col.secondary} fontSize={['1.1rem','1.2rem','1.5rem','1.5rem','1.2rem']} fontWeight={'bold'}>
                                  Puri Jagannath Rath Yatra
                                  </Box>
                                    
                                {/* Matter Box */}
                                  <Text fontSize={['0.8rem','0.8rem','0.9rem']} lineHeight={['1.5rem']}>
                                  Experience the vibrant spectacle of the annual Rath Yatra in Puri, Odisha, celebrating Lord Jagannath's journey amidst joyous chants and colorful processions.
                                  </Text>
                                  </Stack>

                                 </CardBody>

                                 <CardFooter pt={'0.5rem'}>
                                    <Button colorScheme='orange' fontSize={['0.8rem','0.8rem','0.9rem']} >View More</Button>
                                 </CardFooter>
                             </Card>
                         </Box>


                         {/* Box 1 Card Two */}

                         <Box>
                             <Card  w={['auto','80%','sm','sm','sm']} mx={['auto','auto','auto','auto','0']}>
                                 <CardBody>

                                    {/* Image Box */}
                                 <Box w={['100%']} h={['250px','280px','200px']} borderRadius={'5px'} overflow={'hidden'}>
                                  <Image className='image' w={'100%'} h={'100%'} objectFit={'cover'} borderRadius={'5px'} src='https://i.pinimg.com/564x/cf/37/65/cf3765d940c40dbf1ee7663230be1a78.jpg' />
                                 </Box>


                                  <Stack mt={'1rem'} spacing={3}>

                                  {/* Heading Box */}
                                    <Box color={theme.colors.col.secondary} fontSize={['1.1rem','1.2rem','1.5rem','1.5rem','1.2rem']} fontWeight={'bold'}>
                                  Journey to Tirupati
                                  </Box>
                                    
                                {/* Matter Box */}
                                  <Text fontSize={['0.8rem','0.8rem','0.9rem']} lineHeight={['1.5rem']}>
                                  Discover the spiritual serenity of Tirupati, home to the revered Sri Venkateswara Temple atop picturesque hills in Andhra Pradesh.
                                  </Text>
                                  </Stack>

                                 </CardBody>

                                 <CardFooter pt={'0.5rem'}>
                                     <Button colorScheme='orange' fontSize={['0.8rem','0.8rem','0.9rem']} >View More</Button>
                                 </CardFooter>
                             </Card>
                         </Box>
                     </Box>



                     {/* Box Two Container*/}

                     <Box ref={boxTwoContainer} display={'flex'} flexDirection={['column']} gap={['1.5rem','1.5rem','1.5rem','1.5rem','2rem']} mt={['0','0','4rem']}>
                        {/* Box 2 Card One */}
                         <Box >
                             <Card  w={['auto','80%','sm','sm','sm']} mx={['auto','auto','auto','auto','0']}>
                                 <CardBody>

                                    {/* Image Box */}
                                 <Box w={['100%']} h={['250px','280px','200px']} borderRadius={'5px'} overflow={'hidden'}>
                                  <Image className='image' w={'100%'} h={'100%'} objectFit={'cover'} borderRadius={'5px'} src='https://i.pinimg.com/736x/c1/f1/db/c1f1dbecfaaafce3a7c38d1cfe480d89.jpg' />
                                 </Box>


                                  <Stack mt={'1rem'} spacing={3}>

                                  {/* Heading Box */}
                                    <Box color={theme.colors.col.secondary} fontSize={['1.1rem','1.2rem','1.5rem','1.5rem','1.2rem']} fontWeight={'bold'}>
                                  Ayodhya Ram Mandir Temple
                                  </Box>
                                    
                                {/* Matter Box */}
                                  <Text fontSize={['0.8rem','0.8rem','0.9rem']} lineHeight={['1.5rem']}>
                                  Visit Ayodhya Ram Mandir, a sacred temple dedicated to Lord Ram in Uttar Pradesh, known for its spiritual significance and serene ambiance.
                                  </Text>
                                  </Stack>

                                 </CardBody>

                                 <CardFooter pt={'0.5rem'}>
                                     <Button colorScheme='orange' fontSize={['0.8rem','0.8rem','0.9rem']} >View More</Button>
                                 </CardFooter>
                             </Card>
                         </Box>


                         {/* Box2 Card Two */}

                         <Box> 
                          <Card  w={['auto','80%','sm','sm','sm']} mx={['auto','auto','auto','auto','0']}>
                                 <CardBody>

                                    {/* Image Box */}
                                 <Box w={['100%']} h={['250px','280px','200px']} borderRadius={'5px'} overflow={'hidden'}>
                                  <Image className='image' w={'100%'} h={'100%'} objectFit={'cover'} borderRadius={'5px'} src='https://i.pinimg.com/564x/d4/9c/8a/d49c8abb59f1a14e88c38ed6b2dbd9e4.jpg' />
                                 </Box>


                                  <Stack mt={'1rem'} spacing={3}>

                                  {/* Heading Box */}
                                    <Box color={theme.colors.col.secondary}fontSize={['1.1rem','1.2rem','1.5rem','1.5rem','1.2rem']} fontWeight={'bold'}>
                                  Dwarkadhish Temple Journey
                                  </Box>
                                    
                                {/* Matter Box */}
                                  <Text fontSize={['0.8rem','0.8rem','0.9rem']} lineHeight={['1.5rem']}>
                                  Discover the ancient Dwarkadhish Temple in Dwarka, Gujarat, dedicated to Lord Krishna, renowned for its spiritual aura and architectural beauty.
                                  </Text>
                                  </Stack>

                                 </CardBody>

                                 <CardFooter pt={'0.5rem'}>
                                      <Button colorScheme='orange' fontSize={['0.8rem','0.8rem','0.9rem']} >View More</Button>
                                 </CardFooter>
                             </Card>
                         </Box>
                     </Box>


                 </Box>
            </Flex>   
         </Container>
    </Box>
  )
}

export default TripCards
