import React from 'react'
import TechStackContent from '../common/TechStackContent';
function DatabaseStorage() {
     const title = "DATABASES & STORAGE SOLUTIONS";
  const description = "Our team excels at incorporating and managing several databases, ensuring data integration, cybersecurity, and effective performance.";
  
  const stats = [
    "Deploy relational databases such as MySQL, PostgreSQL, and SQL Server with ease.",
    "Seamless incorporation of NoSQL databases like MongoDB, Cassandra, and DynamoDB.",
    "Efficient management of cloud storage solutions such as Amazon S3, Azure Blob Storage, and Google Cloud Storage.",
    
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
   <>
   
     <TechStackContent
      title={title}
      description={description}
      stats={stats}
      technologies={technologies}
      
    />
   
   </>
  )
}

export default DatabaseStorage