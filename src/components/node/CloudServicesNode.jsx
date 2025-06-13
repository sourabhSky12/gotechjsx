import TechStackContent from "../common/TechStackContent";

const CloudServicesNode = () => {
  const title = "CLOUD SERVICES";
  const description = "We harness a range of cloud platforms and services to augment the functionality, scalability, and reliability of your Node.js applications. Whether it’s deploying applications or managing databases and storage, our proficiency in cloud technologies can greatly streamline your operations and expedite your business growth.";
  
  const stats = [
    "Ensuring seamless scalability in hosting and deploying Node.js applications.",
    "Optimizing performance through database management and scaling.",
    "Leveraging machine learning and AI capabilities for advanced functionalities",
    "Implementing dependable storage solutions for application data.",
    "Enhancing application security via managed cloud security services.",
  ];

  const technologies = [
    { name: "Alibaba Cloud", image: "/alibaba.png" },
    { name: "AWS", image: "/aws-1.png" },
    { name: "DigitalOcean", image: "/digitalocean.png" },
    { name: "Firebase", image: "/firebase.png" },
    { name: "Google Cloud", image: "/googleCloud.png" },
    { name: "Heroku", image: "/Tensorflow-2.png" },
    { name: "IBM Cloud", image: "/download.png" },
    { name: "Microsoft Azure", image: "/Microsoft_Azure.png" },
    { name: "Oracle Cloud", image: "/oracle.png" },
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

export default CloudServicesNode