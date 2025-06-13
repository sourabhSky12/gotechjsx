
import TechStackContent from "../common/TechStackContent";
const CloudProvPython = () => {
    const title = "CLOUD PROVIDERS";
  const description = "Cloud providers provide scalable and flexible hosting solutions, which improve the deployment and management of Python applications.";
  
  const stats = [
    "Ensuring scalable hosting environments for Python applications.",
    "Facilitating global accessibility and high availability.",
    "Supplying robust tools for application monitoring and management.",
    "Supporting continuous integration and deployment workflows.",
  ];

  const technologies = [
    { name: "AWS", image: "/aws-1.png" },
    { name: "Google Cloud Platform", image: "/googleCloud.png" },
    { name: "Heroku", image: "/heroku-icon-1.png" },
    { name: "Microsoft Azure", image: "/Microsoft_Azure.png" },
   
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

export default CloudProvPython