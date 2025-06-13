import TechStackContent from "../common/TechStackContent";

const DatabaseManageNode = () => {
  const title = "DATABASES & DATA MANAGEMENT";
  const description = "We utilize these data storage and management solutions to develop Node.js applications equipped with efficient, scalable, and resilient data handling capabilities. Whether you require the creation of a new database, migration of existing data, or optimization of data queries, our expertise is at your service.";
  
  const stats = [
    "Handling data storage and retrieval for bespoke applications.",
    "Overseeing user data, application data, and session data.",
    "Scaling applications both vertically and horizontally.",
    "Ensuring data security and integrity.",
    "Executing intricate queries and manipulating data."
  ];

  const technologies = [
    { name: "Cassandra", image: "/Cassandra_logo1-1.png" },
    { name: "CouchDB", image: "/CouchDB_logo.png" },
    { name: "MariaDB", image: "/mariadb.png" },
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

export default DatabaseManageNode