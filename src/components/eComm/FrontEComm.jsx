import TechStackContent from "../common/TechStackContent";

const FrontEComm = () => {
  const title = "FRONT-END DEVELOPMENT";
  const description = "Empower your business with our expert front-end solutions, focusing fundamentally on a smooth user experience, effectively handling your needs and preferences, and aligning them to the industry’s unique requirements.";
  
  const stats = [
    "20+ Front-end developers;",
    "8 years of experience",
    "4.8 rating on Google"
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

export default FrontEComm