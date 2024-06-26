import { Box, Card, Input } from '@chakra-ui/react'
import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
const AdminTopNavbar = () => {
  return (
    <>
        <Box border={"2px solid transpreant"} >
            <Card height={"70px"}  bgColor={"#26293C"} >
                 <Box mt={"10px"} gap={"20px"} display={"flex"} alignItems={"center"} alignContent={"center"}>
                 <Box width={"80%"} border={"2px solid #080A27"}></Box>
                 <Box width={"20%"}  display={"flex"} alignItems={"center"} gap={"20px"}>
                    <Box><Input Icon={<IoSearch color='white'/>}/></Box>
                    <Box><FaRegUserCircle size={"30px"} color='white'/></Box>
                 </Box>
                 </Box>
            </Card>
        </Box>
    </>
  )
}

export default AdminTopNavbar