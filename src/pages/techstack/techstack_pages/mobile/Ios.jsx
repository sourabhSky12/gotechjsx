import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import SelectSidebar from '../../../../components/common/sidebarselect/SelectSidebar'
import { useState } from 'react'
import FrontEnd from '../../../../components/techstack/FrontEnd'
import BackEnd from '../../../../components/techstack/BackEnd'
import UiUx from '../../../../components/techstack/UiUx'
import MobileApp from '../../../../components/techstack/MobileApp'
import TechStackSection from '../../../../components/common/TechStackSection'
const Ios = () => {
    const stats = [
   { value: 60, label: "projects delivered successfully", suffix: "+" },
   { value: 8, label: "of expertise in business ", suffix: " years" },
   { value: 7, label: "were willing to refer Go InfoTech",  suffix: "out of /9" },
   { value: 20, label: "experienced specialists worldwide", suffix: "+" },
 ];

 const content = {
   heading: "OUR TECH STACK",
  subheading:
    "Explore the blend of technologies we harness to turn challenging tasks into successful projects.",
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
const sidebarbgData =[
    {
    title: 'STAFF AUGMENTATION ',
    content: {
      paragraphs:["Go-Infotech Solution Pvt Ltd is a custom Software Development Company in Udaipur aiming to provide seamless project execution by staff augmentation for optimal resource management:"],
      
       sections: [
        {
          heading: 'IT STAFF AUGMENTATION',
          paragraphs: [
            'We are dedicated to providing you with highly skilled and experienced IT professionals who will help you focus on core aspects so that your business reaches new heights.'
          ]
        },
          {
          heading: 'COMMITTED TEAM',
          paragraphs: [
            'Our team at Go InfoTech Solution is a living testament to our expertise and knowledge and is committed to meeting your unique business needs.'
          ]
        },
          {
          heading: 'ON-DEMAND CTO',
          paragraphs: [
            'We offer CTO services for strategic technological assistance so that your business reaches exponential heights without the overhead of hiring a full-time professional.'
          ]
        },

      
      ],
    },
    
  },
   
   {
    title: 'IT CONSULTING ',
    content: {
      paragraphs: [
        'Our IT Company in Udaipur is here to navigate you in the evolving tapestry of Technology while providing appropriate guidance from highly qualified professionals:',
      ],
       sections: [
        {
          heading: 'TECHNICAL DUE DILIGENCE',
          paragraphs: [
            'After conducting a thorough evaluation of your business while assessing the project feasibility, relevant risks, and growth ambition of your project, our team provides strategic insights for your project growth.'
          ]
        },
        {
          heading: 'PROJECT MANAGEMENT AND COORDINATION',
          paragraphs: [
          ' Our team ensures that your project delivery is timely and effective through proper management and streamlined communication with the development teams.'
          ]
        
        },
         {
          heading: 'DATA ANALYTICS AND BUSINESS INTELLIGENCE',
          paragraphs: [
          'Ensure that you make data-driven decisions through a thorough evaluation of your data and gain a competitive advantage over your rivals with our Data analytics and BI services.'
          ]
        
        },
      ],
     
    },
  },
   {
    title: 'CUSTOM SOFTWARE DEVELOPMENT',
      content: {
      paragraphs: [
        'Our team is committed to delivering unique software solutions to your specific business requirements. Our end-to-end development service results in high-performance outcomes that are structured to your business needs.',
      ],
       sections: [
        {
          heading: 'WEB DEVELOPMENT',
          paragraphs: [
            'Aim to develop a user-centric web application that is adaptive, intuitive, visually engaging, and designed to meet the unique needs of your business.'
          ]
        },
        {
          heading: 'MOBILE DEVELOPMENT',
          paragraphs: [
          'Crafting a mobile application that is user-friendly, visually appealing, and can be used on Android and iOS platforms to stay updated with the evolving tech.'
          ]
        
        },
         {
          heading: 'UI/UX DESIGN',
          paragraphs: [
          'Craft user-centric designs that are seamless and engaging for the audience across all media modes and platforms.'
          ]
        
        },
      ],
     
    },
  },
   {
    title: 'INTELLIGENT AUTOMATION',
    content: {
      paragraphs: [
        'We are dedicated to serving you with the best services incorporating state-of-the-art technologies like AI, machine learning, blockchain, and IoT, while we transform your business to achieve new heights.',
      ],
       sections: [
        {
          heading: 'AI & ML SOLUTIONS:',
          paragraphs: [
            'Empower your business to grow by incorporating Artificial Intelligence and Machine Learning to enhance the decision making process and robust growth of business.'
          ]
        },
        {
          heading: 'BLOCKCHAIN SOLUTIONS:',
          paragraphs: [
          'Secure and transparent blockchain solutions tailored to your unique needs and industry requirements, ranging from cryptocurrencies to decentralized applications (DApps).'
          ]
        
        },
         {
          heading: 'IoT Solutions:',
          paragraphs: [
          'A seamless interlinkage and data exchange using our IoT solutions between devices, systems, and individuals will fuel the business’s growth.'
          ]
        
        },
      ],
     
    },
  },
    {
    title: 'MANAGED IT SERVICE:',
    content: {
      paragraphs: [
        'At Go InfoTech Solution, a leading Software Development company in Udaipur we offer managed IT services to foster the growth of your business:',
      ],
       sections: [
        {
          heading: 'DATABASE DEVELOPMENT SERVICES',
          paragraphs: [
            'To ensure the effective storage, retrieval, and management of business data, we design, develop, and optimize database development services.'
          ]
        },
        {
          heading: 'CLOUD & DevOps SOLUTIONS',
          paragraphs: [
          'We incorporate the best practices of DevOps and cloud solutions to expedite software delivery and collaborative space, along with streamlining the entire development and deployment lifecycle.'
          ]
        
        },
         {
          heading: 'SOLUTION ARCHITECTURE SERVICES',
          paragraphs: [
          'Our team is dedicated to designing and deploying adaptive, secure, and high-performance IT infrastructure that is crafted to align with your business objectives.'
          ]
        
        },
      ],
     
    },
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
  console.log(selectedStack);

  return (
    <>
    
    <StatsSection stats={stats} content={content} />
      <TechStackSection
        title="TECH STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />
    
    <IconTopCard servicesData={icontopData}/>
      <SelectSidebar 
       services={sidebarbgData}
        headingSidebar={"OUR SERVICES"} 
         sectbgcolor="bg-[#314B8C]"
         headtextcolor= "text-white"
         dynamicontetext='text-white'
           selectedClass = 'bg-white text-[#314B8C] '
           unselectedClass = 'bg-[#405EA9] text-white hover:bg-[#54595F]'
        />  
    
    </>
  )
}

export default Ios