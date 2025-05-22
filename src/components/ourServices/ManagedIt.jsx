import React from 'react'
import ServiceContent from '../common/ServiceContent'

const ManagedIt = () => {
  const description = "At Go InfoTech Solution, a leading Software Development company in Udaipur we offer managed IT services to foster the growth of your business:";
  
  const sections = [
    {
      title: "DATABASE DEVELOPMENT SERVICES",
      content: "To ensure the effective storage, retrieval, and management of business data we design, develop and optimize database development services."
    },
    {
      title: "CLOUD & DEVOPS SOLUTIONS",
      content: "We incorporate the best practices of DevOps and cloud solutions to expedite software delivery and collaborative space along with streamlining the entire development and deployment lifecycle."
    },
    {
      title: "SOLUTION ARCHITECTURE SERVICES",
      content: "Our team is dedicated to designing and deploying adaptive, secure, and high-performance IT infrastructure that is crafted to align with your business objectives."
    }
  ];

  return <ServiceContent description={description} sections={sections} />;
}

export default ManagedIt