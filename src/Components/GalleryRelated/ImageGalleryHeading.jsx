import { Box } from '@chakra-ui/react'
import React from 'react'
import theme from "../../theme";


const ImageGalleryHeading = () => {
  return (
    <Box width="100%" my={["5rem"]} textAlign={'center'} fontSize={['2.5rem','3rem','3.5rem','5rem']} color={theme.colors.col.secondary} textShadow={'2px 2px 8px #CE5937'}>
         Image Gallery
     </Box>
  )
}

export default ImageGalleryHeading
