import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import GridBlueBaseBord from '../../../../components/common/GridBlueBaseBord'
import CallToAction from '../../../../components/common/CallToAction'
import { useState } from 'react'
import ContactModal from '../../../../components/common/ContactModal'
const Angular = () => {

   const [showModal, setShowModal] = useState(false);

  const stats = [
   { value: 10, label: "experienced Angular specialists worldwide", suffix: "+" },
  { value: 4.8, label: "rating based on 55+ reviews", decimals: 1, suffix: "/5 stars" },
  { value: 5, label: "Angular projects delivered", suffix: "+" },
  { value: 8, label: "Cool Numberof expertise in Angular development", suffix: " years" },
 ];

 const content = {
   heading: "ANGULAR DEVELOPMENT SERVICES",
  subheading:
    "Enhance the efficiency of your projects with the assistance of the professionals of Go InfoTech Angular Front End Development. ",
 };

const angularData = [
  {
    title: 'BUSINESS-ORIENTED PERSONALIZATION',
    description:
      'We offer comprehensive software solutions that are custom-developed to your specific educational institution’s requirements.',
  //  highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
  {
    title: 'OPTIMIZED PERFORMANCE AND FLEXIBILITY',
    description:
      'Explore the expertise of our professionals, offering high-quality performance and scalability in the software solutions offered for the educational industry.',
    icon: '🎯',
  },
  {
    title: "COLLABORATE WITH CUTTING-EDGE TECHNOLOGIES",
    description:
      'We partner with updated technology tools to elevate performance and drive sales. We make use of AI, forecasting analytics, and data analytics for effective operations in the educational sector.',
   // highlight: 'Software Development company in Udaipur',
    icon: '🛡️',
  },
  {
    title: 'ADHERENCE TO REGULATORY COMPLIANCE AND SECURITY',
    description:
      'At Go InfoTech, we value your credibility, which is why we prioritize security in our software solutions while simultaneously focusing on regulatory compliance in the educational industry norms.',
    icon: '📋',
  },
  {
    title: 'FACILITATING SCALABILITY AND INTEGRATION',
    description:
      'We offer scalable solutions for facilitating seamless user interaction with academic professionals and offering a compatible and interactive interface.',
    icon: '🌐',
  },
  {
    title: 'EFFECTIVE SUPPORT AND REAL-TIME MAINTENANCE',
    description:
      'We believe in offering real-time support and teacher assistance while paying deliberate attention to their unique needs and requirements in the educational sector.',
    icon: '⚙️',
  },
];

const blueBaseData = [
  {
    title: 'ANGULAR STAFF AUGMENTATION',
    description: 'Add the expertise of the Angular team of Go InfoTech to your existing team, and make sure you augment it with highly specialized and experienced healthcare professionals from the most trusted Custom Software Development Company in Udaipur.',
  },
   {
    title: 'ANGULAR WEB & MOBILE DEVELOPMENT',
    description: 'Experience the excellence of resilient and scalable web and mobile application development by our Angular specialists. Our team is dedicated to helping you scale up and meet the unique needs of your business as it grows.',
  },
   {
    title: 'SINGLE-PAGE APPLICATION (SPA) DEVELOPMENT',
    description: 'Our team of developers is dedicated to developing responsive single-page applications. Our developers make use of cutting-edge technology and the capabilities of Angular to craft Single Page Applications (SPAs) that deliver a seamless user experience akin to native apps.',
  },
   {
    title: 'COMPONENT-BASED ANGULAR DEVELOPMENT',
    description: 'Ensuring that Aungular’s component-based architecture constructs modular and sustainable applications. Our developers excel in crafting reusable components, enhancing both the efficiency and the clarity of our codebase.',
  },
    {
    title: 'ANGULAR MIGRATION SERVICES',
    description: 'Benefit from the Angular expertise that will enable you to experience high-quality performance and a durable ecosystem by transitioning from your existing platform to an Angular platform',
  },
    {
    title: 'ANGULAR SUPPORT AND MAINTENANCE',
    description: 'Experience continuous support and maintenance assistance from our experts with due diligence to make sure that your Angular application is updated and performing right.',
  },
]



  return (
   <>
   
   <StatsSection stats={stats} content={content}/>
   <IconTopCard servicesData={angularData}/>
    <GridBlueBaseBord
     headings="ANGULAR SOFTWARE DEVELOPMENT SERVICES"
    blueBaseData={blueBaseData}
    />
   <CallToAction
    title="ARE YOU SET TO EMBARK YOUR JOURNEY WITH ANGULAR?"
    subtitle="Let Go InfoTech’s professionals assist you in unleashing the power of Angular to build scalable and effective web applications."
    buttonText="REQUEST A CONSULTATION"
    onClick={() => setShowModal(true)}
    
   /> 
   
   <ContactModal show={showModal} onClose={() => setShowModal(false)}/>
   </>
  )
}

export default Angular