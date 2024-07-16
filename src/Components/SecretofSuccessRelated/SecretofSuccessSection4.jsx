import React from "react"
import {Box,text} from '@chakra-ui/react'
import theme from "../../theme";
const SecretofSuccessSection4=()=>{
    const paths=[
        'Self Realization',
        'knowledge',
        'Hard Work',
        'Perseverance',
        'Faith',
        'Discipline'
    ];
return(
<>
<Box mt='100px' mb='50px'>Path to success</Box>
<Box display='flex' alignItems='center' justifyContent='center'>
    <Box w='65%' display='flex' alignItems='center' justifyContent='space-between'>
    
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
    </Box>

</Box>
</>
);
}
export default SecretofSuccessSection4;