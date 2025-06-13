import TechStackContent from "../common/TechStackContent";

const FrameworkJava = () => {
  const title = "JAVA FRAMEWORKS & LIBRARIES";
  const description = "Incorporating a diverse range of frameworks and libraries into our Java tech stack to amplify Java’s capabilities for efficient and scalable application development.";
  
  const stats = [
    "Enabling swift development and deployment of resilient applications.",
    "Offering a structured approach for both web and enterprise projects.",
    "Boosting application security and scalability.",
    "Supporting the development and integration of RESTful APIs.",
  ];

  const technologies = [
    { name: "Apache Maven", image: "/maven-1.png" },
    { name: "Apache Struts", image: "/Apache-Struts.png" },
    { name: "Hibernate", image: "/Hibernate-1.png" },
    { name: "JUnit", image: "/junit-1.png" },
    { name: "Kotlin", image: "/Kotlin-1.png" },
    { name: "Spring Framework", image: "/Spring-Framework-1.jpg" },
   
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

export default FrameworkJava