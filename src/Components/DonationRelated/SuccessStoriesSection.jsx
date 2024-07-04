import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import theme from "../../theme";
import { useTheme } from "@emotion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const SuccessStoriesSection = () => {


  const headingRef = useRef(null);
  const gridContainerRef = useRef(null);


  //  Heading 

  useGSAP(()=>{
     gsap.from(headingRef.current,{
         y:100,
         duration:0.8,
         opacity:0,
         scrollTrigger:{
          trigger:headingRef.current,
          start:'top 90%',
          end:'bottom 90%',
          ease: "power1.inOut",
         }
     });



  },[])

  // Grid Container

  useGSAP(()=>{
     const tl = gsap.timeline({
      scrollTrigger:{
        trigger:gridContainerRef.current,
        start:'top 90%',
        end:'bottom 90%'
      }
     },[]);

     tl.from(gridContainerRef.current.children,{
        scale:0,
        opacity:0,
        duration:0.9,
        stagger:0.4,
        ease: "power1.inOut",
     });



     return ()=>{
       tl.kill();
     }

  },[])

  return (
    <Box width="100%" my={["2rem", "2rem", "2rem", "5rem"]}>
      <Container
        w={["100%", "100%", "90%", "90%"]}
        maxW="1500px"
        marginX="auto"
        overflowX={'hidden'}
      >
        <Box
         ref={headingRef}
          textAlign={"center"}
          w={"100%"}
          my={"2rem"}
          p={"2rem"}
        >
           <Box fontSize={["1.5rem", "2.5rem ","2.5rem","3rem"]} fontWeight={"600"} w={['auto','auto','auto','600px']} mx={'auto'}>
             We Share Our success stories & news
          </Box>
        </Box>

        <SimpleGrid ref={gridContainerRef} columns={['1','1','1','3']} spacing={[10,10,10,5]}>
          {/* Card One */}
          <Card py={['1rem','2rem','2rem','2.5rem']} px={['1rem','1.5rem','1.5rem',"0.5rem"]} w={['100%',"80%","80%",'100%']} mx={'auto'}>
            <CardHeader
              display={"flex"}
              alignItems={"center"}
              gap={["1rem"]}
              py={"0.5rem"}
            >
              <Box
                fontSize={["1.2rem"]}
                fontWeight={"bold"}
                color={theme.colors.col.secondary}
              >
                BLOG
              </Box>
              <Box fontSize={[".9rem"]}>July 1,2024</Box>
            </CardHeader>

            <CardBody display={"flex"} flexDirection={"column"} gap={["1rem"]}>
              <Box fontSize={["1.5rem","1.5rem","2rem","1.2rem",'2.2rem']} fontWeight={"600"}>
                World Humanitarian day:our real heroes
              </Box>
              <Text fontSize={['0.9rem',"0.9rem","1rem","0.9rem",'1rem']} lineHeight={["1.5rem",'1.5rem','1.5rem','2rem']}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi, rem.
              </Text>
            </CardBody>

            <CardFooter>
              <Box color={theme.colors.col.secondary} fontSize={["2rem"]}>
                <FaArrowRightLong />
              </Box>
            </CardFooter>
          </Card>

          {/* Card Two */}
          <Card py={['1rem','2rem','2rem','2.5rem']} px={['1rem','1.5rem','1.5rem',"0.5rem"]} w={['100%',"80%","80%",'100%']} mx={'auto'}>
            <CardHeader
              display={"flex"}
              alignItems={"center"}
              gap={["1rem"]}
              py={"0.5rem"}
            >
              <Box
                fontSize={["1.2rem"]}
                fontWeight={"bold"}
                color={theme.colors.col.secondary}
              >
                BLOG
              </Box>
              <Box fontSize={[".9rem"]}>July 1,2024</Box>
            </CardHeader>

           
            <CardBody display={"flex"} flexDirection={"column"} gap={["1rem"]}>
              <Box fontSize={["1.5rem","1.5rem","2rem","1.2rem",'2.2rem']} fontWeight={"600"}>
                We are able to raise more reach more
              </Box>
               <Text fontSize={['0.9rem',"0.9rem","1rem",'0.9rem','1rem']} lineHeight={["1.5rem"]}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi, rem.
              </Text>
            </CardBody>

            <CardFooter>
              <Box color={theme.colors.col.secondary} fontSize={["2rem"]}>
                <FaArrowRightLong />
              </Box>
            </CardFooter>
          </Card>

          {/* Card Three */}

          <Card py={['1rem','2rem','2rem','2.5rem']} px={['1rem','1.5rem','1.5rem','0.5rem']} w={['100%',"80%","80%",'100%']} mx={'auto'}>
            <CardHeader
              display={"flex"}
              alignItems={"center"}
              gap={["1rem"]}
              py={"0.5rem"}
            >
              <Box
                fontSize={["1.2rem"]}
                fontWeight={"bold"}
                color={theme.colors.col.secondary}
              >
                BLOG
              </Box>
              <Box fontSize={[".9rem"]}>July 1,2024</Box>
            </CardHeader>

          
            <CardBody display={"flex"} flexDirection={"column"} gap={["1rem"]}>
              <Box fontSize={["1.5rem","1.5rem","2rem","1.2rem",'2.2rem']} fontWeight={"600"}>
                Over $6 billion raised for saving refugees
              </Box>
               <Text fontSize={['0.9rem',"0.9rem","1rem",'0.9rem','1rem']} lineHeight={["1.5rem"]}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi, rem.
              </Text>
            </CardBody>

            <CardFooter>
              <Box color={theme.colors.col.secondary} fontSize={["2rem"]}>
                <FaArrowRightLong />
              </Box>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default SuccessStoriesSection;
