import React from 'react'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
import AdminFestivalsDateTable from './AdminFestivalsDateTable'
import { Box } from '@chakra-ui/react'
import FestivalsDateChartTwo from '../AdminCharts/FestivalsCharts/FestivalsDateChartTwo'

const AdminFestivalsDate = () => {
  return (
    <>
        <Box position={"fixed"} top={0} width={"82%"}><AdminTopNavbar/></Box>
    <Box border={"2px solid transpreant"} display={"flex"} mt={"70px"}  boxSizing='border-box' p={"10px"} gap={"5px"}>
      <Box border={"2px solid transprant"} height={"89vh"} overflow={"scroll"} width={"70%"}><AdminFestivalsDateTable/></Box>
      <Box border={"2px solid transpreant"}height={"89vh"} overflow={"scroll"} bgColor={"#eeeeee"} width={"30%"}><FestivalsDateChartTwo/></Box>
    </Box>

    </>
  )
}

export default AdminFestivalsDate