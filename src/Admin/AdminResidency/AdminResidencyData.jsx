import React from 'react'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
import { Box } from '@chakra-ui/react'
import AdminResidencyDataTable from './AdminResidencyDataTable'
import ResidencyDateChartTwo from '../AdminCharts/ResidencyCharts/ResidencyDateChartTwo'

const AdminResidencyData = () => {
  return (
    <>
    <AdminTopNavbar/>
      <Box border={"2px solid transpreant"} display={"flex"} mt={"20px"} boxSizing='border-box' p={"10px"} gap={"5px"}>
        <Box border={"2px solid transprant"} height={"89vh"} overflow={"scroll"} width={"70%"}><AdminResidencyDataTable/></Box>
        <Box border={"2px solid transpreant"} height={"89vh"} overflow={"scroll"} bgColor={"#eeeeee"} width={"30%"}><ResidencyDateChartTwo/></Box>
      </Box>
    </>
    
  )
}

export default AdminResidencyData