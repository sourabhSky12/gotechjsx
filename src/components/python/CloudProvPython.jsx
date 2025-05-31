
import TechStackContent from "../common/TechStackContent";
const CloudProvPython = () => {
    const title = "CLOUD PROVIDERS";
  const description = "Cloud providers provide scalable and flexible hosting solutions, which improve the deployment and management of Python applications.";
  
  const stats = [
    "Ensuring scalable hosting environments for Python applications.",
    "Facilitating global accessibility and high availability.",
    "Supplying robust tools for application monitoring and management.",
    "Supporting continuous integration and deployment workflows.",
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

export default CloudProvPython