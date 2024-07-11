import {
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { PiBowlFoodFill } from "react-icons/pi";
import { MdWork } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import theme from "../../theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ResidencySectionTwo = () => {
 

   const flexContainerRef = useRef(null);
   const imageContainerRef = useRef(null);
   const gridContainerRef = useRef(null);


   useGSAP(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger:flexContainerRef.current,
          start:'top 90%',
          end:'bottom 90%'
        }
      });

      tl.from(imageContainerRef.current,{
          scale:0.7,
          opacity:0,
          duration:0.5,
          ease:'power1.inOut'
      });

      tl.from(gridContainerRef.current.children,{
         scale:"0.7",
         opacity:0,
         duration:0.5,
         stagger:0.3,
         ease:'power1.inOut'
      });


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
        <Flex ref={flexContainerRef} gap={["2rem"]}>

          <Box ref={imageContainerRef} display={['none','none','none','none','block']} w={["45%"]} h={"800px"} overflow={"hidden"} borderRadius={"5px"}>
            <Image
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              borderRadius={"5px"}
              src="https://folknet.in/wp-content/uploads/2018/04/House-1.jpg"
            />
          </Box>

          <Box w={["100%",'100%','100%','100%','55%']}>


            <SimpleGrid ref={gridContainerRef} columns={["1","1","2"]} spacing={['5','5','5','10','5']}>

            {/* VStack One */}
              <VStack
                h={"390px"}
                bgColor={"rgb(245, 247, 248)"}
                p={"1.5rem"}
                borderRadius={"10px"}
                justifyContent={"space-around"}
                gap={["1rem"]}
              >
                <Box
                  p={"1rem"}
                  borderRadius={"50%"}
                  fontSize={"4rem"}
                  color={"white"}
                  bgColor={theme.colors.col.secondary}
                >
                  <PiBowlFoodFill />
                </Box>

                <VStack alignItems={"flex-start"} gap={"1.5rem"}>
                  <Box
                    fontSize={["1.5rem",'2rem','1.5rem']}
                    color={theme.colors.col.secondary}
                    fontWeight={"bold"}
                  >
                    Nutritious Meal
                  </Box>
                  <Text lineHeight={["1.8rem",'2rem',"1.8rem"]}>
                    The Food you consume should purify your existence. Delight
                    the carefully selected vegetarian cuisine, blending taste
                    and health.
                  </Text>
                </VStack>
              </VStack>
 

           {/* VStack Two */}
              <VStack
                h={"390px"}
                bgColor={"rgb(245, 247, 248)"}
                p={"1.5rem"}
                borderRadius={"10px"}
                justifyContent={"space-around"}
                gap={["1rem"]}
              >
                <Box
                  p={"1rem"}
                  borderRadius={"50%"}
                  fontSize={"4rem"}
                  color={"white"}
                  bgColor={theme.colors.col.secondary}
                >
                  <MdWork />
                </Box>

                <VStack alignItems={"flex-start"} gap={"1.5rem"}>
                  <Box
                    fontSize={["1.5rem",'2rem','1.5rem']}
                    color={theme.colors.col.secondary}
                    fontWeight={"bold"}
                  >
                    Proximity to work
                  </Box>
                  <Text lineHeight={["1.8rem",'2rem',"1.8rem"]}>
                  The Residencies are located strategically to curtail the travel needs of the residents Avoid going overboard in traffic, and its Hazards.
                  </Text>
                </VStack>
              </VStack>
          

           {/* VStack Three */}
              <VStack
                h={"390px"}
                bgColor={"rgb(245, 247, 248)"}
                p={"1.5rem"}
                borderRadius={"10px"}
                justifyContent={"space-around"}
                gap={["1rem"]}
              >
                <Box
                  p={"1rem"}
                  borderRadius={"50%"}
                  fontSize={"4rem"}
                  color={"white"}
                  bgColor={theme.colors.col.secondary}
                >
                 <FaPeopleGroup />
                </Box>

                <VStack alignItems={"flex-start"} gap={"1.5rem"}>
                  <Box
                    fontSize={["1.5rem",'2rem','1.5rem']}
                    color={theme.colors.col.secondary}
                    fontWeight={"bold"}
                  >
                  Progressive Association
                  </Box>
                  <Text lineHeight={["1.8rem",'2rem',"1.8rem"]}>
                  The Wisest choice you can make in your life is to – Choose your association. Get to stay with positive minded progressive individuals.
                  </Text>
                </VStack>
              </VStack>



              {/* VStack Four */}

              <VStack
                h={"390px"}
                bgColor={"rgb(245, 247, 248)"}
                p={"1.5rem"}
                borderRadius={"10px"}
                justifyContent={"space-around"}
                gap={["1rem"]}
              >
                <Box
                  p={"1rem"}
                  borderRadius={"50%"}
                  fontSize={"4rem"}
                  color={"white"}
                  bgColor={theme.colors.col.secondary}
                >
                  <RiTeamFill />
                </Box>

                <VStack alignItems={"flex-start"} gap={"1.5rem"}>
                  <Box
                    fontSize={["1.5rem",'2rem','1.5rem']}
                    color={theme.colors.col.secondary}
                    fontWeight={"bold"}
                  >
                   Inclusive Infra Team
                  </Box>
                  <Text lineHeight={["1.8rem",'2rem',"1.8rem"]}>
                  You pay the rent, leave the rest to us. Powered by a team of professional maintenance experts, you will never face issues in your stay.
                  </Text>
                </VStack>
              </VStack>
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ResidencySectionTwo;
