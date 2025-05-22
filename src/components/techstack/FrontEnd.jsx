import React from 'react'
import TechStackContent from '../common/TechStackContent'

const FrontEnd = () => {
  const title = "FRONT-END DEVELOPMENT";
  const description = "Empower your business with our expert front-end solutions focusing fundamentally on the smooth user experience and effectively handle your needs and preferences and aligning it to the industry's unique requirement.";
  
  const stats = [
    "20+ Front-end developers",
    "8 years of experience",
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

export default FrontEnd