
import TechStackContent from "../common/TechStackContent";
const TechLib = () => {
      const title = "TECHNOLOGIES & LIBRARIES";
  const description = "Our arsenal of technologies and libraries in React Native development is geared towards crafting mobile applications that are dynamic, responsive, and user-centric. With a keen eye on staying ahead in a competitive market, we harness the latest and most effective tools to elevate your app’s performance.";
  
  const stats = [
    "Leveraging React Native’s Components for Compelling UIs",
    "Implementing Redux and GraphQL for Streamlined Data Management",
    "Enhancing App Performance with Native Modules",
    "Testing with Jest, Enzyme, and Firebase to Ensure App Quality",
  ];

  const technologies = [
    { name: "Axios", image: "/axios.png" },
    { name: "Expo", image: "/expo-1.png" },
    { name: "Firebase", image: "/firebase-3.png" },
    { name: "GraphQL", image: "/graphql.png" },
    { name: "JavaScript", image: "/javascript.png" },
    { name: "Jest", image: "/jest-1.png" },
    { name: "Redis", image: "/redis-logo3.png" },
    { name: "Redux", image: "/redux.png" },
    { name: "Type Script", image: "/typescript.png" },
    
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

export default TechLib