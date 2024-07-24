import React from 'react'
import MindControlSectionOne from '../../Components/ArtOfMindControlRelated/MindControlSectionOne'
import MindControlSectionTwo from '../../Components/ArtOfMindControlRelated/MindControlSectionTwo'
import MindControlSectionThree from '../../Components/ArtOfMindControlRelated/MindControlSectionThree'
import MindControlSectionFour from '../../Components/ArtOfMindControlRelated/MindControlSectionFour'
import MindControlHeader from '../../Components/ArtOfMindControlRelated/MindControlHeader'
import MindControlCardsSection from '../../Components/ArtOfMindControlRelated/MindControlCardsSection'

const ArtOfMindControl = () => {
  return (
    <>
    <MindControlHeader />
     <MindControlSectionOne />
     <MindControlSectionTwo />
     <MindControlSectionThree />
     <MindControlSectionFour />
     <MindControlCardsSection />
    </>
  )
}

export default ArtOfMindControl