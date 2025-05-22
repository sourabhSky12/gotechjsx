import React from 'react'
import StatsSection from '../../../components/common/StatsSection'
import IconTopCard from '../../../components/common/IconTopCard'
import CallToAction from '../../../components/common/CallToAction'
import BoxBaseBord from '../../../components/common/BoxBaseBord'
import WhiteBgCard from '../../../components/common/WhiteBgCard'
import CardMethodologyBase from '../../../components/common/CardMethodologyBase'
import { useState } from 'react'
import { DollarSign, Lightbulb, Lock } from 'lucide-react';
import ContactModal from '../../../components/common/ContactModal'
const MediaEntertain = () => {
  const [showModal, setShowModal] = useState(false);
 const stats = [
    { value: 75, label: "tech projects delivered in the Media & Entertainment industry", suffix: "+" },
    { value: 50, label: "specialists in the industry.", suffix: "+" },
    { value: 8, label: "years of expertise in the business ", suffix: " years" },
    { value: 4.8, label: "rating based on 55+ reviews", decimals: 1, suffix: "/5 " },
  ];

 const content = {
   heading: "MEDIA & ENTERTAINMENT SOFTWARE DEVELOPMENT",
  subheading:
    "With Go InfoTech, unleash the power of innovation and expertise to transform your media and entertainment services, driving business growth.",
 };

   const iconTopCardData = [
    {
      title: "OUR CLIENT’S EXPERIENCE",
      description:
        "Our clients have said it too, Go InfoTech has proved to be an expert custom Software Development Company in Udaipur driving seamless growth for our clients and showcasing our proficiency in web development.",
      icon: "🎯",
      highlight: "custom Software Development Company in Udaipur",
    },

    {
      title: "GLOBAL COVERAGE ACROSS TIME ZONES",
      description:
        "We are available 24/7 at your service as we operate across 4 different time zones, which is why we ensure seamless communication. Our team at Go InfoTech is available at your service anytime.",
      // highlight: 'custom Software Development Company in Udaipur.',
      icon: "👤",
    },

    {
      title: "WIDE RANGE OF SERVICES",
      description:
        "As a leading Web Development company in Udaipur, we offer custom team augmentation in software development, mobile app development, web application development, software maintenance and support, and more.",
      highlight: "Web Development company in Udaipur",
      icon: "🛡️",
    },
    {
      title: "TRUSTED AND RENOWNED:",
      description:
        "We are dedicated to serving you with excellence, and this is vouched by our client’s unwavering trust in our services, as we are a trusted custom Software Development Company in Udaipur.",
      icon: "📋",
      highlight: "custom Software Development Company in Udaipur",
    },
    {
      title: "INDUSTRIES' EXPERTISE:",
      description:
        "We are a trusted Software Development company in Udaipur, with expertise in FinTech solutions while using innovation, knowledge, and skills from all around the world.",
      icon: "🌐",
      highlight: "Software Development company in Udaipur",
    },
    {
      title: "EXPERTISE AT YOUR SERVICE:",
      description:
        "Our team is dedicated to serving you with expertise, knowledge, and professionalism, working to fuel the growth of your business. Choose Go InfoTech Solution for a reliable digital partner.",
      icon: "⚙️",
    },
  ];
   const whitecardsData = [
  {
    title: 'BUSINESS-ORIENTED PERSONALIZATION',
     // titlePath: '/services/finance',
    description: [
      'We offer comprehensive software solutions that are custom-developed to meet your specific media and entertainment service requirements.',
      //  { text: 'custom Software Development Company in Udaipur.', path: '/services/development-company' },
      // ' to enhance  the security and efficiency of the services.',
    ],
  },
   {
    title: 'OPTIMIZED PERFORMANCE AND FLEXIBILITY',
   //  titlePath: '/services/finance',
    description: [
      'Explore the expertise of our professionals, offering high-quality performance and scalability in the media and entertainment service solutions offered at Go InfoTech.',
      // { text: ' Web Development company in Udaipur ', path: '/services/development-company' },
      // ' and digital health technologies.',
    ],
  },
   {
    title: 'COLLABORATE WITH CUTTING-EDGE TECHNOLOGIES',
    // titlePath: '/services/finance',
    description: [
      'We partner with updated technology tools to elevate performance and drive sales. We make use of AI, blockchain, and data analytics for effective management of media and entertainment services.',
      // { text: ' Software Development company in Udaipur', path: '/services/development-company' },
      // ' we believe in incorporating AR to generate a remarkable user experience by meticulously integrating virtual try-ons and interactive 3D models into your app.',
      // {text: 'SEO Services in Udaipur.',  path: '/services/development-company'},
    ],
  },
   {
    title: 'ADHERENCE TO REGULATORY COMPLIANCE AND SECURITY',
    // titlePath: '/services/finance',
    description: [
      'At Go InfoTech, we value your credibility, which is why we prioritize security in our media and entertainment service solutions while simultaneously focusing on regulatory compliance.',
      
    ],
  },
  {
    title: 'FACILITATING SCALABILITY AND INTEGRATION',
    // titlePath: '/services/finance',
    description: [
      'We offer scalable media and entertainment solutions for facilitating seamless transactions and the integration of social media platforms while offering a compatible and interactive interface.',
      
    ],
  },
  {
    title: 'EFFECTIVE SUPPORT AND REAL-TIME MAINTENANCE',
    // titlePath: '/services/finance',
    description: [
      'We believe in offering real-time support and assistance to our clients while paying deliberate attention to the unique needs and requirements of media and entertainment businesses.',
      
    ],
  },
  
];
  const roadmapData = [
    
  {
    title: "DISCOVERY & PLANNING",
    description:
      "Embarking on the journey of manifesting your vision into reality through our expert assistance, we understand your vision and iteration and conduct comprehensive analysis and strategies for our move.",
    result: "Detailed planning and comprehensive analysis",
  },
  {
    title: "DESIGN & PROTOTYPING",
    description:
      "Designing and developing prototypes of your vision while engaging our UI/UX designers in the project. ",
     result: "An engaging and feature-rich prototype",
  },
  {
    title: "PRODUCT DEVELOPMENT & TESTING",
    description:
      "Our team of developers is dedicated to building a product that is functional, feature-rich, and offers high-quality performance. ",
     result: "Development and testing of MVP",
  },
  {
    title: "LAUNCH & CONTINUOUS IMPROVEMENT",
    description:
      "Our team is at your service to serve you with excellence. We take into account your unique feedback and aim for continuous improvement.",
     result: "Launching of MVP and incorporating feedback improvement.",
  },
 
];
const methodologyData = [
  {
    icon: <DollarSign size={20} />,
    title: 'MEDIA STARTUPS',
    description:
      'We take pride in our professional developers, designers, and specialists who have delivered excellence in media and entertainment software solutions customized to their unique online business needs.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'PRODUCT-BASED ENTERTAINMENT COMPANIES',
    description:
      'We meticulously crafted a powerful, security-rich IT solution for several product-based entertainment companies to elevate their user experience while incorporating innovation.',
  },
  {
    icon: <Lock size={20} />,
    title: 'DIGITAL MARKETING CORPORATIONS',
    description:
      'Leading Digital Marketing Company in Udaipur, Empowering digital marketing companies by unleashing the power of technology and innovation and providing solutions that are feature-rich, scalable, user-friendly, and safe to use.',
  },
   {
    icon: <Lock size={20} />,
    title: 'MEDIA & ENTERTAINMENT CORPORATES',
    description:
      'Offering comprehensive e-commerce solutions designed to boost sales. It serves as a pivotal tool for businesses, offering a range of features like CRM, payment gateways, etc. aimed at enhancing efficiency and optimizing operations in media and entertainment corporates.',
  },
];
  return (
    <>
    
      <StatsSection stats={stats} content={content}/>
    <IconTopCard servicesData={iconTopCardData} heading='WHY CHOOSE GO INFOTECH AS YOUR PARTNER'/>
         <CallToAction
     title="ADVANTAGES OF PARTNERING WITH GO INFOTECH FOR FINTECH SOFTWARE DEVELOPMENT"
   
    buttonText="ALL SERVICES"
    onClick={() => setShowModal(true)}
    
    />
    <ContactModal show={showModal} onClose={() => setShowModal(false)} />

    <WhiteBgCard 
     whitecards={whitecardsData}
    columns={3}
    />
     <BoxBaseBord headsection="PRODUCT DELIVERY ROADMAP" steps={roadmapData}/>
     
<CardMethodologyBase
     heading="WHOM WE SERVE"
        items={methodologyData}
        bgColor="bg-[#314B8C]"
        cardColor="bg-[#314B8C]"
        textColor="text-white"
        iconColor="bg-white/10"
         columns ="grid-cols-1 sm:grid-cols-2"
         cardhov='hover:bg-[#405EA9]'
  />
       
    
    
    </>
  )
}

export default MediaEntertain