import TechStackContent from "../common/TechStackContent";

const GeneralFramePhp = () => {
  const title = "GENERAL-PURPOSE FRAMEWORKS";
  const description = "We leverage these frameworks for a variety of application development purposes. With an array of tools and libraries available, we design efficient, scalable, and resilient web applications customized to meet your specific requirements.";
  
  const stats = [
    "Tailored application development;",
    "API development and incorporation;",
    "Creation of CRM and ERP systems;",
    "Development of web portals.",
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

export default GeneralFramePhp