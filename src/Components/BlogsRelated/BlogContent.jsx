import React from "react";
import { useRef,useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import author1 from "../../Assets/blogsprofile1.jpeg";
import blogimage from '../../Assets/blogContentimg.jpeg'
import { PiHandsClapping } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa";
import theme from "../../theme";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const BlogContent = () => {
  let [clapCount,setClapCount]=useState(1)
  const handleOnClap=()=>{
    setClapCount(clapCount+1);
  }
  return (
    <>
      <Box mt='100px'>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box w={{base:'95%',md:'70%',lg:'60%',xl:'50%'}} mt={{base:'10px',md:'20px',lg:'30px',xl:'30px'}} fontFamily={theme.fonts.body}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              gap="20px"
            >
              {/* blogtitle */}
              <Box
                color={theme.colors.col.text}
                fontFamily={theme.fonts.heading}
                fontSize={{base:'2rem',md:'2.5rem',lg:'3rem',xl:'3rem'}}
              >
                Devotional Insights
              </Box>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                gap="20px"
              >
               {/*  bloguserdetails */}
                <Box
                  w="60px"
                  h="60px"
                  borderRadius="50%"
                  backgroundImage={author1}
                  backgroundSize="cover"
                  backgroundPosition="center"
                ></Box>
                <Box>
                  Krishnakumar
                  <br />
                  14 apr 2016
                </Box>
              </Box>
              <hr />
              {/* blogreactions */}
              <Box
                fontSize="25px"
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <Box onClick={handleOnClap}>
                  <PiHandsClapping />{" "}
                </Box>
                <Box fontSize='14px'>{clapCount}</Box>
                <Box> <FaRegComment /></Box>
              </Box>
              <hr />
              {/* blogimage and text */}
              <Box textAlign="justify">
                <Box w={{base:'100%',md:'100%',lg:'100%'}} h='50vh' backgroundImage={blogimage} backgroundsize='cover' backgroundPosition='center' mb='30px' backgroundRepeat='no-repeat'></Box>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  fuga eaque provident reprehenderit numquam dicta at
                  voluptatem, fugit reiciendis eveniet. Harum laudantium,
                  numquam voluptas aut reprehenderit doloremque! Voluptatum
                  veritatis, dicta quos magnam eos consequuntur odio quod sit
                  quo distinctio itaque cumque enim laboriosam rerum saepe eius,
                  dolorem fugit, provident ipsa.
                </Text>
                <br/>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  eaque iusto tenetur sapiente possimus est fugiat quibusdam,
                  cum pariatur minima velit, accusantium expedita dicta
                  molestiae, fugit officiis. Excepturi hic ea tempora sed eos,
                  aperiam odit dicta harum, dolore saepe recusandae, numquam
                  aliquam beatae explicabo rerum maxime est? Mollitia,
                  doloremque. Repudiandae.
                </Text>
                <br/>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  eaque iusto tenetur sapiente possimus est fugiat quibusdam,
                  cum pariatur minima velit, accusantium expedita dicta
                  molestiae, fugit officiis. Excepturi hic ea tempora sed eos,
                  aperiam odit dicta harum, dolore saepe recusandae, numquam
                  aliquam beatae explicabo rerum maxime est? Mollitia,
                  doloremque. Repudiandae.
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default BlogContent;
