import React from 'react'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
import AdminMindControlUsersData from './AdminMindControlUsersData'
import { Box } from '@chakra-ui/react'
import UsersArtChart from '../AdminCharts/ArtOfMindCharts/UserArtCharts'

const AdminMindControlUsersFlex = () => {
  return (
    <>
     <AdminTopNavbar/>
      <Box border={"2px solid transpreant"}  display={"flex"} mt={"20px"} boxSizing='border-box' p={"10px"} gap={"5px"}>
        <Box border={"2px solid transprant"} height={"89vh"} overflow={"scroll"}  width={"70%"}><AdminMindControlUsersData/></Box>
        <Box border={"2px solid transpreant"} height={"89vh"} overflow={"scroll"}  width={"30%"}>
          <UsersArtChart/>
        </Box>
      </Box>
    </>
  )
}

export default AdminMindControlUsersFlex