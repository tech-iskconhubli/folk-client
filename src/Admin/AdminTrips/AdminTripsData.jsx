import React from 'react'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
import AdminTripsDataTable from './AdminTripsDataTable'
import { Box } from '@chakra-ui/react'
import TripsDateChartTwo from '../AdminCharts/TripsCharts/TripsDateChartTwo'

const AdminTripsData = () => {
  return (
    <>
    <Box position={"fixed"} top={0} width={"82%"}><AdminTopNavbar/></Box>
    <Box border={"2px solid transpreant"}  display={"flex"} mt={"70px"} boxSizing='border-box' p={"10px"} gap={"5px"}>
      <Box border={"2px solid transprant"} height={"89vh"} overflow={"scroll"}  width={"70%"}><AdminTripsDataTable/></Box>
      <Box border={"2px solid transpreant"} height={"89vh"} overflow={"scroll"} bgColor={"#eeeeee"} width={"30%"}><TripsDateChartTwo/></Box>
    </Box>

    </>
  )
}

export default AdminTripsData