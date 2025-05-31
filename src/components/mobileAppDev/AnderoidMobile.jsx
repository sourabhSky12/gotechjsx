import TechStackContent from "../common/TechStackContent";

const AnderoidMobile = () => {
 const title = "ANDROID APP DEVELOPMENT";
  const description = "We develop scalable, interactive, and secure mobile apps for Android that are feature-rich, and visually appealing. We have expertise in:";
  
  const stats = [
    "Tailored Android App Development",
    "Android TV App Development",
    "Android Wear App Development",
    "Android Auto App Development",
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

export default AnderoidMobile