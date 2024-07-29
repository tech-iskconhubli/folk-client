import React from 'react'
import TripSectionOne from '../../Components/TripsRelated/TripSectionOne'
import TripIconSection from '../../Components/TripsRelated/TripIconSection'
import TripCards from '../../Components/TripsRelated/TripCards'
import TripSocialMediaIoncs from '../../Components/TripsRelated/TripSocialMediaIoncs'
import TripHeader from '../../Components/TripsRelated/TripHeader'
import TripCards2 from '../../Components/TripsRelated/TripCards2'

const Trips = () => {
  return (
   <>
    <TripHeader />
    <TripSectionOne />
    <TripIconSection />
    <TripCards />
    <TripSocialMediaIoncs />
   </>
  )
}

export default Trips