import TechStackContent from "../common/TechStackContent";

const CloudAndroid = () => {
 const title = "CLOUD PLATFORMS";
  const description = "Establishing a safe, secure, scalable, and interactive environment for global access of the Android application across all platforms.";
  
  const stats = [
    "Deploying apps on Amazon Web Services (AWS) and Google Cloud Platform (GCP).",
    "Harnessing Microsoft Azure’s tools for refined app functionalities.",
    "Validating rapid deployment & scalability via Heroku and DigitalOcean."
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

export default CloudAndroid