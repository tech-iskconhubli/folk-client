import {
    Box,
    Button,
    Card,
    CardBody,
    Container,
    HStack,
    IconButton,
    Image,
    SimpleGrid,
    VStack,
  } from "@chakra-ui/react";
  import React, { useRef } from "react";
  import theme from "../../theme";
  import { FaArrowRightLong } from "react-icons/fa6";
  import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



  const tripsImage = [
    {
        imageUrl : 'https://i.pinimg.com/564x/d6/95/03/d695034d7099642211a77fb782b8ece7.jpg',
        title :'Tirupati Balaji Temple',
        desc : 'Experience the sacred aura of Tirupati Balaji Temple atop Tirumala Hills in Andhra Pradesh. Known for its rich history and vibrant rituals, this temple is dedicated to Lord Venkateswara. Join millions of devotees in seeking blessings and spiritual fulfillment through rituals and offerings.'
    },
    {
        imageUrl : 'https://i.pinimg.com/564x/c5/4e/8c/c54e8c7cd3af8e407712d980858bb210.jpg',
        title :'Udupi Krishna Temple ',
        desc : 'Visit Udupi Krishna Temple in Karnataka, known for its worship rituals by Saint Madhvacharya. Experience simplicity, spiritual ambiance, and sacred prasadam.'
    },
    {
        imageUrl : 'https://i.pinimg.com/736x/19/c7/6a/19c76ae74a475086e7f065d882f7ce33.jpg',
        title :'Puri Jagannath Temple ',
        desc : 'Journey to Puri Jagannath Temple in Odisha, revered for Lord Jagannath. Experience ancient rituals, including the famous Rath Yatra (Chariot Festival), and feel the spiritual resonance of this sacred pilgrimage site.'
    },
  ]


const TripSection = () => {

    const headingContainerRef = useRef(null);
    const gridContainerRef = useRef(null);


    useGSAP(()=>{
          gsap.from(headingContainerRef.current.children,{
             scale:0.8,
             opacity:0,
             duration:0.5,
             stagger:0.3,
             scrollTrigger:{
                trigger:headingContainerRef.current,
                start:'top 90%',
                end:'bottom 90%'
             }
          })
    },[]);


    useGSAP(()=>{
        gsap.from(gridContainerRef.current.children,{
             scale:0.7,
             opacity:0,
             duration:'0.5',
             stagger:0.3,
             scrollTrigger:{
                trigger:gridContainerRef.current,
                start:'top 90%',
                end:'bottom 90%'
             }
        })
    },[])






  return (
<Box width="100%" my={["5rem", "5rem", "7rem", "5rem", "10rem"]}>
      <Container
        w={["100%", "100%", "95%", "95%"]}
        maxW="1500px"
        marginX="auto"
      >
        <HStack ref={headingContainerRef} justifyContent={['space-between']} alignItems={"flex-end"} w={['100%','85%','100%']} mx={'auto'}>
          <Box
              fontSize={["1.5rem",'1.8rem','1.8rem','2rem','2.5rem']}
            color={theme.colors.col.secondary}
            fontWeight={"600"}
          >
            Trips Releate
          </Box>
          <Box display={['block','block','block','block','none']}>
            <Button variant={"outline"} colorScheme="orange" px={["0.5rem",'']} fontSize={['0.7rem']} size={['sm','sm','md']}>
              View all
            </Button>
          </Box>
        </HStack>

        <SimpleGrid ref={gridContainerRef} w={['100%','85%','100%']} mx={'auto'} columns={["1",'1','2','3','4']} mt={['3rem']} spacing={["10",'10','5','3','5']}>
          {tripsImage.map((singleObj, index) => (
            <Card
              key={index}
              bgColor={"rgb(245, 247, 248)"}
              overflow={"hidden"}
            >
               <Box w={["100%"]} h={["290px",'290px','290px','250px','290px']}>
                <Image
                  w={"100%"}
                  h={"100%"}
                  objectFit={"cover"}
                  src={singleObj.imageUrl}
                />
              </Box>

              <CardBody>
                <VStack alignItems={"flex-start"}>
                  <Box
                    fontSize={["1.1rem"]}
                    fontWeight={["bold"]}
                    color={theme.colors.col.secondary}
                  >
                    {singleObj.title}
                  </Box>

                  <Box fontSize={["0.9rem"]} lineHeight={["1.6rem"]}>
                    {singleObj.desc}
                  </Box>
                </VStack>
              </CardBody>
            </Card>
          ))}
          

          <Card bgColor={theme.colors.col.secondary} display={['none','none','none','none','flex']}>
                <CardBody display={'flex'} alignItems={'center'} justifyContent={'center'}>
                       <VStack gap={['1.5rem']}>
                        <Box fontSize={['2.5rem']} color={'white'} fontWeight={'600'}>
                           View all
                        </Box>
                         <Box fontSize={['1.5rem']} fontWeight={'500'} color={'white'}>
                           Related to this section
                         </Box>


                         <Box>
                          <IconButton
                          size={['lg']}
                            icon={ <FaArrowRightLong />}
                            borderRadius={'50%'}
                            color={theme.colors.col.secondary}
                           />
                         
                         </Box>
                       </VStack>
                </CardBody>
            </Card>





        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default TripSection
