import TechStackContent from "../common/TechStackContent";

const UiUxEComm = () => {
   const title = "UI/UX DESIGN";
  const description = "Through our user-centric approach, we are successful in reaching the target audience via our visually appealing UI/UX designs that are user-friendly and lead to an exceptional user experience on all platforms.";
  
  const stats = [
    "10+ Design specialists;",
    "8 years of experience;",
    "4.8 rating on Google."
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

export default UiUxEComm