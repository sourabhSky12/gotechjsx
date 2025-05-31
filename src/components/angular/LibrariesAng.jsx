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
    { name: ".NET", image: "NET-1.png" },
    { name: "Go", image: "GOlang-1.png" },
    { name: "Java", image: "Java-1.png" },
    { name: "Scala", image: "Scala-1.png" },
    { name: "Node JS", image: "NodeJS-1.png" },
    { name: "PHP", image: "PHP-1.png" },
    { name: "Python", image: "Python-1.png" },
    { name: "Ruby", image: "Ruby-1.png" },
    { name: "Rust", image: "Rust-1.png" },
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