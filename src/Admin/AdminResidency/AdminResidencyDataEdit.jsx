import React, { useEffect, useState } from 'react'
import { Box, Card ,Input,FormLabel,Stack, Alert, AlertIcon,Image} from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singleAdminResidencyFormData, updateAdminResidencyFormData } from '../../Redux/app/action';
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar';

const AdminResidencyDataEdit = () => {
  const init ={
    residencyName: "",
    location: "",
    feeAmount:"",
    description: "",
    img:"",
    availabilityStatus: []
}
  const [formData ,setFormData] = useState(init);
  const [updatedSuccess,setUpdatedSuccess] = useState(false);
  const [placeInput, setPlaceInput] = useState("");
  const navigate = useNavigate()
  const {id } = useParams();
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(singleAdminResidencyFormData(id))
    .then(res=>{
      console.log(res.payload.data)
       setFormData(res?.payload?.data)
    })
  },[dispatch,id]);

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
  dispatch(updateAdminResidencyFormData(id,formData))
  .then(res=>{
      console.log("res", res);
      if(res?.payload?.message === "updated success"){
        setUpdatedSuccess(!updatedSuccess);
      //  setTimeout(() => {
      //   navigate("/admin/yoga/data")
      //  }, 1000);
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
                              <Box width={"20%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Residency Name</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='text' name={"residencyName"} value={formData.residencyName } onChange={handleChange}   placeholder='please enter Residency name'/></Box>
                        </Box>


                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"20%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter location</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='text' name={"location"} value={formData.location  } onChange={handleChange}  placeholder='please enter Location'/></Box>
                        </Box>


                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"20%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter description</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='text' name={"description"} value={formData.description } onChange={handleChange}   placeholder='please enter Description'/></Box>
                        </Box>

                        {/* <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"20%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Location</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='text' name={"location"} value={formData.location} onChange={handleChange}   placeholder='please enter Location'/></Box>
                        </Box> */}


                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"20%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter image</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='file' name={"img"}  onChange={handleChange}   placeholder='please upload image'/>
                              {formData.img && <Image src={formData.img} alt="Residency Image" mt={4} />}
                              </Box>
                        </Box>

                        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                              <Box width={"20%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter Price</FormLabel></Box>
                              <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='number' name={"price"} value={formData.feeAmount } onChange={handleChange}   placeholder='please enter Price'/></Box>
                        </Box>

                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                            <Box width={"20%"}><FormLabel fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter festival agenda</FormLabel></Box>
                            <Box width={"88%"}><Input borderColor={"#2B3553"} type='text' value={placeInput} onChange={handlePlaceInputChange} onKeyPress={handlePlaceKeyPress} placeholder='please enter festival agenda' />
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
export default AdminResidencyDataEdit