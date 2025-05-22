import React from 'react'
import ServiceContent from '../common/ServiceContent'

const IntelAuto = () => {
  const description = "We are dedicated to serving you with the best services incorporating state-of-the-art technologies like AI, machine learning, blockchain, and IoT, while we transform your business to achieve new heights.";
  
  const sections = [
    {
      title: "AI & ML SOLUTIONS",
      content: "Empower your business to grow by incorporating Artificial Intelligence and Machine Learning to enhance the decision making process and robust growth of business."
    },
    {
      title: "BLOCKCHAIN SOLUTIONS",
      content: "Secure and transparent blockchain solutions tailored to your unique needs and industry requirements, ranging from cryptocurrencies to decentralized applications (DApps)."
    },
    {
      title: "IoT Solutions",
      content: "A seamless interlinkage and data exchange using our IoT Solutions between devices, systems and individuals which will fuel the growth of the business."
    }
  ];

  return <ServiceContent description={description} sections={sections} />;
}

export default IntelAuto