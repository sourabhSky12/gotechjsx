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
    { name: "Caffe", image: "/caffe-1.png" },
    { name: "MXNet", image: "/mxnet.png" },
    { name: "OpenAI", image: "/OpenAI-1.png" },
    { name: "PyTorch", image: "/PyTorch-2.png" },
    { name: "TensorFlow", image: "/Tensorflow-2.png" },
    { name: "Theano", image: "/theano.png" },
   
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