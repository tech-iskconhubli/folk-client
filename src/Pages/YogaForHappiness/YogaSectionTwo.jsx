import { Box, Button, Flex, Image, Text, border } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import theme from "../../theme";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const YogaSectionTwo = () => {
  // Box One
  const boxOneContainer = useRef(null);
  const boxOneSmallHeading = useRef(null);
  const boxOneBigHeading = useRef(null);
  const boxOneMatter = useRef(null);
  const boxOneButton = useRef(null);

  // Box Two
  const boxTwoContainer = useRef(null);

  // Box Three
  const boxThreeContainer = useRef(null);
  const boxThreeSmallHeading = useRef(null);
  const boxThreeBigHeading = useRef(null);
  const boxThreeMatter = useRef(null);
  const boxThreeButton = useRef(null);

  // Box One Animation
  // BoxOneSmallHeading Animation

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxOneContainer.current,
        start: "top 80%",
        end: "bottom Center",
        ease: "power1.inOut",
      },
    });
    tl.from(boxOneSmallHeading.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
    });

    tl.from(boxOneBigHeading.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(boxOneMatter.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
    });
    tl.from(boxOneButton.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
    });
    return () => {
      tl.kill();
    };
  }, []);

  //  Box Two Animation
  useGSAP(() => {
    gsap.from(boxTwoContainer.current.children, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: boxTwoContainer.current,
        start: "top 80%",
        end: "bottom center",
      },
    });
  }, []);

  // Box Three
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boxThreeContainer.current,
        start: "top 80%",
        end: "bottom center",
      },
    });

    tl.from(boxThreeSmallHeading.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
    tl.from(boxThreeBigHeading.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
    tl.from(boxThreeMatter.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
    tl.from(boxThreeButton.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Box width={"100%"} my={["1rem"]} overflowX={"hidden"}>
      <Flex
        w={["100%", "100%", "90%", "90%"]}
        maxW="1500px"
        marginX="auto"
        padding={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={"25px"}
      >
        {/* Box 1 */}
        <Box
          ref={boxOneContainer}
          w={["100%", "100%", "auto"]}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={["9px", "10px", "10px", "15px",'20px']}
          px={["0", "2rem"]}
        >
          {/* small heading */}
          <Box
            ref={boxOneSmallHeading}
            fontSize={[".7rem", "1rem"]}
            color={theme.colors.col.secondary}
            fontWeight={"bold"}
          >
            WE ARE A PRAYER
          </Box>
          {/*Big  Heading */}
          <Box
            ref={boxOneBigHeading}
            fontSize={["1.6rem", "2.5rem", "2.5rem", "3rem"]}
            fontWeight={"600"}
            maxW={"700px"}
            minW={"300px"}
            textAlign={"center"}
            lineHeight={["", "3.5rem"]}
          >
            WE ARE A HINDU THAT BELIEVE IN KRISHNA AND RAM
          </Box>

          {/* Matter */}
          <Text
            ref={boxOneMatter}
            fontSize={[".7rem", "0.8rem", "0.9rem"]}
            display={"inline-block"}
            maxW={"700px"}
            textAlign={["left", "left", "center"]}
            lineHeight={["1.2rem", "1.5rem"]}
            px={["0.5rem", "auto"]}
          >
            We are devoted to Lord Rama and Lord Krishna, embodying their teachings of righteousness, compassion, and divine love. Their stories and wisdom guide us in leading virtuous lives and deepening our spiritual connection.
          </Text>
          {/* Button */}
          <Box ref={boxOneButton}>
            <Button
              colorScheme="orange"
              textColor={"white"}
              fontWeight={"450"}
              fontSize={[".7rem", "0.8rem", "0.9rem"]}
            >
              Read More
            </Button>
          </Box>
        </Box>

        {/* Box 2 */}

        <Box w={["100%", "100%", "auto"]}>
          <Box
            ref={boxTwoContainer}
            display={"flex"}
            flexDirection={["column", "column", "row", "row"]}
            alignItems={["center", "center", "start"]}
            gap={"20px"}
            p={"1rem"}
          >
            {/* Image One */}
            <Box
              w={["100%", "70%", "200px", "200px", "350px"]}
              h={["300px", "400px", "290px", "290px", "500px"]}
              borderRadius={"10px"}
              overflow={"hidden"}
            >
              <Image
                objectFit={"cover"}
                objectPosition={"bottom center"}
                w={"100%"}
                h={"100%"}
                borderRadius={"10px"}
                src="https://images.unsplash.com/photo-1538024333176-f25f63f873ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Bpcml0dWFsfGVufDB8fDB8fHww"
                alt=""
              />
            </Box>

            {/* Image Two */}
            <Box
              w={["100%", "70%", "200px", "200px", "350px"]}
              h={["300px", "400px", "290px", "290px", "500px"]}
              mt={["0", "0", "5rem", "5rem", "10rem"]}
              borderRadius={"10px"}
              overflow={"hidden"}
            >
              <Image
                objectFit={"cover"}
                objectPosition={"center"}
                w={"100%"}
                h={"100%"}
                borderRadius={"10px"}
                src="https://images.unsplash.com/photo-1616377009507-c8111f07aced?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHNwaXJpdHVhbHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </Box>

            {/* Image Three */}
            <Box
              w={["100%", "70%", "200px", "200px", "350px"]}
              h={["300px", "400px", "290px", "290px", "500px"]}
              borderRadius={"10px"}
              overflow={"hidden"}
            >
              <Image
                objectFit={"cover"}
                objectPosition={"top center"}
                w={"100%"}
                h={"100%"}
                borderRadius={"10px"}
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwaXJpdHVhbHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </Box>
          </Box>
        </Box>

        {/* Box 3 */}

        <Box
          ref={boxThreeContainer}
          overflow={"hidden"}
          w={["100%", "100%", "auto"]}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={["9px", "10px", "10px", "15px",'20px']}
          px={["0", "2rem"]}
        >
          {/* small heading */}
          <Box
            ref={boxThreeSmallHeading}
            fontSize={[".7rem", "1rem"]}
            color={theme.colors.col.secondary}
            fontWeight={"bold"}
          >
            OUR MISSION & MISSION
          </Box>
          {/*Big  Heading */}
          <Box
            ref={boxThreeBigHeading}
            fontSize={["1.6rem", "2.5rem", "2.5rem", "3rem"]}
            fontWeight={"600"}
            maxW={"500px"}
            minW={"300px"}
            textAlign={"center"}
          >
            CELEBRATE WITH US
          </Box>

          {/* Matter */}
          <Text
            ref={boxThreeMatter}
            fontSize={[".7rem", "0.8rem", "0.9rem"]}
            display={"inline-block"}
            maxW={"700px"}
            textAlign={["left", "left", "center"]}
            lineHeight={["1.2rem", "1.5rem"]}
            px={["0.5rem", "auto"]}
          >
            Celebrate with us the divine virtues and timeless teachings of Lord
            Rama, whose life exemplifies righteousness, compassion, and the
            victory of good over evil. Join in honoring his legacy and seeking
            spiritual blessings through devotion and reflection.
          </Text>
          {/* Button */}
          <Box ref={boxThreeButton}>
            <Button
              colorScheme="orange"
              textColor={"white"}
              fontWeight={"450"}
              fontSize={[".7rem", "0.8rem", "0.9rem"]}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default YogaSectionTwo;
