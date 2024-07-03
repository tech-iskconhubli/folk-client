import React, { useState } from 'react'
import { Box, Input, FormLabel, Card, Stack, Alert, AlertIcon } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { postAdminResidencyFormData } from '../../Redux/app/action';
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar';
import { useNavigate } from 'react-router-dom';

const AdminResidencyForm = () => {
    const init = {
        residencyName: "",
        location: "",
        feeAmount:"",
        description: "",
        img:"",
        availabilityStatus: []
    };

    const dispatch = useDispatch();
    const [formData, setFormData] = useState(init);
    const [placeInput, setPlaceInput] = useState("");
    const [successAlert,setSuccessAlert] = useState(false);
    const [refresh ,setRefresh] = useState(false);
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        console.log(name, value, type, files)
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
                availabilityStatus: [...prev.availabilityStatus, placeInput.trim()]
            }));
            setPlaceInput('');
            e.preventDefault();
        }
    };

    const removePlace = (index) => {
        setFormData(prev => ({
            ...prev,
            availabilityStatus: prev.availabilityStatus.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postAdminResidencyFormData(formData))
        .then(res=>{
            if(res?.payload?.message === 'post success'){
                setSuccessAlert(!successAlert)
                setRefresh(prev=>!prev);
             setTimeout(() => {
              setRefresh ? setSuccessAlert(false):setSuccessAlert(true)
             }, 500);
             
             setTimeout(() => {
                navigate('/admin/residency/data')
             }, 1000);
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
                <Box borderRadius={"12px"} bgColor={"white"} height={"300px"} width={"50%"}><Card></Card></Box>
                <Box borderRadius={"12px"} bgColor={"white"} height={"300px"} width={"50%"}><Card></Card></Box>
            </Box>
            <Box width={"97%"} margin={"auto"} mt={"10px"} bgColor={"white"} border={"2px solid transparent"} boxSizing='border-box' padding={"50px"} borderRadius={"12px"}>
                <Box bgColor={"white"} color={"black"}>
                    <form onSubmit={handleSubmit} action="/stats" enctype="multipart/form-data">
                        <Stack gap={"20px"}>
                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Residency name</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' name={"residencyName"} value={formData.residencyName} onChange={handleChange} placeholder='please enter Residency Name' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter location</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' name={"location"} value={formData.location} onChange={handleChange} placeholder='please enter location' /></Box>
                            </Box>

                           
                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Description</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' name={"description"} value={formData.description} onChange={handleChange} placeholder='please enter Description' /></Box>
                            </Box>

                            {/* <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter from Date</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='date' name={"fromDate"} value={formData.fromDate} onChange={handleChange} placeholder='please enter date' /></Box>
                            </Box> */}

                            {/* <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter to Date</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='date' name={"toDate"} value={formData.toDate} onChange={handleChange} placeholder='please enter date' /></Box>
                            </Box> */}

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Upload image</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='file' name={"img"} onChange={handleChange} placeholder='upload image' /></Box>
                            </Box>

                            {/* <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Description</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' name={"description"} value={formData.description} onChange={handleChange} placeholder='please enter Description' /></Box>
                            </Box> */}

                            {/* <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Price</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='number' name={"price"} value={formData.price} onChange={handleChange} placeholder='please enter price' /></Box>
                            </Box> */}

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter room specific</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' value={placeInput} onChange={handlePlaceInputChange} onKeyPress={handlePlaceKeyPress} placeholder='please enter Room Specifc' />
                                <Box>
                                    {formData.availabilityStatus?.map((place, index) => (
                                        <span key={index} style={{ marginRight: '8px', display: 'inline-block', padding: '4px', border: '1px solid #ccc', borderRadius: '4px' }}>
                                            {place}
                                            <button onClick={() => removePlace(index)} style={{ marginLeft: '4px' }}>x</button>
                                        </span>
                                    ))}
                                </Box>
                                </Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Fee Amount</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='number' name={"feeAmount"} value={formData.feeAmount} onChange={handleChange} placeholder='Amount' /></Box>
                            </Box>

                            <Input bgColor={"white"} color={"black"} type='submit' />
                        </Stack>
                    </form>
                </Box>
            </Box>
        </>
    );
};


export default AdminResidencyForm