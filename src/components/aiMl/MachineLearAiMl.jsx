import TechStackContent from "../common/TechStackContent";

const MachineLearAiMl = () => {
 const title = "MACHINE LEARNING (ML)";
  const description = "At Go InfoTech, we leverage our excellence in ML, NLP, computer vision, and predictive analytics, we develop custom AI solutions tailored to your specific requirements. From responsive chatbots and virtual assistants to recommendation algorithms and predictive models, we develop powerful AI applications that drive business growth.";
  
  const stats = [
    "Crafting predictive analysis for finance, healthcare, e-commerce, and other sectors",
    "Data-driven automation of decision-making process;",
    "Personalize products via user behavior understanding."
  ];

  const technologies = [
    { name: "Fast-AI", image: "/fastai-1.png" },
    { name: "H2O", image: "/h2o.png" },
    { name: "LightGBM", image: "/lightGBM.png" },
    { name: "Scikit-learn", image: "/scikit.png" },
   
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

export default MachineLearAiMl