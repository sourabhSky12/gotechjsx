import TechStackContent from "../common/TechStackContent";

const BackCrossPlat = () => {
  const title = "BACKEND TECHNOLOGIES";
  const description = "Expertise in quick backend solutions for seamless and quality performance by ensuring backend support for your cross-platform apps.";
  
  const stats = [
    "Constructing resilient server-side logic to aid app functionality ",
    "Collaborating databases, third-party services, & secure data transfer.",
    "Scaling backend infrastructure to enable the growth of your business."
  ];

  const technologies = [
    { name: "Angular", image: "Angular-icon.png" },
    { name: "React.JS", image: "React-JS.png" },
    { name: "Vue", image: "Vue.png" }
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

export default BackCrossPlat