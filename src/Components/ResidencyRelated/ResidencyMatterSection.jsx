import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import theme from "../../theme";

const ResidencyMatterSection = () => {
  return (
    <Box width="100%" my={["5rem", "5rem", "7rem", "5rem", "10rem"]}>
    <Container
      w={["100%", "100%", "95%", "95%"]}
      maxW="1500px"
      marginX="auto"
    >
         <Box borderRadius={'20px'} lineHeight={['2.5rem','3rem','3.5rem','4rem','5rem']} bgColor={'rgb(245, 247, 248)'} fontSize={['1.5rem','1.7rem','2rem','2.3rem','3rem']} p={['1rem','1.3rem','1.5rem','2rem','2.5rem']}  color={theme.colors.col.secondary} fontWeight={'400'}>
         Live in a sacred atmosphere. FOLK Residency is a perfect place to stay for those who want to live close to their Self, close to their Heart.
         </Box>


         </Container>
     </Box>
  )
}

export default ResidencyMatterSection
