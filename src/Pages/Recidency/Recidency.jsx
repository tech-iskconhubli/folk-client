import React from 'react'
import ResidencySectionOne from '../../Components/ResidencyRelated/ResidencySectionOne'
import ResidencySectionTwo from '../../Components/ResidencyRelated/ResidencySectionTwo'
import ResidencySectionThree from '../../Components/ResidencyRelated/ResidencySectionThree'
import ResidencyMatterSection from '../../Components/ResidencyRelated/ResidencyMatterSection'
import ResidencyHeader from '../../Components/ResidencyRelated/ResidencyHeader'

const Recidency = () => {
  return (
    <>
    <ResidencyHeader />
     <ResidencySectionOne />
     <ResidencyMatterSection />
     <ResidencySectionTwo />
     <ResidencySectionThree />
    </>
  )
}

export default Recidency