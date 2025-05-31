import TechStackContent from "../common/TechStackContent";

const NlpAiMl = () => {
 const title = "NATURAL LANGUAGE PROCESSING (NLP)";
  const description = "Incorporate advanced algorithms to comprehend and generate human language. NLP enables and supports chatbots, sentiment analysis, and content recommendation systems for elevated user experience.";
  
  const stats = [
    "Innovation of advanced chatbots for customer support;",
    "Analyze customer feedback for product refinement;",
    "Automate content condensing and organizing"
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

export default NlpAiMl