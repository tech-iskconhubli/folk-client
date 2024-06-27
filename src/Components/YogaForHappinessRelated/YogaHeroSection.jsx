import React from 'react'
import {Box, Button, Text} from '@chakra-ui/react'
import YogaBgImage from '../../../src/Assets/Monk.jpg'
import { GoNorthStar } from "react-icons/go";
import '../../Styles/YogaStyles.css'
const YogaHeroSection = () => {
   

  return (

     <Box style={{backgroundImage:`url(${YogaBgImage})`}} w={'100%'} h={['25vh','40vh','50vh','75vh','98vh']} bgRepeat={'no-repeat'} bgSize={'cover'} bgPosition={'center bottom'}>


         <Box display={'flex'} justifyContent={'center'} alignItems={'start'} flexDirection={'column'}  bgColor={'rgb(0,0,0,0.25)'} w={'100%'} h={'100%'} color={'white'} overflowX={'hidden'} px={['0.5rem']}>


          <Box className='yoga-heading' fontSize={'0.9rem'} display={'inline-block'}>
            BODY <span>&</span> MIND
          </Box>


           <Box>
             <Text fontSize={['0.7rem']} display={'inline-block'}>Connect to your inner flow.</Text>
           </Box>
          <Box>
          <Button fontSize={['0.5rem']} p={['0.5rem']} colorScheme='orange' display={'flex'} alignItems={'center'} gap={['0.3rem']} borderRadius={'10px'}> <span><GoNorthStar /></span> Join Our Classes</Button>
          </Box>
         </Box>
     </Box>


  )
}

export default YogaHeroSection
