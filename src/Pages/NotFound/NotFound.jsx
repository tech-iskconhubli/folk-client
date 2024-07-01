import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import theme from "../../theme"
const NotFound = () => {
  return (
     <Box display={'flex'} flexDirection={'column'} w={'100%'} h={'100vh'} alignItems={'center'} justifyContent={'center'} gap={['4rem']} >
          <Box textAlign={'center'}>
               <Box color={theme.colors.col.secondary} fontSize={['9rem','10rem','15rem','20rem']}  lineHeight={['10rem','10rem','15rem','19rem']}  fontWeight={'700'}textShadow={'0px -6px 11px rgba(69,30,18,0.92)'}>404</Box>
               <Box display={'flex'} flexDirection={'column'} gap={'0.4rem'}>
                  <Box fontSize={['1.2rem','1.5rem']} fontStyle={'italic'} fontWeight={'bold'}>You missed...</Box>
                  <Text fontSize={['0.9rem','1rem','1.1rem']} fontWeight={'400'}>The page you are looking for doesn't exist.</Text>
               </Box>
          </Box>
          <Box>
              <Button colorScheme="orange" fontSize={['1rem','1rem']} px={['1rem','1rem','1.5rem','2rem']} py={['1.5rem','1.5rem','2rem']}>BACK TO HOME</Button>
          </Box>
     </Box>
  )
}

export default NotFound