import React from 'react'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
import { Box } from '@chakra-ui/react'
import AdminMindControlDataTable from './AdminMindControlDataTable'
import ArtOFMindDateChartTwo from '../AdminCharts/ArtOfMindCharts/ArtOfMindDateChartTwo'

const AdminMindControlData = () => {
  return (
    <>
        <AdminTopNavbar/>
      <Box border={"2px solid transpreant"} display={"flex"} mt={"20px"} boxSizing='border-box' p={"10px"} gap={"5px"}>
        <Box border={"2px solid transprant"} height={"89vh"} overflow={"scroll"} width={"70%"}><AdminMindControlDataTable/></Box>
        <Box border={"2px solid transpreant"} height={"89vh"} overflow={"scroll"} bgColor={"#eeeeee"} width={"30%"}><ArtOFMindDateChartTwo/></Box>
      </Box>
    </>
  )
}

export default AdminMindControlData