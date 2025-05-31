import React from 'react'
import TechStackContent from '../common/TechStackContent';

const FrontMvp = () => {
 const title = "FRONT-END DEVELOPMENT";
  const description = "We are dedicated to empowering your startup by incorporating cutting-edge technology and crafting a tailored solution by functional MPV development. We aim to design a seamless user experience that is scalable and recognizes the preferences of the user while also addressing unique challenges in your industry.";
  
  const stats = [
    "50+ Front-end developers",
    "8 years of experience",
    "4.8 rating on Google"
  ];

  const technologies = [
    { name: "Angular", image: "/Angular-icon.png" },
    { name: "React.JS", image: "/React-JS.png" },
    { name: "Vue", image: "/Vue.png" }
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
  );
}

export default FrontMvp