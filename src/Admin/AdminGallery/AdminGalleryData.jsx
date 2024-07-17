import React from 'react'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
import GalleryChartTwo from '../AdminCharts/GalleryCharts/GalleryChartTwo'
import { Box } from '@chakra-ui/react'
import AdminGalleryDataTable from './AdminGalleryDataTable'

const AdminGalleryData = () => {
  return (
    <>
       <AdminTopNavbar/>
      <Box border={"2px solid transpreant"}  display={"flex"} mt={"20px"} boxSizing='border-box' p={"10px"} gap={"5px"}>
        <Box border={"2px solid transprant"} height={"89vh"} overflow={"scroll"}  width={"70%"}><AdminGalleryDataTable/></Box>
        <Box border={"2px solid transpreant"} height={"89vh"} overflow={"scroll"}  width={"30%"}>
          <GalleryChartTwo/>
        </Box>
      </Box>
    </>
  )
}

export default AdminGalleryData