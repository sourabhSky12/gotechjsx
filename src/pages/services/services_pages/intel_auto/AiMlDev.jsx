import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import GridBlueCard from '../../../../components/common/GridBlueCard'
import CallToAction from '../../../../components/common/CallToAction'
import GridBordBase from '../../../../components/common/GridBordBase'


const AiMlDev = () => {
  const stats = [
   { value: 15, label: "AI/ML experts", suffix: "+" },
    { value: 4.85, label: "overall review rating based on 55+ reviews", decimals: 2, suffix: "/5 stars" },
  { value: 8, label: " expertise in business ", suffix: " years" },
  { value: 20, label: "AI/ML projects in several industries", suffix: "+" },
 
  
 ];

 const content = {
   heading: "AI ML DEVELOPMENT SERVICES",
  subheading:
    "Navigating you through the intricate tapestry of the digital world by incorporating AI and ML into your projects for success.   ",

 };

 const aiMlData = [
  
   {
    title: 'OUR CLIENT’S EXPERIENCE',
    description:
      'Our clients have said it too, Go InfoTech has proved to be an expert custom Software Development Company in Udaipur driving seamless growth for our clients and showcasing our proficiency in web development.',
        highlight: 'custom Software Development Company in Udaipur',
    icon: '🎯',
  },
  {
    title: 'TOP AI & ML SPECIALISTS',
    description:
      'Through our comprehensive procedure, we make sure that our AI & ML specialists are engaged in your crucial project. We are dedicated to the seamless success of your project.',
    // highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
  {
    title: 'PROPRIETARY TECHNOLOGY FOR EFFICIENCY',
    description:
      'We utilize our ‘Smart Outsourcing Automation Paradigm’ to integrate cutting-edge, smart technology for your project’s success. Automating crucial procedures and operations like project management, talent acquisition, and retention for effective performance.',
    icon: '🎯',
  },
  {
    title: "GUARANTEED PROJECT CONSISTENCY",
    description:
      'Benefit from the seamless and consistent delivery of excellence for uninterrupted success.',
   // highlight: 'Software Development company in Udaipur',
    icon: '🛡️',
  },
  {
    title: 'GLOBAL COVERAGE ACROSS TIME ZONES',
    description:
      'We are available 24/7 at your service as we operate across 4 different time zones, which is why we ensure seamless communication. Our team at Go InfoTech is available at your service anytime.',
    icon: '📋',
  },
  {
    title: 'WIDE RANGE OF SERVICES',
    description:
      'As a leading Web Development company in Udaipur, we offer custom software development, mobile app development, web application development, software maintenance and support, and more while making use of AI and ML technology.',
      highlight:'Web Development company in Udaipur',
    icon: '🌐',
  },
  
];
  return (
   <>
   <StatsSection stats={stats} content={content}/>
    <IconTopCard servicesData={aiMlData} />
   
   <GridBordBase/>
   
   
   </>
  )
}

export default AiMlDev