import React, { useState, useRef, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import theme from "../../theme";
import { MdOutlineSchedule } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { GiAwareness } from "react-icons/gi";
import { FaScaleUnbalancedFlip } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SecretofSuccessSection4 = () => {
  const [hoveredText, setHoveredText] = useState("");
  const Animatedcircle = useRef([]);
  const [textIndex,setTextIndex]=useState(null)
  const animatedText = useRef([]);

  useGSAP(() => {
    
    gsap.fromTo(
      Animatedcircle.current,
      {
        opacity: 1,
        transform: (i) =>
          `rotate(-${i * 60 + 90}deg) translate(100px) rotate(${
            i * 60 + 90
          }deg)`,
      },
      {
        rotate: "360deg",
        opacity: 1,
        transform: (i) =>
          `rotate(-${i * 60 + 90}deg) translate(225px) rotate(${
            i * 60 + 90
          }deg)`,
        duration: 2,
        ease: "power2.out",
      }
    );
  });


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
  const handleMouseEnter = (text,index) => {
    setHoveredText(text);
    setTextIndex(index);
  };

  return (
    <>
      <Box mt="50px" mb="50px">
        <Box mb="50px" textAlign="center" fontSize={{base:'1.5rem',md:'2rem',lg:'2.5rem'}}>
          Path to success
        </Box>
        <Box display="flex" flexDirection={{base:'column',md:'row',lg:'row',xl:'row'}}alignItems="center" justifyContent="center">
          <Box
            w={{base:'90%',md:'100%',lg:'90%',xl:'1150px'}}
            display="flex"
            flexDirection={{base:'column',md:'row',lg:'row',xl:'row'}}
            alignItems="center"
            justifyContent="center"
            gap={{base:'30px',md:'2%',lg:'5%',xl:'100px'}}
          >
            <Box
              position="relative"
              w={{base:'300px',md:'300px',lg:'350px',xl:'450px'}}
              h={{base:'300px',md:'300px',lg:'350px',xl:'450px'}}
              borderRadius="50%"
              border="2px solid gray"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {paths.map((path, index) => {
                return (
                  <Box
                    key="index"
                    position="absolute"
                    w={{base:'60px',md:'80px',lg:'100px',xl:'120px'}}
                    h={{base:'60px',md:'80px',lg:'100px',xl:'120px'}}
                    bg={theme.colors.col.secondary}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    borderRadius="50%"
                    fontSize={{base:'0.5rem',md:'0.8rem',lg:'0.9rem',xl:'0.9rem'}}
                    textAlign="center"
                    ref={(el) => (Animatedcircle.current[index] = el)}
                    _hover={{
                      bg: "rgba(246,247,249)",
                      color: theme.colors.col.secondary,
                    }}
                    onMouseEnter={() => {
                      handleMouseEnter(path.text,path.index);
                    }}
                  >
                    <text>{path.name}</text>
                  </Box>
                );
              })}

              <Box
                fontSize={{base:'0.4rem',md:'0.7rem',lg:'0.8rem',xl:'0.8rem'}}
                color={theme.colors.col.secondary}
                p="20px"
                textAlign="center"
              >
                {hoveredText ? hoveredText : " "}
              </Box>
            </Box>


            <Box
              w={{base:'100%',md:'350px',lg:'450px',xl:'600px'}}
              h={{base:'450px',md:'300px',lg:'350px',xl:'450px'}}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={{base:'20px',md:'10px',lg:'15px',xl:'40px'}}
              textAlign="justify"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems={{base:'center',md:'none'}}
                gap='20px'
                h={{base:'100px',md:'65px',lg:'75px',xl:'100px'}}
              >
                <Box
                  bg={theme.colors.col.text}
                  w={{base:'80px',md:'50px',lg:'60px',xl:'80px'}}
                  h={{base:'80px',md:'50px',lg:'60px',xl:'80px'}}
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{base:'2rem',md:'1rem',lg:'1.5rem',xl:'2rem'}}
                  color="white"
                >
                  <MdOutlineSchedule />
                </Box>
                <Box w={{base:'200px',md:'280px',lg:'370px',xl:'450px'}} >
                  {" "}
                  <Box fontSize="1.1rem" mb="10px" fontWeight="600">
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
                alignItems={{base:'center',md:'none'}}
                gap="20px"
                h={{base:'100px',md:'65px',lg:'75px',xl:'100px'}}
              >
                <Box
                  bg={theme.colors.col.text}
                  w={{base:'80px',md:'50px',lg:'60px',xl:'80px'}}
                  h={{base:'80px',md:'50px',lg:'60px',xl:'80px'}}
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{base:'2rem',md:'1rem',lg:'1.5rem',xl:'2rem'}}
                  color="white"
                >
                  <GoGoal />
                </Box>
                <Box w={{base:'200px',md:'280px',lg:'370px',xl:'450px'}}>
                  {" "}
                  <Box fontSize="1.1rem" mb="10px" fontWeight="600">
                    Aligning Goals
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
                alignItems={{base:'center',md:'none'}}
                gap="20px"
                h={{base:'100px',md:'65px',lg:'75px',xl:'100px'}}
              >
                <Box
                  bg={theme.colors.col.text}
                  w={{base:'80px',md:'50px',lg:'60px',xl:'80px'}}
                  h={{base:'80px',md:'50px',lg:'60px',xl:'80px'}}
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{base:'2rem',md:'1rem',lg:'1.5rem',xl:'2rem'}}
                  color="white"
                >
                  <GiAwareness />
                </Box>
                <Box w={{base:'200px',md:'280px',lg:'370px',xl:'450px'}}>
                  {" "}
                  <Box fontSize="1.1rem" mb="10px" fontWeight="600">
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
                alignItems={{base:'center',md:'none'}}
                gap="20px"
                h={{base:'100px',md:'65px',lg:'75px',xl:'100px'}}
              >
                <Box
                  bg={theme.colors.col.text}
                  w={{base:'80px',md:'50px',lg:'60px',xl:'80px'}}
                  h={{base:'80px',md:'50px',lg:'60px',xl:'80px'}}
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{base:'2rem',md:'1rem',lg:'1.5rem',xl:'2rem'}}
                  color="white"
                >
                  <FaScaleUnbalancedFlip />
                </Box>
                <Box w={{base:'200px',md:'280px',lg:'370px',xl:'450px'}} >
                  {" "}
                  <Box fontSize="1.1rem" mb="10px" fontWeight="600">
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
