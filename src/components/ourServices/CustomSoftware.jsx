import React from 'react'
import ServiceContent from '../common/ServiceContent'

const CustomSoftware = () => {
  const description = "Our team is committed to delivering unique software solutions to your specific business requirements. Our end-to-end development service results in high-performance outcomes that are structured to your business needs.";
  
  const sections = [
    {
      title: "WEB DEVELOPMENT",
      content: "Aim to develop a user-centric web application that is adaptive, intuitive, visually engaging, and designed to meet the unique needs of your business."
    },
    {
      title: "MOBILE DEVELOPMENT",
      content: "Crafting a mobile application that is user-friendly, visually appealing, and can be used on Android and iOS platforms to stay updated with the evolving tech."
    },
    {
      title: "DISCOVERY PHASE",
      content: "We assist you in a thorough evaluation of your business for properly crafting the vision, goals, and intent of the business."
    }
  ];

  return <ServiceContent description={description} sections={sections} />;
}

export default CustomSoftware