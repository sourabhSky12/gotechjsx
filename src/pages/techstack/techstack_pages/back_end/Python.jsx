import { useState } from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import RightSideTextDesc from '../../../../components/common/RightSideTextDesc'
import WhiteBgCard from '../../../../components/common/WhiteBgCard'
import { DollarSign, Lightbulb, Lock } from 'lucide-react';
import CardMethodologyBase from '../../../../components/common/CardMethodologyBase'
import TechStackSection from '../../../../components/common/TechStackSection'
const Python = () => {
    const stats = [
   { value: 20, label: "experienced Java specialists worldwide", suffix: "+" },
   { value: 4.8, label: "rating based on 60+ reviews", decimals: 1, suffix: "/5 stars" },
 
  { value: 40, label: "Java projects successfully delivered", suffix: "+" },
  { value: 8, label: "of expertise in java development ", suffix: " years" },
   
 ];

 const content = {
   heading: "PYTHON DEVELOPMENT SERVICES",
  subheading:
    "Our Python Development Services deliver flexible and resilient solutions across various applications, including web and mobile development as well as artificial intelligence.",
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
    title: 'ARTIFICIAL INTELLIGENCE',
    // titlePath: '/services/finance',
    description: [
      'Leverage AI capabilities to enhance your applications intelligence, making it more intuitive and responsive. From chatbots to predictive analytics, AI has the potential to revolutionize user experiences and drive engagement.',
      // { text: 'Development company in Udaipur', path: '/services/development-company' },
      // ' to enhance  the security and efficiency of the services.',
    ],
  },
   {
    title: 'CLOUD INTEGRATION',
    // titlePath: '/services/finance',
    description: [
      'Integrate cloud services seamlessly to augment your applications scalability, performance, and storage capabilities. Enable real-time data syncing and accessibility from any location.',
      // { text: ' Web Development company in Udaipur ', path: '/services/development-company' },
      // ' and digital health technologies.',
    ],
  },
   {
    title: 'AUGMENTED REALITY',
    // titlePath: '/services/finance',
    description: [
      'Incorporate AR features to provide immersive experiences for your users. Whether its virtual try-ons or interactive 3D models, AR has the capability to redefine user interactions within your application.',
      // { text: ' Software Development company in Udaipur', path: '/services/development-company' },
      // ' we believe in incorporating AR to generate a remarkable user experience by meticulously integrating virtual try-ons and interactive 3D models into your app.',
      // {text: 'SEO Services in Udaipur.',  path: '/services/development-company'},
    ],
  },
   {
    title: 'INTERNET OF THINGS',
    // titlePath: '/services/finance',
    description: [
      'Connect your application with smart devices and sensors to deliver real-time data, automation, and enhanced functionalities to users. IoT integration can open up new possibilities for user engagement and utility.',
      
    ],
  },
];
const methodologyData = [
  {
    icon: <DollarSign size={20} />,
    title: 'ANGULAR',
    description:
      'Angular complements Pythons back-end prowess for crafting dynamic web applications. This collaboration is particularly suitable for single-page applications (SPAs), providing seamless exchange of data between the front-end and back-end, along with interactive user interfaces.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'VUE',
    description:
      'Vue.js is well-suited for building lightweight, reactive web applications. When combined with Python, it enables swift development and effortless maintenance, with Vue handling the user interface aspect while Python manages back-end operations.',
  },
  {
    icon: <Lock size={20} />,
    title: 'REACT',
    description:
      'React synergizes effectively with Pythons back-end capabilities to develop responsive web applications. This amalgamation is beneficial for creating interactive user interfaces with real-time updates, blending Reacts dynamic front-end with Pythons robust server-side logic.',
  },
];

  const [stacklist] = useState([
    {
      title: "FRONT-END DEVELOPMENT",
      element: <FrontEnd />,
    },
    {
      title: "BACK-END DEVELOPMENT",
      element: <BackEnd />,
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      element: <MobileApp />,
    },
    {
      title: "UI/UX DESIGN",
      element: <UiUx />,
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
        title="TECH STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />

     <RightSideTextDesc  heading="TECH INNOVATIONS FOR YOUR WEB APP"
    subheading="Empower your application with cutting-edge technological innovations, ensuring it stands out as revolutionary, not just functional. Stay ahead of the curve, remain relevant, and captivate your audience."
    />
    <WhiteBgCard 
     whitecards={whitecardsData}
    columns={2}
    />
     <CardMethodologyBase
     heading="DIVERSE TECH CAPABILITIES"
        items={methodologyData}
        bgColor="bg-[#284181]"
        cardColor="bg-[#284181]"
        textColor="text-white"
        iconColor="bg-white/10"
        cardhov="hover:bg-[#405EA9]"
        headSub="While Python constitutes a cornerstone of our expertise, our development team boasts proficiency across a wide spectrum of contemporary technologies. This breadth of skills enhances our capacity to deliver diverse and comprehensive solutions, catering to various project requirements."
  />
    
    </>
  )
}

export default Python