import React, { useEffect, useState } from 'react'
import {Box, Input,FormLabel,Textarea,Card,Stack, Alert, AlertIcon,} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux'
import { postAdminMindControlFormData } from '../../Redux/app/action'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
import { useNavigate } from 'react-router-dom'
import ArtOfMindBarChart from '../AdminCharts/ArtOfMindCharts/ArtOfMindBarChart'
import ArtOFMindLineChart from '../AdminCharts/ArtOfMindCharts/ArtOfMindLineBar'
import KrishnaSpinner from '../Spinner/KrishnaSpinner'
const AdminMindControlForm = () => {
      const init = {
            date: "",
            time: "",
            duration: "",
            location: "",
            description: "",
            price: ""
        };
    
        const dispatch = useDispatch();
        const loading = useSelector(state => state.AppReducer.isLoading);
        const [formData, setFormData] = useState(init);
        const [successAlert, setSuccessAlert] = useState(false);
        const [refresh, setRefresh] = useState(false);
        const [errors, setErrors] = useState(init);
        const navigate = useNavigate();
    
        const handleChange = (e) => {
            const { name, value } = e.target;
    
            const payload = {
                ...formData,
                [name]: value
            };
    
            setFormData(payload);
        };
    
        useEffect(() => {}, [refresh]);
    
        const handleSubmit = (e) => {
            const newErrors = {};
    
            if (!formData.date) {
                newErrors.date = "Date required";
            }
    
            if (!formData.time) {
                newErrors.time = "Time required";
            }
    
            if (!formData.duration) {
                newErrors.duration = "Duration required";
            }
    
            if (!formData.location) {
                newErrors.location = "Location required";
            }
    
            if (!formData.description) {
                newErrors.description = "Description required";
            }
    
            if (!formData.price) {
                newErrors.price = "Price required";
            }
    
            setErrors(newErrors);
    
            e.preventDefault();
            if (Object.keys(newErrors).length === 0) {
                dispatch(postAdminMindControlFormData(formData))
                    .then(res => {
                        if (res?.payload?.message === 'post success') {
                            setSuccessAlert(!successAlert);
                            setRefresh(prev => !prev);
                            setSuccessAlert(!successAlert);
                            setTimeout(() => {
                                setSuccessAlert(false);
                            }, 500);
    
                            setTimeout(() => {
                                navigate('/admin/yoga/data');
                            }, 1000);
                        }
                    });
            }
        };
    
        return (
            <>
                <AdminTopNavbar />
    
                {loading && <KrishnaSpinner />}
    
                <Box display="flex" justifyContent={"space-between"} boxSizing='border-box' padding={"20px"} gap={"20px"}>
                    <Box borderRadius={"12px"} height={"350px"} width={"50%"}><Card> <ArtOfMindBarChart /></Card></Box>
                    <Box borderRadius={"12px"} height={"350px"} width={"50%"}><Card> <ArtOFMindLineChart /></Card></Box>
                </Box>
                <Box width={"97%"} margin={"auto"} mt={"10px"} bgColor={"white"} border={"2px solid transprent"} boxSizing='border-box' padding={"50px"} borderRadius={"12px"}>
                    <>
                        <Box bgColor={"white"} color={"black"}>
                            <form onSubmit={handleSubmit}>
                                {successAlert && <Alert status='success'><AlertIcon />Data uploaded successfully</Alert>}
    
                                <Stack gap={"20px"}>
                                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                        <Box width={"12%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Date</FormLabel></Box>
                                        <Box width={"90%"}>  <Input border={errors.date ? "2px solid red" : "1px solid lightgrey"} type='date' name={"date"} value={formData.date} onChange={handleChange} placeholder='please enter Date' /></Box>
                                    </Box>
    
                                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                        <Box width={"12%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Time</FormLabel></Box>
                                        <Box width={"90%"}>  <Input border={errors.time ? "2px solid red" : "1px solid lightgrey"} type='number' name={"time"} value={formData.time} onChange={handleChange} placeholder='please enter Time' /></Box>
                                    </Box>
    
                                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                        <Box width={"12%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Duration</FormLabel></Box>
                                        <Box width={"90%"}>  <Input border={errors.duration ? "2px solid red" : "1px solid lightgrey"} type='number' name={"duration"} value={formData.duration} onChange={handleChange} placeholder='please enter Duration' /></Box>
                                    </Box>
    
                                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                        <Box width={"12%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Location</FormLabel></Box>
                                        <Box width={"90%"}>  <Input border={errors.location ? "2px solid red" : "1px solid lightgrey"} type='text' name={"location"} value={formData.location} onChange={handleChange} placeholder='please enter Location' /></Box>
                                    </Box>
    
                                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                        <Box width={"12%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Description</FormLabel></Box>
                                        <Box width={"90%"}>  <Textarea border={errors.description ? "2px solid red" : "1px solid lightgrey"} type='text' name={"description"} value={formData.description} onChange={handleChange} placeholder='please enter Description' /></Box>
                                    </Box>
    
                                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                        <Box width={"12%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Price</FormLabel></Box>
                                        <Box width={"90%"}>  <Input border={errors.price ? "2px solid red" : "1px solid lightgrey"} type='number' name={"price"} value={formData.price} onChange={handleChange} placeholder='please enter Price' /></Box>
                                    </Box>
    
                                    <Input bgColor={"white"} color={"black"} type='submit' />
                                </Stack>
                            </form>
                        </Box>
                    </>
                </Box>
            </>
        );
    };

export default AdminMindControlForm