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
    { name: "Healthkit", image: "/healthkit.png" },
    { name: "RxSwift", image: "/rxjs-1.png" },
    { name: "Swift", image: "/Swift-1.png" }
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