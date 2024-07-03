import React, { useState } from 'react'
import { Box, Input, FormLabel, Card, Stack, Alert, AlertIcon, Textarea } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postAdminGalleryFormData } from '../../Redux/app/action';
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar';
import GalleryBarChart from '../AdminCharts/GalleryCharts/GalleryBarChart';
import GalleryLineChart from '../AdminCharts/GalleryCharts/GalleryLineBar';

const AdminGalleryForm = () => {
  const init = {
    title: "",
    description: "",
    img:"",
};

const dispatch = useDispatch();
const [formData, setFormData] = useState(init);
const [successAlert,setSuccessAlert] = useState(false);
const [refresh ,setRefresh] = useState(false);
const navigate = useNavigate()
const handleChange = (e) => {
    const { name, value, type, files } = e.target;
  
    setFormData(prev=>({
        ...prev,
        [name]: type === "file" ? files[0] : value
    }))
};



const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAdminGalleryFormData(formData))
    .then(res=>{
        if(res?.payload?.message === 'post success'){
            setSuccessAlert(!successAlert)
            setRefresh(prev=>!prev);
         setTimeout(() => {
          setRefresh ? setSuccessAlert(false):setSuccessAlert(true)
         }, 500);
         
        //  setTimeout(() => {
        //     navigate('/admin/blogs/data')
        //  }, 1000);
      }
    console.log(res)
    })
  };


return (
    <>
        <Box position={"fixed"} top={0} width={"82%"}><AdminTopNavbar /></Box>
        {
        successAlert && <Alert status='success'><AlertIcon />Data uploaded successfully</Alert>
    }

        <Box mt={"70px"} display="flex" justifyContent={"space-between"} boxSizing='border-box' padding={"20px"} gap={"20px"}>
            <Box borderRadius={"12px"}  height={"350px"} width={"50%"}><Card><GalleryBarChart/></Card></Box>
            <Box borderRadius={"12px"}  height={"350px"} width={"50%"}><Card><GalleryLineChart/></Card></Box>
        </Box>
        <Box width={"97%"} margin={"auto"} mt={"10px"} bgColor={"white"} border={"2px solid transparent"} boxSizing='border-box' padding={"50px"} borderRadius={"12px"}>
            <Box bgColor={"white"} color={"black"}>
                <form onSubmit={handleSubmit} action="/stats" enctype="multipart/form-data">
                    <Stack gap={"20px"}>

                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                            <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Gallery Title</FormLabel></Box>
                            <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' name={"title"} value={formData.title} onChange={handleChange} placeholder='please gallery title' /></Box>
                        </Box>

                    
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                            <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Description</FormLabel></Box>
                            <Box width={"88%"}><Textarea borderColor={"#2B3553"} type='textarea' name={"description"} value={formData.description} onChange={handleChange} placeholder='please enter Description' /></Box>
                        </Box>

                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                            <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Upload image</FormLabel></Box>
                            <Box width={"88%"}><Input borderColor={"#2B3553"} type='file' name={"img"} onChange={handleChange} placeholder='upload image' /></Box>
                        </Box>

                        <Input bgColor={"white"} color={"black"} type='submit' />
                    </Stack>
                </form>
            </Box>
        </Box>
    </>
);
};

export default AdminGalleryForm