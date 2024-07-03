import React from 'react'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
import AdminSecretDataTable from './AdminSecretDataTable'
import { Box } from '@chakra-ui/react'
import SecretOfSuccessDateChartTwo from '../AdminCharts/SecretOfSuccessCharts/SecretOfSuccessDateChartTwo'

const AdminSecretData = () => {
  return (
    <>
     <AdminTopNavbar/>
      <Box border={"2px solid transpreant"} display={"flex"} mt={"20px"} boxSizing='border-box' p={"10px"} gap={"5px"}>
        <Box border={"2px solid transprant"} height={"89vh"} overflow={"scroll"}  width={"70%"}><AdminSecretDataTable/></Box>
        <Box border={"2px solid transpreant"} height={"89vh"} overflow={"scroll"} bgColor={"#eeeeee"} width={"30%"}><SecretOfSuccessDateChartTwo/></Box>
      </Box>
    </>
  )
}

export default AdminSecretData