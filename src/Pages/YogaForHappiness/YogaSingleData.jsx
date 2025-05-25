
import { Box, Heading,Text } from '@chakra-ui/layout'
import React from 'react'
import theme from "../../theme"
import { Button } from '@chakra-ui/button'
import fether from "../../Assets/bgsingle.png"
const YogaSingeData = () => {
    console.log(theme.colors)
  return (
    <>
    <Box bgImage={fether} bgSize={"cover"} bgRepeat={"no-repeat"}  height={"100vh"}>

    <Box  border={"2px solid transparent"} width={["","","","","70%"]} margin={"auto"}  >
           <Box border={"2px solid transparent"} display={["","","","","flex"]} gap={"20px"} mt={"150px"}> 
           <Box border={"2px solid transparent"} width={["100%","","","","40%"]} borderRadius={"12px"}>
            <img style={{width:"100%", height:"100%", objectFit:'cover', borderRadius:"12px"}}  src="https://as2.ftcdn.net/v2/jpg/06/25/57/31/1000_F_625573172_BCyCnrXQd6c0kN96reWosu2wB86qkH3P.jpg" alt="" />
           </Box>
           <Box bgColor={"rgba(255, 255, 255, 0.6)"} borderRadius={"12px"} boxSizing='border-box' p={["","","","","20px"]} fontFamily={"theme.fonts.forms"} border={"2px solid transparent"} width={["100%","","","","60%"]}>
                <Heading  color={theme.colors.col.secondary} mt={"20px"} fontSize={["30px","","","","50px"]} fontWeight={"500"} mb={"40px"} fontFamily={"theme.fonts.forms"}>Jagannadh Radha Yatra</Heading>
                <Text fontSize={"17px"} fontWeight={"400"} mb={"20px"}  fontFamily={"theme.fonts.forms"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam dolore itaque quaerat autem soluta. Dolorem pariatur quia nam provident sequi.</Text>
                <Text fontSize={"17px"} fontWeight={"400"} mb={"20px"} fontFamily={"theme.fonts.forms"}><span style={{fontSize:"21px", fontWeight:"600", color:theme.colors.col.secondary }}>Timings :</span> 20-7-2024 <span>To</span> 24-07-2024</Text>
                <Text fontSize={"17px"} fontWeight={"400"} mb={"20px"} ml={"20px"} fontFamily={"theme.fonts.forms"}>
                    <ul>
                        <li>Morning Something</li>
                        <li>Afternoon Food</li>
                        <li>Evening Snacks</li>
                        <li>Night Dinner</li>
                    </ul>
                </Text>
                <Text fontSize={"17px"} fontWeight={"400"} mb={"40px"} fontFamily={"theme.fonts.forms"}> <span style={{fontSize:"21px", fontWeight:"500", color:theme.colors.col.secondary}}>Location :</span>Railway new colony, visakhapatnam , akkayyapalem, near sai baba temple</Text>
                <Button textAlign={"center"} fontSize={"20px"} bgColor={theme.colors.col.secondary} color={"white"} p={"30px 80px"}>Register Here</Button>
           </Box>
         </Box> 
         </Box> 
    </Box>
        
    </>
  )
}

export default YogaSingeData