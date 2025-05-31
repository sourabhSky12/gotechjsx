import TechStackContent from "../common/TechStackContent";

const DataManageJava = () => {
  const title = "DATABASES & DATA MANAGEMENT";
  const description = "Within our Java applications, databases and data management tools play a crucial role in ensuring efficient data storage, retrieval, and processing.";
  
  const stats = [
    "Efficiently managing large datasets and executing complex queries.",
    "Supporting transactional operations to maintain data integrity.",
    "Facilitating data persistence and implementing caching mechanisms."
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

export default DataManageJava