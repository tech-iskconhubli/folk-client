import React from 'react'
import {Box, Button, Text} from '@chakra-ui/react'
import YogaBgImage from '../../../src/Assets/Monk.jpg'
import { GoNorthStar } from "react-icons/go";
import '../../Styles/YogaStyles.css'
const YogaHeroSection = () => {
   

  return (
     <Box style={{backgroundImage:`url(${YogaBgImage})`}} w={'100%'} h={['25vh','40vh','50vh','75vh','98vh']} bgRepeat={'no-repeat'} bgSize={'cover'} bgPosition={'center bottom'}>
         <Box  bgColor={'rgb(0,0,0,0.25)'} w={'100%'} h={'100%'} px={'9rem'} color={'white'}>


          {/* <Box className='yoga-heading' pt={'15rem'} fontWeight={500} fontSize={'5rem'}  display={'inline-block'}>
            BODY <span>&</span> MIND
          </Box>


           <Box py={'1rem'}>
             <Text display={'inline-block'} fontSize={'1.2rem'}>Connect to your inner flow.</Text>
           </Box>
          <Box my={'2rem'}>
          <Button colorScheme='orange' display={'flex'} alignItems={'center'} gap={'0.8rem'} borderRadius={'30px'}> <span><GoNorthStar /></span> Join Our Classes</Button>
          </Box> */}
         </Box>
     </Box>
  )
}

export default YogaHeroSection
