import TechStackContent from "../common/TechStackContent";

const FrameworkJava = () => {
  const title = "JAVA FRAMEWORKS & LIBRARIES";
  const description = "Incorporating a diverse range of frameworks and libraries into our Java tech stack to amplify Java’s capabilities for efficient and scalable application development.";
  
  const stats = [
    "Enabling swift development and deployment of resilient applications.",
    "Offering a structured approach for both web and enterprise projects.",
    "Boosting application security and scalability.",
    "Supporting the development and integration of RESTful APIs.",
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

export default FrameworkJava