import React from "react";
import theme from "../../theme";
import { useState, useEffect, useRef } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaPeopleGroup, FaChevronRight } from "react-icons/fa6";
import { SiGoogleforms } from "react-icons/si";
import { FaFire, FaAddressCard, FaStar, FaHeart } from "react-icons/fa";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const AboutusSection4 = () => {

  //AnimationforServicebox
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

  //serviceboxComponent
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
          style={{
            backgroundColor:
              iconColor === index ? theme.colors.col.text : "white",
          }}
          boxShadow="0 0 0 0.1px gray"
        >
          <Icon
            style={{
              color: iconColor === index ? "white" : theme.colors.col.secondary,
            }}
          />
        </Box>
        <Box fontSize="1.5rem" fontWeight="300" textAlign="center">{title}</Box>
        <Box textAlign="center" fontWeight="300" fontSize="0.8rem" lineHeight="1.5rem">{description}</Box>
      </Box>
    );
  };

  return (
    <>
      {/* ourServicesSection */}
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
    </>
  );
};
export default AboutusSection4;
