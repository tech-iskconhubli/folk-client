
import React, { useEffect, useState } from 'react'
import { Box} from '@chakra-ui/react'
import HeaderImageOne from '../../Assets/HomePageImages/HeaderImages/Header-Image-One.jpg';
import HeaderImageTwo from '../../Assets/HomePageImages/HeaderImages/Header-Image-Two.jpg';
import HeaderImageThree from '../../Assets/HomePageImages/HeaderImages/Header-Image-Three.jpg';
import HeaderImageFour from '../../Assets/HomePageImages/HeaderImages/Header-Image-Four.jpg';
import HeaderImageFive from '../../Assets/HomePageImages/HeaderImages/Header-Image-Five.jpg';
import HeaderImageSix from '../../Assets/HomePageImages/HeaderImages/Header-Image-Six.jpg';
import HeaderImageSeven from '../../Assets/HomePageImages/HeaderImages/Header-Image-Seven.jpg';


const Carousel = () => {
    let [current,setCurrent] = useState(0);

    const HeaderImages = [
      HeaderImageOne,
      HeaderImageTwo,
      HeaderImageThree,
      HeaderImageFour,
      HeaderImageFive,
      HeaderImageSix,
      HeaderImageSeven
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
     xl:'75vh'
   }}  mt={['6rem']} >
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
