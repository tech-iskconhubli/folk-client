import React from 'react'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
import UsersTripsChart from '../AdminCharts/TripsCharts/UsersTripsCharts'
import { Box } from '@chakra-ui/react'
import AdminTripsUsersData from './AdminTripsUsersData'

const AdminTripsUsersFlex = () => {
  return (
    <>
    <AdminTopNavbar/>
    <Box border={"2px solid transpreant"}  display={"flex"} mt={"20px"} boxSizing='border-box' p={"10px"} gap={"5px"}>
      <Box border={"2px solid transprant"} height={"89vh"} overflow={"scroll"}  width={"70%"}><AdminTripsUsersData/></Box>
      <Box border={"2px solid transpreant"} height={"89vh"} overflow={"scroll"}  width={"30%"}>
        <UsersTripsChart/>
      </Box>
    </Box>
    </>
  )
}

export default AdminTripsUsersFlex