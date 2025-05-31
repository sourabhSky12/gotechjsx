import TechStackContent from "../common/TechStackContent";
const EcommFramPhp = () => {
  const title = "E-COMMERCE FRAMEWORKS";
  const description = "We excel in e-commerce frameworks, streamlining the process of setting up online stores. With capabilities for managing shopping carts, integrating payment gateways, and handling inventory, we ensure a smooth e-commerce experience.";
  
  const stats = [
    "Developing e-commerce websites",
    "Creating shopping carts",
    "Integrating payment gateways",
    "Developing e-commerce applications",
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

export default EcommFramPhp