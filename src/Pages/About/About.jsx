import React from "react";
import { useState, useEffect, useRef } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import image1 from "../../Assets/image1.jpg";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.jpeg";
import border from "../../Assets/border design.jpeg";
import { FaChevronRight } from "react-icons/fa6";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const About = () => {
  const [isHoveredNews1, setIsHoveredNews1] = useState(false);
  const [isHoveredNews2, setIsHoveredNews2] = useState(false);
  const [isHoveredNews3, setIsHoveredNews3] = useState(false);
 /*  const NewsComponent=()=>{
    return(

    );
  } */

  const Textreveal = useRef(null);
  const Boxreveal=useRef(null)
    useGSAP(() => {
      let t1=gsap.timeline()
    t1.fromTo(
      Boxreveal.current,
      { x:-30, opacity: 0 },
      {
        x:0,
        width:'100px',
        duration:0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: Boxreveal.current,
          start:'top 90%',
          end:'center'
        },
      }
    ); 
    t1.fromTo(
      Textreveal.current,
      { x:-30, opacity: 0 },
      {
        delay:1,
        x: 0,
        width:'max-content',
        duration: 0.5,
        opacity: 1,
        
      }
    ); 

  }, []); 

 /*  useGSAP(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: Boxreveal.current,
        start: 'top 90%',
        end: 'bottom right',
      },
    });

    t1.fromTo(
      Boxreveal.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        width: '100%',
        duration: 2,
        opacity: 1,
        delay: 0.5,
      }
    )
      .to(Textreveal.current, {
        x: 0,
        opacity: 1,
        duration: 1
      });

  }, []); */
  return (
    <>
      <Box mt="100px" p="0" m="0" boxSizing="border-box" fontFamily="Poppins">
        <Box
          backgroundImage={image1}
          w="100%"
          h={{ base: "300px", md: "300px", lg: "450px", xl: "450px" }}
          backgroundSize="cover"
          backgroundPosition={{
            base: "center",
            md: "bottom -80px right",
            lg: "bottom -80px right",
            xl: "bottom -200px right",
          }}
          position="relative"
        >
          <Box
            position="absolute"
            top="50%"
            left={{ base: "5%", md: "5%", lg: "10%", xl: "20%" }}
            zIndex="1"
            color="white"
            textAlign="left"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              gap={{ base: "2px", md: "5px", lg: "10px", xl: "10px" }}
            >
              <Box
                w={{ base: "40px", md: "40px", lg: "60px", xl: "60px" }}
                h="1px"
                bg="white"
              ></Box>
              <Box
                fontSize={{
                  base: "0.5rem",
                  md: "0.8rem",
                  lg: "1rem",
                  xl: "1.5rem",
                }}
              >
                ABOUT US
              </Box>
            </Box>
            <Box
              fontSize={{ base: "2rem", md: "3rem", lg: "3rem", xl: "4rem" }}
              fontWeight="100"
            >
              About Us
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              fontSize={{
                base: "0.5rem",
                md: "0.6rem",
                lg: "0.8rem",
                xl: "0.9rem",
              }}
              mt={{ base: "none", md: "none", lg: "20px", xl: "30px" }}
              gap={{ base: "2px", md: "5px", lg: "10px", xl: "10px" }}
            >
              <Link to="/">
                <Box color="gray" _hover={{ color: "white" }}>
                  Home
                </Box>
              </Link>
              <Box color="gray" _hover={{ color: "white" }}>
                <FaChevronRight />
              </Box>
              <Box color="gray">About us</Box>
            </Box>
          </Box>
        </Box>
        <Box
          display={{ base: "row", md: "row", lg: "flex", xl: "flex" }}
          minHeight="calc(100vh - 450px)"
          justifyContent="center"
          alignItems="center"
          fontWeight="300"
        >
          <Box
            p="20px"
            w={{ base: "100%", md: "100%", lg: "650px", xl: "700px" }}
            lineHeight="2rem"
            textAlign="justify"
            fontSize="0.9rem"
            mr={{ base: "none", md: "none", lg: "50px", xl: "80px" }}
          >
            <Text fontSize="2.5rem">Overview</Text>
            <br />
            <Box>
              <Text fontWeight="400">
                FOLK &#8722; Youth Empowerment Club aimed at crystallizing the
                formative phase of the younger generation with key values that
                guide them throughout their lives.
              </Text>
              <br />
              Some of the most vital and practical knowledge has been inherited
              from the time-tested Vedic wisdom and woven into methodic
              workshops. For more than two decades, our programs have been
              catalyzing the youth culture by designing rich avenues in art,
              theatre, science, philosophy, and many more. A vibrant community
              of highly progressive young minds awaits you. Get going.
            </Box>
            <br />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              gap="10px"
            >
              <Button
                bg="#DE8D38"
                color="white"
                borderRadius="5px"
                mr="20px"
                _hover={{ backgroundColor: "#DE8D38", color: "white" }}
              >
                VIEW OUR HISTORY
              </Button>
              <Button
                color="black"
                border="2px solid #DE8D38"
                borderRadius="5px"
                _hover={{ backgroundColor: "#DE8D38", color: "white" }}
              >
                JOIN OUR TEAM
              </Button>
            </Box>
          </Box>
          <Box
            display={{ base: "flex", md: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={image2}
              w={{ base: "350px", md: "350px", lg: "350px", xl: "400px" }}
            />
          </Box>
        </Box>
        <Box>
          <Text textAlign="center" fontSize="2.5rem" fontWeight="300">
            Latest News
          </Text>
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
            <Box position="relative" display="inline-block">
              <Image
                src={image3}
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
                  <Box fontSize={{ base: "0.5rem", md: "0.8rem" }}>
                    by Theresa Barnes
                  </Box>
                  <Box w="1px" h="20px" bg="white"></Box>
                  <Box fontSize={{ base: "0.5rem", md: "0.8rem" }}>News</Box>
                  <Box w="1px" h="20px" bg="white"></Box>
                  <Box fontSize={{ base: "0.5rem", md: "0.8rem" }}>
                    Jan,2024
                  </Box>
                </Box>
                <Box mt={{ base: "8px", md: "10px" }}>
                  Hinduism: Way of Life, Beliefs, and Practices
                </Box>
              </Box>
            </Box>
            <Box
              w={{ base: "100%", md: "500px", lg: "400px", xl: "400px" }}
              h="450px"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              gap={{ base: "25px", md: "25px", lg: "45px" }}
             
            >
              <Box
                display="flex"
                justifyContent="flex-start"
                gap="25px"
                onMouseEnter={() => setIsHoveredNews1(true)}
                onMouseLeave={() => setIsHoveredNews1(false)}

              >
                <Box
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
                    backgroundColor: isHoveredNews1 ? "#DE8D38" : "#C8C8C8",
                  }}
                  ref={Boxreveal}
                >
                  <span style={{ fontSize: "2rem" }}>28</span>
                  <Text mt="-5px">April</Text>
                </Box>
                <Box textAlign="justify" color="#DE8D38" ref={Textreveal}>
                  <Text fontSize="1.2rem">
                    The Secrets of Mystic Hinduism
                    <br />
                    <Box
                      color="black"
                      fontWeight="200"
                      fontSize="1rem"
                      mt={{ base: "5px" }}
                    >
                      by Person&nbsp;&nbsp;<Box as="span">News</Box>
                    </Box>
                  </Text>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                gap="25px"
                onMouseEnter={() => setIsHoveredNews2(true)}
                onMouseLeave={() => setIsHoveredNews2(false)}
              >
                <Box
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
                    backgroundColor: isHoveredNews2 ? "#DE8D38" : "#C8C8C8",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>28</span>
                  <Text mt="-5px">April</Text>
                </Box>
                <Box textAlign="justify" color="#DE8D38">
                  <Text fontSize="1.2rem">
                    Interesting Facts about Hinduism
                    <br />
                    <Box
                      color="black"
                      fontWeight="200"
                      fontSize="1rem"
                      mt={{ base: "5px" }}
                    >
                      by Person&nbsp;&nbsp;<Box as="span">News</Box>
                    </Box>
                  </Text>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                gap="25px"
                onMouseEnter={() => setIsHoveredNews3(true)}
                onMouseLeave={() => setIsHoveredNews3(false)}
              >
                <Box
                  w="100px"
                  h="90px"
                  color="white"
                  textAlign="center"
                  padding="15px"
                  paddingTop="10px"
                  fontSize="1.2rem"
                  borderRadius="5px"
                  fontWeight="500"
                  bg="#C8C8C8"
                  style={{
                    backgroundColor: isHoveredNews3 ? "#DE8D38" : "#C8C8C8",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>28</span>
                  <Text mt="-5px">April</Text>
                </Box>
                <Box textAlign="justify" color="#DE8D38">
                  <Text fontSize="1.2rem">
                    The Meaning of Heart in Hindusism
                    <br />
                    <Box
                      color="black"
                      fontWeight="200"
                      fontSize="1rem"
                      mt={{ base: "5px" }}
                    >
                      by Person&nbsp;&nbsp;<Box as="span">News</Box>
                    </Box>
                  </Text>
                </Box>
              </Box>
              <Button
                bg="#DE8D38"
                color="white"
                _hover={{ backgroundColor: "#DE8D38", color: "white" }}
                width="max-content"
              >
                VIEW ALL POSTS
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
