import React, { useState, useRef, useEffect } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import theme from "../../theme";
import { MdOutlineSchedule } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { GiAwareness } from "react-icons/gi";
import { FaScaleUnbalancedFlip } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger);

const SecretofSuccessSection4 = () => {
  const [hoveredText, setHoveredText] = useState("");
  const handleMouseEnter = (text, index) => {
    setHoveredText(text);
  };
  const Animatedcircle = useRef([]);
  const paths = [
    {
      name: "Self Realization",
      text: "True self-realization begins when one understands their eternal relationship with the Divine.",
    },
    {
      name: "Knowledge",
      text: "True knowledge is not just information, but the understanding and wisdom to apply it for the greater good.",
    },
    {
      name: "Hard Work",
      text: "Hard work beats talent when talent doesn't work hard.",
    },
    {
      name: "Perseverance",
      text: "Perseverance is the steadfast courage to keep going despite the obstacles.",
    },
    {
      name: "Faith",
      text: "Have faith in your journey. Everything had to happen exactly as it did to get you where you're going next.",
    },
    {
      name: "Discipline",
      text: "Discipline is the foundation upon which success is built.",
    },
  ];
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" mt="20px">
        <Box w={{ base: "90%", md: "750px", lg: "900px", xl: "1240px" }}>
          <Heading
            fontSize={{ base: "2rem", md: "3rem" }}
            mb={{ base: "40px", md: "40px", lg: "50px", xl: "60px" }}
          >
            Path to{" "}
            <span style={{ color: theme.colors.col.text }}>Success</span>
          </Heading>

          <Box
            display="flex"
            flexDirection={{ base: "column", md: "row", lg: "row" }}
            alignItems="center"
            justifyContent="space-evenly"
            gap={{ base: "30px", md: "25px", lg: "50px", xl: "100px" }}
          >
            <Box
              w={{ base: "190px", md: "220px", lg: "300px", xl: "380px" }}
              h={{ base: "190px", md: "220px", lg: "300px", xl: "380px" }}
              border="2px solid gray"
              borderRadius="50%"
              position="relative"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {paths.map((path, index) => {
                let angle = index * 60 + 90;
                return (
                  <Box
                    key={index}
                    position="absolute"
                    w={{ base: "60px", md: "80px", lg: "100px", xl: "120px" }}
                    h={{ base: "60px", md: "80px", lg: "100px", xl: "120px" }}
                    bg={theme.colors.col.secondary}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    borderRadius="50%"
                    fontSize={{
                      base: "0.5rem",
                      md: "0.8rem",
                      lg: "0.9rem",
                      xl: "0.9rem",
                    }}
                    transform={{
                      base: `rotate(-${angle}deg) translate(95px) rotate(${angle}deg)`,
                      md: `rotate(-${angle}deg) translate(110px) rotate(${angle}deg)`,
                      lg: `rotate(-${angle}deg) translate(150px) rotate(${angle}deg)`,
                      xl: `rotate(-${angle}deg) translate(190px) rotate(${angle}deg)`,
                    }}
                    textAlign="center"
                    ref={(el) => (Animatedcircle.current[index] = el)}
                    _hover={{
                      bg: "rgba(246,247,249)",
                      color: theme.colors.col.secondary,
                    }}
                    onMouseEnter={() => {
                      handleMouseEnter(path.text);
                    }}
                  >
                    <text>{path.name}</text>
                  </Box>
                );
              })}
              <Box
                fontSize={{
                  base: "0.4rem",
                  md: "0.7rem",
                  lg: "0.8rem",
                  xl: "0.9rem",
                }}
                color={theme.colors.col.secondary}
                p="20px"
                textAlign="center"
              >
                {hoveredText ? hoveredText : " "}
              </Box>
            </Box>
            <Box
              w={{ base: "98%", md: "350px", lg: "500px", xl: "600px" }}
              h={{ base: "450px", md: "300px", lg: "400px", xl: "450px" }}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
              gap={{ base: "20px", md: "15px", lg: "20px", xl: "20px" }}
              textAlign="justify"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                gap={{ base: "20px", md: "15px", lg: "20px", xl: "20px" }}
              >
                <Box
                  bg={theme.colors.col.text}
                  w={{ base: "60px", md: "50px", lg: "60px", xl: "80px" }}
                  h={{ base: "60px", md: "50px", lg: "60px", xl: "80px" }}
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{
                    base: "2rem",
                    md: "1rem",
                    lg: "1.3rem",
                    xl: "2rem",
                  }}
                  color="white"
                >
                  <MdOutlineSchedule />
                </Box>

                <Box
                  w={{ base: "200px", md: "280px", lg: "420px", xl: "450px" }}
                >
                  {" "}
                  <Box
                    fontSize="1.1rem"
                    mb={{ base: "10px", md: "5px", lg: "10px", xl: "10px" }}
                    fontWeight="600"
                  >
                    Chanting
                  </Box>
                  <Box fontSize="0.8rem">
                    Start your day with prayer and meditation,read scriptures
                    regularly,include chanting in your routine.
                  </Box>
                </Box>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                gap={{ base: "20px", md: "15px", lg: "20px", xl: "20px" }}
              >
                <Box
                  bg={theme.colors.col.text}
                  w={{ base: "60px", md: "50px", lg: "60px", xl: "80px" }}
                  h={{ base: "60px", md: "50px", lg: "60px", xl: "80px" }}
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{
                    base: "2rem",
                    md: "1rem",
                    lg: "1.5rem",
                    xl: "2rem",
                  }}
                  color="white"
                >
                  <GoGoal />
                </Box>

                <Box
                  w={{ base: "200px", md: "280px", lg: "420px", xl: "450px" }}
                >
                  {" "}
                  <Box
                    fontSize="1.1rem"
                    mb={{ base: "10px", md: "5px", lg: "10px", xl: "10px" }}
                    fontWeight="600"
                  >
                    Aligining Goals
                  </Box>
                  <Box fontSize="0.8rem">
                    Align goals with spiritual values.Break larger goals into
                    smaller tasks.
                  </Box>
                </Box>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                gap={{ base: "20px", md: "15px", lg: "20px", xl: "20px" }}
              >
                <Box
                  bg={theme.colors.col.text}
                  w={{ base: "60px", md: "50px", lg: "60px", xl: "80px" }}
                  h={{ base: "60px", md: "50px", lg: "60px", xl: "80px" }}
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{
                    base: "2rem",
                    md: "1rem",
                    lg: "1.5rem",
                    xl: "2rem",
                  }}
                  color="white"
                >
                  <GiAwareness />
                </Box>

                <Box
                  w={{ base: "200px", md: "280px", lg: "420px", xl: "450px" }}
                >
                  {" "}
                  <Box
                    fontSize="1.1rem"
                    mb={{ base: "10px", md: "5px", lg: "10px", xl: "10px" }}
                    fontWeight="600"
                  >
                    Awareness
                  </Box>
                  <Box fontSize="0.8rem">
                    Focus on the present moment.Perform actions with full
                    awareness.
                  </Box>
                </Box>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                gap={{ base: "20px", md: "15px", lg: "20px", xl: "20px" }}
              >
                <Box
                  bg={theme.colors.col.text}
                  w={{ base: "60px", md: "50px", lg: "60px", xl: "80px" }}
                  h={{ base: "60px", md: "50px", lg: "60px", xl: "80px" }}
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{
                    base: "2rem",
                    md: "1rem",
                    lg: "1.5rem",
                    xl: "2rem",
                  }}
                  color="white"
                >
                  <FaScaleUnbalancedFlip />
                </Box>

                <Box
                  w={{ base: "200px", md: "280px", lg: "420px", xl: "450px" }}
                >
                  {" "}
                  <Box
                    fontSize="1.1rem"
                    mb={{ base: "10px", md: "5px", lg: "10px", xl: "10px" }}
                    fontWeight="600"
                  >
                    Balanced Life
                  </Box>
                  <Box fontSize="0.8rem">
                    Balance material and spiritual responsibilities.Take care of
                    your physical health.
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SecretofSuccessSection4;
