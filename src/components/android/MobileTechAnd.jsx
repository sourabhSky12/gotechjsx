import TechStackContent from "../common/TechStackContent";

const MobileTechAnd = () => {
  const title = "MOBILE TECHNOLOGIES";
  const description = "Our team comprises highly skilled Full Stack developers with extensive experience in delivering successful projects across diverse industries.";
  
  const stats = [
    "Developing Android apps using Java & Kotlin",
    "Designing cross-platform applications with Dart (Flutter) & JavaScript (React Native)",
    "High-quality, compatibility & optimized performance across devices"
  ];

  const technologies = [
    { name: "Angular", image: "/Angular-icon.png " },
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

export default MobileTechAnd