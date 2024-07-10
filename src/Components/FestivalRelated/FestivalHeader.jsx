import React, { useState, useEffect, useRef } from 'react';
import { Box, Flex, Image, Text, IconButton, Button } from '@chakra-ui/react';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const carouselData = [
  {
    imageUrl: 'https://i.pinimg.com/736x/5f/74/d8/5f74d8f18dab1055b8d3aa93088369b7.jpg',
    heading :'"Puri Jagannath Festival"',
    text: '"The Puri Jagannath Festival, or Rath Yatra, celebrates the annual journey of Lord Jagannath, Balabhadra, and Subhadra from the Jagannath Temple to the Gundicha Temple in Puri, Odisha. This festival is marked by a grand procession of ornate chariots, attracting millions of devotees and showcasing the vibrant cultural heritage of India."',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/e4/6c/d5/e46cd57ffae789687fa5fe4bd3b87307.jpg',
    heading :'"Radha Ashtami"',
    text: '"Radha Ashtami is a Hindu festival dedicated to Radha, the divine consort of Lord Krishna. It is celebrated on the eighth day of the bright fortnight of the Bhadrapada month. Devotees observe this day with prayers and devotional rituals to honor Radhas love and devotion towards Krishna."',
  },
  {
    imageUrl: 'https://ideogram.ai/assets/progressive-image/balanced/response/S32QXqPJQJ-Z-C1P0Wt5pA',
    heading :'"Sri Ram Navami"',
    text: '"Sri Ram Navami celebrates the birth of Lord Rama, the seventh avatar of Lord Vishnu. It is observed on the ninth day of the Chaitra month in the Hindu calendar. Devotees celebrate with prayers, devotional songs, and readings of the Ramayana, highlighting the virtues of righteousness and devotion embodied by Lord Rama."',
  },
  {
    imageUrl: 'https://ideogram.ai/assets/image/lossless/response/QTVyBLZnRh-mxc49oDcwOw',
    heading :'"Janmashtami"',
    text: '"Janmashtami celebrates the birth of Lord Krishna, the eighth avatar of Lord Vishnu. It is observed with fasting, devotional singing, and festive celebrations that highlight Krishnas life and teachings, emphasizing love, compassion, and spiritual wisdom."',
  },
  {
    imageUrl: 'https://ideogram.ai/assets/progressive-image/balanced/response/G6sjJTQaTYert1coKkalFw',
    heading :'"Jhulan Yatra"',
    text: '"Jhulan Yatra, or the Swing Festival, celebrates the divine love of Radha and Krishna. Devotees decorate swings with flowers and leaves, gently rocking the idols of Radha and Krishna amidst melodious bhajans, symbolizing their eternal bond and devotion."',
  },

];

const HeaderCarousel = () => {
  
    const imageRef = useRef(null);
    const matterRef = useRef(null);
    const iconOne = useRef(null);
    const iconTwo = useRef(null);


   


  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>  (prevSlide === 0 ? carouselData.length - 1 : prevSlide - 1));
  };

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.from(imageRef.current,{
       scale:0.8,
       opacity:0,
       duration:0.5,
    });

    tl.from(matterRef.current,{
       x:-200,
       opacity:0,
       duration:0.5
    });

    tl.from(matterRef.current.children,{
       x:-100,
       duration:0.5,
       stagger:0.3,
       opacity:0
    });


    return ()=>{
         tl.kill();
    }

},[])


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="relative" height="98vh" overflow="hidden" display={'flex'} alignItems={['center','center','flex-start']} justifyItems={'center'} bgColor={'rgb(245, 247, 248)'} p={['1rem']} mt={['2rem']}>

    <Box maxW={'1500px'}  w={'100%'} h={['','','100%']} position={'relative'} mx={'auto'} display={'flex'} alignItems={['center','center','flex-start','center']} py={['2rem']} flexDirection={['column','column','column','row']}>

      <Flex
        w={['100%','100%','100%','50%']}
        alignItems={'center'}
        pointerEvents="none"
        
      >
        <Box ref={imageRef} w={['100%']} h={['300px','450px','500px','500px','650px']} pl={['','','','4rem','5rem']}>
        <Image
          src={carouselData[currentSlide].imageUrl}
          alt={`Slide ${currentSlide + 1}`}
          height="100%"
          width="100%"
          objectFit="cover"
          objectPosition={'center'}
          zIndex="-1"
        />
        </Box>

      </Flex>


      <Flex
       ref={matterRef}
       w={['100%','100%','90%','50%']}
      
        position={['','','absolute']}
        top={['','','55%','auto']}
        right={['','','5%','2%','5%']}
        padding="0 1rem"
        pointerEvents="none"
        bg={'rgb(241,165,64,0.9)'}
        flexDirection={['column']}
        p={['1rem','1rem','2rem','2rem']}
        gap={['1rem','1rem','1rem','1rem','1.5rem']}
      >
        <Box>
          <Text fontSize={['1.5rem','1.9rem','1.9rem','1.9rem']} fontWeight="bold" color="white">
            {carouselData[currentSlide].heading}
          </Text>
        </Box>
        <Box textAlign="left">
        <Text fontSize={['0.9rem','1rem','1rem','1rem']} lineHeight={['1.9rem','2rem']}  color="white">
            {carouselData[currentSlide].text}
          </Text>
        </Box>

        <Box>
            <Button  variant={'outline'} color={'white'}>View More</Button>
        </Box>
      </Flex>



      <IconButton
        display={['none','none','flex']}
        ref={iconOne}
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        left="1rem"
        icon={<FaChevronLeft />}
        onClick={prevSlide}
        aria-label="Previous Slide"
        variant="outline"
       colorScheme="orange"
      />
      <IconButton
       display={['none','none','flex']}
        ref={iconTwo}
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        right="1rem"
        icon={<FaChevronRight />}
        onClick={nextSlide}
        aria-label="Next Slide"
        variant="outline"
        colorScheme="orange"
      />
    </Box>
    </Box>
  );
};

export default HeaderCarousel;
