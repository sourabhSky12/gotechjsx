
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
    { name: "Angular", image: "Angular-icon.png" },
    
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