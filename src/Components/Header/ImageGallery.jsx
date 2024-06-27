import React, {  useRef } from "react";
import { Box, Container, Image,  Heading } from "@chakra-ui/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import theme from "../../theme"
import { useTheme } from "@emotion/react";
gsap.registerPlugin(ScrollTrigger);
const ImageGallery = () => {
  const theme = useTheme()
  const gridContainer = useRef(null);
  const heading = useRef();

// Animation for heading

  useGSAP(()=>{
     gsap.from(heading.current,{
        y:100,
        duration:0.8,
        opacity:0,
        scrollTrigger:{
            trigger:heading.current,
            start:'top 90%',
            end:'bottom center'
        }
     })
  })




 

// Animation for Grid Image Gallery
  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:gridContainer.current,
        start:'top 160%',
        end:'bottom center',
      }
    })
    tl.from(gridContainer.current,{
      scale:0,
      opacity:0,
      duration:0.5
    });
    tl.from(gridContainer.current.children, {
      y: 100,
      duration: 0.7,
      opacity: 0,
      stagger: 0.3,
    });
  });

  return (
    <Box>
      <Container
        w={["100%", "100%", "90%", "90%"]}
        maxW="1500px"
        marginX="auto"
        my="1.5rem"
        padding="2rem"
       
      >
        {/* Heading */}
           <Box ref={heading} py={['10px','20px','30px']} textAlign={'center'}>
           <Heading fontFamily={"body"} fontSize={['2rem','2.5rem','3rem','4rem']} mb={['2.2rem','2.2rem','3rem']} display={'inline-block'}  fontWeight="400">
          A GLANCE INTO THE <br /> FOLK WORLD
          </Heading>
        </Box>



{/* Grid Image Gallery */}
        <Box
         bgColor={theme.colors.col.secondary} 
          ref={gridContainer}
          display={"grid"}
          gridTemplateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gridAutoRows={{ sm: "auto", md: "300px" }}
          gap={['20px','15px','10px']}
        >
        {/* Image 1 */}
          <Box
            w={"100%"}
            gridRow={{ sm: "auto", md: "span 2", lg: "span 2" }}
            borderRadius={"5px"}
            overflow={"hidden"}
          >
            <Image
              borderRadius={"5px"}
              objectFit={"cover"}
              w={"100%"}
              h={"100%"}
              src="https://images.unsplash.com/photo-1658891389224-43441d0ea8ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUyfHxtb25rc3xlbnwwfHwwfHx8MA%3D%3D"
            />
          </Box>

            {/* Image 2 */}
          <Box
            w={"100%"}
            gridColumn={{ sm: "auto", md: "auto", lg: "span 2" }}
            borderRadius={"5px"}
            overflow={"hidden"}
          >
            <Image
              borderRadius={"5px"}
              objectFit={"cover"}
              w={"100%"}
              h={"100%"}
              src="https://images.unsplash.com/photo-1549871058-2933771412ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Box>

            {/* Image 3 */}
          <Box w={"100%"} borderRadius={"5px"} overflow={"hidden"}>
            <Image
              borderRadius={"5px"}
              objectFit={"cover"}
              w={"100%"}
              h={"100%"}
              src="https://c4.wallpaperflare.com/wallpaper/1001/272/32/god-lord-krishna-wallpaper-preview.jpg"
            />
          </Box>

            {/* Image 4 */}
          <Box
            w={"100%"}
            gridRow={{ sm: "auto", md: "span 2", lg: "span 2" }}
            borderRadius={"5px"}
            overflow={"hidden"}
          >
            <Image
              borderRadius={"5px"}
              objectFit={"cover"}
              w={"100%"}
              h={"100%"}
              src="https://images.unsplash.com/photo-1598089842345-111cc13e5ece?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Box>

            {/* Image 5 */}
          <Box w={"100%"} borderRadius={"5px"} overflow={"hidden"}>
            <Image
              borderRadius={"5px"}
              objectFit={"cover"}
              w={"100%"}
              h={"100%"}
              src="https://t4.ftcdn.net/jpg/05/68/51/97/240_F_568519745_AtYXjrL6gIKu2DaVhazeiDjC4RnPTefl.jpg"
            />
          </Box>
          
            {/* Image 6 */}
          <Box w={"100%"} borderRadius={"5px"} overflow={"hidden"}>
            <Image
              borderRadius={"5px"}
              objectFit={"cover"}
              objectPosition={"top"}
              w={"100%"}
              h={"100%"}
              src="https://images.unsplash.com/photo-1623952146070-f13fc902f769?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ImageGallery;
