
import TechStackContent from '../common/TechStackContent';
const UiUxWeb = () => {
 const title = "UI/UX DESIGN";
  const description = "Employing our user-centric methodology, we effectively captivate the target audience with visually stunning UI/UX designs. These designs emphasize user-friendliness and deliver an outstanding user experience across multiple platforms.";
  
  const stats = [
    "10+ Design specialists;",
    "8 years of experience;",
    "4.8 rating on Google."
  ];

  const technologies = [
    { name: "Figma", image: "Figma-1.png" },
    { name: "Adobe XD", image: "Adobe-XD-1.png" },
    { name: "Sketch", image: "Sketch-1.png" },
    { name: "InVision", image: "InVision-1.png" },
    { name: "Zeplin", image: "Zeplin-1.png" }
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

export default UiUxWeb