import React from 'react'
import StatsSection from '../../components/common/StatsSection'
import SoftwareProvide from '../../components/common/SoftwareProvide'
import IconTopCard from '../../components/common/IconTopCard'

const Industries = () => {
  const stats = [
  { value: 80, label: "specialists", suffix: "+" },
  { value: 4.8, label: "review rating based on 60+ reviews", decimals: 1, suffix: "/5 stars" },
  { value: 2, label: "of expertise in business", suffix: "years" },
 
  { value: 40, label: "projects successfully delivered", suffix: "+" },
];

const content = {
  heading: "DIGITAL SOLUTIONS CUSTOM CRAFTED FOR EVERY INDUSTRY",
  subheading:
    "Partner with Go InfoTech for IT solutions that are personalized to align with the specific requirements of your business and lead it toward exponential growth.",
};

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
    <StatsSection stats={stats} content={content}/>
    <SoftwareProvide/>
    <IconTopCard servicesData={companyData}/>
    </>
  )
}

export default Industries