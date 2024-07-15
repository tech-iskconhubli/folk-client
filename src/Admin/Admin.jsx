import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'
import KrishnaSpinner from './Spinner/KrishnaSpinner'
import SecOne from './AdminHome/SecOne'
import SecTwo from './AdminHome/SecTwo'
import SecThree from './AdminHome/SecThree'
import SecFour from './AdminHome/SecFour'


const Admin = () => {
  return (
    <>
    <Box boxSizing='border-box' p={"10px"}><Box><SecOne/></Box>
        <Box><SecTwo/></Box>
        <Box><SecThree/></Box>
        <Box><SecFour/></Box>
     </Box>
        
    </>
  )
}

export default Admin