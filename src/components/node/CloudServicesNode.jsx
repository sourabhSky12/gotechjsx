import TechStackContent from "../common/TechStackContent";

const CloudServicesNode = () => {
  const title = "CLOUD SERVICES";
  const description = "We harness a range of cloud platforms and services to augment the functionality, scalability, and reliability of your Node.js applications. Whether it’s deploying applications or managing databases and storage, our proficiency in cloud technologies can greatly streamline your operations and expedite your business growth.";
  
  const stats = [
    "Ensuring seamless scalability in hosting and deploying Node.js applications.",
    "Optimizing performance through database management and scaling.",
    "Leveraging machine learning and AI capabilities for advanced functionalities",
    "Implementing dependable storage solutions for application data.",
    "Enhancing application security via managed cloud security services.",
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

export default CloudServicesNode