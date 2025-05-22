import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import GridBlueBaseBord from '../../../../components/common/GridBlueBaseBord'
import CallToAction from '../../../../components/common/CallToAction'
import GridBlueCard from '../../../../components/common/GridBlueCard'
import WhiteBgCard from '../../../../components/common/WhiteBgCard'
import RightSideTextDesc from '../../../../components/common/RightSideTextDesc'
import CardMethodologyBase from '../../../../components/common/CardMethodologyBase'
import { DollarSign, Lightbulb, Lock } from 'lucide-react';
import { useState } from 'react'
import ContactModal from '../../../../components/common/ContactModal'
const CrossPlatformAppDev = () => {
const [showModal, setShowModal] = useState(false);
   const stats = [
   { value: 30, label: "mobile development specialists", suffix: "+" },
  { value: 8, label: "of expertise in business ", suffix: " years" },
  { value: 60, label: "successful projects delivery", suffix: "+" },
 
   { value: 4.85, label: "overall review rating based on 55+ reviews", decimals: 2, suffix: "/5 stars" },
 ];

 const content = {
   heading: "CROSS-PLATFORM MOBILE APP DEVELOPMENT SERVICES",
  subheading:
    "Developing high-performing and responsive apps that are on multiple platforms that are scalable.",
 };

 const crossPlatData = [


   {
    title: 'TTRUSTED AND RENOWNED:',
    description:
      'We are dedicated to serving you with excellence, and this is vouched by our client’s unwavering trust in our services, as we are a trusted custom Software Development Company in Udaipur.',
    icon: '🎯',
  },

  {
    title: 'EXPERTISE AT YOUR SERVICE',
    description:
      'Our team is dedicated to serving you with expertise, knowledge, and professionalism working to fuel the growth of your business. Choose Go InfoTech Solution for a reliable digital partner.',
    // highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
 
  {
    title: "INDUSTRIES' EXPERTISE",
    description:
      'We are a trusted Software Development company in Udaipur, with expertise from different industries all around the world using innovation, knowledge, and skills.',
   // highlight: 'Software Development company in Udaipur',
    icon: '🛡️',
  },
  {
    title: 'HIGH SATISFACTION RATES',
    description:
      'Empower your business with promising results and IT solutions by professionals who are dedicated to serving you right.',
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
    title: "COST-EFFECTIVE DEVELOPMENT",
    description:
      "Developing a cross-platform app at Go InfoTech Solution will be a more economical affair than crafting separate native apps for every single platform.",
  },
  {
    title: "FLEXIBILITY AND SCALABILITY",
    description:
      "Cross-platform development infrastructures are curated so that they are highly scalable and flexible, which facilitates the expansion of businesses & supports additional platforms.",
  },
  {
    title: "CONSISTENT USER EXPERIENCE",
    description:
      "Cross-platform frameworks allow the app to provide an enhanced user experience, uniformity, and feel across several different devices and platforms. This uniformity leads to an enhanced user experience and brand recognition.",
  },
 
  
  {
    title: "EASIER MAINTENANCE AND UPDATES",
    description:
      "A single codebase can be easily and more efficiently managed, maintained, and updated. By syncing the updates across all the platforms, one can ensure that the user has access to improved technology and features.",
  },
   {
    title: "FASTER TIME TO MARKET",
    description:
      "Cross-platform apps developed on a single codebase will help you develop, test, and launch faster, which will facilitate reaching out to the target audience on multiple platforms in no time.",
  },
  {
    title: "WIDER REACH",
    description:
      "Cross-platform apps are more compatible as they can be operated on multiple devices, enabling businesses to reach a wider range of audiences. With the interactive platform, user engagement also increases and generates more revenue.",
  },
];


const whitecardsData = [
  {
    title: 'ARTIFICIAL INTELLIGENCE',
    titlePath: '/services/finance',
    description: [
      'Empower your business with the unique capabilities of AI by partnering with Go InfoTech Solution, where we make sure to incorporate more intuitive and responsive results with the use of predictive analytics and chatbots. ',
      // { text: 'Development company in Udaipur', path: '/services/development-company' },
      // ' to enhance  the security and efficiency of the services.',
    ],
  },
   {
    title: 'CLOUD INTEGRATION',
    titlePath: '/services/finance',
    description: [
      'Ensuring seamless integration of cloud services to improve your app’s scalability, effectiveness, and functionality by making sure that the data is integrated and accessible from anywhere. ',
      // { text: ' Web Development company in Udaipur ', path: '/services/development-company' },
      // ' and digital health technologies.',
    ],
  },
   {
    title: 'AUGMENTED REALITY',
    titlePath: '/services/finance',
    description: [
      'As a leading   ',
      { text: ' Software Development company in Udaipur', path: '/services/development-company' },
      ' we believe in incorporating AR to generate a remarkable user experience by meticulously integrating virtual try-ons and interactive 3D models into your app.',
      // {text: 'SEO Services in Udaipur.',  path: '/services/development-company'},
    ],
  },
   {
    title: 'INTERNET OF THINGS',
    titlePath: '/services/finance',
    description: [
      'Harmonizing the use of sensors and smart devices to integrate real-time data while increasing its functionality and user experience. Incorporating IoT into the business can generate expanded opportunities for user engagement.',
      
    ],
  },
];
const methodologyData = [
  {
    icon: <DollarSign size={20} />,
    title: 'LAUNCHING ANEW:',
    description:
      'Trusted partners for businesses that are stepping into the mobile world for the first time, especially startups, for a responsive, interactive, and feature-rich Android application tailored to the unique needs of your business.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'MIGRATING FROM MVP TO NATIVE',
    description:
      'Organizations that initially incorporated a low code/no code MVP are now migrating to a native product to enhance their ROI and offer an improved user experience.',
  },
  {
    icon: <Lock size={20} />,
    title: 'IN-HOUSE TEAM AUGMENTATION',
    description:
      'Companies are planning on expanding with Android experts within their existing teams. We integrate productivity and knowledge into your organizational operations.',
  },
   {
    icon: <Lock size={20} />,
    title: 'SIMULTANEOUS ANDROID AND IOS DEVELOPMENT',
    description:
      'Businesses that are aiming for expansion on the Android and iOS platforms simultaneously. We specialize in providing a unified mobile app experience to users of different devices by complementing the existing in-house teams.',
  },
];
  return (
    <>
    
    <StatsSection stats={stats} content={content}/>
    <IconTopCard servicesData={crossPlatData} />
     <GridBlueBaseBord blueBaseData={blueBaseData} headings="ADVANTAGES OF CROSS-PLATFORM APP DEVELOPMENT"/>
   {/*  
    <GridBlueCard/>
     */}
     <RightSideTextDesc  heading="TECH INNOVATIONS FOR YOUR WEB APP"
    subheading="We are a renowned IT Company in Udaipur, dedicated to serving you and your unique business needs using our cutting-edge technology and innovation, while also ensuring that it is functional. We craft interactive and scalable web solutions to create captivating and visually appealing web applications."
    />
    <WhiteBgCard
     whitecards={whitecardsData}
    columns={2}
    />
     <CardMethodologyBase
     heading="WHOM WE SERVE"
        items={methodologyData}
        bgColor="bg-[#284181]"
        cardColor="bg-[#284181]"
        textColor="text-white"
        iconColor="bg-white/10"
         columns ="grid-cols-1 sm:grid-cols-2"
  />
    <CallToAction
     title="EMBARK ON CROSS-PLATFORM JOURNEY"
    subtitle="We specialize in cross-platform development for big corporations and startups that are planning on scaling up to match your unique needs. Launch your MVP on several platforms in just 3-6 months and explore endless opportunities!"
    buttonText="BOOK A CONSULTATION"
    onClick={() => setShowModal(true)}
    
    />
    <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

export default CrossPlatformAppDev