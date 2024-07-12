import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
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

const festivalImages = [
  {
    imageUrl:
      "https://ideogram.ai/assets/progressive-image/balanced/response/AJrlaV__QbiG0i_fkJmKpw",
    title: "Ratha Yatra Festival",
    desc: "Ratha Yatra celebrates Lord Jagannaths journey to his aunts house. Monks and devotees pull massive chariots housing deities, chanting and singing devotional songs. The festival signifies unity and devotion.",
  },
  {
    imageUrl:
      "https://ideogram.ai/assets/image/lossless/response/sT99Lsa-Qhmvva4ddr74MQ",
    title: "Krishna Jayanti Festivities",
    desc: "Join us in celebrating Krishna Jayanti, the joyous occasion marking Lord Krishnas birth. Explore the traditions of fasting, prayers, and hymn singing dedicated to Krishna.",
  },
  {
    imageUrl:
      "https://ideogram.ai/assets/image/lossless/response/c7bO8oRYTyK780IyxFzCnA",
    title: "Radha Ashtami Observance",
    desc: "Join us in celebrating Radha Ashtami, commemorating the birth of Radha, Krishnas beloved. Experience the devotion, bhajans, dances, and temple visits that honor Radha and Krishnas eternal love.",
  },
];

const FestivalSection = () => {
  const headingContainerRef = useRef(null);
  const gridContainerRef = useRef(null);

  useGSAP(() => {
    gsap.from(headingContainerRef.current.children, {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: headingContainerRef.current,
        start: "top 90%",
        end: "bottom 90%",
      },
    });
  }, []);

  useGSAP(() => {
    gsap.from(gridContainerRef.current.children, {
      scale: 0.7,
      opacity: 0,
      duration: "0.5",
      stagger: 0.3,
      scrollTrigger: {
        trigger: gridContainerRef.current,
        start: "top 90%",
        end: "bottom 90%",
      },
    });
  }, []);

  return (
    <Box width="100%" my={["5rem", "5rem", "7rem", "5rem", "10rem"]}>
      <Container
        w={["100%", "100%", "95%", "95%"]}
        maxW="1500px"
        marginX="auto"
      >
        <HStack
          ref={headingContainerRef}
          justifyContent={['space-between']}
          alignItems={"flex-end"}
          w={["100%", "85%", "100%"]}
          mx={"auto"}
        >
          <Box
            fontSize={["1.5rem",'1.8rem','1.8rem','2rem','2.5rem']}
            color={theme.colors.col.secondary}
            fontWeight={"600"}
          >
            Festivals Releate
          </Box>
          <Box display={['block','block','block','block','none']}>
            <Button
              variant={"outline"}
              colorScheme="orange"
              px={["0.5rem", ""]}
              fontSize={["0.7rem"]}
              size={["sm", "sm", "md"]}
            >
              View all
            </Button>
          </Box>
        </HStack>

        <SimpleGrid
          ref={gridContainerRef}
          w={["100%", "85%", "100%"]}
          mx={"auto"}
          columns={["1",'1','2','3','4']}
          mt={["3rem"]}
          spacing={["10",'10','5','3','5']}
        >
          {festivalImages.map((singleObj, index) => (
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

          <Card
            bgColor={theme.colors.col.secondary}
            display={["none", "none", "none", "none", "flex"]}
          >
            <CardBody
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <VStack gap={["1.5rem"]}>
                <Box fontSize={["2.5rem"]} color={"white"} fontWeight={"600"}>
                  View all
                </Box>
                <Box fontSize={["1.5rem"]} fontWeight={"500"} color={"white"}>
                  Related to this section
                </Box>

                <Box>
                  <IconButton
                    size={["lg"]}
                    icon={<FaArrowRightLong />}
                    borderRadius={"50%"}
                    color={theme.colors.col.secondary}
                  />
                </Box>
              </VStack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default FestivalSection;
