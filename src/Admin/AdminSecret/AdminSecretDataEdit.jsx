import React, { useEffect, useState } from 'react'
import { Box, Card ,Input,FormLabel,Stack, Alert, AlertIcon} from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar';
import { getSingleAdminSecretFormData, updateAdminSecretFormData } from '../../Redux/app/action';

const AdminSecretDataEdit = () => {
  const init ={
    date:"",
    time:"",
    duration:"",
    location:"",
    description:"",
    price:""
}
  const [formData ,setFormData] = useState(init);
  const [updatedSuccess,setUpdatedSuccess] = useState(false);
  const {id } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getSingleAdminSecretFormData(id))
    .then(res=>{
      console.log(res.payload.data)
       setFormData(res?.payload?.data)
    })
  },[dispatch,id])

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("formdata", formData);
  dispatch(updateAdminSecretFormData(id,formData))
  .then(res=>{
    if(res?.payload?.message === "updated success"){
      setUpdatedSuccess(!updatedSuccess);
     setTimeout(() => {
      navigate("/admin/secret/data")
     }, 1000);
    }
  })
  }

 // console.log("formData", formData)

  return (
    <>
      <AdminTopNavbar/>
      {
      updatedSuccess &&  <Alert status='success'><AlertIcon />Data updated successfully!</Alert>
      }
      <Box bg="#F5F7F8" border={"2px solid transpreant"} boxSizing='border-box' p={"150px 100px"}>
        <Card>
            <Box>
             
        <Box  width={"97%"}  margin={"auto"} mt={"10px"} bgColor={"white"} border={"2px solid transprent"} boxSizing='border-box' padding={"50px"} borderRadius={"12px"}>
            < >
               <Box  bgColor={"white"}  color={"black"}>
                  <form onSubmit={handleSubmit} >
                   <Stack gap={"20px"} >
                        <Box   display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Date</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='date' name={"date"} value={formData.date } onChange={handleChange}   placeholder='please enter Date'/></Box>
                        </Box>


                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Time</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='number' name={"time"} value={formData.time  } onChange={handleChange}  placeholder='please enter Time'/></Box>
                        </Box>


                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Duration</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='number' name={"duration"} value={formData.duration } onChange={handleChange}   placeholder='please enter Duration'/></Box>
                        </Box>

                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Location</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='text' name={"location"} value={formData.location} onChange={handleChange}   placeholder='please enter Location'/></Box>
                        </Box>


                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Description</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='text' name={"description"} value={formData.description } onChange={handleChange}   placeholder='please enter Description'/></Box>
                        </Box>

                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"12%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Price</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='number' name={"price"} value={formData.price } onChange={handleChange}   placeholder='please enter Price'/></Box>
                        </Box>

                        <Input bgColor={"white"} color={"black"} type='submit'/>

                   </Stack>
                    
                  </form>
               </Box>
            </>
        </Box>
            </Box>
        </Card>
      </Box>
    
    </>
  )
}

export default AdminSecretDataEdit