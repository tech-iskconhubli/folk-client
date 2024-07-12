import React from 'react'
import EventSection from '../../Components/GalleryRelated/EventSection'
import ImageGalleryHeading from '../../Components/GalleryRelated/ImageGalleryHeading'
import FestivalSection from '../../Components/GalleryRelated/FestivalSection'
import TripSection from '../../Components/GalleryRelated/TripSection'

const Gallery = () => {
  return (
    <>
     <ImageGalleryHeading />
     <EventSection />
     <FestivalSection />
     <TripSection />
    </>
  )
}

export default Gallery