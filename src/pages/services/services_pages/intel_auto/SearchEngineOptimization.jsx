import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import BoxBaseBord from '../../../../components/common/BoxBaseBord'

const SearchEngineOptimization = () => {

    const stats = [
   { value: 14, label: "members in the SEO experts team", suffix: "+" },
   { value: 4.5, label: "rating based on 55+ reviews", decimals: 1, suffix: "/5 stars" },
   { value: 50, label: "projects successfully delivered", suffix: "+" },
   { value: 8, label: "expertise in business ", suffix: " years" },
   
 
   
  
 
  
 ];

 const content = {
   heading: "SEARCH ENGINE OPTIMIZATION",
  subheading:
    "Optimize your website using our meticulously planned SEO Services in Udaipur at  Go-InfoTech to elevate your business's growth to exponential heights.",
 };

 const crossPlatData = [


   {
    title: 'OUR CLIENT’S EXPERIENCE',
    description:
      'Our clients have said it too, Go InfoTech has proved to be the Best SEO Company in Udaipur driving seamless growth for our clients and showcasing our proficiency in driving organic crowd to your website.',
      highlight:"Best SEO Company in Udaipur",
    icon: '🎯',
  },

  {
    title: 'TOP SEO SPECIALISTS',
    description:
      'Through our comprehensive procedures and tactics, we make sure that our SEO specialists deliver excellence in your crucial project. We are dedicated to driving sales for the success of your business with our meticulously planned SEO Services in Udaipur.',
    
    icon: '👤',
  },
 
  {
    title: "PROPRIETARY TECHNOLOGY FOR EFFICIENCY",
    description:
      'We are a leading Digital Marketing Company in Udaipur to integrate cutting-edge, smart technology for your project’s success. Incorporating strong tools for lead generation, targeting the audience, content deployment, and running social media campaigns.',
    highlight: 'Digital Marketing Company in Udaipur',
    icon: '🛡️',
  },
  {
    title: 'GUARANTEED PROJECT CONSISTENCY:',
    description:
      'Benefit from the seamless and consistent delivery of excellence for uninterrupted success. Our team of professionals is dedicated to serving you with excellence in the field of digital marketing and social media solutions for the robust growth of your business.',
    icon: '📋',
  },
  {
    title: 'GLOBAL COVERAGE ACROSS TIME ZONES',
    description:
      'We are available 24/7 at your service as we operate across 4 different time zones, which is why we ensure seamless communication. Our team at Go InfoTech is available at your service anytime.',
    icon: '🌐',
  },
  {
    title: 'WIDE RANGE OF SERVICES',
    description:
      'As a leading Web Development company in Udaipur, we offer custom software development, mobile app development, social media marketing, software maintenance and support, SEO Services in Udaipur, and more while making use of cutting-edge technology.',
      highlight:'Web Development company in Udaipur',
     
    icon: '⚙️',
  },
];
 const roadmapData = [
    
  {
    title: "FINANCE",
    description:
      "Empowering the financial sector by incorporating social media marketing tactics into several platform content that enhances security and elevates the user experience. ",
    
  },
  {
    title: "HEALTHCARE",
    description:
      "We offer cutting-edge solutions for the healthcare industry by designing awareness social media campaigns and digital marketing techniques to reach the target audience.",
    
  },
  {
    title: "MEDIA & ENTERTAINMENT",
    description:
      "With robust social media marketing campaigns and similar digital solutions, the leading SEO Company in Udaipur offers content marketing for media and entertainment purposes.",
    
  },
  {
    title: "AUTOMOTIVE",
    description:
      "Dedicated experts provide advanced social media solutions for the automotive industry, offering comprehensive services with customized solutions to grab the target audience’s attention.",
    
  },
  {
    title: "EDUCATION",
    description:
      "Leveraging the excellence of our SEO Services to empower educational institutions with digital assistance using social media expertise and digital marketing solutions by our professionals to reach out to your target audience.",
    
  },
 
   {
    title: "GIS",
    description:
      "Content marketing and designing infographics for social media platforms for an elevated user experience in Geographic Information Systems using the best SEO agency in Udaipur.",
    
  },
];


  return (
    <>
    <StatsSection stats={stats} content={content}/>
    <IconTopCard servicesData={crossPlatData}/>
    <BoxBaseBord headsection="INDUSTRIES WE SERVE" steps={roadmapData}/>
   
    
    </>
  )
}

export default SearchEngineOptimization