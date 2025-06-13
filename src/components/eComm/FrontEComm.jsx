import TechStackContent from "../common/TechStackContent";

const FrontEComm = () => {
  const title = "FRONT-END DEVELOPMENT";
  const description = "Empower your business with our expert front-end solutions, focusing fundamentally on a smooth user experience, effectively handling your needs and preferences, and aligning them to the industry’s unique requirements.";
  
  const stats = [
    "20+ Front-end developers;",
    "8 years of experience",
    "4.8 rating on Google"
  ];

  const technologies = [
     { name: "Angular", image: "/Angular-icon.png" },
    { name: "React.JS", image: "/React-JS.png" },
    { name: "Vue", image: "/Vue.png" },
    { name: "Swift", image: "/Swift-1.png" },
    { name: "Ionic", image: "/Ionic-1.png" },
    { name: "Kotlin", image: "/Kotlin-1.png" },
    
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

export default FrontEComm