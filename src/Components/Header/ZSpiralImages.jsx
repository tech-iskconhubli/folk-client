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
    <Box my="2.5rem" overflowX={"hidden"} >
      {/* Heading */}
      <Box textAlign={"center"}
      border={"2px solid transparent"}
      m={["0px","0px","40px","40px"]}
      >
        <Heading
          className="title"
          fontWeight="500"
          fontSize={["2rem", "2rem", "2rem", "7rem"]}
          
        >
           WE HELP YOU
        </Heading>
      </Box>

      <Box width="100%" mt={'3rem'}>


        {/* Spiral Container */}
        <Container w={["100%","100%","90%","90%"]} maxW="1500px" marginX="auto">



        
          <Flex
          ref={container1}
            width="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection={["column", "column", "column", "row"]}
            py={["1rem", "2rem", "3rem", "2.5rem"]}
            px={["1rem", "2rem", "3rem", "2rem", "2.5rem"]}
            gap={['0','5px','5px','0px']}
            pY={["2rem", "3rem", "4rem", "6rem"]}
            pX={["1rem", "2rem", "3rem", "2rem", "3rem"]}
          >

          
            <Box
            ref={box1}
             boxSizing="border-box"
            padding={["0px","0px","20px","20px"]}
              w={["100%", "100%", "100%", "50%", "53%"]}
              mb={["1rem", "2rem", "2rem", "0"]}
              mr={["0", "0", "0", "2rem"]}
              borderRadius="10px"
              overflow="hidden"
            >
              <Image
                src="https://t4.ftcdn.net/jpg/06/30/90/99/240_F_630909929_xHWmhNMPob3F5JDJE9Cfdjg6d80WBv6S.jpg"
                alt="Connecting Community Image"
                borderRadius="10px"
                objectFit="cover" 
                w="100%"
                h="100%"
              />
            </Box>

            {/* Spiral Container 1 Text Box */}
            <Box 
           
            ref={box2}
             boxSizing="border-box"
            padding={["0px","0px","20px","20px"]}
              w={["100%", "100%", "100%", "50%", "60%"]} 
            >
              <Heading
              sx={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
              }}
                fontSize={["1.5rem", "2rem", "2.2rem","3.3rem","3.3rem"]} 
                fontWeight={["600","600","500","500"]}
                mb={['1rem','1rem','1rem','1.5rem']} 
                textAlign={["left", "left", "left", "left"]} 
              >
                Connect with a Global Community
              </Heading>
              <Text
               sx={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
                fontSize={["0.9rem", "1rem", "1.2rem", "1.1rem", "1.1rem"]} 
                textAlign={["left", "left", "left", "left"]} 
              >
                Join a worldwide family dedicated to spiritual growth and
                community service. Find suppot, friendship, and inspiration by
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
            py={["1rem", "2rem", "3rem", "2.5rem"]}
            px={["1rem", "2rem", "3rem", "2rem", "3rem"]}
            gap={['0','5px','5px','30px']}
            // border={'2px solid red'}
          >

            {/* Spiral Container 2 Text Box */}
            <Box
            ref={box3}
             boxSizing="border-box"
            padding={["0px","0px","20px","20px"]}
              w={["100%", "100%", "100%", "50%", "60%"]} 
            >
              <Heading
               sx={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
              }}
                fontSize={["1.5rem", "2rem", "2.2rem","3.3rem","3.3rem"]} 
                fontWeight={["600","600","500","500"]}
                mb={['1rem','1rem','1rem','1.5rem']} 
                textAlign={["left", "left", "left", "left"]}
              >
                Find Purpose Through Service
              </Heading>
              <Text
               sx={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
              
                fontSize={["0.9rem", "1rem", "1.2rem", "1.1rem", "1.1rem"]} 
                textAlign={["left", "left", "left", "left"]} 
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
             boxSizing="border-box"
            padding={["0px","0px","20px","20px"]}
              w={["100%", "100%", "100%", "50%", "53%"]}
              mb={["1rem", "2rem", "2rem", "0"]}
              mr={["0", "0", "0", "2rem"]}
              borderRadius="10px"
              overflow="hidden"
            >
              <Image
                src="https://t4.ftcdn.net/jpg/06/30/90/99/240_F_630909929_xHWmhNMPob3F5JDJE9Cfdjg6d80WBv6S.jpg"
                alt="Connecting Community Image"
                borderRadius="10px"
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
            py={["1rem", "2rem", "3rem", "2.5rem"]}
            px={["1rem", "2rem", "3rem", "2rem", "3rem"]}
            gap={['0','5px','5px','30px']}
            // border={'2px solid red'}
          >

            {/* Spiral Continer 3 Image Box */}
            <Box
            ref={box5}
             boxSizing="border-box"
            padding={["0px","0px","20px","20px"]}
              w={["100%", "100%", "100%", "50%", "53%"]}
              mb={["1rem", "2rem", "2rem", "0"]}
              mr={["0", "0", "0", "2rem"]}
              borderRadius="10px"
              overflow="hidden"
            >
              <Image
                src="https://t4.ftcdn.net/jpg/06/30/90/99/240_F_630909929_xHWmhNMPob3F5JDJE9Cfdjg6d80WBv6S.jpg"
                alt="Connecting Community Image"
                borderRadius="10px"
                objectFit="cover" 
                w="100%"
                h="100%"
              />
            </Box>

            {/* Spiral Container 3 Text Box */}
            <Box
            ref={box6}
             boxSizing="border-box"
            padding={["0px","0px","20px","20px"]}
              w={["100%", "100%", "100%", "50%", "60%"]} 
            >
              <Heading
               sx={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
              }}
                 fontSize={["1.5rem", "2rem", "2.2rem","3.3rem","3.3rem"]} 
                 fontWeight={["600","600","500","500"]}
                 mb={['1rem','1rem','1rem','1.5rem']} 
                textAlign={["left", "left", "left", "left"]} 
              >
                Unlock the Power of Meditation
              </Heading>
              <Text
               sx={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
              
                fontSize={["0.9rem", "1rem", "1.2rem", "1.1rem", "1.1rem"]} 
                textAlign={["left", "left", "left", "left"]} 
              >
                Harness the power of mantra meditation to focus your mind,
                purify your heart, and connect with the divine. Regular practice
                leads to a calm and centered state of being.
              </Text>
            </Box>

          </Flex>

        </Container>
      </Box>
    </Box>
  );
};

export default ZSpiralImages;