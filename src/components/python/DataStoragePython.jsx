import React from 'react'
import TechStackContent from '../common/TechStackContent';
const DataStoragePython = () => {
 
  const title = "DATABASES & STORAGE SOLUTIONS";
  const description = "Databases are crucial components of Python applications, providing effective capabilities for storing, retrieving, and managing data.";
  
  const stats = [
    "Guaranteeing effective data storage and retrieval for Python applications.",
    "Supporting intricate data structures and relationships.",
    "Facilitating high availability and integrity of data.",
    "Enabling scalable solutions for data management.",
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

export default DataStoragePython