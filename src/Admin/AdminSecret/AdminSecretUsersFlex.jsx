import React from 'react'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
import { Box } from '@chakra-ui/react'
import YogaDateChartTwo from '../AdminCharts/YogaCharts/YogaDateChartTwo'
import AdminSecretUsersData from './AdminSecretUsersData'
import UsersSecretChart from '../AdminCharts/SecretOfSuccessCharts/UsersSecretChart'

const AdminSecretUsersFlex = () => {
  return (
    <>
        <AdminTopNavbar/>
      <Box border={"2px solid transpreant"}  display={"flex"} mt={"20px"} boxSizing='border-box' p={"10px"} gap={"5px"}>
        <Box border={"2px solid transprant"} height={"89vh"} overflow={"scroll"}  width={"70%"}><AdminSecretUsersData/></Box>
        <Box border={"2px solid transpreant"} height={"89vh"} overflow={"scroll"}  width={"30%"}>
          <UsersSecretChart/>
        </Box>
      </Box>
    </>
  )
}

export default AdminSecretUsersFlex