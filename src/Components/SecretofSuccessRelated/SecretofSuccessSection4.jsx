import React, { useState,useRef } from "react"
import {Box,Text} from '@chakra-ui/react'
import theme from "../../theme";
import { MdOutlineSchedule } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { GiAwareness } from "react-icons/gi";
import { FaScaleUnbalancedFlip } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SecretofSuccessSection4=()=>{
   const [hoveredText,setHoveredText]=useState("")
   const Animatedcircle=useRef([]);
   const animatedText=useRef();
   
   useGSAP(()=>{
    gsap.fromTo(
        Animatedcircle.current,{
            opacity:1,transform:(i)=>`rotate(-${(i*60)+90}deg) translate(100px) rotate(${(i*60)+90}deg)` 
        },{
            rotate:'360deg',
            opacity:1,
            transform:(i)=>`rotate(-${(i*60)+90}deg) translate(225px) rotate(${(i*60)+90}deg)`,
            duration:2,
            ease:'power2.out'
        }
    )
  })


  useGSAP(()=>{
    gsap.fromTo(animatedText.current,{opacity:0,w:0},{opacity:1,w:'100%',duration:2,ease:'power2.out'})
  })

   const paths=[
    {name:'Self Realization',
        text:'True self-realization begins when one understands their eternal relationship with the Divine.'
    },
    {name:'Knowledge',
        text:'True knowledge is not just information, but the understanding and wisdom to apply it for the greater good.'
    },
    {name:'Hard Work',
       text:"Hard work beats talent when talent doesn't work hard."
    },
    {name:'Perseverance',
        text:'Perseverance is the steadfast courage to keep going despite the obstacles.'
    },
    {name:'Faith',
        text:"Have faith in your journey. Everything had to happen exactly as it did to get you where you're going next."
    },
    {name:'Discipline',
        text:'Discipline is the foundation upon which success is built.'
    }
    
   ]
   const handleMouseEnter=(text)=>{
    setHoveredText(text);

   }
 


return(
<>
<Box mt='50px' mb='50px'>
<Box  mb='50px' textAlign='center' fontSize='3rem'>Path to success</Box>
<Box display='flex' alignItems='center' justifyContent='center'>
    <Box w='1150px' display='flex' alignItems='center' justifyContent='center' gap='100px'>
    
    <Box position='relative' w='450px' h='450px' borderRadius='50%' border='2px solid gray' display='flex' alignItems='center' justifyContent='center'>
        
        {paths.map((path,index)=>{
            return(
                <Box key='index'
                position='absolute'
                w='120px'
                h='120px'
                bg={theme.colors.col.secondary}
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                color='white'
                borderRadius='50%'
                fontSize='0.9rem'
                textAlign='center'
                ref={(el) => (Animatedcircle.current[index] = el)}
                _hover={{bg:'rgba(246,247,249)',color:theme.colors.col.secondary}}
                onMouseEnter={()=>{handleMouseEnter(path.text)}}>
                    <text>{path.name}</text>
                </Box>
            );
        })}
        
       <Box fontSize='0.8rem' color={theme.colors.col.secondary} p='20px' textAlign='center' ref={animatedText}>
        {hoveredText? hoveredText:" "}
       </Box>
        
        
    </Box>
    <Box w='600px' h='450px' display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap='40px' textAlign='justify'>
        <Box display='flex' justifyContent='space-between' gap='20px' h='100px'>
            <Box bg={theme.colors.col.text} w='80px' h='80px' borderRadius='50%' display='flex' alignItems='center' justifyContent='center' fontSize='2rem' color='white'><MdOutlineSchedule /></Box>
            <Box w='450px' > <Box fontSize='1.1rem' mb='10px' fontWeight='600'>Chanting</Box>
            <Box fontSize='0.8rem'>Start your day with prayer and meditation,read scriptures regularly,include chanting in your routine.</Box></Box>
        </Box>

        <Box display='flex' justifyContent='space-between' gap='20px' h='100px'>
            <Box bg={theme.colors.col.text} w='80px' h='80px' borderRadius='50%' display='flex' alignItems='center' justifyContent='center' fontSize='2rem' color='white'><GoGoal /></Box>
            <Box w='450px' > <Box fontSize='1.1rem' mb='10px' fontWeight='600'>Aligning Goals</Box>
            <Box fontSize='0.8rem'>Align goals with spiritual values.Break larger goals into smaller tasks.</Box></Box>
        </Box>

        <Box display='flex' justifyContent='space-between' gap='20px' h='100px'>
            <Box bg={theme.colors.col.text} w='80px' h='80px' borderRadius='50%' display='flex' alignItems='center' justifyContent='center' fontSize='2rem' color='white'><GiAwareness /></Box>
            <Box w='450px' > <Box fontSize='1.1rem' mb='10px' fontWeight='600'>Awareness</Box>
            <Box fontSize='0.8rem'>Focus on the present moment.Perform actions with full awareness.</Box></Box>
        </Box>

        <Box display='flex' justifyContent='space-between' gap='20px' h='100px'>
            <Box bg={theme.colors.col.text} w='80px' h='80px' borderRadius='50%' display='flex' alignItems='center' justifyContent='center' fontSize='2rem' color='white'><FaScaleUnbalancedFlip /></Box>
            <Box w='450px' > <Box fontSize='1.1rem' mb='10px' fontWeight='600'>Awareness</Box>
            <Box fontSize='0.8rem'>Balance material and spiritual responsibilities.Take care of your physical health.</Box></Box>
        </Box>
      

    </Box>
    </Box>

</Box>
</Box>
</>
);
}
export default SecretofSuccessSection4;