import React from 'react'
import TechStackContent from '../common/TechStackContent'

const UiUx = () => {
  const title = "UI/UX DESIGN";
  const description = "Our UI/UX design team creates intuitive and engaging user experiences that help businesses connect with their audience. We combine creativity with user-centered design principles to deliver solutions that are both beautiful and functional.";
  
  const stats = [
    "15+ UI/UX designers",
    "10 years of experience",
    "200+ successful projects"
  ];

  const technologies = [
    { name: "Figma", image: "/Figma-1.png" },
    { name: "Adobe XD", image: "/Adobe_XD-1.png" },
    { name: "Sketch", image: "/Sketch-1.png" },
    { name: "InVision", image: "/Invision-1.png" },
    { name: "Zeplin", image: "/Zeplin-1.png" },
    { name: "FigJam", image: "/FigJam-1.png" },
    { name: "Miro", image: "/Miro-1.png" },
    { name: "Maze", image: "/Maze-1.png" },
    { name: "Protopie", image: "/Protopie-1.png" }
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

export default UiUx