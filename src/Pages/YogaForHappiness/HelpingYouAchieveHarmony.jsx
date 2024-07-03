import { Box, Button, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);



const HelpingYouAchieveHarmony = () => {
   
    const container = useRef(null);
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                 trigger:container.current,
                 start:'top 70%',
                 end:'bottom center',
            }
        });

        tl.from(container.current.children,{
             y:100,
             opacity:0,
             duration:0.5,
             stagger:0.3,
        })
    },[])

  return (
     <Box my={'2rem'}>
         <Box ref={container} backgroundAttachment={'fixed'} bgRepeat={'no-repeat'} bg={'url(https://livedemo00.template-help.com/wt_prod-23025/images/parallax-1-1920x900.jpg)'} w={'100%'} h={['30vh','35vh','35vh','40vh','60vh']} backgroundPosition={'center'} backgroundSize={'cover'} color={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={['1rem','1.5rem','2rem','3.5rem']} py={['1.5rem','1.5rem']} px={['1rem','1.5rem','5rem','6rem']}>
             <Box textAlign={'center'}>
                <Box fontSize={['1.1rem','1.1rem','1.2rem','1.5rem']} fontWeight={['300']}>
                    Take the First Step to Hinduism
                </Box>
                <Box fontSize={['1.5rem','2rem','2.5rem','3rem']} fontWeight={'semibold'} lineHeight={['2rem','2.5rem','3rem','4rem']}>
                     Helping You Achieve Harmony
                </Box>
             </Box>

             <Box textAlign={'center'} maxW={'600px'}>
                <Text fontSize={['0.8rem','1rem','1.1rem','1.2rem']} fontWeight={'300'}>
                    Our Website works to provide you with any information and resources on Hinduism to help you find out more about it and achieve inner harmony.
                </Text>
             </Box>

             <Box>
                 <Button colorScheme='orange' fontSize={['0.8rem','1rem','1.1rem','1.5rem']}px={['1rem','1rem','1rem','2rem']} py={['1rem','1rem','1rem','2rem']}>VIEW MORE</Button>
             </Box>

         </Box>
     </Box>
  )
}

export default HelpingYouAchieveHarmony
