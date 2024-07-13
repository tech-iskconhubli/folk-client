import React from "react";
import theme from "../../theme";
import { useState, useRef } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import cardimage1 from '../../Assets/image4.jpg';
import cardimage2 from '../../Assets/image5.jpg';
import cardimage3 from '../../Assets/image6.jpg';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const AboutusSection3 = () => {
    const cardcontainer = useRef();
    const { contextSafe } = useGSAP({ scope: cardcontainer });

    /* card1animation */
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

    /* card2animation */
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

  /* card3animation */
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



  return (
    <>
      {/* ourAssociateSection */}
      <Box p={{ base: "20px", md: "50px", lg: "0" }} mb="100px"> 
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
          {/* card1 */}
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
              backgroundImage={cardimage1}
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
              <Box color={theme.colors.col.secondary} mt="10px">
                Learn more
              </Box>
            </Box>
          </Box>

           {/* card2 */}
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
              backgroundImage={cardimage2}
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
                who show potential to grow into effective and humane leaders of
                society, who will be committed to tackle some of today’s
                greatest social challenges and will deliver sustainable social
                impact. AIKYA believe training leaders is the most effective
                strategy to solve complex social problems and achieve meaningful
                results in community development.
              </Text>
              <Box color={theme.colors.col.secondary} mt="10px">
                Learn more
              </Box>
            </Box>
          </Box>

          {/* card3 */}
          
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
              backgroundImage={cardimage3}
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
              <Box color={theme.colors.col.secondary} mt="10px">
                Learn more
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default AboutusSection3;
