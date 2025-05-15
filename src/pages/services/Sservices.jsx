import React from 'react'
import StatsSection from '../../components/common/StatsSection'
import IconTopCard from '../../components/common/IconTopCard'
import GridBlueCard from '../../components/common/GridBlueCard'

const Sservices = () => {
  

const servicesData = [
  {
    title: 'TRUSTED AND RENOWNED',
    description:
      'We are dedicated to serving you with excellence, and this is vouched by our client’s unwavering trust in our services, as we are a trusted custom Software Development Company in Udaipur.',
    highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
  {
    title: 'EXPERTISE AT YOUR SERVICE:',
    description:
      'Our team is dedicated to serving you with expertise, knowledge, and professionalism working to fuel the growth of your business. Choose Go InfoTech Solution for a reliable digital partner.',
    icon: '🎯',
  },
  {
    title: "INDUSTRIES' EXPERTISE:",
    description:
      'We are a trusted Software Development company in Udaipur, with expertise from different industries all around the world using innovation, knowledge, and skills.',
    highlight: 'Software Development company in Udaipur',
    icon: '🛡️',
  },
  {
    title: 'HIGH SATISFACTION RATES',
    description:
      'Empower your business with promising results and IT solutions by professionals who are dedicated to serving you right.',
    icon: '📋',
  },
  {
    title: 'GLOBAL COVERAGE ACROSS TIME ZONES',
    description:
      'We are available 24/7 at your service as we operate across 4 different time zones, which is why we ensure seamless communication. Our team at Go InfoTech is available at your service anytime.',
    icon: '🌐',
  },
  {
    title: 'WIDE RANGE OF SERVICES',
    description:
      'Offering software development services, including custom software development, mobile app development, web application development, software maintenance and support, and more.',
    icon: '⚙️',
  },
];

 const stats = [
   { value: 6, label: "experienced Node specialists worldwide", suffix: "+" },
  { value: 4.8, label: "rating based on 55+ reviews", decimals: 1, suffix: "/5 stars" },
  { value: 90, label: "Node projects successfully delivered", suffix: "+" },
  { value: 8, label: "of expertise in Node development", suffix: " years" },
 ];

 const content = {
   heading: "NODE DEVELOPMENT SERVICES",
  subheading:
    "Count on the expertise of Go InfoTech’s Node professionals to deliver robust solutions tailored to users, incorporating the latest technologies and frameworks.",
 };


  return (
    <>
    <StatsSection stats={stats} content={content}/>
    <IconTopCard servicesData={servicesData}/>
    <GridBlueCard/>
    </>
  )
}

export default Sservices