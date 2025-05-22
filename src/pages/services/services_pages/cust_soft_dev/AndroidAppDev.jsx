import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import GridBlueCard from '../../../../components/common/GridBlueCard'

import RightSideTextDesc from '../../../../components/common/RightSideTextDesc'
import WhiteBgCard from '../../../../components/common/WhiteBgCard'
const AndroidAppDev = () => {
  
 const stats = [
   { value: 30, label: "mobile development experts", suffix: "+" },
  { value: 8, label: "of expertise ", suffix: " years" },
  { value: 60, label: "successful projects delivered", suffix: "+" },
 
   { value: 4.85, label: "overall review rating based on 55+ reviews", decimals: 2, suffix: "/5 stars" },
 ];

 const content = {
   heading: "MOBILE APPLICATION DEVELOPMENT BY EXPERTS",
  subheading:
    "Empower your business with the excellence of the experts in Mobile App Development at GoTech.",
 };

 const startupmvpData = [


   {
    title: 'TRUSTED AND RENOWNED',
    description:
      'We are dedicated to serving you with excellence, and this is vouched by our client’s unwavering trust in our services, as we are a trusted custom Software Development Company in Udaipur.',
    icon: '🎯',
    highlight: 'custom Software Development Company in Udaipur',
  },

  {
    title: 'EXPERTISE AT YOUR SERVICE',
    description:
      'Our team is dedicated to serving you with expertise, knowledge, and professionalism working to fuel the growth of your business. Choose Go InfoTech Solution for a reliable digital partner.',
    // highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
 
  {
    title: "INDUSTRIES' EXPERTISE",
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
const whitecardsData = [
  {
    title: 'EDUCATION',
    titlePath: '/services/finance',
    description: [
      'Developing Android apps that result in e-learning, integration of assignments, and elevated student engagement.   ',
      // { text: 'Development company in Udaipur', path: '/services/development-company' },
      // ' to enhance  the security and efficiency of the services.',
    ],
  },
   {
    title: 'HEALTHCARE',
    titlePath: '/services/finance',
    description: [
      'Integrating operations like telemedicine, scheduling appointments, monitoring healthcare, & more by developing Android Solutions.',
      
    ],
  },
   {
    title: 'FINTECH',
    titlePath: '/services/finance',
    description: [
      'Crafting an Android application that is secure for monetary monitoring sectors like banking, insurance, and fintech with an interactive and scalable user interface.  ',
      // { text: ' Digital Marketing Company in Udaipur', path: '/services/development-company' },
      // ' offering innovative solutions for digital platforms along with',
      // {text: 'SEO Services in Udaipur.',  path: '/services/development-company'},
    ],
  },
   {
    title: 'MEDIA & ENTERTAINMENT',
    titlePath: '/services/finance',
    description: [
      'Designing Android apps for seamless content management, a visually appealing user interface, & engaging platforms.',
      
    ],
  },
   {
    title: 'E-COMMERCE',
    titlePath: '/services/finance',
    description: [
      'Creating Android platforms for hassle-free product browsing, predictive analysis, enhanced customer engagement, & value delivery.',
     
    ],
  },
   {
    title: 'AUTOMOTIVE',
    titlePath: '/services/finance',
    description: [
      'Developing apps that optimize the vehicles capabilities by offering navigation, diagnostics, & a car stereo system. ',
     
    ],
  },
    {
    title: 'GIS',
    titlePath: '/services/finance',
    description: [
      'Creating Android applications for gathering data, conducting spatial analysis, and visualizing maps within Geographic Information Systems.',
      
      
    ],
  },
];
const andAppvData=[
{
    title: "WEB DEVELOPMENT",
    description:
      "Our specialty is building gorgeous, responsive websites that are customized to your company's requirements.",
  },
  {
    title: "MOBILE APP",
    description:
      "For the iOS and Android operating systems, we develop beautiful, intuitive mobile applications.",
  },
  {
    title: "DEV OPS",
    description:
      "To improve operational effectiveness and optimize your development process, we provide all-inclusive DevOps services.",
  },
  {
    title: "DIGITAL MARKETING",
    description:
      "Our premium digital marketing services are intended to increase your online visibility and quicken the expansion of your company.",
  },

];


  return (
    <>
    
    <StatsSection stats={stats} content={content}/>
    <IconTopCard servicesData={startupmvpData}/>
     <RightSideTextDesc
    heading="ANDROID SOLUTIONS TO INDUSTRY-SPECIFIC NEEDS"
    subheading="Connecting technology with different industries through tailored Android applications for enhanced growth and innovation."
   />

   <WhiteBgCard
    whitecards={whitecardsData}
    columns={3}
    />
    
    <GridBlueCard
 
  title="TECH INNOVATIONS FOR YOUR ANDROID APP"
  subtitle="Bridging the gap between technology and diverse industries with customized Android applications that drive growth and innovation"
    industries={andAppvData}
     columns={2} 
 
 />   
    

    
    </>
  )
}

export default AndroidAppDev