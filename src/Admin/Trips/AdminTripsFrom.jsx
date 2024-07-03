import React, { useState } from 'react';
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar';
import { Box, Input, FormLabel, Card, Stack } from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import { postAdminTripsFormData } from '../../Redux/app/action';

const AdminTripsForm = () => {
    const init = {
        tripName: "",
        from: "",
        to: "",
        fromDate: "",
        toDate: "",
        img: "",
        description: "",
        price: "",
        placesOfVisit: []
    };

    const dispatch = useDispatch();
    const [formData, setFormData] = useState(init);
    const [placeInput, setPlaceInput] = useState("");

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
                placesOfVisit: [...prev.placesOfVisit, placeInput.trim()]
            }));
            setPlaceInput('');
            e.preventDefault();
        }
    };

    const removePlace = (index) => {
        setFormData(prev => ({
            ...prev,  
            placesOfVisit: prev.placesOfVisit.filter((_, i) => i !== index)
        }));
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postAdminTripsFormData(formData))
            .then(res => {
                console.log(res, "res");
            });
        console.log("formData", formData);
    };

    return (
        <>
            <Box position={"fixed"} top={0} width={"82%"}><AdminTopNavbar /></Box>

            <Box mt={"70px"} display="flex" justifyContent={"space-between"} boxSizing='border-box' padding={"20px"} gap={"20px"}>
                <Box borderRadius={"12px"} bgColor={"white"} height={"300px"} width={"50%"}><Card></Card></Box>
                <Box borderRadius={"12px"} bgColor={"white"} height={"300px"} width={"50%"}><Card></Card></Box>
            </Box>
            <Box width={"97%"} margin={"auto"} mt={"10px"} bgColor={"white"} border={"2px solid transparent"} boxSizing='border-box' padding={"50px"} borderRadius={"12px"}>
                <Box bgColor={"white"} color={"black"}>
                    <form onSubmit={handleSubmit} action="/stats" enctype="multipart/form-data">
                        <Stack gap={"20px"}>
                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Trip name</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' name={"tripName"} value={formData.tripName} onChange={handleChange} placeholder='please enter trip Name' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter location From</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' name={"from"} value={formData.from} onChange={handleChange} placeholder='please enter location from' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter location To</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' name={"to"} value={formData.to} onChange={handleChange} placeholder='please enter location To' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter from Date</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='date' name={"fromDate"} value={formData.fromDate} onChange={handleChange} placeholder='please enter date' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter to Date</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='date' name={"toDate"} value={formData.toDate} onChange={handleChange} placeholder='please enter date' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Upload image</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='file' name={"img"} onChange={handleChange} placeholder='upload image' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Description</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' name={"description"} value={formData.description} onChange={handleChange} placeholder='please enter Description' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Price</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='number' name={"price"} value={formData.price} onChange={handleChange} placeholder='please enter price' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter places of visit</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' value={placeInput} onChange={handlePlaceInputChange} onKeyPress={handlePlaceKeyPress} placeholder='please enter visit' />
                                <Box>
                                    {formData.placesOfVisit?.map((place, index) => (
                                        <span key={index} style={{ marginRight: '8px', display: 'inline-block', padding: '4px', border: '1px solid #ccc', borderRadius: '4px' }}>
                                            {place}
                                            <button onClick={() => removePlace(index)} style={{ marginLeft: '4px' }}>x</button>
                                        </span>
                                    ))}
                                </Box>
                                </Box>
                            </Box>

                            <Input bgColor={"white"} color={"black"} type='submit' />
                        </Stack>
                    </form>
                </Box>
            </Box>
        </>
    );
};

export default AdminTripsForm;
