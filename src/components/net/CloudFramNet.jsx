import TechStackContent from "../common/TechStackContent";

const CloudFramNet = () => {
  const title = "CLOUD PLATFORMS & TOOLS";
  const description = "We employ diverse cloud platforms and tools to provide scalable and adaptable hosting solutions, optimizing the deployment and administration of .NET applications.";
  
  const stats = [
    "Azure for hosting and administering applications",
    "Incorporating DevOps methodologies for seamless integration and deployment",
    "Utilizing cloud services for application scalability and performance monitoring",
  ];

  const technologies = [
    { name: "AWS", image: "/aws-1.png" },
    { name: "DigitalOcean", image: "/digitalocean.png" },
    { name: "Docker", image: "/docker.png" },
    { name: "Google Cloud", image: "/googleCloud.png" },
    { name: "Kubernetes", image: "/Kubernetes.png" },
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

export default CloudFramNet