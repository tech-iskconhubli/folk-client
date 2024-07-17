import React from 'react'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
import { Box } from '@chakra-ui/react'
import AdminFesticalsUsersData from './AdminFesticalsUsersData'
import UsersFestivalsChart from '../AdminCharts/FestivalsCharts/UsersFestivalsCharts'

const AdminFestivalsUsersDataFlex = () => {
  return (
    <>
     <AdminTopNavbar/>
      <Box border={"2px solid transpreant"}  display={"flex"} mt={"20px"} boxSizing='border-box' p={"10px"} gap={"5px"}>
        <Box border={"2px solid transprant"} height={"89vh"} overflow={"scroll"}  width={"70%"}><AdminFesticalsUsersData/></Box>
        <Box border={"2px solid transpreant"} height={"89vh"} overflow={"scroll"}  width={"30%"}>
          <UsersFestivalsChart/>
        </Box>
      </Box>
    
    </>
  )
}

export default AdminFestivalsUsersDataFlex