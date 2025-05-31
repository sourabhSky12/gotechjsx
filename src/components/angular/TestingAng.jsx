import TechStackContent from "../common/TechStackContent";

const TestingAng = () => {
   const title = "TESTING AND DEBUGGING TOOLS";
  const description = "Making use of tools that serve quality and reliability for our Angular applications, we make our way by conducting comprehensive testing procedures to test the code using them. they enable us to effectively debug and sustain a strong sense of assurance in our codebase.";
  
  const stats = [
    "Maintaining the quality and security of our codes ",
    "Effectively Debugging the code ",
    "Ensuring detailed testing by conducting unit and end-to-end tests"
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

export default TestingAng
