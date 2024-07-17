import React from "react";
import theme from "../../theme";
import { useState, useEffect, useRef } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaPeopleGroup, FaChevronRight } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { GiMeditation } from "react-icons/gi";
import { FaTrophy } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa";
import { HiEmojiHappy } from "react-icons/hi";
import { BiDumbbell } from "react-icons/bi";
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
  const ServiceBox = ({ index, icon: Icon, title, description,duration }) => {
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
        <Box textAlign='center' fontWeight='500' fontSize='0.8rem'>{duration}</Box>
      </Box>
    );
  };

  return (
    <>
      {/* ourServicesSection */}
      <Box mt="30px">
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
              icon={GoGoal}
              title="Focus"
              description="Learn how to avoid distractions and work with absolute focus. Converge your energy into a single point. Harness the power of a focused mind and achieve unparalleled outcomes."
              duration='Session Duration-2hrs'
            />
          </Box>
          <Box ref={service2}>
            <ServiceBox
              index={1}
              icon={GiMeditation}
              title="Yoga for Happiness"
              description="You’ve heard of Yoga For Fitness, Health, and related benefits. But what is the Real goal of Yoga according to its architect? Yoga leads to Happiness. Learn the Real Yoga here."
              duration='Workshop Duration-1Day'
            />
          </Box>
          <Box ref={service3}>
            <ServiceBox
              index={2}
              icon={FaTrophy}
              title="Secret of Success"
              description="2 Men. Similar Age. Same Goal. Equal Competence. Same Efforts. But the success levels differ. Is it an element of deficiency in us, or are we unaware of an external factor that is beyond our control?"
              duration='Session Duration-2hrs'
            />
          </Box>
          <Box ref={service4}>
            <ServiceBox
              index={3}
              icon={FaBrain}
              title="Art of Mind Control"
              description="What is wrong with driving a car with defective steering and brake mechanism? Everything. Better not drive! Our mind is the vehicle that drives our life. Can you steer it smoothly?"
              duration='Session Duration-2hrs'
            />
          </Box>
          <Box ref={service5}>
            <ServiceBox
              index={4}
              icon={HiEmojiHappy}
              title="Happiness Workshops"
              description="Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.Explore unfound dimensions of pleasure that keep you ever blissful."
              duration='Workshop Duration-2hrs'
            />
          </Box>
          <Box ref={service6}>
            <ServiceBox
              index={5}
              icon={BiDumbbell}
              title="Self-Empowerment"
              description="A large load of cotton will not harm even a fly, but a small atom can destroy the whole city when divided. Power is not dependent on size or even strength. It is an innate force that is harnessed by profound tools."
              duration='Workshop Duration-2hrs'
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default AboutusSection4;
