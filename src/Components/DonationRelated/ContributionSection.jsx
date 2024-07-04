import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { TbPigMoney } from "react-icons/tb";
import { IoEarthOutline } from "react-icons/io5";
import { GiMedicinePills } from "react-icons/gi";
import { GiBowlOfRice } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";
import { TfiPackage } from "react-icons/tfi";
import theme from "../../theme";
import { useTheme } from "@emotion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const ContributionSection = () => {
  
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
      duration:1,
      stagger:0.3,
      ease: "power1.inOut",
     })

 
     

   },[])
  


  return (
    <Box width="100%" my={["3rem", "3rem", "4rem", "5rem"]}>
      <Container
        w={["100%", "100%", "90%", "90%"]}
        maxW="1500px"
        marginX="auto"
      >
        <SimpleGrid
          ref={gridContainerRef}
          justifyContent={"center"}
          gridTemplateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gridAutoRows={'200px'}
          spacing={["20", "10", "10",'5','10']}
          w={"100%"}
          overflowX={"hidden"}
          p={['1rem','1.3rem','1.5rem','2rem']}
        >

          {/* Box One  */}
          <Box
            gridColumn={["auto", "auto", "span 2"]}
            p={["1rem"]}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              fontSize={["1.5rem", "2rem",'2.5rem']}
              fontWeight={"600"}
              lineHeight={["auto", "2rem",'3rem']}
              textAlign={["center","center",'center','left']}
              
            >
              Any contribution actually matters
            </Box>
            <Text
              mt={["1rem"]}
              fontSize={["0.9rem","0.9rem","0.9rem","1rem"]}
              textAlign={["left", "center","center","left"]}
              w={["auto", "auto","500px",'100%']}
              mx={['auto','auto','auto']}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              a distinctio alias, eos quae laudantium.
            </Text>
          </Box>
    

        {/* Box Two */}
          <Box
        
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={["center","center","center","start"]}
            gap={["1rem"]}
            px={["0"]}
          >
            <Box fontSize={["3.5rem","4rem"]} color={theme.colors.col.secondary}>
              <TbPigMoney />
            </Box>
            <Box
              fontSize={["1.2rem","1.5rem"]}
              w={["200px"]}
              textAlign={["center","center","center","left"]}
              fontWeight={"700"}
              lineHeight={["1.7rem","2rem"]}
            >
              Monetary Fundraising
            </Box>
          </Box>
         
         {/* Box Three */}
          <Box
        
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={["center","center","center","start"]}
            gap={["1rem"]}
            px={["0"]}
          >
            <Box fontSize={["3.5rem","4rem"]} color={theme.colors.col.secondary}>
              <IoEarthOutline />
            </Box>
            <Box
              fontSize={["1.3rem","1.5rem"]}
              w={["200px"]}
             textAlign={["center","center","center","left"]}
              fontWeight={"700"}
              lineHeight={["1.7rem","2rem"]}
            >
              Humanitarian Aid
            </Box>
          </Box>

          {/* Box Four */}

          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={["center","center","center","start"]}
            gap={["1rem"]}
            px={["0"]}
          >
            <Box fontSize={["3.5rem","4rem"]} color={theme.colors.col.secondary}>
              <GiMedicinePills />
            </Box>
            <Box
              fontSize={["1.3rem","1.5rem"]}
              w={["200px"]}
             textAlign={["center","center","center","left"]}
              fontWeight={"700"}
              lineHeight={["1.7rem","2rem"]}
            >
              Medication Support
            </Box>
          </Box>
    
       {/* Box Five */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={["center","center","center","start"]}
            gap={["1rem"]}
            px={["0"]}
          >
            <Box fontSize={["3.5rem","4rem"]} color={theme.colors.col.secondary}>
              <GiBowlOfRice />
            </Box>
            <Box
              fontSize={["1.3rem","1.5rem"]}
              w={["200px"]}
             textAlign={["center","center","center","left"]}
              fontWeight={"700"}
              lineHeight={["1.7rem","2rem"]}
            >
              Food Fundraising
            </Box>
          </Box>
 

   {/* Box Six */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={["center","center","center","start"]}
            gap={["1rem"]}
            px={["0"]}
          >
            <Box fontSize={["3.5rem","4rem"]} color={theme.colors.col.secondary}>
              <GiClothes />
            </Box>
            <Box
              fontSize={["1.3rem","1.5rem"]}
              w={["200px"]}
             textAlign={["center","center","center","left"]}
              fontWeight={"700"}
              lineHeight={["1.7rem","2rem"]}
            >
              Clothing Drives
            </Box>
          </Box>
    
    {/* Box Seven */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={["center","center","center","start"]}
            gap={["1rem"]}
            px={["0"]}
          >
            <Box fontSize={["3.5rem","4rem"]} color={theme.colors.col.secondary}>
              <TfiPackage />
            </Box>
            <Box
              fontSize={["1.3rem","1.5rem"]}
              w={["200px"]}
             textAlign={["center","center","center","left"]}
              fontWeight={"700"}
              lineHeight={["1.7rem","2rem"]}
            >
              Children's Goods
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ContributionSection;
