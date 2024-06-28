import React from 'react'
import AdminTopNavbar from '../../Components/AdminNavbar/AdminTopNavbar'
import AdminSecretDataTable from './AdminSecretDataTable'
import { Box } from '@chakra-ui/react'

const AdminSecretData = () => {
  return (
    <>
     <AdminTopNavbar/>
      <Box border={"2px solid transpreant"} display={"flex"} mt={"20px"} boxSizing='border-box' p={"10px"}>
        <Box border={"2px solid transprant"}  width={"70%"}><AdminSecretDataTable/></Box>
        <Box border={"2px solid transpreant"} bgColor={"#eeeeee"} width={"30%"}></Box>
      </Box>
    </>
  )
}

export default AdminSecretData