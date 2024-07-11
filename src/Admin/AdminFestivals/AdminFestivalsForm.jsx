import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAdminFestivalsFormData } from '../../Redux/app/action';
import { Box, Input, FormLabel, Card, Stack, Alert, AlertIcon } from "@chakra-ui/react";
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar';
import { useNavigate } from 'react-router-dom';
import FestivalsBarCart from '../AdminCharts/FestivalsCharts/FestivalsBarChart';
import FestivalsLineChart from '../AdminCharts/FestivalsCharts/FestivalsLineBar';
import KrishnaSpinner from '../Spinner/KrishnaSpinner';


const AdminFestivalsForm = () => { 
  const init = {
    title: "",
    description: "",
    fromDate: "",
    toDate: "",
    img: "",
    location: "",
    festivalAgenda: []
};

const dispatch = useDispatch();
const [formData, setFormData] = useState(init);
const [placeInput, setPlaceInput] = useState("");
const [successAlert,setSuccessAlert] = useState(false);
const [refresh ,setRefresh] = useState(false);
const [errors,setErrors] = useState(init);
const navigate = useNavigate();
const loading = useSelector(state=>state.AppReducer.isLoading)


const handleChange = (e) => {
    const { name, value, type, files } = e.target;
  //  console.log(name, value, type, files)
    setFormData(prev=>({
        ...prev,
        [name]: type === "file" ? files[0] : value
    }))
};

const handlePlaceInputChange = (e) => {
    setPlaceInput(e.target.value);
};

const handlePlaceKeyPress = (e) => {
    if (e.key === "Enter" && placeInput.trim() !== "") {
        setFormData(prev => ({
            ...prev,
            festivalAgenda: [...prev.festivalAgenda, placeInput.trim()]
        }));
        setPlaceInput('');
        e.preventDefault();
    }
};

const removePlace = (index) => {
    setFormData(prev => ({
        ...prev,  
        festivalAgenda: prev.festivalAgenda.filter((_, i) => i !== index)
    }));
}; 

const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors ={};

    if(!formData.title){
        newErrors.title = "title required"
    }
    if(!formData.description){
        newErrors.description = "description required"
    }
    if(!formData.fromDate){
        newErrors.fromDate = "from Date required"
    }
    if(!formData.toDate){
        newErrors.toDate = "toDate required"
    }
    if(!formData.img){
        newErrors.img = "img required"
    }
    if(!formData.location){
        newErrors.location = "location required"
    }
    if(!placeInput.trim()){
        newErrors.placeInput = "Place input is required";
    }
    

    setErrors(newErrors)

    if(Object.keys(newErrors).length ===0  ){

    dispatch(postAdminFestivalsFormData(formData))
        .then(res => {
          if(res?.payload?.message === 'post success'){
            setSuccessAlert(!successAlert)
            setRefresh(prev=>!prev);
         setTimeout(() => {
          setRefresh ? setSuccessAlert(false):setSuccessAlert(true)
         }, 500);
         
         setTimeout(() => {
            navigate('/admin/festivals/data')
         }, 1000);
      }
        });

    }
    console.log("formData", formData);
};

return (
    <>
        <Box position={"fixed"} top={0} width={"82%"}><AdminTopNavbar /></Box>
        {
            loading && <KrishnaSpinner/>
        }
        <Box mt={"70px"} display="flex" justifyContent={"space-between"} boxSizing='border-box' padding={"20px"} gap={"20px"}>
            <Box borderRadius={"12px"}  height={"350px"} width={"50%"}><Card><FestivalsBarCart/></Card></Box>
            <Box borderRadius={"12px"}  height={"350px"} width={"50%"}><Card><FestivalsLineChart/></Card></Box>
        </Box>
        <Box width={"97%"} margin={"auto"} mt={"10px"} bgColor={"white"} border={"2px solid transparent"} boxSizing='border-box' padding={"50px"} borderRadius={"12px"}>
            <Box bgColor={"white"} color={"black"}>
                <form onSubmit={handleSubmit} action="/stats" enctype="multipart/form-data">
                    <Stack gap={"20px"}>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                            <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter title</FormLabel></Box>
                            <Box width={"88%"}><Input border={errors.title ? "2px solid red" : "1px solid lightgrey"} type='text' name={"title"} value={formData.title} onChange={handleChange} placeholder='please enter trip Name' /></Box>
                        </Box>


                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                            <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Description</FormLabel></Box>
                            <Box width={"88%"}><Input border={errors.description ? "2px solid red" : "1px solid lightgrey"} type='text' name={"description"} value={formData.description} onChange={handleChange} placeholder='please enter location To' /></Box>
                        </Box>

                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                            <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter from Date</FormLabel></Box>
                            <Box width={"88%"}><Input border={errors.fromDate ? "2px solid red" : "1px solid lightgrey"} type='date' name={"fromDate"} value={formData.fromDate} onChange={handleChange} placeholder='please enter date' /></Box>
                        </Box>

                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                            <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter to Date</FormLabel></Box>
                            <Box width={"88%"}><Input border={errors.fromDate ? "2px solid red" : "1px solid lightgrey"} type='date' name={"toDate"} value={formData.toDate} onChange={handleChange} placeholder='please enter date' /></Box>
                        </Box>

                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                            <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Upload image</FormLabel></Box>
                            <Box width={"88%"}><Input border={errors.img ? "2px solid red" : "1px solid lightgrey"} type='file' name={"img"} onChange={handleChange} placeholder='upload image' /></Box>
                        </Box>

                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                            <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter location</FormLabel></Box>
                            <Box width={"88%"}><Input border={errors.location ? "2px solid red" : "1px solid lightgrey"} type='text' name={"location"} value={formData.location} onChange={handleChange} placeholder='please enter Description' /></Box>
                        </Box>

                        {/* <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                            <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Price</FormLabel></Box>
                            <Box width={"88%"}><Input border={errors.date ? "2px solid red" : "1px solid lightgrey"} type='number' name={"price"} value={formData.price} onChange={handleChange} placeholder='please enter price' /></Box>
                        </Box> */}

                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                            <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter festival agenda</FormLabel></Box>
                            <Box width={"88%"}><Input  border={errors.festivalAgenda ? "2px solid blue" : "1px solid lightgrey"} type='text' value={placeInput} onChange={handlePlaceInputChange} onKeyPress={handlePlaceKeyPress} placeholder='please enter festival agenda' />
                            <Box>
                                {formData.festivalAgenda?.map((place, index) => (
                                    <span key={index} style={{ marginRight: '8px', display: 'inline-block', padding: '4px', border: '1px solid #ccc', borderRadius: '4px' }}>
                                        {place}
                                        <button onClick={() => removePlace(index)} style={{ marginLeft: '4px' }}>x</button>
                                    </span>
                                ))}
                            </Box>
                            </Box>
                        </Box>
                        {
            successAlert && <Alert status='success'><AlertIcon />Data uploaded successfully</Alert>
        }
                        <Input bgColor={"white"} color={"black"} type='submit' />
                    </Stack>
                </form>
            </Box>
        </Box>
    </>
);
};


export default AdminFestivalsForm