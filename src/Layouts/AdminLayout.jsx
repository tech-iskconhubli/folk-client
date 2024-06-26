import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../Components/AdminNavbar/AdminNavbar'

const AdminLayout = () => {
  return (
    <>
      <Box border={"2px solid transprent"} display={"flex"}>
        <Box border={"2px solid transprent"} width={"18%"}><AdminNavbar/></Box>
        <Box border={"2px solid transprent"} width={"82%"} bgColor={"#1F1F2E"}>  <Outlet/>  </Box>
      </Box>
    
    </>
  )
}

export default AdminLayout