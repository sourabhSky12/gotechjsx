import React from 'react'
import TechStackContent from '../common/TechStackContent';
function CloudplatMl() {
     const title = "CLOUD PLATFORMS";
  const description = "Ensuring the cloud platforms deliver responsive, functional, and globally accessible database services for the purpose of effective operations management and maintaining high performance.";
  
  const stats = [
    "Leveraging cloud resources to train models on large datasets without hardware limitations;",
    "Hosting models in the cloud for global accessibility and high availability;",
    "Storing vast amounts of data securely and cost-effectively in the cloud;",
    "Working on machine learning projects collaboratively and maintaining versions of models and data",
  ];

  const technologies = [
    { name: "AWS", image: "/aws-1.png" },
    { name: "Firebase", image: "/firebase.png" },
    
    { name: "Google Cloud", image: "/googleCloud.png" },
    { name: "IBM Watson", image: "/ibm-watson.png" },
    { name: "Microsoft Azure", image: "/Microsoft_Azure.png" },
   
  ];

  return (
   <>
    <TechStackContent
      title={title}
      description={description}
      stats={stats}
      technologies={technologies}
      
    />
   
   </>
  )
}

export default CloudplatMl