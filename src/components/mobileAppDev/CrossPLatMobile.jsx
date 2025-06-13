import TechStackContent from "../common/TechStackContent";

const CrossPLatMobile = () => {
 const title = "CROSS-PLATFORM APP DEVELOPMENT";
  const description = "We are effective in crafting budget-friendly mobile application solutions by incorporating cutting-edge technology and quality features for a better user experience across cross-platforms. We deliver excellence in:";
  
  const stats = [
    "React Native Development",
    "Flutter App Development",
   
  ];

  const technologies = [
    { name: "Flutter", image: "/Flutter-1.png" },
    { name: "React.JS", image: "/React-JS.png" },
    
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

export default CrossPLatMobile