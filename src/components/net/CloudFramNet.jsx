import TechStackContent from "../common/TechStackContent";

const CloudFramNet = () => {
  const title = "CLOUD PLATFORMS & TOOLS";
  const description = "We employ diverse cloud platforms and tools to provide scalable and adaptable hosting solutions, optimizing the deployment and administration of .NET applications.";
  
  const stats = [
    "Azure for hosting and administering applications",
    "Incorporating DevOps methodologies for seamless integration and deployment",
    "Utilizing cloud services for application scalability and performance monitoring",
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

export default CloudFramNet