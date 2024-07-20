import React from "react";
import { Box } from "@chakra-ui/react";
import image1 from '../../Assets/sosprinciples1.jpg';
import image2 from '../../Assets/sosprinciples2.jpg';
import image3 from '../../Assets/sosprinciples3.jpg';
import image4 from '../../Assets/sosprinciple4.jpg';
import theme from '../../theme'
const SecretofSuccessSection2 = () => {
  return (
    <>
    <Box mt='50px'>
      <Box mb='50px' fontSize={{base:'1.5rem',md:'2rem',lg:'2.5rem'}} textAlign='center'>Principles of Success</Box>
      <Box display="flex" alignItems="center" flexDirection={{base:'column',md:'row'}} justifyContent="center" >
        <Box
          w={{base:'90%',md:'90%',lg:'80%',xl:'65%'}}
          h={{base:'1230px',md:'400px'}}
          display="flex"
          flexDirection={{base:'column',md:'row'}}
          alignItems="center"
          justifyContent="flex-start"
          gap="10px"
        >
          <Box
            h='400px'
            backgroundImage={image1}
            backgroundPosition='center'
            backgroundSize='cover'
            flex={1}
            borderRadius="5px"
            _hover={{ flex:3 }}
            transition="all ease-in-out 0.5s"
            position='relative'
            boxShadow="0 4px 4px rgba(0,0,0,0.25)"
          >
            <Box position='absolute' top='0' left='0' borderRadius='5px' bg={theme.colors.col.text} p='5px' color='white' fontSize='1.5rem'>Dharma</Box>
            <Box display='flex' flexDirection='column' justifyContent='flex-end' color='white' w='100%' h='100%' p='0' textAlign='justify'>
              <Box bg='rgba(0,0,0,0.6)' h='120px' overflow='hidden' pl='10px' pr='10px'  style={{filter:'box-shadow(0px,0px,10px,10px rgba(0,0,0,0.5))'}}><Box fontSize='1.2rem' mt='10px' color='white' mb='5px'>Bhagavad Gita 3.35:<Box h='2px' w='100%' bg={theme.colors.col.text} mt='-2px'></Box></Box><q>It is better to perform one's own duties imperfectly than to master the duties of another. By fulfilling the obligations he is born with, a person never comes to grief</q></Box>
            </Box>
          </Box>

          <Box
            h="400px"
            backgroundImage={image2}
            backgroundPosition='center'
            backgroundSize='cover'
            flex="1"
            borderRadius="5px"
            _hover={{ flex: 3 }}
            transition="all ease-in-out 0.5s"
            position='relative'
            boxShadow="0 4px 4px rgba(0,0,0,0.25)"
          >
            <Box position='absolute' top='0' left='0' borderRadius='5px' bg={theme.colors.col.text} p='5px' color='white' fontSize='1.5rem'>Karma</Box>
            <Box display='flex' flexDirection='column' justifyContent='flex-end' color='white' w='100%' h='100%' p='0' textAlign='justify'>
              <Box bg='rgba(0,0,0,0.6)' h='120px'overflow='hidden' pl='10px' pr='10px'  style={{filter:'box-shadow(0px,0px,10px,10px rgba(0,0,0,0.5))'}}><Box fontSize='1.2rem' mt='10px' color='white' mb='5px'>Bhagavad Gita 2.47:<Box h='2px' w='100%' bg={theme.colors.col.text} mt='-2px'></Box></Box><q>You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.</q></Box>
            </Box>
          </Box>
         
          <Box
            h="400px"
            backgroundImage={image3}
            backgroundPosition='center'
            backgroundSize='cover'
            flex="1"
            borderRadius="5px"
            _hover={{ flex: 3 }}
            transition="all ease-in-out 0.5s"
            position='relative'
            boxShadow="0 4px 4px rgba(0,0,0,0.25)"
          >
            <Box position='absolute' top='0' left='0' borderRadius='5px' bg={theme.colors.col.text} p='5px' color='white' fontSize='1.5rem'>Bhakthi</Box>
            <Box display='flex' flexDirection='column' justifyContent='flex-end'  color='white' w='100%' h='100%' p='0' textAlign='justify'>
              <Box bg='rgba(0,0,0,0.6)' h='120px'overflow='hidden' pl='10px' pr='10px'  style={{filter:'box-shadow(0px,0px,10px,10px rgba(0,0,0,0.5))'}}><Box fontSize='1.2rem' mt='10px' color='white' mb='5px'>Bhagavad Gita 9.92:<Box h='2px' w='100%' bg={theme.colors.col.text} mt='-2px'></Box></Box><q>To those who are constantly devoted and who worship Me with love, I give the understanding by which they can come to Me.</q></Box>
            </Box>
          </Box>

          <Box
            h="400px"
            backgroundImage={image4}
            backgroundPosition='center'
            backgroundSize='cover'
            flex="1"
            borderRadius="5px"
            _hover={{ flex: 3 }}
            transition="all ease-in-out 0.5s"
            position='relative'
            boxShadow="0 4px 4px rgba(0,0,0,0.25)"
          >
            <Box position='absolute' top='0' left='0' borderRadius='5px' bg={theme.colors.col.text} p='5px' color='white' fontSize='1.5rem'>Dharma</Box>
            <Box display='flex' flexDirection='column' justifyContent='flex-end' bg='rgb(0,0,0,0.25)' color='white' w='100%' h='100%' p='0' textAlign='justify'>
              <Box bg='rgba(0,0,0,0.5)' h='120px'overflow='hidden' pl='10px' pr='10px'  style={{filter:'box-shadow(0px,0px,10px,10px rgba(0,0,0,0.5))'}}><Box fontSize='1.2rem' mt='10px' color='white' mb='5px'>Bhagavad Gita 4.38:<Box h='2px' w='100%' bg={theme.colors.col.text} mt='-2px'></Box></Box><q>In this world, there is nothing as purifying as divine knowledge. One who has attained purity of mind through prolonged practice of yoga receives such knowledge within the heart in due course of time.</q></Box>
            </Box>
          </Box>
          
        </Box>
      </Box>
      </Box>
    </>
  );
};
export default SecretofSuccessSection2;
