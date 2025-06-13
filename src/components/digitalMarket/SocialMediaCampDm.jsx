import TechStackContent from "../common/TechStackContent";

const SocialMediaCampDm = () => {
  const title = "SOCIAL MEDIA CAMPAIGNS (SMC)";
  const description = "At Go InfoTech Solution, we design Social Media Campaigns (SMC) which are strategic initiatives that will enable you to achieve unique marketing objectives through social media platforms. We focus our expertise on planning that outlines your social media goals and the use of best practices and techniques that will help us achieve them, as well as a thorough analysis of the tricks and tactics that work best for the growth of your business and metrics tracked to measure performance.";
  
  const stats = [
    "Campaign strategy development",
    "Content calendar management",
    "Audience research and targeting",
    "Paid advertising management",
    "Campaign monitoring and adjustments",
  ];

  const technologies = [
    { name: "Python", image: "/Python-1.png" },
    
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

export default SocialMediaCampDm