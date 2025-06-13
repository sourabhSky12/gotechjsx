import React from 'react'
import TechStackContent from '../common/TechStackContent';
const MobileMvp = () => {
    const title = "MOBILE APP DEVELOPMENT";
  const description = "We ensure that we stay ahead of the market by crafting feature-rich and high-performance mobile technology that is scalable and user-friendly for Android and iOS platforms. We provide unique solutions that are tailored to the preferences and needs of your target audience in startup MVP development.";
  
  const stats = [
    "30+ Mobile developers",
    "8 years of experience.",
    "4.8 rating on Google."
  ];

  const technologies = [
    { name: "Flutter", image: "/Flutter-1.png" },
    { name: "Ionic", image: "/Ionic-1.png" },
    { name: "Kotlin", image: "/Kotlin-1.png" },
    { name: "React Native", image: "/React-Native-1.png" },
    { name: "Swift", image: "/Swift-1.png" }
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

export default MobileMvp