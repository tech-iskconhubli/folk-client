import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import author1 from "../../Assets/blogsprofile1.jpeg";
import { MdOutlineArrowOutward } from "react-icons/md";
import post1 from "../../Assets/blogsimage1.webp";
import theme from "../../theme";
const BlogsSection1 = () => {
  const Blogpost = () => {
    return (
      <>
        <Box w="100%" h="500px" bg="rgba(246,247,249)" borderRadius="10px">
          <a href='./BlogContent'>
          {/* blogpost */}
          <Box
            w="100%"
            h="300px"
            backgroundImage={post1}
            borderTopRadius="10px"
            backgroundPosition="center"
            backgroundSize="cover"
            objectFit="fill"
          ></Box>
          {/* blogtitle and description */}
          <Box h="200px" w="100%" p="20px">
            <Box
              display="flex"
              justifyContent="flex-start"
              flexDirection="column"
              fontSize="14px"
            >
              
              <Text fontSize="1.2rem" color={theme.colors.col.text}>
                Devotional Insights
              </Text>
              <Box>
                <Text textAlign="justify">
                  In the serene silence of dawn, as the first rays of the sun
                  gently kiss the horizon, the heart of the devotee is filled
                  with a sense of divine presence.
                </Text>
              </Box>
              {/* bloguserdetails */}
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  fontSize="0.8rem"
                  alignItems="center"
                  mt="30px"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap="20px"
                  >
                    <Box
                      w="35px"
                      h="35px"
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
                  <Box w='30px' h='30px' bg={theme.colors.col.text} display='flex' alignItems='center' justifyContent='center' fontSize='1rem' color='white' borderRadius='10px'><MdOutlineArrowOutward /></Box>
                </Box>
              </Box>
            </Box>
          </Box>
          </a>
        </Box>
      </>
    );
  };
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontFamily={theme.fonts.body}
      >
        <Box w="80%" mt="100px">
          <Box fontSize="2rem" color={theme.colors.col.secondary} mb="50px">
            Latest Blogs
          </Box>
          {/* bloglayout */}
          <Grid templateColumns={{base:'repeat(1,1fr)',md:'repeat(2,1fr)',lg:'repeat(2,1fr)',xl:'repeat(3,1fr)'}} gap={{base:10,md:8,lg:7,xl:6}}>
            <GridItem>
            <Blogpost />
            </GridItem>
            <GridItem><Blogpost /></GridItem>
            <GridItem><Blogpost /></GridItem>
            <GridItem><Blogpost /></GridItem>
            <GridItem><Blogpost /></GridItem>
            <GridItem><Blogpost /></GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default BlogsSection1;
