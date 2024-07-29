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
import TripCards2 from "./TripCards2";
gsap.registerPlugin(ScrollTrigger);

const tripsImages = [
  {
    imageUrl:
      "https://i.pinimg.com/564x/8e/18/97/8e1897f7dbdfa6146dac00886a33b4eb.jpg",
    festivalName: "Puri Jagannath Rath Yatra",
    date: " 07-Sep-2024",
    desc: " Experience the vibrant spectacle of the annual Rath Yatra in Puri, Odisha, celebrating Lord Jagannaths journey amidst joyous chants and colorful processions.",
  },
  {
    imageUrl:
      "https://i.pinimg.com/736x/c1/f1/db/c1f1dbecfaaafce3a7c38d1cfe480d89.jpg",
    festivalName: "Ayodhya Ram Mandir Temple",
    date: "08-March-2024",
    desc: "Visit Ayodhya Ram Mandir, a sacred temple dedicated to Lord Ram in Uttar Pradesh, known for its spiritual significance and serene ambiance.",
  },
  {
    imageUrl:
      "https://i.pinimg.com/564x/cf/37/65/cf3765d940c40dbf1ee7663230be1a78.jpg",
    festivalName: "Journey to Tirupati",
    date: "07-July-2024",
    desc: "Discover the spiritual serenity of Tirupati, home to the revered Sri Venkateswara Temple atop picturesque hills in Andhra Pradesh.",
  },
  {
    imageUrl:
      "https://i.pinimg.com/564x/d4/9c/8a/d49c8abb59f1a14e88c38ed6b2dbd9e4.jpg",
    festivalName: "Dwarkadhish Temple Journey",
    date: "26-Aug-2024",
    desc: "Discover the ancient Dwarkadhish Temple in Dwarka, Gujarat, dedicated to Lord Krishna, renowned for its spiritual aura and architectural beauty.",
  },
];

const TripCards = () => {
 
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
    <Box
      width="100%"
      my={["5rem", "5rem", "7rem", "5rem", "5rem"]}
      background={[
        "none",
        "none",
        "none",
        "none",
        "linear-gradient(90deg, rgba(255, 255, 255, 0.5) 50%, #DF8C38 50%)",
      ]}
      py={{base:'0',xl:'5rem'}}
    >
      <Container
        w={["100%", "100%", "100%", "90%",'98%']}
        maxW="1500px"
        marginX="auto"
        overflow={"hidden"}
        display={'flex'}
        flexDirection={'column'}
        gap={'5rem'}
      >
        <VStack alignItems={'flex-start'} gap={'2rem'}>
        <HStack
          w={['100%','90%','100%']}
          mx={'auto'}
          justifyContent={["space-between"]}
          gap={["1rem"]}
          alignItems={"flex-end"}
        >
          <Box
            fontSize={["1.5rem", "1.5rem", "1.8rem", "2.5rem"]}
            fontWeight={"600"}
            color={theme.colors.col.secondary}
          >
            PAST TEMPLE VISITS
          </Box>
          <Box>
            <Button
              size={["sm", "sm", "md",'lg']}
              fontSize={["0.8rem", "0.8rem", "0.9rem"]}
               bg={{base:theme.colors.col.secondary,xl:'white'}}
               color={{base:'white',xl:theme.colors.col.secondary}}
            >
              View all
            </Button>
          </Box>
        </HStack>


          {/* Card Container */}
          <Box  w={["100%",'80%','100%']} mx={'auto'}>
          <SimpleGrid
            columns={['1','1','2','2','4']}
            spacing={['5']}
            ref={gridContainer} 
          >
            {tripsImages.map((singleImage, index) => (
              <Card
                key={index}
                bgColor={"rgb(245,247,248)"}
                overflow={"hidden"}
                p={3}
                borderRadius={"10px"}
              >
                <Box
                  w={"100%"}
                  h={["250px"]}
                  position={["relative"]}
                  overflow={"hidden"}
                  borderRadius={"10px"}
                >
                  <Image
                    w={"100%"}
                    h={"100%"}
                    objectFit={"cover"}
                    src={singleImage.imageUrl}
                  />

                  <Box
                    position={"absolute"}
                    top={"4%"}
                    left={"3%"}
                    bgColor={theme.colors.col.secondary}
                    color={"white"}
                    boxShadow={
                      "0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.10)"
                    }
                    borderRadius={"10px"}
                    p={2}
                    fontWeight={"600"}
                    pointerEvents={"none"}
                    fontSize={"0.9rem"}
                  >
                    {singleImage.date}
                  </Box>
                </Box>

                <CardBody px={2}>
                  <VStack alignItems={"flex-start"}>
                    <Box
                      fontSize={"1.5rem"}
                      fontWeight={"600"}
                      color={theme.colors.col.secondary}
                    >
                      {singleImage.festivalName.length >= 18
                        ? `${singleImage.festivalName.substring(0, 19)}...`
                        : singleImage.festivalName}
                    </Box>
                    <Text lineHeight={["1.7rem"]} fontSize={["0.9rem"]}>
                      {singleImage.desc.length >= 150
                        ? `${singleImage.desc.substring(0, 150)}...`
                        : singleImage.desc}
                    </Text>
                  </VStack>
                </CardBody>

                <CardFooter py={"1"} px={2}>
                  <HStack w={"100%"} justifyContent={"space-between"}>
                    <Box
                      fontSize={"1rem"}
                      fontFamily={theme.fonts.body}
                      fontWeight={"bold"}
                      color={theme.colors.col.secondary}
                      letterSpacing={"0.1rem"}
                      textShadow={"1px 1px 1px rgba(0, 0, 0, 0.4)"}
                      pointerEvents={"none"}
                    >
                      HARE KRISHNA
                    </Box>
                    <Box
                      role="group"
                      bgColor={theme.colors.col.secondary}
                      display={"inline-flex"}
                      w={"40px"}
                      h={"40px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      fontSize={"1.1rem"}
                      color={"white"}
                      borderRadius={"10px"}
                      boxShadow={
                        "0 1px 3px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.10)"
                      }
                      cursor={"pointer"}
                    >
                      <Box
                        _groupHover={{ transform: "rotate(45deg)" }}
                        transition={"all 0.2s linear"}
                      >
                        <FiArrowUpRight />
                      </Box>
                    </Box>
                  </HStack>
                </CardFooter>
              </Card>
            ))}



          </SimpleGrid>
        </Box>
        </VStack>

        <VStack>
            <TripCards2 />
        </VStack>
      </Container>
    </Box>
  );
};

export default TripCards;
