import React from 'react'
import OurPrograms from '../../Components/DonationRelated/OurPrograms'
import ContributionSection from '../../Components/DonationRelated/ContributionSection'
import SuccessStoriesSection from '../../Components/DonationRelated/SuccessStoriesSection'
import HelpingSection from '../../Components/DonationRelated/HelpingSection'
import OurMissionSection from '../../Components/DonationRelated/OurMissionSection'
import DonationHeader from '../../Components/DonationRelated/DonationHeader'
import DonationCardsSection from '../../Components/DonationRelated/DonationCardsSection'

const Donation = () => {
  return (
    <>
    <DonationHeader />
    <OurPrograms />
    <ContributionSection />
    <SuccessStoriesSection />
    <HelpingSection />
    <OurMissionSection />
    <DonationCardsSection />
    </>
  )
}

export default Donation