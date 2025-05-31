import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import GridBlueCard from '../../../../components/common/GridBlueCard'
import WhiteBgCard from '../../../../components/common/WhiteBgCard'
import RightSideTextDesc from '../../../../components/common/RightSideTextDesc'
import CardMethodologyBase from '../../../../components/common/CardMethodologyBase'
import { DollarSign, Lightbulb, Lock } from 'lucide-react';
const Andriod = () => {
    const stats = [
   { value: 30, label: "mobile development specialists", suffix: "+" },
  { value: 60, label: "Projects successfully delivered", suffix: "+" },
  { value: 8, label: "of expertise in business ", suffix: " years" },
    { value: 4.8, label: "rating based on 55+ reviews", decimals: 1, suffix: "/5 stars" },
 ];

 const content = {
   heading: "ANDROID APP DEVELOPMENT SERVICE",
  subheading:
    "Creating smooth and intuitive experiences within the Android ecosystem: Customized solutions that deeply connect with your target audience.",
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
    title: 'EDUCATION',
     titlePath: '/services/finance',
    description: [
      'Empower e-learning initiatives, streamline administrative tasks, and boost student engagement with meticulously crafted Android apps. ',
      //  { text: 'custom Software Development Company in Udaipur.', path: '/services/development-company' },
      // ' to enhance  the security and efficiency of the services.',
    ],
  },
   {
    title: 'HEALTHCARE',
     titlePath: '/services/finance',
    description: [
      'Facilitate telemedicine services, simplify appointment scheduling, and enable health monitoring through tailored Android solutions for the healthcare sector.',
      // { text: ' Web Development company in Udaipur ', path: '/services/development-company' },
      // ' and digital health technologies.',
    ],
  },
   {
    title: 'FINTECH',
    // titlePath: '/services/finance',
    description: [
      'Ensure secure transactions and intuitive user experiences with Android applications designed specifically for banking, insurance, and fintech purposes.',
      // { text: ' Software Development company in Udaipur', path: '/services/development-company' },
      // ' we believe in incorporating AR to generate a remarkable user experience by meticulously integrating virtual try-ons and interactive 3D models into your app.',
      // {text: 'SEO Services in Udaipur.',  path: '/services/development-company'},
    ],
  },
   {
    title: 'MEDIA & ENTERTAINMENT',
    // titlePath: '/services/finance',
    description: [
      'Enhance the entertainment experience by developing Android apps for streaming, content management, and interactive platforms.',
      
    ],
  },
  {
    title: 'E-COMMERCE',
    // titlePath: '/services/finance',
    description: [
      'Optimize customer engagement and facilitate secure transactions with Android platforms tailored for seamless product browsing and payment processing.',
      
    ],
  },
  {
    title: 'AUTOMOTIVE',
    // titlePath: '/services/finance',
    description: [
      'Integrate seamlessly with vehicle systems to offer navigation, diagnostics, and in-car entertainment through custom Android applications.',
      
    ],
  },
  {
    title: 'GIS',
    // titlePath: '/services/finance',
    description: [
      'Enable efficient data collection, spatial analysis, and map visualization in Geographic Information Systems (GIS) with purpose-built Android apps.',
      
    ],
  },
];
const andAppvData=[
{
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "Leverage the power of AI to infuse your app with intelligence, intuition, and responsiveness. From chatbots offering personalized assistance to predictive analytics predicting user preferences, AI can revolutionize user experiences and enhance engagement.",
  },
  {
    title: "CLOUD INTEGRATION",
    description:
      "Integrate seamlessly with cloud services to enhance your app's scalability, performance, and storage capabilities. Enable real-time data syncing and ensure accessibility from anywhere, empowering users with uninterrupted access to their data.",
  },
  {
    title: "AUGMENTED REALITY",
    description:
      "Immerse your users in captivating experiences by integrating augmented reality (AR) features into your app. From virtual try-ons allowing users to visualize products in real-world environments to interactive 3D models bringing static content to life, AR has the potential to redefine user interactions and create unforgettable experiences.",
  },
  {
    title: "INTERNET OF THINGS",
    description:
      "Connect your app with smart devices and sensors to provide users with real-time data, automation, and enhanced functionalities. IoT integration opens up new possibilities for user engagement and utility, enabling seamless interaction with the physical world and enhancing the overall user experience. By embracing these technological innovations, your app can break new ground, delight users, and stay ahead of the competition in today's rapidly evolving digital landscape.",
  },

];
const methodData=[
   {
    icon: <DollarSign size={20} />,
    title: 'BEGINNING FROM SCRATCH',
    description:
      'We cater to startups or businesses venturing into the mobile realm for the first time. We help build robust and scalable Android applications from the ground up, tailored to their unique requirements and aspirations.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'MIGRATING FROM MVP TO NATIVE',
    description:
      'We assist enterprises that initially launched with a low code/no code MVP and are now transitioning to a native product. Our aim is to optimize their return on investments and provide a refined user experience.',
  },
  {
    icon: <Lock size={20} />,
    title: 'TEAM AUGMENTATION',
    description:
      'We offer services for companies seeking to augment their existing teams with specialized Android expertise. By seamlessly integrating with your team, we enhance productivity and bring in-depth knowledge to the table.',
  },
   {
    icon: <Lock size={20} />,
    title: 'PARALLEL ANDROID & IOS DEVELOPMENT',
    description:
      'For businesses aiming to expand simultaneously on both Android and iOS platforms, we provide support. We work in tandem with your in-house iOS team to ensure a consistent and unified mobile experience across all devices.',
  },

];
  return (
    <>
    
    <StatsSection stats={stats} content={content} />
    <IconTopCard servicesData={icontopData}/>
    
    <WhiteBgCard 
     whitecards={whitecardsData}
    columns={3}
    heading="ANDROID SOLUTIONS TO INDUSTRY-SPECIFIC NEEDS"
     subheading="Tailoring Android solutions to meet industry-specific demands, we bridge the gap between technology and diverse sectors, fostering growth and innovation through customized applications."
    />
    <GridBlueCard
    title="TECH INNOVATIONS FOR YOUR ANDROID APP"
  subtitle="Elevate your application with cutting-edge technological advancements, ensuring it goes beyond mere functionality to become truly revolutionary. Stay at the forefront of innovation, remain relevant, and captivate your audience with these transformative features:"
    industries={andAppvData}
     columns={2} 
 
    />

     <CardMethodologyBase
    heading="WHOM WE SERVE"
        items={methodData}
        borderColor='border-[#D0DCFA]'
        bgColor="bg-[#FAFBFF]"
        cardColor="bg-white"
        textColor="text-[#314B8C]"
        iconColor="bg-[#314B8C]"
        columns ="grid-cols-1 sm:grid-cols-2"
        cardhov="hover:bg-[#F3F6FE]"
       
    />
    
    
    </>
  )
}

export default Andriod