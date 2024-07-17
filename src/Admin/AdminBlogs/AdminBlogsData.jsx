import React from 'react'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
import { Box } from '@chakra-ui/react'
import AdminBlogsDataTable from './AdminBlogsDataTable'
import BlogsChartTwo from '../AdminCharts/BlogsCharts/BlogsChartTwo'

const AdminBlogsData = () => {
  return (
    <>
     <AdminTopNavbar/>
      <Box border={"2px solid transpreant"}  display={"flex"} mt={"20px"} boxSizing='border-box' p={"10px"} gap={"5px"}>
        <Box border={"2px solid transprant"} height={"89vh"} overflow={"scroll"}  width={"70%"}><AdminBlogsDataTable/></Box>
        <Box border={"2px solid transpreant"} height={"89vh"} overflow={"scroll"}  width={"30%"}>
          <BlogsChartTwo/>
        </Box>
      </Box>
    </>
  )
}

export default AdminBlogsData