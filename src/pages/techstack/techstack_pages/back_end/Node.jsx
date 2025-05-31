import { useState } from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import GridBlueBaseBord from '../../../../components/common/GridBlueBaseBord'
import GeneralFramNode from '../../../../components/node/GeneralFramNode'
import DatabaseManageNode from '../../../../components/node/DatabaseManageNode'
import CloudServicesNode from '../../../../components/node/CloudServicesNode'
import TechStackSection from '../../../../components/common/TechStackSection'

const Node = () => {
    const stats = [
  { value: 6, label: "experienced Node specialists worldwide", suffix: "+" },
   { value: 4.8, label: "rating based on 55+ reviews", decimals: 1, suffix: "/5 stars" },
 
  { value: 90, label: "Node projects successfully delivered", suffix: "+" },
  { value: 8, label: "of expertise in Node development ", suffix: " years" },
   
 ];

 const content = {
   heading: "NODE DEVELOPMENT SERVICES",
  subheading:
    "Count on the expertise of Go InfoTech's Node professionals to deliver robust solutions tailored to users, incorporating the latest technologies and frameworks.",
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
    title: 'NODE STAFF AUGMENTATION SERVICES',
    description: 'You have the flexibility to either assemble a dedicated team from Go InfoTech or handpick the perfect Node developer to seamlessly integrate into your current workflow. Regardless of your choice, they will adhere to your internal procedures and maintain open lines of communication throughout the process.',
  },
   {
    title: 'API DEVELOPMENT AND INTEGRATION',
    description: 'Harness our Node.js proficiency to construct secure and scalable APIs, as well as seamlessly integrate third-party APIs into your current applications.',
  },
   {
    title: 'NODE MIGRATION SERVICES',
    description: 'Securely transition your current application to a Node.js environment, capitalizing on its benefits of speed and non-blocking I/O model.',
  },
   {
    title: 'NODE.JS WEB & MOBILE DEVELOPMENT',
    description: 'Create custom applications rapidly and scale them efficiently using Node.js, ensuring high performance, effectiveness, and speed to align with your business requirements',
  },
    {
    title: 'REAL-TIME APPLICATION DEVELOPMENT',
    description: 'Utilize Node.js  real-time capabilities to craft interactive applications like chat apps, gaming servers, and collaboration tools, enabling seamless communication and engagement in real-time.',
  },
    {
    title: 'NODE.JS SUPPORT AND MAINTENANCE',
    description: 'Rely on our continuous and dependable support and maintenance services to ensure your Node.js applications remain updated and operate seamlessly over time.',
  },
]

  const [stacklist] = useState([
    {
      title: "GENERAL-PURPOSE FRAMEWORKS",
      element: <GeneralFramNode />,
    },
    {
      title: "DATABASES & DATA MANAGEMENT",
      element: <DatabaseManageNode />,
    },
    {
      title: "CLOUD SERVICES",
      element: <CloudServicesNode />,
    },
   
  ]);

  const [selectedStack, setSelectedStack] = useState(stacklist[0].element);

  const handleStackClick = (stackl) => {
    setSelectedStack(stackl.element);
  };
  return (
    <>
    
    <StatsSection stats={stats} content={content}/>
    <IconTopCard servicesData={icontopData}/>
    <GridBlueBaseBord  headings="NODE SOFTWARE DEVELOPMENT SERVICES"
    blueBaseData={blueBaseData}
    /> 
     {/* TECH STACK */}
      <TechStackSection
        title="OUR EXPERTISE IN NODE.JS DEVELOPMENT"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />
    </>
  )
}

export default Node