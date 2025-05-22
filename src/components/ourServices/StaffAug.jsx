import React from 'react'
import ServiceContent from '../common/ServiceContent'

const StaffAug = () => {
  const description = "Go-Infotech Solution Pvt Ltd is a custom Software Development Company in Udaipur aiming to provide seamless project execution by staff augmentation for optimal resource management:";
  
  const sections = [
    {
      title: "IT STAFF AUGMENTATION",
      content: "We are dedicated to providing you with highly skilled and experienced IT professionals who will help you focus on core aspects so that your business reaches new heights."
    },
    {
      title: "COMMITTED TEAM",
      content: "Our team at Go Tech Solution is a living testament of expertise and knowledge who are committed to meeting your unique business needs."
    },
    {
      title: "ON DEMAND CTO",
      content: "We offer CTO services for strategic technological assistance so that your business reaches exponential heights without any overhead of hiring a full-time professional."
    }
  ];

  return <ServiceContent description={description} sections={sections} />;
}

export default StaffAug