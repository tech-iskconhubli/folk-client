import React from "react";
import { useState, useEffect, useRef } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import image1 from "../../Assets/image1.jpg";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.jpeg";
import image4 from "../../Assets/image4.jpg";
import image5 from "../../Assets/image5.jpg";
import image6 from "../../Assets/image6.jpg";
import border from "../../Assets/border design.jpeg";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiGoogleforms } from "react-icons/si";
import { FaChevronRight } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const About = () => {
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
              backgroundColor: isHovered === index ? "#DE8D38" : "#C8C8C8",
            }}
          >
            <span style={{ fontSize: "2rem" }}>{date}</span>
            <Text mt="-5px">{month}</Text>
          </Box>
          <Box textAlign="justify" color="#DE8D38">
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

  const ServiceBox = ({ index, icon: Icon, title, description }) => {
    const [iconColor, setIconColor] = useState(null);

    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p="20px"
        gap="10px"
        onMouseEnter={() => setIconColor(index)}
        onMouseLeave={() => setIconColor()}
        mt="10px"
      >
        <Box
          fontSize="3rem"
          w="80px"
          h="80px"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{ backgroundColor: iconColor === index ? "#DE8D38" : "white" }}
          boxShadow="0 0 0 0.1px gray"
        >
          <Icon style={{ color: iconColor === index ? "white" : "#DE8D38" }} />
        </Box>
        <Box fontSize="1.5rem" fontWeight="300" textAlign="center">
          {title}
        </Box>
        <Box
          textAlign="center"
          fontWeight="300"
          fontSize="0.8rem"
          lineHeight="1.5rem"
        >
          {description}
        </Box>
      </Box>
    );
  };

  const serviceContainer = useRef(null);
  const service1 = useRef(null);
  const service2 = useRef(null);
  const service3 = useRef(null);
  const service4 = useRef(null);
  const service5 = useRef(null);
  const service6 = useRef(null);

  useGSAP(() => {
    const t = gsap.timeline({
      scrollTrigger: {
        trigger: serviceContainer.current,
        start: "top 90%",
        end: "bottom 100px",
      },
    });
    t.from(service1.current, { opacity: 0, x: -200, duration: 0.5 });
    t.from(service2.current, { opacity: 0, x: -200, duration: 0.5 });
    t.from(service3.current, { opacity: 0, x: -200, duration: 0.5 });
    t.from(service4.current, { opacity: 0, x: -200, duration: 0.5 });
    t.from(service5.current, { opacity: 0, x: -200, duration: 0.5 });
    t.from(service6.current, { opacity: 0, x: -200, duration: 0.5 });
  });

  const slideleft = useRef(null);
  const slideright = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      slideleft.current,
      { x: 30, opacity: 0 },
      {
        x: 0,
        width: "max-content",
        duration: 0.9,
        opacity: 1,
        scrollTrigger: {
          trigger: slideleft.current,
          start: "top 90%",
          end: "bottom 100px",
        },
      }
    );
  });
  useGSAP(() => {
    gsap.fromTo(
      slideright.current,
      { x: -30, opacity: 0 },
      {
        x: 0,
        width: "max-content",
        duration: 0.9,
        opacity: 1,
        scrollTrigger: {
          trigger: slideright.current,
          start: "top 90%",
          end: "bottom 100px",
        },
      }
    );
  });
  /*   const vibratedtext1 = useRef(null);
  const { contextSafe } = useGSAP({ scope: vibratedte });

  const handleMouseEnter = contextSafe(() => {
    gsap.fromTo(
      vibratedtext1.current,
      {
        y: -2,
      },
      { y: 0, repeat: 1, yoyo: true, duration: 0.05, ease: "power1.inOut" }
    );
  }); */

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

  const cardcontainer = useRef();
  const { contextSafe } = useGSAP({ scope: cardcontainer });
  const card11 = useRef();
  const card12 = useRef();
  const handleCard1slide = contextSafe(() => {
    const width = window.innerWidth;
    gsap.killTweensOf(card11.current);
    gsap.killTweensOf(card12.current);
    if (width < 992 && width >= 768) {
      gsap.to(card11.current, {
        x: 30,
        duration: 0.2,
      });
      gsap.to(card12.current, {
        x: -30,
        duration: 0.2,
      });
    } else if (width < 768) {
      gsap.to(card11.current, {});
      gsap.to(card12.current, {});
    } else {
      gsap.to(card12.current, {
        x: 30,
        duration: 0.2,
      });
      gsap.to(card11.current, {
        x: -30,
        duration: 0.2,
      });
    }
  });
  const handleCard1leave = contextSafe(() => {
    const width = window.innerWidth;
    gsap.killTweensOf(card11.current);
    gsap.killTweensOf(card12.current);
    if (width < 992) {
      gsap.to(card11.current, {
        x: 0,
        duration: 0.2,
      });
      gsap.to(card12.current, {
        x: 0,
        duration: 0.2,
      });
    } else {
      gsap.to(card12.current, {
        x: -30,
        duration: 0.2,
      });
      gsap.to(card11.current, {
        x: 30,
        duration: 0.2,
      });
    }
  });

  const card21 = useRef();
  const card22 = useRef();
  const handleCard2slide = contextSafe(() => {
    const width = window.innerWidth;
    gsap.killTweensOf(card21.current);
    gsap.killTweensOf(card22.current);
    if (width < 992 && width >= 768) {
      gsap.to(card21.current, {
        x: 30,
        duration: 0.2,
      });
      gsap.to(card22.current, {
        x: -30,
        duration: 0.2,
      });
    } else if (width < 768) {
      gsap.to(card21.current, {});
      gsap.to(card22.current, {});
    } else {
      gsap.to(card22.current, {
        x: 30,
        duration: 0.2,
      });
      gsap.to(card21.current, {
        x: -30,
        duration: 0.2,
      });
    }
  });
  const handleCard2leave = contextSafe(() => {
    const width = window.innerWidth;
    gsap.killTweensOf(card21.current);
    gsap.killTweensOf(card22.current);
    if (width < 992) {
      gsap.to(card21.current, {
        x: 0,
        duration: 0.2,
      });
      gsap.to(card22.current, {
        x: 0,
        duration: 0.2,
      });
    } else {
      gsap.to(card22.current, {
        x: -30,
        duration: 0.2,
      });
      gsap.to(card21.current, {
        x: 30,
        duration: 0.2,
      });
    }
  });

  const card31 = useRef();
  const card32 = useRef();
  const handleCard3slide = contextSafe(() => {
    const width = window.innerWidth;
    gsap.killTweensOf(card31.current);
    gsap.killTweensOf(card32.current);
    if (width < 992 && width >= 768) {
      gsap.to(card31.current, {
        x: 30,
        duration: 0.2,
      });
      gsap.to(card32.current, {
        x: -30,
        duration: 0.2,
      });
    } else if (width < 768) {
      gsap.to(card31.current, {});
      gsap.to(card32.current, {});
    } else {
      gsap.to(card32.current, {
        x: 30,
        duration: 0.2,
      });
      gsap.to(card31.current, {
        x: -30,
        duration: 0.2,
      });
    }
  });
  const handleCard3leave = contextSafe(() => {
    const width = window.innerWidth;
    gsap.killTweensOf(card31.current);
    gsap.killTweensOf(card32.current);
    if (width < 992) {
      gsap.to(card31.current, {
        x: 0,
        duration: 0.2,
      });
      gsap.to(card32.current, {
        x: 0,
        duration: 0.2,
      });
    } else {
      gsap.to(card32.current, {
        x: -30,
        duration: 0.2,
      });
      gsap.to(card31.current, {
        x: 30,
        duration: 0.2,
      });
    }
  });

  /* 
  const viewbutton = useGSAP(null);
  useGSAP(() => {
    gsap.fromTo(
      viewbutton.current,
      { y:-10, opacity: 0 },
      {
        opacity: 1,
        height: "max-content",
        y: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: viewbutton.current,
          start: "top 90%",
          end: "bottom 100px",
        },
      }
    );
  }); */

  return (
    <>
      <Box
        mt="100px"
        p="0"
        m="0"
        boxSizing="border-box"
        fontFamily="Poppins"
        cursor="pointer"
      >
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
                <Box>VIEW OUR HISTORY</Box>
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
     
        <Box p={{ base: "20px", md: "50px", lg: "0" }} mb='100px'>
          <Box textAlign="center" fontSize="2.5rem" fontWeight="300" mb="30px">
            Our Associates
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap={{ base: "90px", md: "90px", lg: "100px", xl: "100px" }}
            alignItems="center"
            ref={cardcontainer}
          >
            <Box
              position="relative"
              h={{ base: "420px", md: "420px", lg: "420px", xl: "420px" }}
              w={{ base: "100%", md: "100%", lg: "90%", xl: "60%" }}
              display="flex"
              flexDirection={{
                base: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
              alignItems="center"
              justifyContent={{
                base: "flex-start",
                md: "flex-start",
                lg: "center",
                xl: "center",
              }}
              onMouseEnter={handleCard1slide}
              onMouseLeave={handleCard1leave}
              // ref={cardcontainer1}
            >
              <Box
                position={{
                  base: "static",
                  md: "absolute",
                  lg: "absolute",
                  xl: "absolute",
                }}
                w={{ base: "100%", md: "100%", lg: "50%", xl: "50%" }}
                h={{ base: "70%", md: "70%", lg: "350px", xl: "350px" }}
                top={{ base: "0", md: "0", lg: "0", xl: "0" }}
                left={{ base: "none", md: "-30px", lg: "30px", xl: "30px" }}
                backgroundImage={image4}
                backgroundSize="cover"
                ref={card11}
              ></Box>
              <Box
                position={{
                  base: "static",
                  md: "absolute",
                  lg: "absolute",
                  xl: "absolute",
                }}
                w={{ base: "100%", md: "100%", lg: "50%", xl: "50%" }}
                h={{ base: "30%", md: "30%", lg: "350px", xl: "350px" }}
                top={{ base: "70%", md: "70%", lg: "70px", xl: "70px" }}
                right={{ base: "none", md: "-30px", lg: "30px", xl: "30px" }}
                bg="white"
                p={{ base: "10px", md: "10px", lg: "30px", xl: "50px" }}
                overflow={{ base: "auto", md: "auto", lg: "hidden" }}
                boxShadow="0px 0px 5px 1px rgba(0, 0, 0, 0.3)"
                textAlign="justify"
                fontSize={{ base: "0.8rem", md: "0.8rem", lg: "1rem" }}
                ref={card12}
              >
                <Text
                  fontSize={{
                    base: "1rem",
                    md: "1rem",
                    lg: "1.5rem",
                    xl: "1.5rem",
                  }}
                  fontWeight="500"
                >
                  The Akshaya Patra Foundation
                </Text>
                <br />
                <Text fontWeight="500">
                  The Akshaya Patra Foundation is a not-for-profit organisation
                  headquartered in Bengaluru, India. The organisation strives to
                  eliminate classroom hunger by implementing the Mid-Day Meal
                  Scheme in the government schools and government-aided schools.
                  Alongside, Akshaya Patra also aims at countering malnutrition
                  and supporting the right to education of socio-economically
                  disadvantaged children.
                </Text>
                <Box color="#DE8D38" mt="10px">
                  Learn more
                </Box>
              </Box>
            </Box>

            <Box
              position="relative"
              h={{ base: "420px", md: "420px", lg: "420px", xl: "420px" }}
              w={{ base: "100%", md: "100%", lg: "90%", xl: "60%" }}
              display="flex"
              flexDirection={{
                base: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
              alignItems="center"
              justifyContent={{
                base: "flex-start",
                md: "flex-start",
                lg: "center",
                xl: "center",
              }}
              // ref={cardcontainer2}
              onMouseEnter={handleCard2slide}
              onMouseLeave={handleCard2leave}
            >
              <Box
                position={{
                  base: "static",
                  md: "absolute",
                  lg: "absolute",
                  xl: "absolute",
                }}
                w={{ base: "100%", md: "100%", lg: "50%", xl: "50%" }}
                h={{ base: "70%", md: "70%", lg: "350px", xl: "350px" }}
                top={{ base: "0", md: "0", lg: "0", xl: "0" }}
                left={{ base: "none", md: "-30px", lg: "30px", xl: "30px" }}
                backgroundImage={image5}
                backgroundSize="cover"
                ref={card21}
              ></Box>
              <Box
                position={{
                  base: "static",
                  md: "absolute",
                  lg: "absolute",
                  xl: "absolute",
                }}
                w={{ base: "100%", md: "100%", lg: "50%", xl: "50%" }}
                h={{ base: "30%", md: "30%", lg: "350px", xl: "350px" }}
                top={{ base: "70%", md: "70%", lg: "70px", xl: "70px" }}
                right={{ base: "none", md: "-30px", lg: "30px", xl: "30px" }}
                bg="white"
                p={{ base: "10px", md: "10px", lg: "30px", xl: "50px" }}
                overflow={{ base: "auto", md: "auto", lg: "hidden" }}
                boxShadow="0px 0px 5px 1px rgba(0, 0, 0, 0.3)"
                textAlign="justify"
                fontSize={{ base: "0.8rem", md: "0.8rem", lg: "1rem" }}
                ref={card22}
              >
                <Text
                  fontSize={{
                    base: "1rem",
                    md: "1rem",
                    lg: "1.5rem",
                    xl: "1.5rem",
                  }}
                  fontWeight="500"
                >
                  AIKYA – United to Serve
                </Text>
                <br />
                <Text fontWeight="500">
                  Through the social enterprise program, AIKYA invests in youth
                  who show potential to grow into effective and humane leaders
                  of society, who will be committed to tackle some of today’s
                  greatest social challenges and will deliver sustainable social
                  impact. AIKYA believe training leaders is the most effective
                  strategy to solve complex social problems and achieve
                  meaningful results in community development.
                </Text>
                <Box color="#DE8D38" mt="10px">
                  Learn more
                </Box>
              </Box>
            </Box>

            <Box
              position="relative"
              h={{ base: "420px", md: "420px", lg: "420px", xl: "420px" }}
              w={{ base: "100%", md: "100%", lg: "90%", xl: "60%" }}
              display="flex"
              flexDirection={{
                base: "column",
                md: "column",
                lg: "row",
                xl: "row",
              }}
              alignItems="center"
              justifyContent={{
                base: "flex-start",
                md: "flex-start",
                lg: "center",
                xl: "center",
              }}
              // ref={cardcontainer3}
              onMouseEnter={handleCard3slide}
              onMouseLeave={handleCard3leave}
            >
              <Box
                position={{
                  base: "static",
                  md: "absolute",
                  lg: "absolute",
                  xl: "absolute",
                }}
                w={{ base: "100%", md: "100%", lg: "50%", xl: "50%" }}
                h={{ base: "70%", md: "70%", lg: "350px", xl: "350px" }}
                top={{ base: "0", md: "0", lg: "0", xl: "0" }}
                left={{ base: "none", md: "-30px", lg: "30px", xl: "30px" }}
                backgroundImage={image6}
                backgroundSize="cover"
                ref={card31}
              ></Box>
              <Box
                position={{
                  base: "static",
                  md: "absolute",
                  lg: "absolute",
                  xl: "absolute",
                }}
                w={{ base: "100%", md: "100%", lg: "50%", xl: "50%" }}
                h={{ base: "30%", md: "30%", lg: "350px", xl: "350px" }}
                top={{ base: "70%", md: "70%", lg: "70px", xl: "70px" }}
                right={{ base: "none", md: "-30px", lg: "30px", xl: "30px" }}
                bg="white"
                p={{ base: "10px", md: "10px", lg: "30px", xl: "50px" }}
                overflow={{ base: "auto", md: "auto", lg: "hidden" }}
                boxShadow="0px 0px 5px 1px rgba(0, 0, 0, 0.3)"
                textAlign="justify"
                fontSize={{ base: "0.8rem", md: "0.8rem", lg: "1rem" }}
                ref={card32}
              >
                <Text
                  fontSize={{
                    base: "1rem",
                    md: "1rem",
                    lg: "1.5rem",
                    xl: "1.5rem",
                  }}
                  fontWeight="500"
                >
                  The Akshaya Patra Foundation
                </Text>
                <br />
                <Text fontWeight="500">
                  The Akshaya Patra Foundation is a not-for-profit organisation
                  headquartered in Bengaluru, India. The organisation strives to
                  eliminate classroom hunger by implementing the Mid-Day Meal
                  Scheme in the government schools and government-aided schools.
                  Alongside, Akshaya Patra also aims at countering malnutrition
                  and supporting the right to education of socio-economically
                  disadvantaged children.
                </Text>
                <Box color="#DE8D38" mt="10px">
                  Learn more
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <Text textAlign="center" fontSize="2.5rem" fontWeight="300">
            Our Services
          </Text>
          <Box
            display={{ base: "block", md: "grid", lg: "grid", xl: "grid" }}
            gridTemplateColumns={{
              base: "none",
              md: "1fr 1fr",
              lg: "300px 300px 300px",
              xl: "320px 320px 320px",
            }}
            gap={{ base: "none", md: "10px", lg: "10x", xl: "20px" }}
            justifyContent="center"
            alignItems="center"
            ref={serviceContainer}
          >
            <Box ref={service1}>
              <ServiceBox
                index={0}
                icon={FaPeopleGroup}
                title="Hindu Meetings"
                description=" We organize regular meetings of Hinduists in the US and support
                various public discussions that are related to Hinduism and its
                development."
              />
            </Box>
            <Box ref={service2}>
              <ServiceBox
                index={1}
                icon={SiGoogleforms}
                title="Hindu Forums"
                description="Our organization members take part and organize numerous Hindu forums that unite Hindus from all over the world and establish international connections."
              />
            </Box>
            <Box ref={service3}>
              <ServiceBox
                index={2}
                icon={FaFire}
                title="Esoteric Hinduism Events"
                description="Hindu Faith often acts as an organizer of various Esoteric Hinduism events all over the US and Europe. We aim to popularize this side of Hinduism as well."
              />
            </Box>
            <Box ref={service4}>
              <ServiceBox
                index={3}
                icon={FaAddressCard}
                title="Educational Services"
                description="Hindu Faith provides a wide variety of educational services by providing necessary assistance in teaching Hinduism in schools and colleges."
              />
            </Box>
            <Box ref={service5}>
              <ServiceBox
                index={4}
                icon={FaStar}
                title="Organization of Festivals"
                description="Annually, we organize up to 3 Hinduism Festivals: Holi, Diwali, and Dussehra. They attract the attention of Non-Hindus to our religion."
              />
            </Box>
            <Box ref={service6}>
              <ServiceBox
                index={5}
                icon={FaHeart}
                title="Charitable Help"
                description="Our organization fully supports all kinds of charity by providing help to members of Hinduism community through giving, gifting, sharing and caring for others."
              />
            </Box>
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
                  <Box
                    fontSize={{ base: "0.5rem", md: "0.8rem" }}
                    ref={slideleft}
                  >
                    by Theresa Barnes
                  </Box>
                  <Box w="1px" h="20px" bg="white"></Box>
                  <Box fontSize={{ base: "0.5rem", md: "0.8rem" }}>News</Box>
                  <Box w="1px" h="20px" bg="white"></Box>
                  <Box
                    fontSize={{ base: "0.5rem", md: "0.8rem" }}
                    ref={slideright}
                  >
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
                bg="#DE8D38"
                color="white"
                _hover={{ backgroundColor: "#DE8D38", color: "white" }}
                width="max-content"
                // ref={viewbutton}
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
