import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../Components/AdminNavbar/AdminNavbar'
import AdminFotter from '../Components/AdminFotter/AdminFotter'

const AdminLayout = () => {
  return (
    <>
      <Box border={"2px solid transprent"} display={"flex"} overflow={"scroll"}>
        <Box height={"100vh"} overflow={"scroll"} border={"2px solid transprent"} width={"18%"}><AdminNavbar/></Box>
        <Box height={"100vh"} overflow={"scroll"} border={"2px solid transprent"} width={"82%"} bgColor={"#F5F7F8"}> 
         <Outlet/>  
         {/* <Box boxSizing='border-box' p={"100px 200px 0px 20px"}><AdminFotter/></Box> */}
         </Box>
      </Box>
      
    
    </>
  )
}

export default AdminLayout