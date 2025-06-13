import TechStackContent from "../common/TechStackContent";

const BackTechReact = () => {
 const title = "BACKEND TECHNOLOGIES FOR REACT";
  const description = "Augmenting React front-ends with resilient backend technologies for comprehensive full-stack development, guaranteeing seamless integration and optimal performance.";
  
  const stats = [
    "Creating server-side solutions that are scalable ",
    "Enabling efficient data management and API interactions;",
    "Incorporating real-time features and user authentication;",
    "Enhancing capabilities for data querying.",
  ];

  const technologies = [
    { name: "Angular", image: "/Angular-icon.png" },
    { name: "C++", image: "/cplus.png" },
    { name: "Go", image: "/GOlang-1.png" },
    { name: "Java", image: "/Java-1.png" },
    { name: "Scala", image: "/Scala-1.png" },
    { name: "Node JS", image: "/NodeJS-1.png" },
    { name: "PHP", image: "/PHP-1.png" },
    { name: "Python", image: "/Python-1.png" },
    { name: "Laravel", image: "/Laravel-1.png" },
    
    
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

export default BackTechReact