import React from 'react'
import TechStackContent from '../common/TechStackContent'

const MobileApp = () => {
  const title = "MOBILE APP DEVELOPMENT";
  const description = "Our team of dedicated experts and developers at the leading IT Company in Udaipur is here to skillfully craft captivating and functional mobile apps for Android and iOS platforms, crafted to meet your unique needs and reach out target audience.";
  
  const stats = [
    "10+ Mobile developers",
    "8 years of experience",
    "4.8 rating on Google"
  ];

  const technologies = [
    { name: "Flutter", image: "Angular-icon.png" },
    { name: "Ionic", image: "Ionic-1.png" },
    { name: "Kotlin", image: "Kotlin-1.png" },
    { name: "React Native", image: "React-Native-1.png" },
    { name: "Swift", image: "Swift-1.png" }
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

export default MobileApp