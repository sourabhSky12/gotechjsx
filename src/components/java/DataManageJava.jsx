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
    { name: "Cassandra", image: "/Cassandra_logo1-1.png" },
    
    
    { name: "MongoDB", image: "/mongodb-icon1-1.png" },
    { name: "MySQL", image: "/mysql1-1.png" },
    { name: "PostgreSQL", image: "/Postgresql1-1.png" },
    { name: "Redis", image: "/redis-logo3.png" },
    { name: "SQLite", image: "/sqlite.png" },
   
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