import { useState } from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import GridBlueBaseBord from '../../../../components/common/GridBlueBaseBord'
import TechStackSection from '../../../../components/common/TechStackSection'
import CmsFramPhp from '../../../../components/php/CmsFramPhp'
import GeneralFramePhp from '../../../../components/php/GeneralFramePhp'
import EcommFramPhp from '../../../../components/php/EcommFramPhp'

const Php = () => {
     const stats = [
  { value: 6, label: "experienced PHP specialists worldwide", suffix: "+" },
   { value: 4.8, label: "rating based on 55+ reviews", decimals: 1, suffix: "/5 stars" },
 
  { value: 90, label: "projects successfully delivered", suffix: "+" },
  { value: 8, label: "of expertise in PHP development ", suffix: " years" },
   
 ];

 const content = {
   heading: "PHP DEVELOPMENT SERVICES",
  subheading:
    "At Go InfoTech, our skilled PHP developers excel at employing state-of-the-art technologies and frameworks to deliver high-performance solutions with user-friendly designs. ",
 };
  const icontopData = [
  {
    title: 'TRUSTED AND RENOWNED',
    description:
      'We are dedicated to serving you with excellence, and this is vouched by our client’s unwavering trust in our services, as we are a trusted custom Software Development Company in Udaipur.',
    highlight: 'custom Software Development Company in Udaipur',
    icon: '👤',
  },
  {
    title: 'EXPERTISE AT YOUR SERVICE',
    description:
      'Our team is dedicated to serving you with expertise, knowledge, and professionalism, working to fuel the growth of your business. Choose Go InfoTech Solution for a reliable digital partner.',
    icon: '🎯',
  },
  {
    title: "INDUSTRIES' EXPERTISE",
    description:
      'We are a trusted Software Development company in Udaipur, with expertise from different industries all around the world using innovation, knowledge, and skills.',
    highlight: 'Software Development company in Udaipur',
    icon: '🛡️',
  },
  {
    title: 'HIGH SATISFACTION RATES',
    description:
      'Empower your business with promising results and IT solutions from professionals who are dedicated to serving you.',
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
      'Offering software development services, including custom software development, mobile app development, web application development, software maintenance and support, and more.',
    icon: '⚙️',
  },
];
 const blueBaseData = [
  {
    title: "PHP STAFF AUGMENTATION AND DEDICATED TEAMS",
    description:
      "You can flexibly augment the team of PHP developers with assistance at Go InfoTech, to ensure seamless integration into your workflow. PHP staff augmentation with a dedicated team that adheres to internal protocols and delivers excellence.",
  },
  {
    title: "PHP WEB & MOBILE DEVELOPMENT",
    description:
      "Our experts and developers are dedicated to crafting a dynamic platform with interactive custom solutions making use of PHP to craft a seamless user experience.",
  },
  {
    title: "PHP-BASED CMS DEVELOPMENT",
    description:
      "We develop a Content Management System that is secure, scalable and functional while making use of PHP solutions, allowing you to retain full control over the web content.",
  },
  {
    title: "E-COMMERCE SOLUTIONS",
    description:
      "Experts at Go InfoTech are committed to develop a feature-rich and functional e-commerce platform that attracts potential customers and accelerates sales.",
  },
  {
    title: "API INTEGRATION & DEVELOPMENT",
    description:
      "Our team excels at integrating APIs and developing custom APIs in PHP, harnessing a seamless data flow between several software systems.",
  },
  {
    title: "PHP MIGRATION AND UPGRADE",
    description:
      "We offer smooth PHP migration and upgrade services, allowing you to remain current with the latest PHP versions and ensuring optimal performance of your applications.",
  },
];

  const [stacklist] = useState([
    {
      title: "GENERAL-PURPOSE FRAMEWORKS",
      element: <GeneralFramePhp />,
    },
    {
      title: "CMS FRAMEWORKS",
      element: <CmsFramPhp />,
    },
    {
      title: "E-COMMERCE FRAMEWORKS",
      element: <EcommFramPhp />,
    },
   
  ]);

  const [selectedStack, setSelectedStack] = useState(stacklist[0].element);

  const handleStackClick = (stackl) => {
    setSelectedStack(stackl.element);
  };
  return (
   <>
    <div className='px-3 sm:px-0' >
   <StatsSection stats={stats} content={content}/>
    <IconTopCard servicesData={icontopData}/>
    <GridBlueBaseBord
    headings="PHP SOFTWARE DEVELOPMENT SERVICES"
    blueBaseData={blueBaseData}
    /> 
     {/* TECH STACK */}
      <TechStackSection
        title="GO INFOTECH’S EXPERTISE IN PHP DEVELOPMENT"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />
   </div>
   </>
  )
}

export default Php