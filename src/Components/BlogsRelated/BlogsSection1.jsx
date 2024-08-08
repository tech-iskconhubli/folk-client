import React from "react";
import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
  Image,
  Heading,
  CardFooter,
  VStack,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import theme from "../../theme";

const BlogPost = [
  {
    imageUrl:'https://images.unsplash.com/photo-1527221579996-0de6d1ae2069?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    BlogHeading: "Devotional Insights",
    date: "18-08-2024",
    desc: "In the serene silence of dawn ,as the first rays of the sun gently kiss,the heart of the devotee is gently filled with divine presence",
  },

  {
    imageUrl:'https://images.unsplash.com/photo-1527221579996-0de6d1ae2069?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    BlogHeading: "Devotional Insights",
    date: "18-08-2024",
    desc: "In the serene silence of dawn ,as the first rays of the sun gently kiss,the heart of the devotee is gently filled with divine presence",
  },

];

const BlogsSection1 = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontFamily={theme.fonts.body}
      >
        <Box w="80%" mt="100px">
          <Box fontSize="2rem" color={theme.colors.col.secondary}>
            Latest Blogs
          </Box>
          <SimpleGrid
            w={"100%"}
            columns={["1", "1", "2", "2", "4"]}
            mt={["3rem"]}
            spacing={[10, 10, 5, 10, 4]}
          >
            {BlogPost.map((blog, index) => (
              <Card
                key={index}
                bgColor={"rgb(246,247,249)"}
                overflow={"hidden"}
                p={3}
                borderRadius={"10px"}
              >
                {/* blogimage */}
                <Box w="100%" h="300px">
                    <Image src={blog.imageUrl} alt="blog1" objectFit="cover" h='100%' w='100%' borderTopRadius='10px'/>
                  </Box>
                <CardBody px='2'>
                  <VStack  alignItems='flex-start'>
                    {/* blogheading */}
                    <Heading color={theme.colors.col.secondary}>
                      {
                       blog.BlogHeading.length >= 18 ? `${blog.BlogHeading.substring(0,18)}...`: blog.BlogHeading
                       }
                    </Heading>
                     {/* blogdesc */}
                    <Text fontSize='0.9rem' textAlign='justify'>
                      {
                        blog.desc.length>=150?`${blog.desc.substring(0,150)}...`:blog.desc
                      }
                      </Text>
                  </VStack>
                </CardBody>
                <CardFooter py='1' px='2'>
                  <Box display="flex" justifyContent='space-between' alignItems='center' w='100%'>
                    {/* blogdate */}
                    <Box bgColor={theme.colors.col.text} color={'white'}  borderRadius={'10px'} p={2} fontWeight={'600'} pointerEvents={'none'} fontSize={'1rem'} textAlign='center' h='40px' display='flex' alignItems='center' justifyContent='center'>
                     {blog.date}
                   </Box>
                   {/* blogarrow */}
                    <Box role='group' w='40px' h='40px' bg={theme.colors.col.text} display='flex' alignItems='center' justifyContent='center' fontSize='1.1rem' color='white' borderRadius='10px'>
                      <Box _groupHover={{transform:'rotate(45deg)'}} transition={'all 0.2s linear'}><FiArrowUpRight  /></Box>
                      </Box>
                  </Box>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};
export default BlogsSection1;
