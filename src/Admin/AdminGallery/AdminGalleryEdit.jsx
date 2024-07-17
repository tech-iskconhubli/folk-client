import { Box, Card ,Input,FormLabel,Stack, Alert, AlertIcon,Image} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { singleAdminGalleryFormData, updateAdminGalleryFormData } from '../../Redux/app/action';
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar';
import KrishnaSpinner from '../Spinner/KrishnaSpinner';

const AdminGalleryEdit = () => {
  const init ={
    title: "",
    description: "",
    img:"",
}
const [formData ,setFormData] = useState(init);
const [updatedSuccess,setUpdatedSuccess] = useState(false);
const navigate = useNavigate()
const {id } = useParams();
const dispatch = useDispatch();
const loading = useSelector(state=>state.AppReducer.isLoading)
useEffect(()=>{
dispatch(singleAdminGalleryFormData(id))
.then(res=>{
  console.log(" edit blog res",res.payload)
   setFormData(res?.payload)
})
},[dispatch,id]);



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
dispatch(updateAdminGalleryFormData(id,formData))
.then(res=>{
  console.log("res", res);
  if(res?.payload?.message === "updated success"){
    setUpdatedSuccess(!updatedSuccess);
   setTimeout(() => {
    navigate("/admin/gallery/data")
   }, 1000);
  }
})
}

// console.log("formData", formData)

return (
<>
  <AdminTopNavbar/>
  {
    loading && <KrishnaSpinner/>
  }

  <Box bg="#F5F7F8" border={"2px solid transpreant"} boxSizing='border-box' p={"150px 100px"}>
    <Card>
        <Box>
         
    <Box  width={"97%"}  margin={"auto"} mt={"10px"} bgColor={"white"} border={"2px solid transprent"} boxSizing='border-box' padding={"50px"} borderRadius={"12px"}>
        < >
           <Box  bgColor={"white"}  color={"black"}>
              <form onSubmit={handleSubmit} >
              {
  updatedSuccess &&  <Alert status='success'><AlertIcon />Data updated successfully!</Alert>
  }
               <Stack gap={"20px"} >
                    <Box   display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                          <Box width={"20%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter title</FormLabel></Box>
                          <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='text' name={"title"} value={formData?.title } onChange={handleChange}   placeholder='please enter Residency name'/></Box>
                    </Box>

                    <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                          <Box width={"20%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter description</FormLabel></Box>
                          <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='text' name={"description"} value={formData?.description } onChange={handleChange}   placeholder='please enter Description'/></Box>
                    </Box>



                    <Box  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0px"}>
                          <Box width={"20%"}> <FormLabel  fontSize={"14px"} fontWeight={"500"} fontFamily={"body"}>Enter image</FormLabel></Box>
                          <Box width={"90%"}>  <Input borderColor={"#2B3553"} type='file' name={"img"}  onChange={handleChange}   placeholder='please upload image'/>
                          {formData?.img && <Image src={formData.img} alt="Residency Image" mt={4} />}
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

export default AdminGalleryEdit