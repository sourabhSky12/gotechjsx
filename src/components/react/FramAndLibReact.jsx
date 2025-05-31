import TechStackContent from "../common/TechStackContent";

const FramAndLibReact = () => {
 const title = "REACT FRAMEWORKS & LIBRARIES";
  const description = "Developing web applications that are more dynamic, scalable, and user-friendly by expanding React’s functionalities with a collection of frameworks and libraries.";
  
  const stats = [
    "Designing web applications that are SEO-friendly;",
    "Administrate complex application states;",
    "Develop websites with dynamic data incorporations",
    "Smoothly navigating and routing.",
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

export default FramAndLibReact