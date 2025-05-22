import React from 'react'
import TechStackContent from '../common/TechStackContent'

const BackEnd = () => {
  const title = "BACK-END DEVELOPMENT";
  const description = "We help you build a strong foundation for your software and applications with scalable and secure back-end systems that will enable you to handle all your tasks seamlessly and result in the robust growth of your business.";
  
  const stats = [
    "20+ Back-end developers",
    "8 years of experience",
    "4.8 rating on Google"
  ];

  const technologies = [
    { name: ".NET", image: "NET-1.png" },
    { name: "Go", image: "GOlang-1.png" },
    { name: "Java", image: "Java-1.png" },
    { name: "Scala", image: "Scala-1.png" },
    { name: "Node JS", image: "NodeJS-1.png" },
    { name: "PHP", image: "PHP-1.png" },
    { name: "Python", image: "Python-1.png" },
    { name: "Ruby", image: "Ruby-1.png" },
    { name: "Rust", image: "Rust-1.png" }
  ];

  return (
    <TechStackContent
      title={title}
      description={description}
      stats={stats}
      technologies={technologies}
    />
  );
}

export default BackEnd
