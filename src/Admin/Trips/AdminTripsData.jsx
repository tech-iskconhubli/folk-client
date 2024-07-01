import React from 'react'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
import AdminTripsDataTable from './AdminTripsDataTable'
import { Box } from '@chakra-ui/react'

const AdminTripsData = () => {
  return (
    <>
    <Box position={"fixed"} top={0} width={"82%"}><AdminTopNavbar/></Box>
    <Box border={"2px solid transpreant"} display={"flex"} mt={"20px"} boxSizing='border-box' p={"10px"}>
      <Box border={"2px solid transprant"}  width={"70%"}><AdminTripsDataTable/></Box>
      <Box border={"2px solid transpreant"} bgColor={"#eeeeee"} width={"30%"}></Box>
    </Box>

    </>
  )
}

export default AdminTripsData