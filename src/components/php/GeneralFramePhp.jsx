import TechStackContent from "../common/TechStackContent";

const GeneralFramePhp = () => {
  const title = "GENERAL-PURPOSE FRAMEWORKS";
  const description = "We leverage these frameworks for a variety of application development purposes. With an array of tools and libraries available, we design efficient, scalable, and resilient web applications customized to meet your specific requirements.";
  
  const stats = [
    "Tailored application development;",
    "API development and incorporation;",
    "Creation of CRM and ERP systems;",
    "Development of web portals.",
  ];

  const technologies = [
    { name: "CakePHP", image: "/cakephp.png" },
    { name: "CodeIgniter", image: "/codeigniter.png" },
    { name: "Laravel", image: "/Laravel-1.png" },
    { name: "Symfony", image: "/symfony-1.png" },
    { name: "Yii2", image: "/yii.png" },
    { name: "Zend", image: "/zend.png" },
  
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

export default GeneralFramePhp