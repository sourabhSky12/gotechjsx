import TechStackContent from "../common/TechStackContent";

const FramePython = () => {
   const title = "PYTHON FRAMEWORKS & LIBRARIES";
  const description = "These frameworks and libraries cover a wide array of tools, spanning web development, machine learning, and AI.";
  
  const stats = [
    "Expediting the development and deployment of web applications.",
    "Creating sophisticated machine learning models and AI-driven solutions.",
    "Supporting the development and integration of RESTful APIs",
    "Improving application security and scalability.",
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

export default FramePython