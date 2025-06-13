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
    { name: "BERT", image: "/BERT.png" },
    { name: "CoreNLP", image: "/CoreNLP.png" },
    { name: "Gensim", image: "/gensim.png" },
    { name: "OpenAI", image: "/OpenAI-3.png" },
    { name: "OpenNLP", image: "/openNLP.png" },
    { name: "Spacy", image: "/SpaCy.png" },
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