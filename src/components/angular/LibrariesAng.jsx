import TechStackContent from "../common/TechStackContent";

const LibrariesAng = () => {
    const title = "COMPONENT LIBRARIES & FRAMEWORKS";
  const description = "At Go InfoTech, a leading Software Development company in Udaipur, we employ these libraries to accelerate UI development and maintain uniformity across Angular projects. These libraries come with pre-built UI components, sparing us unnecessary time and effort and helping us prioritize the business logic and create functionality-rich applications.";
  
  const stats = [
    "Developing modular and interactive interfaces",
    "Robust development by incorporating pre-made components",
    "Uniform features, design, and functionality on cross-platform"
  ];

  const technologies = [
    { name: "Angular", image: "/angular-material-1.png" },
    { name: "Flutter", image: "/Flutter-1.png" },
    { name: "Ionic", image: "/Ionic-1.png" },
    { name: "Kotlin", image: "/Kotlin-1.png" },
    { name: "React JS", image: "/React-JS.png" },
   
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

export default LibrariesAng