import React from 'react'

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

export default DataStoragePython