import TechStackContent from "../common/TechStackContent";

const FramAndLibReact = () => {
 const title = "REACT FRAMEWORKS & LIBRARIES";
  const description = "Developing web applications that are more dynamic, scalable, and user-friendly by expanding React’s functionalities with a collection of frameworks and libraries.";
  
  const stats = [
    "Designing web applications that are SEO-friendly;",
    "Administrate complex application states;",
    "Develop websites with dynamic data incorporations",
    "Smoothly navigating and routing.",
  ];

  const technologies = [
    { name: "Ant Design", image: "/antdesign.png" },
    { name: "Gatsby", image: "/gatsby.png" },
    { name: "Material UI", image: "/materialui.png" },
    { name: "Next.js", image: "/next.js.png" },
    { name: "React Bootstrap", image: "/React-Bootstrap-1.png" },
    { name: "Redux", image: "/redux.png" },
   
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

export default FramAndLibReact