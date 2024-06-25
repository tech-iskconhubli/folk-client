import React from 'react'
import Carousel from '../../Components/Header/Carousel'
import ZSpiralImages from '../../Components/Header/ZSpiralImages'
import "../../Styles/Header.css"
import EmpoweredSection from '../../Components/Header/EmpoweredSection'
import BigPictureSection from '../../Components/Header/BigPictureSection'
import ImageGallery from '../../Components/Header/ImageGallery'
import Testimonials from '../../Components/Header/Testimonials'

const Home = () => {
  return (
   <>
   <Carousel />
   <ZSpiralImages />
   <EmpoweredSection />
   <BigPictureSection />
   <ImageGallery />
   <Testimonials />
   </>
  )
}

export default Home