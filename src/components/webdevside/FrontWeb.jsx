import React from 'react'
import TechStackContent from '../common/TechStackContent';
const FrontWeb = () => {
  const title = "FRONT-END DEVELOPMENT";
  const description = "Enhance your business with our adept front-end solutions, prioritizing seamless user experiences. We adeptly cater to your requirements and preferences, aligning them with industry-specific demands.";
  
  const stats = [
    "20+ Front-end developers;",
    "8 years of experience;",
    "4.8 rating on Google"
  ];

  const technologies = [
    { name: "Angular", image: "Angular-icon.png" },
    { name: "React.JS", image: "React-JS.png" },
    { name: "Vue", image: "Vue.png" }
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

export default FrontWeb