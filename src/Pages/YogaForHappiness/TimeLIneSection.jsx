import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useTheme } from "@emotion/react";
import theme from "../../theme";

import "../../Styles/TimeLine.css";
import { useGSAP } from "@gsap/react";

import '../../Styles/Timeline.css';
import { useGSAP } from '@gsap/react'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const TimeLIneSection = () => {
  const headingBox = useRef(null);

  const BoxOneContainer = useRef(null);
  const DotOne = useRef(null);
  const imageOne = useRef(null);
  const matterContainerOne = useRef(null);

  const BoxTwoContainer = useRef(null);
  const DotTwo = useRef(null);
  const imageTwo = useRef(null);
  const matterContainerTwo = useRef(null);

  const BoxThreeContainer = useRef(null);
  const DotThree = useRef(null);
  const imageThree = useRef(null);
  const matterContainerThree = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingBox.current,
        start: "top 90%",
        end: "bottom center",
      },
    });

    tl.from(headingBox.current.children, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.4,
    });
    return () => {
      tl.kill();
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: BoxOneContainer.current,
        start: "top 90%",
        end: "bottom center",
      },
    });

    tl.from(DotOne.current, {
      opacity: 0,
      y: "-150",
      duration: 0.5,
    });
    tl.from(imageOne.current, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
    });
    tl.from(matterContainerOne.current.children, {
      opacity: 0,
      y: "-80",
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
        trigger: BoxTwoContainer.current,
        start: "top 90%",
        end: "bottom center",
      },
    });

    tl.from(DotTwo.current, {
      opacity: 0,
      y: "-150",
      duration: 0.5,
    });
    tl.from(imageTwo.current, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
    });
    tl.from(matterContainerTwo.current.children, {
      opacity: 0,
      y: "-80",
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
        trigger: BoxThreeContainer.current,
        start: "top 90%",
        end: "bottom center",
      },
    });

    tl.from(DotThree.current, {
      opacity: 0,
      y: "-150",
      duration: 0.5,
    });
    tl.from(imageThree.current, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
    });
    tl.from(matterContainerThree.current.children, {
      opacity: 0,
      y: "-80",
      duration: 0.5,
      stagger: 0.3,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Box w={"100%"} overflowX={"hidden"} mmy={["1rem", "1rem", "2rem", "3rem"]}>
      <Container
        w={["100%", "100%", "90%", "90%"]}
        maxW="1500px"
        marginX="auto"
        my={"2rem"}
      >
        <Box textAlign={"center"} ref={headingBox}>
          <Box
            fontSize={["0.9rem"]}
            fontWeight={"bold"}
            letterSpacing={".25rem"}
            color={theme.colors.col.secondary}
          >
            PROGRAMS
          </Box>
          <Box
            mt={["0.7rem"]}
            maxW={"700px"}
            fontSize={["1.2rem", "1.6rem", "2rem"]}
            fontWeight={"bold"}
            lineHeight={["auto"]}
            w={["auto", "450px"]}
            mx={"auto"}
          >
            Meditation, Yoga, Retreats, Free Programs & More...
          </Box>
        </Box>

        <Flex
          width={"100%"}
          className="timeLine"
          direction={["column"]}
          gap={["0.5rem", "0.5rem", "1rem", "1rem", "1rem"]}
          my={["1rem", "1rem", "1rem", "2rem"]}
        >
          {/* Box one Container */}
          <Box
            ref={BoxOneContainer}
            w={["90%", "70%", "100%"]}
            mx={"auto"}
            display={"flex"}
            flexDirection={["column", "column", "row"]}
            alignItems={"start"}
            justifyContent={"space-between"}
            py={["1rem", "1rem", "1rem", "1rem", "2rem"]}
          >
            {/* Dot */}
            <Box
              ref={DotOne}
              w={"15px"}
              h={"15px"}
              borderRadius={"50%"}
              bg={theme.colors.col.secondary}
              position={"absolute"}
              top={"2%"}
              left={["0", "10%", "50%"]}
              ml={"-7px"}
            ></Box>

            {/* Image One Container */}
            <Box
              ref={imageOne}
              w={["100%", "100%", "48%"]}
              h={["200px", "300px", "210px", "210px", "400px"]}
            >
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                src="https://ideogram.ai/assets/progressive-image/balanced/response/Sx4oVLiiTs-_GSxBfsrc2w"
                alt=""
              />
            </Box>

            {/* Matter Container  */}
            <VStack
              mt={["1rem", "1rem", "0"]}
              ref={matterContainerOne}
              gap={["0.8rem", "0.8rem", "0.7rem", "0.7rem", "1rem"]}
              alignItems={"start"}
              w={["100%", "100%", "48%"]}
            >
              <Box
                color={theme.colors.col.secondary}
                fontWeight={"bold"}
                w={["auto", "auto", "auto", "auto", "450px"]}
                fontSize={["1.4rem", "1.8rem", "1.5rem", "2rem", "2.5rem"]}
              >
                The Happiness Program
              </Box>
              <Text
                fontSize={["0.8rem", "1rem"]}
                lineHeight={["1.5rem", "1.8rem", "1.8rem", "1.9rem", "2rem"]}
              >
                Discover the transformative Happiness Program by the Art of
                Living Foundation, a profound workshop designed to empower
                individuals with practical tools for reducing stress and
                cultivating lasting happiness. Through guided sessions in
                powerful breathing techniques, meditation, and ancient wisdom,
                participants learn to manage emotions, enhance mental clarity,
                and foster inner peace. Join a supportive community and embark
                on a journey towards greater well-being and fulfillment in every
                aspect of life.
              </Text>
            </VStack>
          </Box>

          {/* Box Two Container */}
          <Box
            ref={BoxTwoContainer}
            w={["90%", "70%", "100%"]}
            mx={"auto"}
            display={"flex"}
            flexDirection={["column-reverse", "column-reverse", "row"]}
            alignItems={"start"}
            justifyContent={"space-between"}
            py={["1rem", "1rem", "1rem", "1rem", "2rem"]}
          >
            {/* DotTwo */}
            <Box
              ref={DotTwo}
              w={"15px"}
              h={"15px"}
              borderRadius={"50%"}
              bg={theme.colors.col.secondary}
              position={"absolute"}
              top={"38%"}
              left={["0", "10%", "50%"]}
              ml={"-7px"}
            ></Box>

            <VStack
              mt={["1rem", "1rem", "0"]}
              ref={matterContainerTwo}
              gap={["0.8rem", "0.8rem", "0.7rem", "0.7rem", "1rem"]}
              alignItems={["start", "start", "end"]}
              w={["100%", "100%", "48%"]}
            >
              <Box
                color={theme.colors.col.secondary}
                fontWeight={"bold"}
                w={["auto", "auto", "auto", "auto", "450px"]}
                fontSize={["1.4rem", "1.8rem", "1.5rem", "2rem", "2.5rem"]}
                textAlign={["left", "left", "right"]}
              >
                Sahaj Samadhi Meditation
              </Box>
              <Text
                fontSize={["0.8rem", "1rem"]}
                lineHeight={["1.5rem", "1.8rem", "1.8rem", "1.9rem", "2rem"]}
                textAlign={["left", "left", "right"]}
              >
                Sahaj Samadhi Meditation is a mantra-based technique taught by
                the Art of Living Foundation. It aims to effortlessly guide the
                mind into a state of deep inner peace and relaxation.
                Practitioners repeat a specific mantra silently, fostering
                calmness, clarity, and overall well-being. Visuals for Sahaj
                Samadhi Meditation might include serene natural settings,
                meditative postures, and symbolic imagery related to mantras and
                inner tranquility.
              </Text>
            </VStack>
            <Box
              ref={imageTwo}
              w={["100%", "100%", "48%"]}
              h={["200px", "300px", "210px", "400px"]}
            >
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                src="https://ideogram.ai/assets/progressive-image/balanced/response/a0sSIiLdQZOEOcR82nKEgg"
                alt=""
              />
            </Box>
          </Box>

          {/* Box Three Container */}
          <Box
            ref={BoxThreeContainer}
            w={["90%", "70%", "100%"]}
            mx={"auto"}
            display={"flex"}
            flexDirection={["column", "column", "row"]}
            alignItems={"start"}
            justifyContent={"space-between"}
            py={["1rem", "1rem", "1rem", "1rem", "2rem"]}
          >
            {/* DotThree */}
            <Box
              ref={DotThree}
              w={"15px"}
              h={"15px"}
              borderRadius={"50%"}
              bg={theme.colors.col.secondary}
              position={"absolute"}
              top={"72%"}
              left={["0", "10%", "50%"]}
              ml={"-7px"}
            ></Box>

            <Box
              ref={imageThree}
              w={["100%", "100%", "48%"]}
              h={["200px", "300px", "210px", "400px"]}
            >
              <Image
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                src="https://ideogram.ai/assets/image/lossless/response/0pwjVgqgRqesQsK9WovlHA"
                alt=""
              />
            </Box>

            <VStack
              mt={["1rem"]}
              ref={matterContainerThree}
              gap={["0.8rem", "0.8rem", "0.7rem"]}
              alignItems={"start"}
              w={["100%", "100%", "48%"]}
            >
              <Box
                color={theme.colors.col.secondary}
                fontWeight={"bold"}
                w={["auto", "auto", "auto", "auto", "450px"]}
                fontSize={["1.4rem", "1.8rem", "1.5rem", "2rem", "2.5rem"]}
              >
                Advanced Meditation Program
              </Box>
              <Text
                fontSize={["0.8rem", "1rem"]}
                lineHeight={["1.5rem", "1.8rem", "1.8rem", "1.9rem", "2rem"]}
              >
                An Advanced Meditation Program involves structured practices
                that go beyond basic techniques, aiming for profound states of
                consciousness and spiritual growth. It typically includes
                advanced meditation techniques, guided by experienced
                instructors, and integrates philosophical teachings for holistic
                well-being. Visuals for an Advanced Meditation Program may
                feature serene environments, meditative postures, and symbols of
                spiritual wisdom and inner peace.
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default TimeLIneSection;
