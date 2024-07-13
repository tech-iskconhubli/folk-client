import React from "react";
import theme from "../../theme";
import { useState, useEffect, useRef } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import newsimage from "../../Assets/image3.jpeg";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const AboutusSection5 = () => {

  //NewsboxAnimation
  const newscontainer = useRef(null);
  const newsbox1 = useRef(null);
  const newsbox2 = useRef(null);
  const newsbox3 = useRef(null);

  useGSAP(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: newscontainer.current,
        start: "top 90%",
        end: "bottom 100px",
      },
    });
    t1.from(newsbox1.current, { opacity: 0, x: -100, duration: 0.5 });
    t1.from(newsbox2.current, { opacity: 0, x: -100, duration: 0.5 });
    t1.from(newsbox3.current, { opacity: 0, x: -100, duration: 0.5 });
  });

  //Animationforimagetext
  const slidetextleft = useRef(null);
  const slidetextright = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      slidetextleft.current,
      { x: 30, opacity: 0 },
      {
        x: 0,
        width: "max-content",
        duration: 0.9,
        opacity: 1,
        scrollTrigger: {
          trigger: slidetextleft.current,
          start: "top 90%",
          end: "bottom 100px",
        },
      }
    );
  });
  useGSAP(() => {
    gsap.fromTo(
      slidetextright.current,
      { x: -30, opacity: 0 },
      {
        x: 0,
        width: "max-content",
        duration: 0.9,
        opacity: 1,
        scrollTrigger: {
          trigger: slidetextright.current,
          start: "top 90%",
          end: "bottom 100px",
        },
      }
    );
  });

  //NewsboxComponent
  const NewsBox = ({ index, date, month, name, person }) => {
    const [isHovered, setIsHovered] = useState(null);
    return (
      <>
        <Box
          display="flex"
          justifyContent="flex-start"
          gap="25px"
          onMouseEnter={() => setIsHovered(index)}
          onMouseLeave={() => setIsHovered()}
        >
          <Box //date
            w="100px"
            h="90px"
            color="white"
            textAlign="center"
            padding="15px"
            paddingTop="10px"
            fontSize="1.2rem"
            borderRadius="5px"
            fontWeight="500"
            style={{
              backgroundColor:
                isHovered === index ? theme.colors.col.secondary : "#C8C8C8",
            }}
          >
            <span style={{ fontSize: "2rem" }}>{date}</span>
            <Text mt="-5px">{month}</Text>
          </Box>
          {/* news */}
          <Box textAlign="justify" color={theme.colors.col.secondary}>
            <Text fontSize="1.2rem">
              {name}
              <br />
              <Box
                color="black"
                fontWeight="200"
                fontSize="1rem"
                mt={{ base: "5px" }}
              >
                by {person}&nbsp;&nbsp;<Box as="span">News</Box>
              </Box>
            </Text>
          </Box>
        </Box>
      </>
    );
  };
  return (
    <>
      {/* LatestnewsSection */}
      <Box> 
        <Text textAlign="center" fontSize="2.5rem" fontWeight="300">Latest News</Text>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          justifyContent={{
            base: "flex-start",
            md: "flex-start",
            lg: "center",
            xl: "center",
          }}
          alignItems={{ base: "none", md: "none", lg: "center" }}
          p={{ base: "20px", md: "20px", lg: "none", xl: "none" }}
          gap="40px"
        >

          {/* image */}
          <Box position="relative" display="inline-block">
            <Image
              src={newsimage}
              w={{ base: "100%", md: "100%", lg: "650px", xl: "650px" }}
              height={{ base: "auto", md: "450px", lg: "450px", xl: "450px" }}
              _hover={{ filter: "brightness(0.3)", transition: "0.4" }}
              filter="brightness(0.5)"
            />
            <Box
              position="absolute"
              left="8%"
              bottom="12%"
              color="white"
              fontSize={{ base: "1rem", md: "1.5rem" }}
              fontWeight="300"
            >
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                gap="20px"
                fontWeight="200"
              >
                <Box fontSize={{ base: "0.5rem", md: "0.8rem" }} ref={slidetextleft}>by Theresa Barnes</Box>
                <Box w="1px" h="20px" bg="white"></Box>
                <Box fontSize={{ base: "0.5rem", md: "0.8rem" }}>News</Box>
                <Box w="1px" h="20px" bg="white"></Box>
                <Box fontSize={{ base: "0.5rem", md: "0.8rem" }} ref={slidetextright}>Jan,2024</Box>
              </Box>
              <Box mt={{ base: "8px", md: "10px" }}>Hinduism: Way of Life, Beliefs, and Practices</Box>
            </Box>
          </Box>
          
          {/* news */}
          <Box
            w={{ base: "100%", md: "500px", lg: "400px", xl: "400px" }}
            h="450px"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            gap={{ base: "25px", md: "25px", lg: "45px" }}
            ref={newscontainer}
          >
            <Box ref={newsbox1}>
              <NewsBox
                index={0}
                date="21"
                month="April"
                name="The Secrets of Mystic Hinduism"
                person="TheresaBarnes"
              />
            </Box>
            <Box ref={newsbox2}>
              <NewsBox
                index={0}
                date="21"
                month="April"
                name="Interesting facts of Hinduism"
                person="TheresaBarnes"
              />
            </Box>
            <Box ref={newsbox3}>
              <NewsBox
                index={0}
                date="21"
                month="April"
                name="The Meaning of Hinduism"
                person="TheresaBarnes"
              />
            </Box>
            <Button
              bg={theme.colors.col.secondary}
              color="white"
              _hover={{
                backgroundColor: theme.colors.col.text,
                color: "white",
              }}
              width="max-content"
            >
              VIEW ALL POSTS
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default AboutusSection5;
