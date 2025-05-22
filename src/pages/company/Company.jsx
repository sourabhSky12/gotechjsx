import React from 'react'
import GridRightStatsCard from '../../components/common/GridRightStatsCard'
import IconTopCard from '../../components/common/IconTopCard'
import RightSideTextDesc from '../../components/common/RightSideTextDesc'


const Company = () => {
   
const companyData = [
  {
    title: 'TRUSTED AND RENOWNED:',
    description:
     ' We are dedicated to serving you with excellence, and this is vouched by our client’s unwavering trust in our services, as we are a trusted custom Software Development Company in Udaipur.',
     highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
  {
    title: 'EXPERTISE AT YOUR SERVICE',
    description:
      'Our team is dedicated to serving you with expertise, knowledge, and professionalism working to fuel the growth of your business. Choose Go InfoTech Solution for a reliable digital partner.',
    icon: '🎯',
  },
  {
    title: "INDUSTRIES' EXPERTISE:",
    description:
      'We are a trusted Software Development company in Udaipur, with expertise from different industries all around the world using innovation, knowledge, and skills.',
    // highlight: 'Software Development company in Udaipur',
    icon: '🛡️',
  },
]
  return (
    <>
    <RightSideTextDesc
    heading="EXPERIENCE EXCELLENCE WITH GO INFOTECH"
    subheading="Excel Your Business with Custom Software Development Company in Udaipur"
       
    
    />
    <GridRightStatsCard/>
    <IconTopCard servicesData={companyData} />

    
    </>
  )
}

export default Company