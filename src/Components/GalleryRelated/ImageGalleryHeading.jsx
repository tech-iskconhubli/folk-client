import { Box } from '@chakra-ui/react'
import React from 'react'
import theme from "../../theme";


const ImageGalleryHeading = () => {
  return (
<Box width="100%"  textAlign={'center'} fontSize={['2.5rem','3rem','3.5rem','4rem','5rem']} color={theme.colors.col.secondary} textShadow={'2px 2px 8px #CE5937'} mt={['10rem','10rem','10rem','12rem','13rem']}>
         Image Gallery
     </Box>
  )
}

export default ImageGalleryHeading
