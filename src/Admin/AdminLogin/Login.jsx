import React, { useState } from 'react'
import {Box, Input, Stack,Text} from "@chakra-ui/react"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../Redux/auth/action';
const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const init ={
    email:"",
    password:""
  }
  const [formData,setFormData] = useState(init);

  const [errors,setErrors] = useState(init)

  const [loginError,setLoginError] = useState()

  const handleChange = (e) => {
      const {name,value} = e.target;
    const payload ={
      ...formData,
      [name]:value
    }
    setFormData(payload)
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if(!formData.password){
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      dispatch(postLogin(formData))
        .then(res => {
           console.log(res)
          if(res?.payload?.response?.data){
            setLoginError(res?.payload?.response?.data?.message)
          }
          if(res?.payload?.status ===200){
            localStorage.setItem("token", res?.payload?.token);
            localStorage.setItem("name", res?.payload?.name);
          }
          if(res?.payload?.message === "login success"){
              navigate("/admin")
          }
         
        });
    }
  }


  




  return (
    <>
        <Box border={"2px solid transprent"} borderRadius={"12px"} bgColor={'#F5F7FE'} boxSizing='border-box' padding={["20px","20px","100px 100px","100px 100px"]} width={["98%","98%","50%","50%"]} margin={"auto"} mt={["60px","30px","100px","100px"]}>
             {loginError && <span style={{color:"red"}}>{loginError}</span>}
              <form onSubmit={handleSubmit}>
            <Stack gap={"30px"}>
              <Input value={formData.email} name='email' onChange={handleChange} bgColor={"white"} height={"60px"} type='email' placeholder='email'/>
              {errors.email && <Text color="red">{errors.email}</Text>}
              <Input value={formData.password} name='password' onChange={handleChange} bgColor={"white"} height={"60px"} type='password' placeholder='password'/>
              {errors.password && <Text color="red">{errors.password}</Text>}
              <Input bgColor={"white"} type='submit'/> 
            </Stack>
              </form>
        </Box>
    </>
  )
}

export default Login