import React from "react";
import { useRef } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import profile1 from "../../Assets/sostestimonials1.jpg";
import theme from "../../theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const SecretofSuccessSection5 = () => {
  //Animatedprofile1
  const profilecard1 = useRef();
  useGSAP(() => {
    gsap.from(profilecard1.current, {
      y: 200,
      scale: 1.2,
      duration: 1,
      scrollTrigger: {
        trigger: "profilecard1",
        start: "top 90%",
        end: "bottom 100px",
      },
    });
  });

  //Animatedprofile2
  const profilecard2 = useRef();
  useGSAP(() => {
    gsap.from(profilecard2.current, {
      y: 200,
      scale: 1.2,
      duration: 1,
      scrollTrigger: {
        trigger: "profilecard2",
        start: "top 90%",
        end: "bottom 100px",
      },
    });
  });

  //Animatedprofile3
  const profilecard3 = useRef();
  useGSAP(() => {
    gsap.from(profilecard3.current, {
      y: 200,
      scale: 1.2,
      duration: 1,
      scrollTrigger: {
        trigger: "profilecard3",
        start: "top 90%",
        end: "bottom 100px",
      },
    });
  });

  return (
    <>
      <Box>
        {/* happyattendiesSection */}
        <Box textAlign="center" mt="70px" mb="30px">
          <Heading
            style={{ color: theme.colors.col.text }}
            fontSize={{ base: "2rem", md: "3rem" }}
          >
            {" "}
            Happy Attendies
          </Heading>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          justifyContent="center"
          gap={{ base: "5px", md: "10px", lg: "20px", xl: "20px" }}
        >
          {/* attendie1 */}
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            position="relative"
            w={{ base: "90%", md: "70%", lg: "300px", xl: "400px" }}
            h="360px"
            lineHeight="25px"
            ref={profilecard1}
          >
            {/* profile1 */}
            <Box
              w="120px"
              h="120px"
              borderRadius="50%"
              zIndex="1"
              top="0"
              position="absolute"
              backgroundImage={profile1}
              backgroundPosition="center"
              backgroundSize="cover"
              border="4px solid white"
            ></Box>
            {/* text */}
            <Box
              w={{ base: "100%", md: "100%", lg: "300px", xl: "400px" }}
              h="300px"
              bg="rgba(246,247,249)"
              top="60px"
              position="absolute"
              borderRadius="30px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p="30px"
            >
              <Text textAlign="justify">
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: theme.colors.col.secondary,
                  }}
                >
                  &#x275D;
                </span>
                &nbsp;The presentations were very practical yet powerful. I felt
                that these seminars were handcrafted specially for us, keeping
                the interests of the students in mind. &nbsp;
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: theme.colors.col.secondary,
                  }}
                >
                  &#x275E;
                </span>
              </Text>
            </Box>
          </Box>

          {/* attendie2 */}
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            position="relative"
            w={{ base: "92%", md: "70%", lg: "300px", xl: "400px" }}
            h="360px"
            lineHeight="25px"
            ref={profilecard2}
          >
            {/* profile2 */}
            <Box
              w="120px"
              h="120px"
              borderRadius="50%"
              zIndex="1"
              top="0"
              position="absolute"
              backgroundImage={profile1}
              backgroundPosition="center"
              backgroundSize="cover"
              border="4px solid white"
              boxShadow=""
            ></Box>
            {/* text */}
            <Box
              w={{ base: "100%", md: "100%", lg: "300px", xl: "400px" }}
              h="300px"
              bg="rgba(246,247,249)"
              top="60px"
              position="absolute"
              borderRadius="30px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p="30px"
            >
              <Text textAlign="justify">
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: theme.colors.col.secondary,
                  }}
                >
                  &#x275D;
                </span>
                &nbsp;The presentations were very practical yet powerful. I felt
                that these seminars were handcrafted specially for us, keeping
                the interests of the students in mind. &nbsp;
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: theme.colors.col.secondary,
                  }}
                >
                  &#x275E;
                </span>
              </Text>
            </Box>
          </Box>

          {/* attendie3 */}
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            position="relative"
            w={{ base: "92%", md: "70%", lg: "300px", xl: "400px" }}
            h="360px"
            lineHeight="25px"
            ref={profilecard3}
          >
            {/* profile3 */}
            <Box
              w="120px"
              h="120px"
              borderRadius="50%"
              zIndex="1"
              top="0"
              position="absolute"
              backgroundImage={profile1}
              backgroundPosition="center"
              backgroundSize="cover"
              border="4px solid white"
              boxShadow=""
            ></Box>

            {/* text */}
            <Box
              w={{ base: "100%", md: "100%", lg: "300px", xl: "400px" }}
              h="300px"
              bg="rgba(246,247,249)"
              top="60px"
              position="absolute"
              borderRadius="30px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p="30px"
            >
              <Text textAlign="justify">
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: theme.colors.col.secondary,
                  }}
                >
                  &#x275D;
                </span>
                &nbsp;The presentations were very practical yet powerful. I felt
                that these seminars were handcrafted specially for us, keeping
                the interests of the students in mind. &nbsp;
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: theme.colors.col.secondary,
                  }}
                >
                  &#x275E;
                </span>
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SecretofSuccessSection5;
