import { useState } from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import WhiteBgCard from '../../../../components/common/WhiteBgCard'
import NetFramNet from '../../../../components/net/NetFramNet'
import CloudFramNet from '../../../../components/net/CloudFramNet'
import DatabaseNet from '../../../../components/net/DatabaseNet'
import TechStackSection from '../../../../components/common/TechStackSection'
const Net = () => {
      const stats = [
  { value: 10, label: ".NET specialists worldwide", suffix: "+" },
   { value: 4.8, label: "rating based on 60+ reviews", decimals: 1, suffix: "/5 stars" },
 
  { value: 4, label: ".NET projects delivery", suffix: "+" },
  { value: 8, label: "of expertise in .NET development", suffix: " years" },
   
 ];

 const content = {
   heading: ".NET DEVELOPMENT SERVICES",
  subheading:
    "Our team of developers delivers excellence, be it by developing enterprise-level web applications using .NET or mobile solutions using Xamarian that make use of cloud capabilities using Azure. At Go InfoTech, we craft solutions that suit your specific business requirements.",
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
 const whitecardsData = [
  {
    title: 'Artificial Intelligence (AI)',
    // titlePath: '/services/finance',
    description: [
      'Embrace AI to empower your product with intelligence, intuition, and responsiveness. From chatbots for seamless interactions to predictive analytics for informed decision-making, AI can revolutionize user experiences and drive unparalleled user engagement  ',
      // { text: 'Development company in Udaipur', path: '/services/development-company' },
      // ' to enhance  the security and efficiency of the services.',
    ],
  },
   {
    title: 'Cloud Integration',
    // titlePath: '/services/finance',
    description: [
      'Seamlessly integrate cloud services to elevate your products scalability, performance, and storage capabilities. Ensure real-time data syncing and accessibility from anywhere, enabling your users to access their information effortlessly. ',
      // { text: ' Web Development company in Udaipur ', path: '/services/development-company' },
      // ' and digital health technologies.',
    ],
  },
   {
    title: 'Augmented Reality (AR)',
    // titlePath: '/services/finance',
    description: [
      'Incorporate AR features to offer immersive experiences that transcend traditional boundaries. From virtual try-ons for retail products to interactive 3D models for enhanced visualization, AR can redefine user interactions within your product, captivating and delighting your audience. ',
      // { text: ' Digital Marketing Company in Udaipur', path: '/services/development-company' },
      // ' offering innovative solutions for digital platforms along with',
      // {text: 'SEO Services in Udaipur.',  path: '/services/development-company'},
    ],
  },
   {
    title: 'Internet of Things (IoT)',
    // titlePath: '/services/finance',
    description: [
      'Connect your product with smart devices and sensors to provide users with real-time data, automation, and enhanced functionalities. IoT integration unlocks new possibilities for user engagement and utility, paving the way for innovative experiences and unprecedented convenience.',
      'By embracing these technological innovations, you can transform your .NET product into a game-changer, setting new standards of excellence and establishing a strong competitive edge in the market.',
    ],
   },
];

  const [stacklist] = useState([
    {
      title: ".NET FRAMEWORKS & LIBRARIES",
      element: <NetFramNet />,
    },
    {
      title: "CLOUD PLATFORMS & TOOLS",
      element: <CloudFramNet />,
    },
    {
      title: "DATABASES & STORAGE SOLUTIONS",
      element: <DatabaseNet />,
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
     {/* TECH STACK */}
      <TechStackSection
        title=".NET TECH STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />
    <WhiteBgCard
    whitecards={whitecardsData}
    columns={2}
    />
    </>
  )
}

export default Net