import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const OurPrograms = () => {
  const headingRef = useRef(null);

  const gridContainerRef = useRef(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%",
        end: "bottom 90%",
      },
    });

    tl.from(headingRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    });

    return () => {
      tl.kill();
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gridContainerRef.current,
        start: "top 90%",
        end: "bottom 90%",
      },
    });

    // Box One
    tl.from(gridContainerRef.current.children, {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.3,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Box mt={"100px"} width="100%" my={["2rem", "2rem", "2rem", "5rem"]}>
      <Container
        w={["100%", "100%", "90%", "90%"]}
        maxW="1500px"
        marginX="auto"
        overflowX={"hidden"}
      >
        <Box
          ref={headingRef}
          textAlign={"center"}
          w={"100%"}
          my={"2rem"}
          p={["1.5rem", "2rem"]}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={["0.7rem", "1rem"]}
        >
          <Box
            fontSize={["1.5rem", "2.5rem ", "2.5rem", "3rem"]}
            fontWeight={"600"}
          >
            Our Programs
          </Box>
          <Text
            fontSize={["0.8rem", "0.9rem", "0.9rem", "0.9rem", "1rem"]}
            textAlign={["left", "center"]}
            maxW={"700px"}
            lineHeight={["1.3rem", "1.3rem", "1.8rem"]}
          >
            It's our mission to help people reduce their poverty by a huge
            number of helpful campaigns to make it essential.
          </Text>
        </Box>

        <SimpleGrid
          ref={gridContainerRef}
          columns={["1", "1", "1", "3"]}
          spacing={[10, 10, 10, 5, "10"]}
        >
          {/* Card One */}
          <Card
            padding={"0"}
            overflow={"hidden"}
            w={["100%", "80%", "70%", "100%"]}
            mx={"auto"}
          >
            <Box
              w={"100%"}
              h={["200px", "250px", "280px", "250px", "300px"]}
              overflow={"hidden"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                objectPosition={"center"}
                src="https://imgs.search.brave.com/yCvyB0LHe8xv5ZwqW7m4i8ZgZgZFmcDuSgUGdho9NhM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWNvbmxpYi5vcmcv/d3AtY29udGVudC91/cGxvYWRzLzIwMTcv/MTIvZW50aXRsZW1l/bnQuanBn"
              />
            </Box>

            <CardBody
              py={["1.5rem", "1.5rem", "1rem"]}
              px={["1.5rem", "1.5rem", "1.5rem", "1rem", "1.3rem"]}
            >
              <VStack
                alignItems={["start", "start", "start"]}
                gap={["1.1rem", "1.1rem", "0.8rem"]}
              >
                <Box
                  fontSize={["1.3rem", "1.5rem", "2rem", "1.2rem", "2rem"]}
                  fontWeight={["600"]}
                  w={["auto", "auto", "auto"]}
                >
                  Fight Poverty Programs & Services
                </Box>
                <Text
                  wordBreak={"break-word"}
                  fontSize={["0.9rem", "0.9rem", "1rem", "0.9rem", "1rem"]}
                >
                  Provides nutritious food,wholesome food,funds,and vocational
                  training to peopel suffering from lack of it.
                </Text>
              </VStack>
            </CardBody>

            <CardFooter
              pb={["2rem", "2rem", "0"]}
              py={["auto", "auto", "auto"]}
            >
              <Button
                colorScheme="orange"
                fontSize={["0.9rem", "0.9rem", "0.9rem"]}
              >
                LEARN MORE
              </Button>
            </CardFooter>
          </Card>

          {/* Card Two */}

          <Card
            padding={"0"}
            overflow={"hidden"}
            w={["100%", "80%", "70%", "100%"]}
            mx={"auto"}
          >
            <Box
              w={"100%"}
              h={["200px", "250px", "280px", "250px", "300px"]}
              overflow={"hidden"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                objectPosition={"center"}
                src="https://imgs.search.brave.com/ulx85nSmpJpfvCZHCJ27x5iVFcS6DGvueG_3AevoHAc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjAz/Mjc4NTEyNy9waG90/by9mYW1pbHlzLWNp/cmNsZS1vZi1sb3Zl/LndlYnA_Yj0xJnM9/MTcwNjY3YSZ3PTAm/az0yMCZjPXZsenR0/NkZzdjRfeUNVeU1l/ZHhOY3BmSEN3emxK/VWpvRW1PaTBEOWtH/cXc9"
              />
            </Box>

            <CardBody
              py={["1.5rem", "1.5rem", "1rem"]}
              px={["1.5rem", "1.5rem", "1.5rem", "1rem", "1.3rem"]}
            >
              <VStack
                alignItems={["start", "start", "start"]}
                justifyContent={["start"]}
                gap={["1.1rem", "1.1rem", "0.8rem"]}
              >
                <Box
                  fontSize={["1.3rem", "1.5rem", "2rem", "1.2rem", "2rem"]}
                  fontWeight={["600"]}
                  w={["auto", "auto", "auto"]}
                >
                  Family & Community Programs
                </Box>
                <Text
                  wordBreak={"break-word"}
                  fontSize={["0.9rem", "1rem", "1rem", "0.9rem", "1rem"]}
                >
                  Support to fmailies,children,young
                  people,volunteers,refugees,migrants and other individuals with
                  sepcial circumstances.
                </Text>
              </VStack>
            </CardBody>

            <CardFooter
              pb={["2rem", "2rem", "0"]}
              py={["auto", "auto", "auto"]}
            >
              <Button
                colorScheme="orange"
                fontSize={["0.9rem", "0.9rem", "0.9rem"]}
              >
                LEARN MORE
              </Button>
            </CardFooter>
          </Card>

          {/* Card Three */}

          <Card
            padding={"0"}
            overflow={"hidden"}
            w={["100%", "80%", "70%", "100%"]}
            mx={"auto"}
          >
            <Box
              w={"100%"}
              h={["200px", "250px", "280px", "250px", "300px"]}
              overflow={"hidden"}
            >
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                objectPosition={"center"}
                src="https://imgs.search.brave.com/Rrr_zyy1ROMzUS6rST2kYiWKsyo_KWwGbpnKGw-cDg8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/eW1jYS5vcmcvc2l0/ZXMvZGVmYXVsdC9m/aWxlcy8yMDIxLTA0/L2JleW9uZC1zY2hv/b2wtYmxvZy5qcGc"
              />
            </Box>

            <CardBody
              py={["1.5rem", "1.5rem", "1rem", "1.5rem"]}
              px={["1.5rem", "1.5rem", "1.5rem", "1rem", "1.3rem"]}
            >
              <VStack
                alignItems={["start", "start", "start"]}
                justifyContent={["start"]}
                gap={["1.1rem", "1.1rem", "0.8rem"]}
              >
                <Box
                  fontSize={["1.3rem", "1.5rem", "2rem", "1.2rem", "2rem"]}
                  fontWeight={["600"]}
                  w={["auto", "auto", "auto"]}
                >
                  Teen Programs
                </Box>
                <Text
                  wordBreak={"break-word"}
                  fontSize={["0.9rem", "1rem", "1rem", "0.9rem", "1rem"]}
                >
                  Keep children getting a good education,inculding tutoring
                  programs,scholarships,learning spaces,computer training.
                </Text>
              </VStack>
            </CardBody>

            <CardFooter
              pb={["2rem", "2rem", "0"]}
              py={["auto", "auto", "auto"]}
            >
              <Button
                colorScheme="orange"
                fontSize={["0.9rem", "0.9rem", "0.9rem"]}
              >
                LEARN MORE
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default OurPrograms;
