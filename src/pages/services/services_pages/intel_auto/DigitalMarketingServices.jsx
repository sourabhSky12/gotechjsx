import { useState } from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import BoxBaseBord from '../../../../components/common/BoxBaseBord'
import TechStackSection from '../../../../components/common/TechStackSection'
import SocialMediaMangeDm from '../../../../components/digitalMarket/SocialMediaMangeDm'
import SearchEngineDm from '../../../../components/digitalMarket/SearchEngineDm'
import EmailDm from '../../../../components/digitalMarket/EmailDm'
import SocialMediaCampDm from '../../../../components/digitalMarket/SocialMediaCampDm'
const DigitalMarketingServices = () => {
    const stats = [
   { value: 30, label: "Team of experts", suffix: "+" },
   { value: 8, label: "of expertise in business ", suffix: " years" },
   
  { value: 60, label: "projects delivered successfully", suffix: "+" },
   { value: 4.5, label: "review rating based on 55+ reviews", decimals: 1, suffix: "/5 stars" },
  
 
  
 ];

 const content = {
   heading: "DIGITAL MARKETING SOLUTIONS",
  subheading:
    "Partner with Go InfoTech Solution to experience a prominent presence in the digital realm.",
 };

 const crossPlatData = [


   {
    title: 'OUR CLIENT’S EXPERIENCE',
    description:
      'Our clients have said it too, Go InfoTech has proved to be an expert Custom Software Development Company in Udaipur driving seamless growth for our clients and showcasing our proficiency in web development.',
      highlight:"Custom Software Development Company in Udaipur ",
    icon: '🎯',
  },

  {
    title: 'TOP DIGITAL MARKETING SPECIALISTS',
    description:
      'Through our comprehensive procedures and tactics, we make sure that our digital marketing specialists deliver excellence in your crucial project. We are dedicated to driving sales for the success of your business.',
    
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
    title: "1. FINANCE",
    description:
      "Empowering the financial sector by incorporating social media marketing tactics into several platform content that enhances security and elevates the user experience.",
    
  },
  {
    title: "2. HEALTHCARE",
    description:
      "We offer cutting-edge solutions for the healthcare industry by designing awareness social media campaigns and digital marketing techniques to reach the target audience.",
    
  },
  {
    title: "3. MEDIA & ENTERTAINMENT",
    description:
      "With robust social media marketing campaigns and similar digital solutions, the leading Digital Marketing Company in Udaipur offers content marketing for media and entertainment purposes.",
    
  },
  {
    title: "4. AUTOMOTIVE",
    description:
      "Dedicated experts provide advanced social media solutions for the automotive industry, offering comprehensive services with customized solutions to grab the attention of the target audience.",
    
  },
  {
    title: "5. EDUCATION",
    description:
      "Leveraging the excellence of our IT Company in Udaipur to empower educational institutions with digital assistance using social media expertise and digital marketing solutions by our professionals.",
    
  },
  {
    title: "6. E-COMMERCE",
    description:
      "Ensuring that the website generates enhanced customer engagement through the use of social media campaigns and email marketing techniques at the leading Digital Marketing Agency in Udaipur helps you generate higher sales.",
    
  },
   {
    title: "7. GIS",
    description:
      "Content marketing and designing infographics for social media platforms for an elevated user experience in Geographic Information Systems using a trusted Pay Per Click (PPC) Company in Udaipur.",
    
  },
];
 const [stacklist] = useState([
    {
      title: "SOCIAL MEDIA MANAGEMENT",
      element: <SocialMediaMangeDm />,
    },
    {
      title: "SEARCH ENGINE OPTIMIZATION",
      element: <SearchEngineDm />,
    },
    {
      title: "E-MAIL MARKETING",
      element: <EmailDm/>,
    },
    {
      title: "SOCIAL MEDIA CAMPAIGNS",
      element: <SocialMediaCampDm />,
    },
  ]);

  const [selectedStack, setSelectedStack] = useState(stacklist[0].element);

  const handleStackClick = (stackl) => {
    setSelectedStack(stackl.element);
  };
  return (
   <>
   
     <StatsSection stats={stats} content={content}/>
    <IconTopCard servicesData={crossPlatData}/>
     {/* TECH STACK */}
      <TechStackSection
        title="TECH STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />

    <BoxBaseBord headsection="INDUSTRIES WE SERVE"  steps={roadmapData}/>
   
   
   </>
  )
}

export default DigitalMarketingServices