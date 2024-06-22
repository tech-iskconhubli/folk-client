import { Box } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
      <Box >admin dashboard</Box>
      <Outlet/>
    </>
  )
}

export default AdminLayout