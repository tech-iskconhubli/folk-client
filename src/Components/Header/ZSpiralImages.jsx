import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ZSpiralImages = () => {
  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);

  //  Animation for Spiral Container 1
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container1.current,
        start: "top center",
        end: "bottom center",
      },
    });

    tl.from(box1.current, { opacity: 0, x: -200, duration: 1 });
    tl.from(box2.current, { opacity: 0, x: 200, duration: 1 }, "-=0 .5");
    return () => {
      tl.kill();
    };
  }, []);

  // Animation for Spiral Container 2
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container2.current,
        start: "top center",
        end: "bottom center",
      },
    });

    tl.from(box3.current, { opacity: 0, x: -200, duration: 1 });
    tl.from(box4.current, { opacity: 0, x: 200, duration: 1 }, "-=0.5");
    return () => {
      tl.kill();
    };
  }, []);

  // Animation for Spiral Container 3
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container3.current,
        start: "top center",
        end: "bottom center",
      },
    });

    tl.from(box5.current, { opacity: 0, x: -200, duration: 1 });
    tl.from(box6.current, { opacity: 0, x: 200, duration: 1 }, "-=0.5");
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Box my="2.5rem" overflowX={"hidden"}>
      {/* Heading */}
      <Box textAlign={"center"}>
        <Heading
          className="title"
          fontWeight="bold"
          fontSize={["1.5rem", "2rem", "2rem", "6rem"]}
        >
          WE HELP YOU
        </Heading>
      </Box>

      <Box width="100%">


        {/* Spiral Container */}
        <Container w="90%" maxW="1500px" marginX="auto">



          {/*  Spiral Section One  */}
          <Flex
          ref={container1}
            width="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection={["column", "column", "column", "row"]}
            py={["2rem", "3rem", "4rem", "6rem"]}
            px={["1rem", "2rem", "3rem", "2rem", "3rem"]}
            gap={['0','5px','5px','10px']}
          >

            {/* Spiral Container 1 Text Box */}
            <Box
            ref={box1}
              w={["100%", "100%", "100%", "50%", "40%"]}
              mb={["1rem", "2rem", "2rem", "0"]}
              mr={["0", "0", "0", "2rem"]}
              borderRadius="md"
              overflow="hidden"
            >
              <Image
                src="https://t4.ftcdn.net/jpg/06/30/90/99/240_F_630909929_xHWmhNMPob3F5JDJE9Cfdjg6d80WBv6S.jpg"
                alt="Connecting Community Image"
                borderRadius="md"
                objectFit="cover" 
                w="100%"
                h="100%"
              />
            </Box>

            {/* Spiral Container 1 Image Box */}
            <Box
            ref={box2}
              w={["100%", "100%", "100%", "50%", "60%"]} 
            >
              <Heading
                fontSize={["1.8rem", "2rem", "2.5rem", "2.3rem", "3rem"]} 
                fontWeight="bold"
                lineHeight={["2.2rem", "2.5rem", "3rem", "3rem", "3.5rem"]} 
                mb="1.3rem" 
                textAlign={["center", "center", "left", "left"]} 
              >
                Connect with a Global Community
              </Heading>
              <Text
                fontSize={["1rem", "1.1rem", "1.2rem", "1.1rem", "1.4rem"]} 
                lineHeight={["1.6", "1.8", "2", "2", "2.1"]} 
                textAlign={["center", "center", "left", "left"]} 
              >
                Join a worldwide family dedicated to spiritual growth and
                community service. Find support, friendship, and inspiration by
                participating in local temple activities or connecting online.
              </Text>
            </Box>
          </Flex>

          {/* Spiral Container Two */}
          <Flex
          ref={container2}
            width="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection={[
              "column-reverse",
              "column-reverse",
              "column-reverse",
              "row",
            ]}
            py={["2rem", "3rem", "4rem", "6rem"]}
            px={["1rem", "2rem", "3rem", "2rem", "3rem"]}
            gap={['0','5px','5px','30px']}
          >

            {/* Spiral Container 2 Text Box */}
            <Box
            ref={box3}
              w={["100%", "100%", "100%", "50%", "60%"]} 
            >
              <Heading
                fontSize={["1.8rem", "2rem", "2.5rem", "2.3rem", "3rem"]} 
                fontWeight="bold"
                lineHeight={["2.2rem", "2.5rem", "3rem", "3rem", "3.5rem"]}
                mb="1.3rem" 
                textAlign={["center", "center", "left", "left"]}
              >
                Find Purpose Through Service
              </Heading>
              <Text
                fontSize={["1rem", "1.1rem", "1.2rem", "1.1rem", "1.4rem"]} 
                lineHeight={["1.6", "1.8", "2", "2", "2.1"]} 
                textAlign={["center", "center", "left", "left"]} 
              >
                Discover profound fulfillment through selfless acts of kindness
                and community service. Engage in volunteering, food
                distribution, and environmental initiatives to make a positive
                impact.
              </Text>
            </Box>

            {/* Spiral Container 2 Image Box */}
            <Box
            ref={box4}
              w={["100%", "100%", "100%", "50%", "40%"]}
              mb={["1rem", "2rem", "2rem", "0"]}
              mr={["0", "0", "0", "2rem"]}
              borderRadius="md"
              overflow="hidden"
            >
              <Image
                src="https://t4.ftcdn.net/jpg/06/30/90/99/240_F_630909929_xHWmhNMPob3F5JDJE9Cfdjg6d80WBv6S.jpg"
                alt="Connecting Community Image"
                borderRadius="md"
                objectFit="cover" 
                w="100%"
                h="100%"
              />
            </Box>
          </Flex>

          {/* Spiral Container 3 */}

          <Flex
          ref={container3}
            width="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection={["column", "column", "column", "row"]}
            py={["2rem", "3rem", "4rem", "6rem"]}
            px={["1rem", "2rem", "3rem", "2rem", "3rem"]}
            gap={['0','5px','5px','30px']}
          >

            {/* Spiral Continer 3 Image Box */}
            <Box
            ref={box5}
              w={["100%", "100%", "100%", "50%", "40%"]}
              mb={["1rem", "2rem", "2rem", "0"]}
              mr={["0", "0", "0", "2rem"]}
              borderRadius="md"
              overflow="hidden"
            >
              <Image
                src="https://t4.ftcdn.net/jpg/06/30/90/99/240_F_630909929_xHWmhNMPob3F5JDJE9Cfdjg6d80WBv6S.jpg"
                alt="Connecting Community Image"
                borderRadius="md"
                objectFit="cover" 
                w="100%"
                h="100%"
              />
            </Box>

            {/* Spiral Container 3 Text Box */}
            <Box
            ref={box6}
              w={["100%", "100%", "100%", "50%", "60%"]} 
            >
              <Heading
                fontSize={["1.8rem", "2rem", "2.5rem", "2.3rem", "3rem"]} 
                fontWeight="bold"
                lineHeight={["2.2rem", "2.5rem", "3rem", "3rem", "3.5rem"]} 
                mb="1.3rem" 
                textAlign={["center", "center", "left", "left"]} 
              >
                Unlock the Power of Meditation
              </Heading>
              <Text
                fontSize={["1rem", "1.1rem", "1.2rem", "1.1rem", "1.4rem"]} 
                lineHeight={["1.6", "1.8", "2", "2", "2.1"]} 
                textAlign={["center", "center", "left", "left"]} 
              >
                Harness the power of mantra meditation to focus your mind,
                purify your heart, and connect with the divine. Regular practice
                leads to a calm and centered state of being.
              </Text>
            </Box>

          </Flex>

        </Container>
      </Box>
    </Box>
  );
};

export default ZSpiralImages;

