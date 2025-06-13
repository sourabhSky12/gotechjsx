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
   { name: "Figma", image: "/Figma-1.png" },
    { name: "Adobe XD", image: "/Adobe_XD-1.png" },
    { name: "Sketch", image: "/Sketch-1.png" },
    { name: "InVision", image: "/Invision-1.png" },
    { name: "Zeplin", image: "/Zeplin-1.png" },
    { name: "FigJam", image: "/FigJam-1.png" },
    { name: "Miro", image: "/Miro-1.png" },
    { name: "Maze", image: "/Maze-1.png" },
    { name: "Protopie", image: "/Protopie-1.png" }
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