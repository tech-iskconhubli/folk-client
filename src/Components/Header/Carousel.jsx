
import React, { useEffect, useState } from 'react'
import { Box} from '@chakra-ui/react'
const Carousel = () => {
    let [current,setCurrent] = useState(0);

    const HeaderImages = [
      "https://folknet.in/wp-content/uploads/2021/04/Value-Banner.jpg",
      "https://folknet.in/wp-content/uploads/2018/04/Main-Slider.jpg",
      "https://folknet.in/wp-content/uploads/2018/04/Slide-2.jpg",
      "https://folknet.in/wp-content/uploads/2018/04/Slide-3-2.jpg",
      "https://folknet.in/wp-content/uploads/2018/04/Slide-4-2.jpg",
      "https://folknet.in/wp-content/uploads/2018/04/Slide-5-2.jpg",
      "https://folknet.in/wp-content/uploads/2018/04/Slide-1-2.jpg"
  
    ]
    useEffect(()=>{
       setTimeout(() => {
        slide()
       }, 3000);
    })
   
    const slide = () =>{
      setCurrent(current === HeaderImages.length -1 ? 0 : current+1)
    }
  
  return (
    <Box w="100%" h={{
        base: '20vh',
     sm:'29vh',
     md:'35vh',
     lg:'45vh',
     xl:'70vh'
   }}>
       <Box className='slider-container' w="100%" h="100%" position="relative">
            {HeaderImages.map((image,index)=>(
             <Box className={index === current ? 'slider-image slider-image-active' : 'slider-image'} key={index} position={'absolute'} w={'100%'} h='100%'  objectFit='cover'>
               <img  width='100%'  height="100%"  src={image} alt="" />
             </Box>
            ))}
       </Box>
   </Box>
  )
}

export default Carousel
