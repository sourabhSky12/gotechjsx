import TechStackContent from "../common/TechStackContent";

const StateManageAng = () => {
   const title = "STATE MANAGEMENT LIBRARIES";
  const description = "Our team makes use of state management libraries to manage complex state interactions as these tools help in optimizing the performance, staying consistent, and simplifying the debugging process of our code.";
  
  const stats = [
    "Handling complex state interactions within Angular applications",
    "Enhanced and high-quality application performance",
    "Angular application state that are identifiable and easy to debug"
  ];

  const technologies = [
    { name: "MobX", image: "/mobx.png" },
    { name: "NgRx", image: "/ngrx.png" },
    { name: "Redux", image: "/redux.png" },
    { name: "RxJs", image: "/rxjs-1.png" },
   
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

export default StateManageAng