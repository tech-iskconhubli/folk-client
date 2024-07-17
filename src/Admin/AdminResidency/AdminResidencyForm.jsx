import React, { useState } from 'react';
import { Box, Input, FormLabel, Card, Stack, Alert, AlertIcon } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { postAdminResidencyFormData } from '../../Redux/app/action';
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar';
import { useNavigate } from 'react-router-dom';
import ResidencyBarCart from '../AdminCharts/ResidencyCharts/ResidencyBarChart';
import ResidencyLineChart from '../AdminCharts/ResidencyCharts/ResidencyLineBar';
import KrishnaSpinner from '../Spinner/KrishnaSpinner';

const AdminResidencyForm = () => {
    const init = {
        residencyName: "",
        location: "",
        description: "",
        img: "",
        availabilityStatus: [],
        feeAmount: ""
    };

    const dispatch = useDispatch();
    const [formData, setFormData] = useState(init);
    const [placeInput, setPlaceInput] = useState("");
    const [successAlert, setSuccessAlert] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const loading = useSelector(state => state.AppReducer.isLoading);
    const [error, setError] = useState(init);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "file" ? files[0] : value
        }));
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

        const newErrors = {};

        if (!formData.residencyName) {
            newErrors.residencyName = "Residency name required";
        }

        if (!formData.location) {
            newErrors.location = "Location required";
        }

        if (!formData.feeAmount) {
            newErrors.feeAmount = "Fee amount required";
        }

        if (!formData.description) {
            newErrors.description = "Description required";
        }

        if (!formData.img) {
            newErrors.img = "Image required";
        }

        if (formData.availabilityStatus.length === 0) {
            newErrors.availabilityStatus = "Availability status required";
        }

        setError(newErrors);

        if (Object.keys(newErrors).length === 0) {
            dispatch(postAdminResidencyFormData(formData))
                .then(res => {
                    if (res?.payload?.message === 'post success') {
                        setSuccessAlert(!successAlert);
                        setRefresh(prev => !prev);
                        setTimeout(() => {
                            setSuccessAlert(false);
                        }, 500);

                        setTimeout(() => {
                            navigate('/admin/residency/data');
                        }, 1000);
                    }
                    console.log("res", res);
                });
        }
    };

    return (
        <>
            <Box position={"fixed"} top={0} width={"82%"}><AdminTopNavbar /></Box>
            {loading && <KrishnaSpinner />}

            <Box mt={"70px"} display="flex" justifyContent={"space-between"} boxSizing='border-box' padding={"20px"} gap={"20px"}>
                <Box borderRadius={"12px"} height={"350px"} width={"50%"}><Card><ResidencyBarCart /></Card></Box>
                <Box borderRadius={"12px"} height={"350px"} width={"50%"}><Card><ResidencyLineChart /></Card></Box>
            </Box>
            <Box width={"97%"} margin={"auto"} mt={"10px"} bgColor={"white"} border={"2px solid transparent"} boxSizing='border-box' padding={"50px"} borderRadius={"12px"}>
                <Box bgColor={"white"} color={"black"}>
                    <form onSubmit={handleSubmit} action="/stats" encType="multipart/form-data">
                        <Stack gap={"20px"}>
                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Residency name</FormLabel></Box>
                                <Box width={"88%"}><Input border={error.residencyName ? "2px solid red" : "1px solid lightgrey"} type='text' name={"residencyName"} value={formData.residencyName} onChange={handleChange} placeholder='Please enter Residency Name' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter location</FormLabel></Box>
                                <Box width={"88%"}><Input border={error.location ? "2px solid red" : "1px solid lightgrey"} type='text' name={"location"} value={formData.location} onChange={handleChange} placeholder='Please enter location' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Description</FormLabel></Box>
                                <Box width={"88%"}><Input border={error.description ? "2px solid red" : "1px solid lightgrey"} type='text' name={"description"} value={formData.description} onChange={handleChange} placeholder='Please enter Description' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Upload image</FormLabel></Box>
                                <Box width={"88%"}><Input border={error.img ? "2px solid red" : "1px solid lightgrey"} type='file' name={"img"} onChange={handleChange} placeholder='Upload image' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter room specific</FormLabel></Box>
                                <Box width={"88%"}>
                                    <Input border={error.availabilityStatus ? "2px solid blue" : "1px solid lightgrey"} type='text' value={placeInput} onChange={handlePlaceInputChange} onKeyPress={handlePlaceKeyPress} placeholder='Please enter Room Specific' />
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
                                <Box width={"88%"}><Input border={error.feeAmount ? "2px solid red" : "1px solid lightgrey"} type='number' name={"feeAmount"} value={formData.feeAmount} onChange={handleChange} placeholder='Amount' /></Box>
                            </Box>
                            {successAlert && <Alert status='success'><AlertIcon />Data uploaded successfully</Alert>}

                            <Input bgColor={"white"} color={"black"} type='submit' />
                        </Stack>
                    </form>
                </Box>
            </Box>
        </>
    );
};

export default AdminResidencyForm;
