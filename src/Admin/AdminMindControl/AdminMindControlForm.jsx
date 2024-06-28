import React, { useState } from 'react'
import {Box, Input,FormLabel,Card,Stack,} from "@chakra-ui/react"
import { useDispatch } from 'react-redux'
import { postAdminMindControlFormData } from '../../Redux/app/action'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
const AdminMindControlForm = () => {
    const init ={
        date:"",
        time:"",
        duration:"",
        location:"",
        description:"",
        price:""
    }

    const dispatch = useDispatch()

    const [formData,setFormData] = useState(init);

    const handleChange =(e)=>{
            const {name,value} = e.target;

            const payload = {
                  ...formData,
                  [name]:value
            }

            setFormData(payload);
    }
    

    const handleSubmit =(e)=>{
            e.preventDefault();
          dispatch(postAdminMindControlFormData(formData))
          .then(res=>{
            // console.log(res,"res")
          })
    }

  return (
    <>
        <AdminTopNavbar/>
        <Box  display="flex" justifyContent={"space-between"} boxSizing='border-box' padding={"20px"} gap={"20px"}>
            <Box borderRadius={"12px"} bgColor={"#eeeeee"} height={"300px"} width={"50%"}><Card></Card></Box>
            <Box borderRadius={"12px"} bgColor={"#eeeeee"} height={"300px"} width={"50%"}><Card></Card></Box>
        </Box>
        <Box  width={"97%"}  margin={"auto"} mt={"10px"} bgColor={"#eeeeee"} border={"2px solid transprent"} boxSizing='border-box' padding={"50px"} borderRadius={"12px"}>
            < >
               <Box  bgColor={"#eeeeee"}  color={"black"}>
                  <form onSubmit={handleSubmit} >
                   <Stack gap={"20px"} >
                        <Box   display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Date</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='date' name={"date"} value={formData.date} onChange={handleChange}   placeholder='please enter Date'/></Box>
                        </Box>


                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Time</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='number' name={"time"} value={formData.time} onChange={handleChange}  placeholder='please enter Time'/></Box>
                        </Box>


                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Duration</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='number' name={"duration"} value={formData.duration} onChange={handleChange}   placeholder='please enter Duration'/></Box>
                        </Box>

                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Location</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='text' name={"location"} value={formData.location} onChange={handleChange}   placeholder='please enter Location'/></Box>
                        </Box>


                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Description</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='text' name={"description"} value={formData.description} onChange={handleChange}   placeholder='please enter Description'/></Box>
                        </Box>

                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Price</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='number' name={"price"} value={formData.price} onChange={handleChange}   placeholder='please enter Price'/></Box>
                        </Box>

                        <Input bgColor={"white"} color={"black"} type='submit'/>

                   </Stack>
                    
                  </form>
               </Box>
            </>
        </Box>
    </>
  )

}

export default AdminMindControlForm