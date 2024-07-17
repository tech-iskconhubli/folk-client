import { Box, Container, VStack } from '@chakra-ui/react'
import React from 'react'
import theme from "../../theme";
import { FaQuoteLeft } from "react-icons/fa";

const ResidencyMatterSection = () => {
  return (
    <Box width="100%" my={["5rem", "5rem", "7rem", "5rem", "10rem"]}>
    <Container
      w={["100%", "100%", "95%", "95%"]}
      maxW="1500px"
      marginX="auto"
    >
        <VStack bgColor={'rgb(245, 247, 248)'} alignItems={'flex-start'}  borderRadius={'15px'} p={['1rem','1.3rem','1.5rem','2rem','2.5rem']} gap={['1rem']}>
         <Box pointerEvents={'none'} fontSize={['2.5rem','3.5rem','4rem','4.5rem','5rem']} color={theme.colors.col.secondary} opacity={0.5}>
         <FaQuoteLeft />
         </Box>
         <Box lineHeight={['1.8rem','2.2rem','3rem','3.8rem','4.5rem']}  fontSize={['1rem','1.5rem','2rem','2.3rem','3rem']}   color={theme.colors.col.secondary} fontWeight={'600'}>
         Live in a sacred atmosphere. FOLK Residency is a perfect place to stay for those who want to live close to their Self, close to their Heart.
         </Box>
        </VStack>


         </Container>
     </Box>
  )
}

export default ResidencyMatterSection
