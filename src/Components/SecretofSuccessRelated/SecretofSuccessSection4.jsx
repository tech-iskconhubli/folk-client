import React from "react"
import {Box,text} from '@chakra-ui/react'
import theme from "../../theme";
import { MdOutlineSchedule } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { GiAwareness } from "react-icons/gi";
import { FaScaleUnbalancedFlip } from "react-icons/fa6";
const SecretofSuccessSection4=()=>{
/*     const paths=[
        'Self Realization',
        'knowledge',
        'Hard Work',
        'Perseverance',
        'Faith',
        'Discipline'
    ]; */

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
        text:'Faith is the unwavering belief in the unseen and the assurance of things hoped for'
    },
    {name:'Discipline',
        text:'Discipline is the foundation upon which success is built.'
    }
    
   ]
return(
<>
<Box mt='100px' mb='50px' textAlign='center' fontSize='3rem'>Path to success</Box>
<Box display='flex' alignItems='center' justifyContent='center'>
    <Box w='1100px' display='flex' alignItems='center' justifyContent='center' gap='100px'>
    
    <Box position='relative' w='500px' h='500px' borderRadius='50%' border='2px solid gray' display='flex' alignItems='center' justifyContent='center'>
        {paths.map((path,index)=>{
            const angle=((index)/paths.length)*360 +90;
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
                style={{
                    transform: `rotate(-${angle}deg) translate(250px) rotate(${angle}deg)`,
                  }}>
                    <text>{path}</text>

                </Box>
            );
        })}
        
    </Box>
    <Box w='500px' h='500px' display='flex' flexDirection='column' alignItems='center' justifyContent='center' gap='60px' textAlign='justify'>
        <Box display='flex' justifyContent='space-between' alignItems='center' gap='20px'>
            <Box bg={theme.colors.col.text} w='80px' h='80px' borderRadius='50%' display='flex' alignItems='center' justifyContent='center' fontSize='2rem' color='white'><MdOutlineSchedule /></Box>
            <Box w='400px'>Start your day with prayer and meditation,read scriptures regularly,include chanting in your routine.</Box>
        </Box>
      
        <Box display='flex' justifyContent='space-between' alignItems='center' gap='20px'>
            <Box bg={theme.colors.col.text} w='80px' h='80px' borderRadius='50%' display='flex' alignItems='center' justifyContent='center' fontSize='2rem' color='white'><GoGoal /></Box>
            <Box w='400px'>Align goals with spiritual values.Break larger goals into smaller tasks.</Box>
        </Box>

        <Box display='flex' justifyContent='space-between' alignItems='center' gap='20px'>
            <Box bg={theme.colors.col.text} w='80px' h='80px' borderRadius='50%' display='flex' alignItems='center' justifyContent='center' fontSize='2rem' color='white'><GiAwareness /></Box>
            <Box w='400px'>Focus on the present moment.Perform actions with full awareness.</Box>
        </Box>

        <Box display='flex' justifyContent='space-between' alignItems='center' gap='20px'>
            <Box bg={theme.colors.col.text} w='80px' h='80px' borderRadius='50%' display='flex' alignItems='center' justifyContent='center' fontSize='2rem' color='white'><FaScaleUnbalancedFlip /></Box>
            <Box w='400px'>Balance material and spiritual responsibilities.Take care of your physical health.</Box>
        </Box>

    </Box>
    </Box>

</Box>
</>
);
}
export default SecretofSuccessSection4;