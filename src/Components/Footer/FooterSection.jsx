import { Box, Container, Flex, HStack, IconButton, Image, Input, List, ListItem, VStack } from '@chakra-ui/react'
import React from 'react'
import folkLogo from '../Navbar/folk.png'
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoSend } from "react-icons/io5";
import theme from "../../theme";


const FooterSection = () => {
  return (
    <Box width="100%" mt={["5rem", "5rem", "7rem", "5rem", "5rem"]} bgColor={'black'}>
    <Container
      w={["100%", "100%", "100%", "100%"]}
      maxW="1700px"
      marginX="auto"
      p={['1.5rem','2rem','2rem',]}
    >
           <Flex w={'100%'}  gap={['2.5rem','2.5rem','2.5rem','2rem','3.5rem']} flexDirection={['column-reverse','column-reverse','column-reverse','row']}>
               <VStack alignItems={'flex-start'} gap={['3rem']} flex={1}>
                   <Box w={['250px','250px','250px','100%','100%']}>
                      <Image w={'100%'} h={'100%'} src={folkLogo} />
                   </Box>

                   <HStack gap={['2rem','2rem','2rem','1.5rem','2rem']} mx={'auto'} justifyContent={'space-evenly'} w={'100%'}>
                      <IconButton
                      icon={<FaFacebookF />}
                      bgColor={'transparent'}
                      color={'white'}
                      border={'2px solid white'}
                      borderRadius={'50%'}
                      _hover={{color:'orange',borderColor:'orange'}}
                       />
                      <IconButton
                      icon={<GrInstagram />}
                      bgColor={'transparent'}
                      color={'white'}
                      border={'2px solid white'}
                      borderRadius={'50%'}
                      _hover={{color:'orange',borderColor:'orange'}}
                       />
                      <IconButton
                      icon={<BsTwitterX />}
                      bgColor={'transparent'}
                      color={'white'}
                      border={'2px solid white'}
                      borderRadius={'50%'}
                      _hover={{color:'orange',borderColor:'orange'}}
                       />
                      <IconButton
                      icon={<IoLogoYoutube />}
                      bgColor={'transparent'}
                      color={'white'}
                      border={'2px solid white'}
                      borderRadius={'50%'}
                      _hover={{color:'orange',borderColor:'orange'}}
                       />
                   </HStack>
               </VStack>



                   <VStack color={'white'} alignItems={'flex-start'} gap={'1rem'}>
                      <Box fontSize={['1.2rem']} fontWeight={'600'} color={theme.colors.col.secondary}  cursor={'pointer'}>Pages</Box>
                      
                      <VStack alignItems={'flex-start'} spacing={3}>

                            <Link to={'/about'}>
                              <Box _hover={{color:theme.colors.col.secondary}}>
                                AboutUs
                              </Box>
                            </Link>

                            <Link to={'/blogs'}>
                              <Box _hover={{color:theme.colors.col.secondary}}>
                               Blogs
                              </Box>
                            </Link>

                            <Link to={'/donation'}>
                              <Box _hover={{color:theme.colors.col.secondary}}>
                                Donation
                              </Box>
                            </Link>

                            <Link to={'/festivals'}>
                              <Box _hover={{color:theme.colors.col.secondary}}>
                               Festivals
                              </Box>
                            </Link>

                            <Link to={'/gallery'}>
                              <Box _hover={{color:theme.colors.col.secondary}}>
                               Gallery
                              </Box>
                              </Link>

                              <Link to={'/yogaForHappiness'}>
                              <Box _hover={{color:theme.colors.col.secondary}}>
                               Yoga for happiness
                              </Box>
                              </Link>

                
                           <Link to={'/recidency'}>
                              <Box _hover={{color:theme.colors.col.secondary}}>
                                Residency
                              </Box>
                           </Link>

                           <Link to={'/trips'}>
                              <Box _hover={{color:theme.colors.col.secondary}}>
                                Trips
                              </Box>
                           </Link>
                          </VStack>
                     
                   </VStack>

                   <VStack  color={'white'} alignItems={'flex-start'} spacing={5}>
                           <VStack alignItems={'flex-start'}>
                           <Box fontSize={['1.2rem']} fontWeight={'600'} color={theme.colors.col.secondary}  cursor={'pointer'}>EMAIL</Box>
                              <Box>info@folknet.in</Box>
                           </VStack>

                           <VStack alignItems={'flex-start'}>
                           <Box fontSize={['1.2rem']} fontWeight={'600'} color={theme.colors.col.secondary}  cursor={'pointer'}>PHONE</Box>
                              <Box>1234567890</Box>
                           </VStack>

                           <VStack alignItems={'flex-start'}>
                           <Box fontSize={['1.2rem']} fontWeight={'600'} color={theme.colors.col.secondary}  cursor={'pointer'}>ADDRESS</Box>
                              <Box w={['auto','auto','auto','300px','350px']}>
                                Plot No.45,D.NO.1-57/45 Sandipaninagar,Yendada Visakhapatnam - 530045
                              </Box>
                           </VStack>
                   </VStack>

                   <VStack alignItems={'flex-start'} color={'white'} spacing={[3]}>
                   <Box fontSize={['1.2rem']} fontWeight={'600'} color={theme.colors.col.secondary}  cursor={'pointer'}>
                            SUBSCRIBE
                         </Box>
                         <Box>
                            Enter your email to notified 
                         </Box>
                         <HStack>
                             <Input  size={['lg','lg','lg','md','lg']} type='email' placeholder={'Email'}  />
                            <IconButton
                             icon={<IoSend />}
                             size={['lg','lg','lg','md','lg']}
                              bgColor={theme.colors.col.secondary}
                              color={'white'}
                              _hover={{color:'orange',bgColor:'white'}}
                              fontSize={['1.1rem']}
                             />
                         </HStack>
                   </VStack>
           </Flex>
          </Container>
     </Box>
  )
}

export default FooterSection
