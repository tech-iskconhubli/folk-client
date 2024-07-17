import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import FooterSection from '../Components/Footer/FooterSection'

const MainLayout = () => {
  return (
    <>
    <Navbar/>
      <Outlet/>
    <FooterSection />
    </>
  )
}

export default MainLayout