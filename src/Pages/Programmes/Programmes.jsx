import React from 'react'
import {  Button } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

const Programmes = () => {
  const navigate  = useNavigate()
   let formDetails ={
     title:"yoga for happiness",
     image:"https://images.pexels.com/photos/7495732/pexels-photo-7495732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
   }

   const handleclick = () =>{
    navigate("/allforms", {state:{formDetails}})
   }
  return (
    <>
      programmes
   
     <Button onClick={handleclick}>from</Button>
    </>
  )
}

export default Programmes