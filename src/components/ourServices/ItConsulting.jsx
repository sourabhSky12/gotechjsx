import React from 'react'
import ServiceContent from '../common/ServiceContent'

const ItConsulting = () => {
  const description = "Our IT Company in Udaipur is here to navigate you in the evolving tapestry of Technology while providing appropriate guidance from highly qualified professionals:";
  
  const sections = [
    {
      title: "TECHNICAL DUE DILIGENCE",
      content: "After conducting a thorough evaluation of your business while assessing the project feasibility, relevant risks, and growth ambition of your project, our team provides strategic insights for your project growth."
    },
    {
      title: "PROJECT MANAGEMENT AND COORDINATION",
      content: "Our team ensures that your project delivery is timely and effective through proper management and streamlined communication with the development teams."
    },
    {
      title: "DATA ANALYTICS AND BUSINESS INTELLIGENCE",
      content: "Ensure that you make data-driven decisions by thorough evaluation of your data and gain a competitive advantage over your rivals with our Data analytics and BI services."
    }
  ];

  return <ServiceContent description={description} sections={sections} />;
}

export default ItConsulting