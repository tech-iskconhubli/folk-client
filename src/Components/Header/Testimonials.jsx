import {
   Avatar,
 Box,
 Card,
 CardBody,
 CardFooter,
 Container,
 Heading,
 SimpleGrid,
} from "@chakra-ui/react";
import { RiDoubleQuotesR } from "react-icons/ri";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import theme from "../../theme"
import { useTheme } from "@emotion/react";
gsap.registerPlugin(ScrollTrigger);


const Testimonials = () => {
   const theme = useTheme()

    // Card Container One Ref
    const cardContainerOne = useRef(null);
    const cardMatterOne = useRef(null);
    const cardAvatarOne = useRef(null);
    const cardQuoteOne = useRef(null);

    // Card Container Two Ref
    const cardContainerTwo = useRef(null);
    const cardMatterTwo = useRef(null);
    const cardAvatarTwo = useRef(null);
    const cardQuoteTwo = useRef(null);

    // Card Contianer Three Ref
    const cardContainerThree = useRef(null);
    const cardMatterThree = useRef(null);
    const cardAvatarThree = useRef(null);
    const cardQuoteThree = useRef(null);

//   Card Contianer Four Ref
    const cardContainerFour = useRef(null);
    const cardMatterFour = useRef(null);
    const cardAvatarFour = useRef(null);
    const cardQuoteFour = useRef(null);

  // Heading Animation
    const heading = useRef();

    // Animation for heading
    
      useGSAP(()=>{
         gsap.from(heading.current,{
            y:100,
            duration:0.8,
            opacity:0,
            scrollTrigger:{
                trigger:heading.current,
                start:'top 90%',
                end:'bottom center'
            }
         })
      })
    

    // Card Container One 
    useGSAP(()=>{
         const tl = gsap.timeline({
            scrollTrigger:{
                trigger:cardContainerOne.current,
                start:'top 90%',
                end:'bottom center',
            }
         });

         tl.from(cardContainerOne.current,{
            scale:0,
            opacity:0,
            duration:0.8
         })
         tl.from(cardAvatarOne.current,{
            scale:0,
            opacity:0,
            duration:0.5
         })
         tl.from(cardMatterOne.current.children,{
            y:100,
            opacity:0,
            stagger:0.2,
            duration:0.5
         })
         tl.from(cardQuoteOne.current,{
            y:-50,
            opacity:0,
            duration:0.5
         })
    },[])

    // Card Container Two
    useGSAP(()=>{
         const tl = gsap.timeline({
            scrollTrigger:{
                trigger:cardContainerTwo.current,
                start:'top 90%',
                end:'bottom center',
            }
         });

         tl.from(cardContainerTwo.current,{
            scale:0,
            opacity:0,
            duration:0.8
         })
         tl.from(cardAvatarTwo.current,{
            scale:0,
            opacity:0,
            duration:0.5
         })
         tl.from(cardMatterTwo.current.children,{
            y:100,
            opacity:0,
            stagger:0.2,
            duration:0.5
         })
         tl.from(cardQuoteTwo.current,{
            y:-50,
            opacity:0,
            duration:0.5
         })
    },[])

    // Card Container Three
    useGSAP(()=>{
         const tl = gsap.timeline({
            scrollTrigger:{
                trigger:cardContainerThree.current,
                start:'top 90%',
                end:'bottom center',
            }
         });

         tl.from(cardContainerThree.current,{
            scale:0,
            opacity:0,
            duration:0.8
         })
         tl.from(cardAvatarThree.current,{
            scale:0,
            opacity:0,
            duration:0.5
         })
         tl.from(cardMatterThree.current.children,{
            y:100,
            opacity:0,
            stagger:0.2,
            duration:0.5
         })
         tl.from(cardQuoteThree.current,{
            y:-50,
            opacity:0,
            duration:0.5
         })
    },[])

    // Card Container Four
    useGSAP(()=>{
         const tl = gsap.timeline({
            scrollTrigger:{
                trigger:cardContainerFour.current,
                start:'top 90%',
                end:'bottom center',
            }
         });

         tl.from(cardContainerFour.current,{
            scale:0,
            opacity:0,
            duration:0.8
         })
         tl.from(cardAvatarFour.current,{
            scale:0,
            opacity:0,
            duration:0.5
         })
         tl.from(cardMatterFour.current.children,{
            y:100,
            opacity:0,
            stagger:0.2,
            duration:0.5
         })
         tl.from(cardQuoteFour.current,{
            y:-50,
            opacity:0,
            duration:0.5
         })
    },[])


  return (
    <Box>
      <Container
        w={["100%", "100%", "90%", "90%"]}
        maxW="1500px"
        marginX="auto"
        my="1.5rem"
        padding="2rem"
      >
        {/* Heading */}
        <Box py={["10px", "20px", "30px"]} textAlign={"center"}>
          <Heading
          ref={heading}
            fontSize={["2rem", "2.5rem", "3rem", "4rem"]}
            mb={["2.2rem", "2.2rem", "4rem"]}
            display={"inline-block"}
            fontWeight="900"
            color={theme.colors.col.secondary}
          >
            FROM OUR PARTICIPANTS
          </Heading>

          {/* Testimonials */}

          <SimpleGrid columns={{base:'1', sm:'1',md:'1',lg:'2',xl:'2'}} spacing={{base:'10', sm:'10',md:'10',lg:'10',xl:'20'}}>

            

            {/* Testimonials Card One */}
              <Card ref={cardContainerOne} borderRadius={'30px'}  py={{base:'1.5rem', sm:'1rem',md:'1.5rem',lg:'1rem',xl:'1rem'}} px={{base:'1.5rem', sm:'1rem',md:'1.8rem',lg:'1rem'}} position={'relative'} boxShadow = "3px 3px 10px 1px rgba(0,0,0,0.10)">
                
                {/* Card Quote */}
                <Box ref={cardQuoteOne} fontSize={{base:'2rem', sm:'2.5rem',md:'3rem'}} position={'absolute'} top={{base:'-5%',sm:'-6%',md:'-12%',lg:'-9%'}} right={{base:'4%',sm:'2%',md:'2%'}}>
                <RiDoubleQuotesR />
                </Box>
               
                {/* Box Container */}
                <Box display={{base:'flex', sm:'flex',md:'flex',lg:'flex'}} flexDirection={{base:'column-reverse', sm:'column-reverse',md:'row-reverse'}} alignItems={{base:'center', sm:'center',md:'flex-start'}} justifyContent={{base:'center', sm:'center',md:'flex-start'}} gap={'0.8rem'}>

                {/* Card Matter */}
                <Box ref={cardMatterOne}>
                <CardBody textAlign={'left'} px={{base:'0', sm:'2.5rem', lg:'3.9rem',xl:'5rem'}} mt={{sm:'0',md:'0',lg:'0.9rem',xl:'1rem'}} fontWeight={'400'} fontSize={{base:'0.85rem', sm:'1rem',lg:'0.9rem',xl:'1rem'}}>
               
                 I found new ways to do the same things I earlier would mess
                  up so easily. Now I have become super efficient. I recommend
                  this to everyone.
                </CardBody>
                 
                 {/* Card Footer */}
                <CardFooter mt={{base:'0.5rem',sm:'0'}} p={{ lg:'0',xl:'1rem'}}  display={'flex'} alignItems={'flex-end'} flexDirection={'column'} gap={'.3rem'}>
                <Box fontWeight={'bold'} fontSize={{base:'0.7rem', sm:'0.9rem',md:'0.9rem',  lg:'0.8rem',xl:'0.9rem'}} color={theme.colors.col.secondary}>Josheph Chandy MBBS</Box>
                <Box fontSize={{base:'0.7rem', sm:'0.9rem', md:'0.9rem',  lg:'0.7rem',xl:'0.8rem'}} fontWeight={450}>St.John's Medical
                College</Box>
                </CardFooter>
                </Box>
                
                {/* Card Avatar */}
                <Box ref={cardAvatarOne} mt={{sm:'0.8rem',md:'0.8rem',lg:'0'}} position={{base:'none', sm:'none',md:'none',lg:'absolute'}} left={{lg:'-8%', xl:'-10%'}} top={{lg:'30%', xl:'25%'}}
                 bg={{sm:'white',md:"white",lg:'white',xl:'white'}} borderRadius={'50%'} 
                 boxShadow = "3px 3px 10px 1px rgba(0,0,0,0.10)"
                >
                    <Avatar size={{base:'xl', sm:'xl',md:'xl',lg:'xl',xl:'2xl'}} src="https://folknet.in/wp-content/uploads/2018/04/Test-1.png" />
                </Box>
                </Box>
              </Card>
             
               {/* Testimonials Card Two */}
               <Card ref={cardContainerTwo} borderRadius={'30px'}  py={{base:'1.5rem', sm:'1rem',md:'1.5rem',lg:'1rem',xl:'1rem'}} px={{base:'1.5rem', sm:'1rem',md:'1.8rem',lg:'1rem'}} position={'relative'} boxShadow = "3px 3px 10px 1px rgba(0,0,0,0.10)">
                
                {/* Card Quote */}
               <Box ref={cardQuoteTwo} fontSize={{base:'2rem', sm:'2.5rem',md:'3rem'}} position={'absolute'} top={{base:'-5%',sm:'-6%',md:'-10%', lg:'-9%'}} right={{base:'4%',sm:'2%',md:'1%'}}>
                <RiDoubleQuotesR />
                </Box>
                
                 {/* Box Container */}
                <Box display={{base:'flex', sm:'flex',md:'flex',lg:'flex'}} flexDirection={{base:'column-reverse', sm:'column-reverse',md:'row-reverse'}} alignItems={{base:'center', sm:'center',md:'flex-start'}} justifyContent={{base:'center', sm:'center',md:'flex-start'}} gap={'0.8rem'}>

                   {/* Card Matter */}
                <Box ref={cardMatterTwo}>
                <CardBody textAlign={{base:'left',sm:'left'}} px={{base:'0', sm:'2.5rem', lg:'4rem',xl:'5rem'}} mt={{sm:'0',md:'0',lg:'0.9rem',xl:'1rem'}} fontWeight={'400'} fontSize={{base:'0.8rem', sm:'1rem',lg:'.9rem',xl:'1rem'}}>
                These programs have changed my thought process all together. Now I can take very effective life transforming decisions which has helped me and my business reach new heights.
                </CardBody>

                 {/* Card Footer */}
                <CardFooter mt={{base:'0.5rem',sm:'0'}} p={{lg:'0',xl:'1rem'}}  display={'flex'} alignItems={'flex-end'} flexDirection={'column'} gap={'.3rem'}>
                <Box fontWeight={'bold'} fontSize={{base:'0.7rem', sm:'0.9rem',md:'0.9rem',  lg:'0.8rem',xl:'0.9rem'}} color={theme.colors.col.secondary}>Ayush Kumar Singh</Box>
                <Box fontSize={{base:'0.7rem', sm:'0.9rem', md:'0.9rem',  lg:'0.7rem',xl:'0.8rem'}} fontWeight={450}>Civil Engineer</Box>
                </CardFooter>
                </Box>
                
                {/* Card Avatar */}
                <Box ref={cardAvatarTwo} mt={{sm:'0.8rem',md:'0.8rem',lg:'0'}} position={{base:'none', sm:'none',md:'none',lg:'absolute'}} left={{lg:'-8%', xl:'-10%'}} top={{lg:'30%', xl:'25%'}}
                 bg={{sm:'white',md:"white",lg:'white',xl:'white'}} borderRadius={'50%'} 
                 boxShadow = "3px 3px 10px 1px rgba(0,0,0,0.10)"
                >
                    <Avatar size={{base:'xl', sm:'xl',md:'xl',lg:'xl',xl:'2xl'}} src="https://folknet.in/wp-content/uploads/2018/04/Test-2.png" />
                </Box>
                </Box>
              </Card>
             

             
               {/* Testimonials Card Three */}
               <Card ref={cardContainerThree} borderRadius={'30px'}  py={{base:'1.5rem', sm:'1rem',md:'1.5rem',lg:'1rem',xl:'1rem'}} px={{base:'1.5rem', sm:'1rem',md:'1.8rem',lg:'1rem'}} position={'relative'} boxShadow = "3px 3px 10px 1px rgba(0,0,0,0.10)">
                
                 {/* Card Quote */}
               <Box ref={cardQuoteThree} fontSize={{base:'2rem', sm:'2.5rem',md:'3rem'}} position={'absolute'} top={{base:'-5%',sm:'-6%',md:'-10%', lg:'-10%'}} right={{base:'4%',sm:'2%',md:'1%'}}>
                <RiDoubleQuotesR />
                </Box>

                 {/* Box Container */}
                <Box display={{base:'flex', sm:'flex',md:'flex',lg:'flex'}} flexDirection={{base:'column-reverse', sm:'column-reverse',md:'row-reverse'}} alignItems={{base:'center', sm:'center',md:'flex-start'}} justifyContent={{base:'center', sm:'center',md:'flex-start'}} gap={'0.8rem'}>

                 {/* Card Matter */}
                <Box ref={cardMatterThree}>
                <CardBody textAlign={{base:'left',sm:'left'}} px={{base:'0.5rem', sm:'2.5rem', lg:'4rem',xl:'5rem'}} mt={{sm:'0',md:'0',lg:'0.9rem',xl:'1rem'}} fontWeight={'400'} fontSize={{base:'0.8rem', sm:'1rem',lg:'.9rem',xl:'1rem'}}>
                I was extremely enchanted by the divine atmosphere and energetic workshop. I will always reminisce the blissful time I’d spent here.
                </CardBody>


                 {/* Card Footer */}
                <CardFooter mt={{base:'0.5rem',sm:'0'}}p={{lg:'0',xl:'1rem'}}   display={'flex'} alignItems={'flex-end'} flexDirection={'column'} gap={'.3rem'}>
                <Box fontWeight={'bold'} fontSize={{base:'0.7rem', sm:'0.9rem',md:'0.9rem',  lg:'0.8rem',xl:'0.9rem'}} color={theme.colors.col.secondary}>Ajatashatru Shrivastav</Box>
                <Box fontSize={{base:'0.7rem', sm:'0.9rem', md:'0.9rem',  lg:'0.7rem',xl:'0.8rem'}} fontWeight={450}>Decision Scientist , Mu Sigma</Box>
                </CardFooter>
                </Box>
                

                {/* Card Avatar */}
                <Box ref={cardAvatarThree} mt={{sm:'0.8rem',md:'0.8rem',lg:'0'}} position={{base:'none', sm:'none',md:'none',lg:'absolute'}} left={{lg:'-8%', xl:'-10%'}} top={{lg:'30%', xl:'25%'}}
                 bg={{sm:'white',md:"white",lg:'white',xl:'white'}} borderRadius={'50%'} 
                 boxShadow = "3px 3px 10px 1px rgba(0,0,0,0.10)"
                >
                    <Avatar size={{base:'xl', sm:'xl',md:'xl',lg:'xl',xl:'2xl'}} src="https://folknet.in/wp-content/uploads/2018/04/Test-3.png" />
                </Box>
                </Box>
              </Card>
              
              {/* Testimonials Card Four */}
              <Card ref={cardContainerFour} borderRadius={'30px'}  py={{base:'1.5rem', sm:'1rem',md:'1.5rem',lg:'1rem',xl:'1rem'}} px={{base:'1.5rem', sm:'1rem',md:'1.8rem',lg:'1rem'}} position={'relative'} boxShadow = "3px 3px 10px 1px rgba(0,0,0,0.10)">
                
                {/* Card Quote */}
              <Box ref={cardQuoteFour} fontSize={{base:'2rem', sm:'2.5rem',md:'3rem'}} position={'absolute'} top={{base:'-5%',sm:'-6%',md:'-12%', lg:'-9%'}} right={{base:'4%',sm:'2%',md:'1%'}}>
                <RiDoubleQuotesR />
                </Box>
                 

                  {/* Box Container */}
                <Box display={{base:'flex', sm:'flex',md:'flex',lg:'flex'}} flexDirection={{base:'column-reverse', sm:'column-reverse',md:'row-reverse'}} alignItems={{base:'center', sm:'center',md:'flex-start'}} justifyContent={{base:'center', sm:'center',md:'flex-start'}} gap={'0.8rem'}>

                 {/* Card Matter */}
                <Box ref={cardMatterFour}>
                <CardBody textAlign={{base:'left',sm:'left'}} px={{base:'0.5rem', sm:'2.5rem', lg:'4rem',xl:'5rem'}} mt={{sm:'0',md:'0',lg:'0.9rem',xl:'1rem'}} fontWeight={'400'} fontSize={{base:'0.8rem', sm:'1rem',lg:'.9rem',xl:'1rem'}}>
              
 This program has helped me overcome many inhibitions I’ve been facing. I am so happy that I can stretch beyond my limits at ease.
                </CardBody>
                
                 {/* Card Footer */}
                <CardFooter mt={{base:'0.5rem',sm:'0'}}p={{lg:'0',xl:'1rem'}}   display={'flex'} alignItems={'flex-end'} flexDirection={'column'} gap={'.3rem'}>
                <Box fontWeight={'bold'} fontSize={{base:'0.7rem', sm:'0.9rem',md:'0.9rem',  lg:'0.8rem',xl:'0.9rem'}} color={theme.colors.col.secondary}>Sagar Patil</Box>
                <Box fontSize={{base:'0.7rem', sm:'0.9rem', md:'0.9rem',  lg:'0.7rem',xl:'0.8rem'}} fontWeight={450}>Mechanical Engineer, RVCEe</Box>
                </CardFooter>
                </Box>
                
                {/* Card Avatar */}
                <Box ref={cardAvatarFour} mt={{sm:'0.8rem',md:'0.8rem',lg:'0'}} position={{base:'none', sm:'none',md:'none',lg:'absolute'}} left={{lg:'-8%', xl:'-10%'}} top={{lg:'30%', xl:'25%'}}
                 bg={{sm:'white',md:"white",lg:'white',xl:'white'}} borderRadius={'50%'} 
                 boxShadow = "3px 3px 10px 1px rgba(0,0,0,0.10)"
                >
                    <Avatar size={{base:'xl', sm:'xl',md:'xl',lg:'xl',xl:'2xl'}} src="https://folknet.in/wp-content/uploads/2018/04/Test-4.png" />
                </Box>
                </Box>
              </Card>

            
          </SimpleGrid>
          
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;



