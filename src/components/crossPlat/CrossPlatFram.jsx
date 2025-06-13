import TechStackContent from "../common/TechStackContent";

const CrossPlatFram = () => {
  const title = "CROSS-PLATFORM FRAMEWORKS";
  const description = "Making a prominent appearance on the leading platforms through our cross-platform development through maintenance of high performance and scalability.";
  
  const stats = [
    "Uniform user experience across all platforms ",
    "Utilizing the strengths of the organization for project success",
    "Testing, Prototyping & MVP development by iteration & feedback"
  ];

  const technologies = [
    { name: "Angular", image: "/Angular-icon.png" },
    { name: "React.JS", image: "/React-JS.png" },
    { name: "Vue", image: "/Vue.png" }
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

export default CrossPlatFram