import TechStackContent from "../common/TechStackContent";

const DeepLearnAiMl = () => {
 const title = "DEEP LEARNING";
  const description = "We leverage the power of deep learning frameworks to harness cutting-edge technology in favor of the growth of your business. Empower your business with deep-learning solutions to help you recognize patterns, images, and even audio from voluminous data as cutting-edge technology can function like a human brain.";
  
  const stats = [
    "Developing comprehensive neural networks for several applications ",
    "Incorporating audio, and visual recognition solutions;",
    "Functional predictive analysis for systems of diverse platforms."
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

export default DeepLearnAiMl