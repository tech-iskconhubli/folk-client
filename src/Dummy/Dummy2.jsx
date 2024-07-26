import { Box, Button, Input, Stack,Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import theme from '../theme';
const Dummy2 = () => {
    const [inputs,setInputs] = useState([{title:"", description:""}]);

    const inputDouble =()=>{
        console.log("console")
        setInputs([...inputs,{title:"", description:""}])
    }

    const handleAddInputValues =(index,e)=>{
        const { name, value } = e.target;
        const updatedInputs = inputs.map((input, i) => 
            i === index ? { ...input, [name]: value } : input
        );
        setInputs(updatedInputs);
    }


    const handleSubmit =()=>{
       console.log(inputs)
    }
  return (
    <>
    <Box>
        <Box  height={"80vh"} mt={"200px"}>  
        <Button onClick={inputDouble} color={"green"}>Add</Button>

        <Heading fontWeight={500} fontSize={"70px"} fontFamily={theme.fonts.body}>Support Our Mission of Love and Service</Heading>
           {
            inputs?.map((item,index)=>(
                <Box mb={"20px"} borderBottom={"3px solid green"} key={index}>
                    {/* <Input name='title' onChange={(e)=>handleAddInputValues(index,e)} value={item.title} placeholder='title'/>
                    <Input name='description' onChange={(e)=>handleAddInputValues(index,e)} value={item.description} placeholder='Description'/>  */}

                  
                </Box>
            ))
           }
           

        </Box>
        <Button onClick={handleSubmit} ml={"100px"} p={"20px 300px"} color={"green"}>Submit</Button>
    </Box>
    </>
  )
}

export default Dummy2