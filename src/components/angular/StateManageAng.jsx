import TechStackContent from "../common/TechStackContent";

const StateManageAng = () => {
   const title = "STATE MANAGEMENT LIBRARIES";
  const description = "Our team makes use of state management libraries to manage complex state interactions as these tools help in optimizing the performance, staying consistent, and simplifying the debugging process of our code.";
  
  const stats = [
    "Handling complex state interactions within Angular applications",
    "Enhanced and high-quality application performance",
    "Angular application state that are identifiable and easy to debug"
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

export default StateManageAng