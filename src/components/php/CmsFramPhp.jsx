import TechStackContent from "../common/TechStackContent";

const CmsFramPhp = () => {
  const title = "CMS FRAMEWORKS";
  const description = "We have expertise in CMS frameworks, allowing us to construct websites that efficiently handle and structure extensive content. Whether you require a blog, news site, or e-commerce platform, we’re equipped to assist you with our proficiency in Drupal, WordPress, and Joomla.";
  
  const stats = [
    "Development of CMS websites",
    "Customization and enhancement of CMS",
    "Development of themes and plugins",
    "Maintenance and support",
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

export default CmsFramPhp