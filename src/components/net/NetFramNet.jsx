import TechStackContent from "../common/TechStackContent";

const NetFramNet = () => {
  const title = ".NET FRAMEWORKS & LIBRARIES";
  const description = "Our .NET technology stack incorporates a range of frameworks and libraries, empowering robust, scalable, and efficient application development.";
  
  const stats = [
    "ASP.NET MVC for developing enterprise-grade web applications",
    "Entity Framework for streamlined data access and management",
    "SignalR for enabling real-time web functionality",
    ".NET Core for facilitating cross-platform development"
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

export default NetFramNet