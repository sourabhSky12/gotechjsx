import TechStackContent from "../common/TechStackContent";

const BackAndroid = () => {
  const title = "BACKEND TECHNOLOGIES";
  const description = "We utilize advanced backend technologies to develop powerful, scalable, and effective server-side solutions that support Android applications.";
  
  const stats = [
    "Designing scalable APIs by making use of Node.js and Django.",
    "Developing resilient web services with Ruby on Rails and .NET Core.",
    "Integrating databases & safeguarding protocols with Java Spring Boot.",
  ];

  const technologies = [
    { name: "Angular", image: "/Angular-icon.png" },
    { name: "React.JS", image: "/React-JS.png" },
    { name: "Vue", image: "/Vue.png" }
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

export default BackAndroid