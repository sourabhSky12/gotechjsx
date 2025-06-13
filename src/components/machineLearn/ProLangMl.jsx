import React from 'react'
import TechStackContent from '../common/TechStackContent';
function ProLangMl() {
     const title = "PROGRAMMING LANGUAGES";
  const description = "Programming languages are fundamental for the development of Machine Learning and are essential for the purposes of creating algorithms, handling data processing, and model training, and facilitating the implementation of complex machine learning techniques and applications.";
  
  const stats = [
    "Developing functional and responsive Machine Learning applications ",
    "Data analysis and transformation, Exploratory Data Analysis (EDA) & data visualization",
    "Developing and deploying machine learning models",
  ];

  const technologies = [
    { name: "C++", image: "/cplus.png" },
    { name: "Java", image: "/java-1.png" },
    { name: "Python", image: "/Python-1.png" },
    { name: "Scala", image: "/Scala-1.png" },
    
   
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

export default ProLangMl