import TechStackContent from "../common/TechStackContent";

const CloudCrossPlat = () => {
   const title = "CLOUD PLATFORMS";
  const description = "We meticulously deploy your cross-platform apps on a cloud server to ensure anytime accessibility and elevated performance.";
  
  const stats = [
    "Developing cross-platform apps for global user experience ",
    "Enhanced scalability with elevated demand ",
    "Security standards & consistent deployment in the cloud."
  ];

  const technologies = [
    { name: "Angular", image: "/Angular-icon.png" },
    { name: "React.JS", image: "/React-JS.png" },
    { name: "Vue", image: "/Vue.png" }
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

export default CloudCrossPlat