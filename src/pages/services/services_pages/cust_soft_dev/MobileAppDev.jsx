import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import GridBlueCard from '../../../../components/common/GridBlueCard'
import WhiteBgCard from '../../../../components/common/WhiteBgCard'
import { useState } from 'react'
import ContactModal from '../../../../components/common/ContactModal'
import CallToAction from '../../../../components/common/CallToAction'
const MobileAppDev = () => {
const [showModal, setShowModal] = useState(false);

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


const mobileAppData = [


   {
    title: 'TTRUSTED AND RENOWNED:',
    description:
      'We are dedicated to serving you with excellence, and this is vouched by our client’s unwavering trust in our services, as we are a trusted custom Software Development Company in Udaipur.',
    icon: '🎯',
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
   // highlight: 'Software Development company in Udaipur',
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
    title: 'FINANCE',
    titlePath: '/services/finance',
    description: [
      'Empowering the financial sector by incorporating the expertise of a   ',
      { text: 'Development company in Udaipur', path: '/services/development-company' },
      ' to enhance  the security and efficiency of the services.',
    ],
  },
   {
    title: 'HEALTHCARE',
    titlePath: '/services/finance',
    description: [
      'We offer cutting-edge solutions for healthcare by making use of managed IT services at a ',
      { text: ' Web Development company in Udaipur ', path: '/services/development-company' },
      ' and digital health technologies.',
    ],
  },
   {
    title: 'MEDIA & ENTERTAINMENT',
    titlePath: '/services/finance',
    description: [
      'Robust IT Solutions at  ',
      { text: ' Digital Marketing Company in Udaipur', path: '/services/development-company' },
      ' offering innovative solutions for digital platforms along with',
      {text: 'SEO Services in Udaipur.',  path: '/services/development-company'},
    ],
  },
   {
    title: 'AUTOMOTIVE',
    titlePath: '/services/finance',
    description: [
      'Dedicated experts provide advanced IT solutions by making use of innovative and effective solutions for the automotive industry, offering operational efficiency.',
      
    ],
  },
   {
    title: 'EDUCATION',
    titlePath: '/services/finance',
    description: [
      'Leveraging the excellence of our ',
      { text: ' IT Company in Udaipur ', path: '/services/development-company' },
      '  to empower educational institutions with digital assistance by our professionals.',
    ],
  },
   {
    title: 'E-COMMERCE',
    titlePath: '/services/finance',
    description: [
      'Ensuring that the website generates enhanced customer engagement and optimizes the user experience, the Digital Marketing Agency in Udaipur generates higher sales. ',
     
    ],
  },
    {
    title: 'GIS',
    titlePath: '/services/finance',
    description: [
      'Accurate data visualization and incorporation of geospatial data for designing advanced Geographic Information Systems at a',
      { text: 'Web Development company in Udaipur. ', path: '/services/development-company' },
      
    ],
  },
];
const mobAppvData=[
{
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "Empower your business with the unique capabilities of AI by partnering with Go InfoTech Solution where we make sure to incorporate more intuitive and responsive results with the use of predictive analytics and chatbots.",
  },
  {
    title: "CLOUD INTEGRATION",
    description:
      "Ensuring seamless integration of cloud services will improve your app’s scalability, effectiveness, and functionality by making sure that the data is integrated and accessible from anywhere.",
  },
  {
    title: "AUGMENTED REALITY",
    description:
      "As a leading Software Development company in Udaipur we believe in incorporating AR to generate a remarkable user experience by meticulously integrating virtual try-ons and interactive 3D models into your app.",
  },
  {
    title: "INTERNET OF THINGS",
    description:
      "Harmonizing the use of sensors and smart devices to integrate real-time data while increasing its functionality and user experience. Incorporating IoT in the business can generate expanded opportunities for user engagement.",
  },

];

  return (
   <>
   <StatsSection stats={stats} content={content}/>
   <IconTopCard
   servicesData={mobileAppData}
   />
     <CallToAction
    
    title="INDUSTRIES GO INFOTECH SOLUTION SERVES:"
    
    buttonText="ALL INDUSTRIES"
    onClick={() => setShowModal(true)}
    
    />
     <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    <WhiteBgCard
    whitecards={whitecardsData}
    columns={3}
    />


    <GridBlueCard
 
  title="TECH INNOVATIONS FOR YOUR MOBILE APP"
  subtitle="AUtilizing cutting-edge technology and innovation to design and deploy functional mobile apps will revolutionize your business growth. Our experts believe in crafting a remarkable user experience to captivate the audience."
    industries={mobAppvData}
     columns={2} 
 
 />   
   </>
  )
}

export default MobileAppDev