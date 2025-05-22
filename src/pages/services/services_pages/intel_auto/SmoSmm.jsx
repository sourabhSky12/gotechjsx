import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import BoxBaseBord from '../../../../components/common/BoxBaseBord'
const SmoSmm = () => {

      const stats = [
   { value: 14, label: "members in the SMM/SMO experts team", suffix: "+" },
   { value: 4.8, label: "rating based on 55+ reviews", decimals: 1, suffix: "/5 stars" },
   { value: 50, label: "projects  successfully delivered ", suffix: "+" },
   { value: 8, label: "expertise in business ", suffix: " years" },
   
 
   
  
 
  
 ];

 const content = {
   heading: "SOCIAL MEDIA OPTIMIZATION SERVICES",
  subheading:
    "At Go InfoTech, experience the expertise of the Best Social Media Marketing Services in Udaipur with meticulous planning and content strategizing by our SMM/SMO specialists who craft SMM campaigns to help generate organic traffic and potential customers to your online business platforms.",
 };

 const crossPlatData = [


   {
    title: 'Expertise and Experience',
    description:
      'With years of experience in the digital marketing industry, our team of experts is well-versed in the latest trends, tools, and techniques. Our deep understanding of various digital marketing facets, including SEO services in Dubai, SMM services in Dubai, and email marketing services in Dubai, ensures that your business receives tailored solutions that drive real results.',
     // highlight:"Best SEO Company in Udaipur",
    icon: '🎯',
  },

  {
    title: 'Customized Strategies',
    description:
      'We believe that every business is unique and requires a personalized approach. Our team takes the time to understand your specific needs, target audience, and business goals. This allows us to create customized digital marketing strategies, including SEO services in Dubai and SMM services in Dubai, that are aligned with your vision and objectives.',
    
    icon: '👤',
  },
 
  {
    title: "Comprehensive Services",
    description:
      'From SEO and social media marketing to PPC and content creation, we offer a full suite of digital marketing services in Dubai. Our holistic approach ensures that all aspects of your online presence are optimized, providing you with a seamless and integrated marketing experience.',
   // highlight: 'Digital Marketing Company in Udaipur',
    icon: '🛡️',
  },
  {
    title: 'Data-Driven Approach:',
    description:
      'We rely on data and analytics to drive our decision-making process. By continuously monitoring and analyzing your campaigns, including email marketing services in Dubai and other digital marketing services in Dubai, we can make informed adjustments to maximize your ROI. Our data-driven approach ensures that your marketing efforts are always aligned with your business goals.',
    icon: '📋',
  },
  {
    title: 'Transparent Communication',
    description:
      'We value transparency and believe in keeping our clients informed at every step of the process. With regular updates, detailed reports, and open communication channels, you can trust that you are always in the loop. Our commitment to transparency builds trust and fosters long-term relationships.',
    icon: '🌐',
  },
  {
    title: 'Proven Track Record',
    description:
      'Our portfolio of successful campaigns and satisfied clients speaks volumes about our capabilities. As the best digital marketing agency in Dubai, we have a proven track record of delivering exceptional results through our SEO services in Dubai, SMM services in Dubai, and other digital marketing services. Partner with us and join the ranks of businesses that have thrived with our support.',
     // highlight:'Web Development company in Udaipur',
     
    icon: '⚙️',
  },
];
 const roadmapData = [
    
  {
    title: "FINANCE",
    description:
      "Empowering the financial sector by incorporating social media marketing tactics into several platform content that enhances security and elevates the user experience.",
    
  },
  {
    title: "HEALTHCARE",
    description:
      "We offer cutting-edge solutions for the healthcare industry by designing awareness social media campaigns and digital marketing techniques to reach the target audience.",
    
  },
  {
    title: "MEDIA & ENTERTAINMENT",
    description:
      "With robust social media marketing campaigns and similar digital solutions, the leading Social Media Marketing Company In Udaipur offers content marketing for media and entertainment purposes.",
    
  },
  {
    title: "AUTOMOTIVE",
    description:
      "Dedicated experts provide advanced social media solutions for the automotive industry, offering comprehensive services with customized solutions to grab the target audience’s attention.",
    
  },
  {
    title: "EDUCATION",
    description:
      "Hire the best SMO Specialists in Udaipur to empower educational institutions with digital assistance using social media expertise and digital marketing solutions by our professionals.",
    
  },
 {
    title: "E-COMMERCE",
    description:
      "Ensure that the website generates enhanced customer engagement through the use of social media campaigns and email marketing techniques to enable you to generate higher sales.",
    
  },
   {
    title: "GIS",
    description:
      "Content marketing and designing infographics for social media platforms for an elevated user experience in Geographic Information Systems using a trusted Best SMO Company in Udaipur.",
    
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

export default SmoSmm