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

export default DatabaseManageNode