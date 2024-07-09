import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import React, { useRef } from "react";
import theme from "../../theme";
import { useTheme } from "@emotion/react";
import { GiSurferVan } from "react-icons/gi";
import { FaMapSigns } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import { GiCampfire } from "react-icons/gi";
import { GiSchoolBag } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import '../../Styles/TripStyles.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TripIconSection = () => {
     
    const gridContainerRef = useRef(null);

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:gridContainerRef.current,
                start:'top 90%',
                end:'bottom 90%'
            }
        });

        tl.from(gridContainerRef.current.children,{
             scale:0,
             opacity:0,
             duration:0.9,
             stagger:0.3
        })

        return ()=>{
           tl.kill();
        }

    },[])

  

  return (
    <Box width="100%" mt={["12rem", "12rem", "15rem", "15rem",'10rem']}>
      <Container
        w={["100%", "100%", "90%", "90%"]}
        maxW="1500px"
        marginX="auto"
        overflowX={"hidden"}
      >
        <SimpleGrid ref={gridContainerRef} columns={['1','1','2','3','6']} p={["0.8rem", "0.9rem", "1rem", "2rem"]} spacing={['20','20','20','20','10']}>

        <Box
        className="box"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={['1rem','1.5rem']}
          >
           <Box className="icon" fontSize={['4.5rem','5rem']} color={theme.colors.col.secondary} >
              <GiSurferVan />
            </Box>
           <Box fontSize={['1.3rem','1.3rem']} fontWeight={'semibold'}>TRAVELING</Box>
          </Box>

          <Box
          className="box"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
             gap={['1rem','1.5rem']}
          >
          <Box  className="icon" fontSize={['4.5rem','5rem']} color={theme.colors.col.secondary} >
              <FaMapLocationDot />
            </Box>
           <Box fontSize={['1.3rem','1.3rem']} fontWeight={'semibold'}>TEMPLES</Box>
          </Box>

          <Box
          className="box"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
             gap={['1rem','1.5rem']}
          >
          <Box  className="icon" fontSize={['4.5rem','5rem']} color={theme.colors.col.secondary} >
              <GiCampfire />
            </Box>
           <Box fontSize={['1.3rem','1.3rem']} fontWeight={'semibold'}>CAMPING</Box>
          </Box>

          <Box
          className="box"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
             gap={['1rem','1.5rem']}
          >
           <Box  className="icon" fontSize={['4.5rem','5rem']} color={theme.colors.col.secondary} >
              <GiCampingTent />
            </Box>
           <Box fontSize={['1.3rem','1.3rem']} fontWeight={'semibold'}>FRIENDLY</Box>
          </Box>

          <Box
          className="box"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
             gap={['1rem','1.5rem']}
          >
           <Box  className="icon" fontSize={['4.5rem','5rem']} color={theme.colors.col.secondary} >
              <GiSchoolBag />
            </Box>
            <Box fontSize={['1.3rem','1.3rem']} fontWeight={'semibold'}>LOW BUDGET</Box>
          </Box>

          <Box
          className="box"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
             gap={['1rem','1.5rem']}
          >
            <Box  className="icon" fontSize={['4.5rem','5rem']} color={theme.colors.col.secondary} >
              <FaMapSigns />
            </Box>
            <Box fontSize={['1.3rem','1.3rem']} fontWeight={'semibold'}>POPULAR</Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default TripIconSection;
