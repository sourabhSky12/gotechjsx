import TechStackContent from "../common/TechStackContent";

const GeneralFramNode = () => {
  const title = "GENERAL-PURPOSE FRAMEWORKS";
  const description = "We leverage these versatile frameworks to create robust and high-performing Node.js applications. Whether your objective is to develop custom APIs, real-time applications, or intricate enterprise solutions, our expertise ensures the delivery of efficient and scalable products.";
  
  const stats = [
    "Crafting scalable web and mobile applications.",
    "Constructing sturdy APIs and backend services.",
    "Managing application routing and processing HTTP requests.",
    "Enabling database operations.",
    "Providing support for middleware configurations to handle requests and responses."
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

export default GeneralFramNode