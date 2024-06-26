import React, { useState } from 'react'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
import { Box, Button, Card, FormLabel, Input, Stack } from '@chakra-ui/react'

const AdminYogaForm = () => {
    const init ={
        date:"",
        time:"",
        duration:"",
        location:"",
        description:"",
        price:""
    }


    const [formData,setFormData] = useState(init);

  return (
    <>
        <AdminTopNavbar/>
        <Box display="flex" justifyContent={"space-between"} boxSizing='border-box' padding={"20px"} gap={"20px"}>
            <Box borderRadius={"12px"} bgColor={"#26293C"} height={"300px"} width={"50%"}><Card></Card></Box>
            <Box borderRadius={"12px"} bgColor={"#26293C"} height={"300px"} width={"50%"}><Card></Card></Box>
        </Box>
        <Box  width={"97%"}  margin={"auto"} mt={"10px"} bgColor={"#26293C"} border={"2px solid transprent"} boxSizing='border-box' padding={"50px"} borderRadius={"12px"}>
            <Card>
               <Box  bgColor={"#26293C"}  color={"white"}>
                  <form>
                   <Stack gap={"20px"}>
                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"300"} fontFamily={"body"}>Enter Date</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} placeholder='please enter Date'/></Box>
                        </Box>


                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"300"} fontFamily={"body"}>Enter Time</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"}placeholder='please enter Time'/></Box>
                        </Box>


                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"300"} fontFamily={"body"}>Enter Duration</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} placeholder='please enter Duration'/></Box>
                        </Box>

                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"300"} fontFamily={"body"}>Enter Location</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} placeholder='please enter Location'/></Box>
                        </Box>


                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"300"} fontFamily={"body"}>Enter Description</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} placeholder='please enter Description'/></Box>
                        </Box>

                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"300"} fontFamily={"body"}>Enter Price</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} placeholder='please enter Price'/></Box>
                        </Box>

                        <Button bgColor={"#582CFF"} color={"white"}>Submit</Button>

                   </Stack>
                    
                  </form>
               </Box>
            </Card>
        </Box>
    </>
  )
}

export default AdminYogaForm