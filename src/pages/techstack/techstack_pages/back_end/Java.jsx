import { useState } from 'react';
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import CardMethodologyBase from '../../../../components/common/CardMethodologyBase';
import { DollarSign, Lightbulb, Lock } from 'lucide-react';
import TechStackSection from '../../../../components/common/TechStackSection';
import FrameworkJava from '../../../../components/java/FrameworkJava';
import DataManageJava from '../../../../components/java/DataManageJava';

const Java = () => {
       const stats = [
  { value: 20, label: "experienced Java specialists worldwide", suffix: "+" },
   { value: 4.8, label: "rating based on 60+ reviews", decimals: 1, suffix: "/5 stars" },
 
  { value: 40, label: "Java projects successfully delivered", suffix: "+" },
  { value: 8, label: "of expertise in Java development ", suffix: " years" },
   
 ];


 const content = {
   heading: "JAVA DEVELOPMENT SERVICES",
  subheading:
    "Go InfoTech offers a comprehensive range of solutions designed to deliver robust, scalable, and high-performing applications. With a dedicated emphasis on Java technology, we specialize in crafting enterprise-grade applications, microservice architectures, and cloud-based solutions.",
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
const methodData=[
   {
    icon: <DollarSign size={20} />,
    title: 'PROJECT ASSESSMENT',
    description:
      'Ensuring that your project is assessed with the relevant expertise and knowledge to enable you to optimize your operations. We make available software developers who will help accelerate the growth of your business.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'KNOWLEDGE BASE',
    description:
      'At Go InfoTech, we operate within a highly conducive learning environment, ensuring that each individual grows and builds their own core competencies. Making it easier for our clients to reach out to us with their specific requirements.',
  },
  {
    icon: <Lock size={20} />,
    title: 'TECH EXPERTISE',
    description:
      'Our tech experts specialize in providing you with technical assistance for the exponential business growth of your platform.',
  },
  

];
 
  const [stacklist] = useState([
    {
      title: "JAVA FRAMEWORKS & LIBRARIES",
      element: <FrameworkJava />,
    },
    {
      title: "DATABASES & DATA MANAGEMENT",
      element: <DataManageJava />,
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
        title="JAVA DEVELOPMENT TECH-STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />

    <CardMethodologyBase
    heading="DIVERSE TECH CAPABILITIES"
        items={methodData}
        bgColor="bg-[#FAFBFF]"
        cardColor="bg-white"
        textColor="text-[#314B8C]"
        iconColor="bg-[#314B8C]"
        columns ="grid-cols-1 sm:grid-cols-3"
        cardhov="hover:bg-[#F3F6FE]"
        headSub="Our Java development services are enriched with proficiency in key front-end technologies such as React, Angular, and Vue. This synergy enables us to provide comprehensive full-stack development solutions, ensuring seamless integration between robust Java back-ends and dynamic front-ends."
    />
    </>
  )
}

export default Java