import TechStackContent from "../common/TechStackContent";

const SearchEngineDm = () => {
  const title = "SEARCH ENGINE OPTIMIZATION (SEO)";
  const description = "At Go InfoTech Solution, a Custom Software Development Company in Udaipur, we offer personalized SEO services in Udaipur to elevate the online presence and visibility of your businesses. Our team of SEO specialists considers several elements of search engine optimization, including intricate keyword analysis, when crafting a strategic plan for organic growth. We incorporate on-page optimization techniques to ensure that the web page is optimized for search engines. Further, our off-page optimization strategies focus on developing high-quality backlinks and building credibility in the industry. At Go InfoTech Solution, we develop comprehensive SEO strategies that are personalized to align with our client’s goals and objectives, leveraging data-driven insights and best practices to drive sustainable results";
  
  const stats = [
    "Keyword Research",
    "On-Page SEO",
    "Off-Page SEO",
    "Content Optimization",
    "SEO Audits and Reporting",
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

export default SearchEngineDm