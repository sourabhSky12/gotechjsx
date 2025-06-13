import React from 'react'
import TechStackContent from '../common/TechStackContent';
function BackEndCloud() {
     const title = "BACK-END TECHNOLOGIES";
  const description = "We focus on the efficient utilization of back-end technologies to design, effective, scalable, and responsive cloud-based applications.";
  
  const stats = [
    "Designing applications while making use of Node.js, Python, Java, .NET, etc.",
    "Incorporate microservices architectures to enhance scalability and flexibility.",
    "Effortlessly integrate third-party APIs and services into your infrastructure.",
   
  ];

  const technologies = [
    { name: ".NET", image: "/NET-1.png" },
    { name: "C++", image: "/cplus.png" },
    { name: "Go", image: "/GOlang-1.png" },
    { name: "Java", image: "/Java-1.png" },
    { name: "Scala", image: "/Scala-1.png" },
    { name: "Node JS", image: "/NodeJS-1.png" },
    { name: "PHP", image: "/PHP-1.png" },
    { name: "Python", image: "/Python-1.png" },
    { name: "Laravel", image: "/Laravel-1.png" },
    
    
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

export default BackEndCloud