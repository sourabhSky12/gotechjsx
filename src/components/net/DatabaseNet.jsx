import TechStackContent from "../common/TechStackContent";

const DatabaseNet = () => {
 const title = "DATABASES & STORAGE SOLUTIONS";
  const description = "Databases play a crucial role in .NET applications, offering efficient data storage, retrieval, and management capabilities.";
  
  const stats = [
    "SQL Server for managing large datasets and complex queries",
    "MongoDB for flexible data storage with NoSQL databases",
    "Azure SQL Database for cloud-based data management"
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

export default DatabaseNet