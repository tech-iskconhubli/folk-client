import React from 'react'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
import { Box } from '@chakra-ui/react'
import AdminYogaUsersData from './AdminYogaUsersData'

import UsersYogaChart from '../AdminCharts/YogaCharts/UsersYogaChart'

const AdminYogaUserFlex = () => {
  return (
    <>
    <AdminTopNavbar/>
      <Box border={"2px solid transpreant"}  display={"flex"} mt={"20px"} boxSizing='border-box' p={"10px"} gap={"5px"}>
        <Box border={"2px solid transprant"} height={"89vh"} overflow={"scroll"}  width={"70%"}><AdminYogaUsersData/></Box>
        <Box border={"2px solid transpreant"} height={"89vh"} overflow={"scroll"}  width={"30%"}>
          <UsersYogaChart/>
        </Box>
      </Box>
    </>
  )
}

export default AdminYogaUserFlex