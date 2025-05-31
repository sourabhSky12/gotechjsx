import React from 'react'
import TechStackContent from '../common/TechStackContent';
const BackMvp = () => {
     const title = "BACK-END DEVELOPMENT";
  const description = "Our professionals are dedicated to building a remarkable MVP application that is well-built, scalable, and secured with solid back-end technology. We aim to custom curate unique technological solutions fulfilling your business requirements and optimally managing data operations.";
  
  const stats = [
    "50+ Back-end developers.",
    "8 years of experience.",
    "4.8 rating on Google."
  ];

  const technologies = [
    { name: ".NET", image: "/NET-1.png" },
    { name: "Go", image: "/GOlang-1.png" },
    { name: "Java", image: "/Java-1.png" },
    { name: "Scala", image: "/Scala-1.png" },
    { name: "Node JS", image: "/NodeJS-1.png" },
    { name: "PHP", image: "/PHP-1.png" },
    { name: "Python", image: "/Python-1.png" },
    { name: "Ruby", image: "/Ruby-1.png" },
    { name: "Rust", image: "/Rust-1.png" }
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

export default BackMvp