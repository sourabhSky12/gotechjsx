import React from 'react'
import TechStackContent from '../common/TechStackContent';
function TechFramMl() {
      const title = "TECHNOLOGIES & FRAMEWORKS";
  const description = "Utilizing these technological infrastructures for developing tailored tools and libraries, spanning from data preprocessing to model deployment, simplifies the machine learning development process.";
  
  const stats = [
    "Developing, training, and deploying deep learning models ",
    "Crafting and designing prototypes of neural network architectures.",
    "Conducting research using dynamic computational graphs;",
    
  ];

  const technologies = [
    { name: "Caffe", image: "/caffe.png" },
    { name: "Keras", image: "/Keras_logo-2.png" },
    { name: "MXNet", image: "/mxnet.png" },
    { name: "PyTorch", image: "/PyTorch-1.png" },
    { name: "Scikit-learn", image: "/scikit.png" },
    { name: "TensorFlow", image: "/Tensorflow-1.png" },
   
  ];
  return (
    <>
     <TechStackContent
      title={title}
      description={description}
      stats={stats}
      technologies={technologies}
      
    />
    
    </>
  )
}

export default TechFramMl