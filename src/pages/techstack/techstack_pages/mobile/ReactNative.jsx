import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import CardGridHovBase from '../../../../components/common/CardGridHovBase'

const ReactNative = () => {
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
const cardData = [
  {
    title: 'UNIFIED DEVELOPMENT',
    description: 'Develop applications for both iOS and Android platforms using a single codebase with React Native, expanding your reach and simplifying the development process.',
  },
  {
    title: 'ACCELERATED DEVELOPMENT CYCLE',
    description: 'Utilize React Natives hot reload feature and other tools to expedite development by up to 50%, reducing the time spent on recompilations and enhancing productivity.',
  },
  {
    title: 'REDUCED DEVELOPMENT COSTS',
    description: 'Save on app development expenses by leveraging React Natives reusable components, which streamline the creation process and minimize the need for redundant coding efforts.',
  },
  {
    title: 'REDUCED MAINTENANCE COSTS',
    description: 'Efficiently maintain your application with a single development team, cutting down on the costs associated with managing separate iOS and Android development teams.',
  },
  {
    title: 'ENHANCED APP PERFORMANCE',
    description: 'Achieve superior app performance by leveraging React Natives capability to integrate native code and utilize native APIs, ensuring a smooth and responsive user experience.',
  },
  {
    title: 'FUTURE-PROOF MOBILE SOLUTIONS',
    description: 'Ensure the long-term viability and compatibility of your application with React Natives backward-compatible technology, allowing your product to remain relevant and robust as mobile technologies evolve.',
  },
];
  return (
   <>
   <StatsSection stats={stats} content={content} />
   <IconTopCard servicesData={icontopData}/>
   <CardGridHovBase
   
   heading="ADVANTAGES OF REACT NATIVE DEVELOPMENT"
        cards={cardData}
        bgColor="bg-white"
        cardBgColor="bg-white"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
   
   />
   </>
  )
}

export default ReactNative