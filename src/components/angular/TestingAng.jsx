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
    { name: "Cypress", image: "/cypress-2.png" },
    { name: "Jasmine", image: "/jasmine-1.png" },
    { name: "Jest", image: "/jest-1.png" },
    { name: "Karma", image: "/karma.png" },
    { name: "Mocha", image: "/Mocha_logo-1.png" },
    { name: "Protactor", image: "/protactor-1.png" },
    
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
