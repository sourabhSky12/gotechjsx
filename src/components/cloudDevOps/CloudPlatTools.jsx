import React from 'react'
import TechStackContent from '../common/TechStackContent';
function CloudPlatTools() {
      const title = "CLOUD PLATFORMS & TOOLS";
  const description = "We take pride in ensuring that our team has expertise in ensuring a responsive and functional cloud service provider that is globally accessible.";
  
  const stats = [
    "Effortlessly deploy applications across AWS, Azure, Google Cloud, and other leading platforms.",
    "Harness the power of Kubernetes, Docker, and Terraform for streamlined containerization and orchestration.",
    "Build serverless architectures with AWS Lambda, Azure Functions, and other cutting-edge solutions.",
    
  ];

  const technologies = [
    { name: "AWS", image: "/aws-1.png" },
    { name: "DigitalOcean", image: "/digitalocean.png" },
    { name: "Firebase", image: "/firebase.png" },
    { name: "Google Cloud Platform", image: "/googleCloud.png" },
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

export default CloudPlatTools