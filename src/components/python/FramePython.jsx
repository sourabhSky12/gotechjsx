import TechStackContent from "../common/TechStackContent";

const FramePython = () => {
   const title = "PYTHON FRAMEWORKS & LIBRARIES";
  const description = "These frameworks and libraries cover a wide array of tools, spanning web development, machine learning, and AI.";
  
  const stats = [
    "Expediting the development and deployment of web applications.",
    "Creating sophisticated machine learning models and AI-driven solutions.",
    "Supporting the development and integration of RESTful APIs",
    "Improving application security and scalability.",
  ];

  const technologies = [
    { name: "Django", image: "/django.png" },
    { name: "FastAPI", image: "/fastapi.png" },
    { name: "Flask", image: "/flask.png" },
    { name: "Keras", image: "/Keras_logo-2.png" },
    { name: "PyTorch", image: "/PyTorch-2.png" },
    { name: "TensorFlow", image: "/Tensorflow-1.png" },
   
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

export default FramePython