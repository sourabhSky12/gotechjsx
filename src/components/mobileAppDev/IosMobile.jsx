import React from 'react'
import TechStackContent from '../common/TechStackContent';
const IosMobile = () => {
 const title = "IOS APP DEVELOPMENT";
  const description = "Developing a useful and responsive iOS App for a functional and comprehensive mobile development solution for the effectiveness of business. We specialize in:";
  
  const stats = [
    "iPhone App Development",
    "iPad App Development",
    "Apple Watch App Development",
    "Apple TV App Development"
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

export default IosMobile