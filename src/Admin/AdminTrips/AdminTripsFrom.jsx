import React, { useState } from 'react';
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar';
import { Box, Input, FormLabel, Card, Stack, Alert, AlertIcon, Button, IconButton } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { postAdminTripsFormData } from '../../Redux/app/action';
import { useNavigate } from 'react-router-dom';
import TripsBarChart from '../AdminCharts/TripsCharts/TripsBarChart';
import TripsLineChart from '../AdminCharts/TripsCharts/TripsLineBar';
import KrishnaSpinner from '../Spinner/KrishnaSpinner';
import { CloseIcon } from '@chakra-ui/icons';

const AdminTripsForm = () => {
    const init = {
        tripName: "",
        from: "",
        to: "",
        fromDate: "",
        toDate: "",
        img: [],
        description: "",
        price: "",
        placesOfVisit: [],
        instagramUrl: [],
        additionalFields: []
    };

    const dispatch = useDispatch();
    const [formData, setFormData] = useState(init);
    const [placeInput, setPlaceInput] = useState("");
    const [instagramPlaceInput, setInstagramPlaceInput] = useState("");
    const [successAlert, setSuccessAlert] = useState(false);
    const loading = useSelector(state => state.AppReducer.isLoading);
    const navigate = useNavigate();

    console.log("loading...", loading);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            // Convert FileList to array and store in state
            const fileArray = Array.from(files);
            setFormData(prev => ({
                ...prev,
                [name]: [...prev[name], ...fileArray]
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handlePlaceInputChange = (e) => {
        setPlaceInput(e.target.value);
    };

    const handleInstagramPlaceInputChange = (e) => {
        setInstagramPlaceInput(e.target.value);
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

    const handlePlaceInstagramKeyPress = (e) => {
        if (e.key === "Enter" && instagramPlaceInput.trim() !== "") {
            setFormData(prev => ({
                ...prev,
                instagramUrl: [...prev.instagramUrl, instagramPlaceInput.trim()]
            }));
            setInstagramPlaceInput('');
            e.preventDefault();
        }
    };

    const removeInstagramPlace = (index) => {
        setFormData(prev => ({
            ...prev,
            instagramUrl: prev.instagramUrl.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(postAdminTripsFormData(formData))
            .then(res => {
                if (res?.payload?.message === 'post success') {
                    setSuccessAlert(true);
                    setTimeout(() => {
                        setSuccessAlert(false);
                        navigate('/admin/trips/data');
                    }, 1000);
                }
                console.log("res", res);
            })
            .catch(err => {
                console.error("Error submitting form:", err);
            });

        console.log("formData trips", formData);
    };

    const addImageInput = () => {
        // Create a new file input element
        const input = document.createElement("input");
        input.type = "file";
        input.multiple = true; // Allow multiple file selection
        input.name = "img";
        input.addEventListener('change', handleChange); // Listen for changes
        input.click(); // Trigger click event to open file selection dialog
    };

    const inputDouble = () => {
        setFormData(prev => ({
            ...prev,
            additionalFields: [...prev.additionalFields, { title: "", description: "" }]
        }));
    };

    const handleAddInputValues = (index, e) => {
        const { name, value } = e.target;
        const updatedFields = formData.additionalFields.map((field, i) =>
            i === index ? { ...field, [name]: value } : field
        );
        setFormData(prev => ({
            ...prev,
            additionalFields: updatedFields
        }));
    };

    return (
        <>
            <Box position={"fixed"} top={0} width={"82%"}><AdminTopNavbar /></Box>
            {loading && <KrishnaSpinner />}
            <Box mt={"70px"} display="flex" justifyContent={"space-between"} boxSizing='border-box' padding={"20px"} gap={"20px"}>
                <Box borderRadius={"12px"} height={"350px"} width={"50%"}><Card><TripsBarChart /></Card></Box>
                <Box borderRadius={"12px"} height={"350px"} width={"50%"}><Card><TripsLineChart /></Card></Box>
            </Box>
            <Box width={"97%"} margin={"auto"} mt={"10px"} bgColor={"white"} border={"2px solid transparent"} boxSizing='border-box' padding={"50px"} borderRadius={"12px"}>
                <Box bgColor={"white"} color={"black"}>
                    <form onSubmit={handleSubmit} action="/stats" enctype="multipart/form-data">
                        <Stack gap={"20px"}>
                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Trip name</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' name={"tripName"} value={formData.tripName} onChange={handleChange} placeholder='Please enter trip Name' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter location From</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' name={"from"} value={formData.from} onChange={handleChange} placeholder='Please enter location from' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter location To</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' name={"to"} value={formData.to} onChange={handleChange} placeholder='Please enter location To' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter from Date</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='date' name={"fromDate"} value={formData.fromDate} onChange={handleChange} placeholder='Please enter date' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter to Date</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='date' name={"toDate"} value={formData.toDate} onChange={handleChange} placeholder='Please enter date' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"left"} alignItems={"center"} gap={"50px"}>
                                <Box ><FormLabel  fontWeight={"500"} fontFamily={"body"}>Upload image</FormLabel></Box>
                                <Box >
                                    <input type="file" multiple name="img" onChange={handleChange} style={{ display: "none" }} />
                                    <Button onClick={addImageInput} colorScheme={"teal"} mr={2}>Add Images</Button>
                                    {formData.img.length > 0 && (
                                        <Stack direction="column">
                                            {formData.img.map((image, index) => (
                                                <Box key={index}>
                                                    <IconButton
                                                        aria-label="Remove Image"
                                                        icon={<CloseIcon />}
                                                        onClick={() => {
                                                            setFormData(prev => ({
                                                                ...prev,
                                                                img: prev.img.filter((_, i) => i !== index)
                                                            }));
                                                        }}
                                                    />
                                                    <Box>{image.name}</Box>
                                                </Box>
                                            ))}
                                        </Stack>
                                    )}
                                </Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Description</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' name={"description"} value={formData.description} onChange={handleChange} placeholder='Please enter Description' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Price</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='number' name={"price"} value={formData.price} onChange={handleChange} placeholder='Please enter price' /></Box>
                            </Box>

                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter places of visit</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' value={placeInput} onChange={handlePlaceInputChange} onKeyPress={handlePlaceKeyPress} placeholder='Please enter visit' />
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


                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter places instagram url</FormLabel></Box>
                                <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' value={instagramPlaceInput} onChange={handleInstagramPlaceInputChange} onKeyPress={handlePlaceInstagramKeyPress} placeholder='Please enter instagram urls' />
                                    <Box>
                                        {formData.instagramUrl?.map((place, index) => (
                                            <span key={index} style={{ marginRight: '8px', display: 'inline-block', padding: '4px', border: '1px solid #ccc', borderRadius: '4px' }}>
                                                {place}
                                                <button onClick={() => removeInstagramPlace(index)} style={{ marginLeft: '4px' }}>x</button>
                                            </span>
                                        ))}
                                    </Box>
                                </Box>
                            </Box>


                            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                                <Box width={"14%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Additional Fields</FormLabel></Box>
                                <Box width={"88%"}>
                                    {formData.additionalFields.map((item, index) => (
                                        <Box mb={"20px"} key={index} display={"flex"} flexDirection={"column"} gap={"10px"}>
                                            <Input
                                                name='title'
                                                onChange={(e) => handleAddInputValues(index, e)}
                                                value={item.title}
                                                placeholder='Title'
                                            />
                                            <Input
                                                name='description'
                                                onChange={(e) => handleAddInputValues(index, e)}
                                                value={item.description}
                                                placeholder='Description'
                                            />
                                        </Box>
                                    ))}
                                    <Button onClick={inputDouble} colorScheme={"teal"}>Add More Fields</Button>
                                </Box>
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

export default AdminTripsForm;
