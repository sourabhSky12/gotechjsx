import React from 'react'
import StatsSection from '../../../components/common/StatsSection'
import IconTopCard from '../../../components/common/IconTopCard'
import CallToAction from '../../../components/common/CallToAction'
import BoxBaseBord from '../../../components/common/BoxBaseBord'
import ContactModal from '../../../components/common/ContactModal'
import { DollarSign, Lightbulb, Lock } from 'lucide-react';
import CardMethodologyBase from '../../../components/common/CardMethodologyBase'
import { useState } from 'react'
import WhiteBgCard from '../../../components/common/WhiteBgCard'
const Healthcare = () => {
   const [showModal, setShowModal] = useState(false);
    const stats = [
    { value: 2, label: "projects delivered in the Healthcare industry", suffix: "+" },
    { value: 15, label: "tech specialist in the industry", suffix: "+" },
    { value: 8, label: "years of expertise in the business ", suffix: " years" },
    { value: 4.8, label: "review rating based on 55+ reviews", decimals: 1, suffix: "/5 " },
  ];

 const content = {
   heading: "HEALTHCARE SOFTWARE DEVELOPMENT",
  subheading:
    "At Go InfoTech, we offer dedicated healthcare software development services, offering compatible IT solutions.",
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
      'We offer comprehensive software solutions that are custom-developed to your specific business requirements.',
      //  { text: 'custom Software Development Company in Udaipur.', path: '/services/development-company' },
      // ' to enhance  the security and efficiency of the services.',
    ],
  },
   {
    title: 'OPTIMIZED PERFORMANCE AND FLEXIBILITY',
   //  titlePath: '/services/finance',
    description: [
      'Explore the expertise of our professionals, offering high-quality performance and scalability in the software solutions offered for the Healthcare industry.',
      // { text: ' Web Development company in Udaipur ', path: '/services/development-company' },
      // ' and digital health technologies.',
    ],
  },
   {
    title: 'COLLABORATE WITH CUTTING-EDGE TECHNOLOGIES',
    // titlePath: '/services/finance',
    description: [
      'We partner with updated technology tools to elevate performance and drive sales. We make use of AI, forecasting analytics, and data analytics for effective operations in the healthcare sector',
      // { text: ' Software Development company in Udaipur', path: '/services/development-company' },
      // ' we believe in incorporating AR to generate a remarkable user experience by meticulously integrating virtual try-ons and interactive 3D models into your app.',
      // {text: 'SEO Services in Udaipur.',  path: '/services/development-company'},
    ],
  },
   {
    title: 'ADHERENCE TO REGULATORY COMPLIANCE AND SECURITY',
    // titlePath: '/services/finance',
    description: [
      'At Go InfoTech, we value your credibility, which is why we prioritize security in our software solutions while simultaneously focusing on regulatory compliance in the healthcare industry and upholding SDP.',
      
    ],
  },
  {
    title: 'FACILITATING SCALABILITY AND INTEGRATION',
    // titlePath: '/services/finance',
    description: [
      'We offer scalable solutions for facilitating seamless user interaction with healthcare professionals and offering a compatible and interactive interface.',
      
    ],
  },
  {
    title: 'EFFECTIVE SUPPORT AND REAL-TIME MAINTENANCE',
    // titlePath: '/services/finance',
    description: [
      'We believe in offering real-time support and medical assistance to your patients while paying deliberate attention to their unique needs and requirements in the healthcare sector.',
      
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
    title: 'HEALTH TECH STARTUPS',
    description:
      'We take pride in our professional developers, designers, and specialists who are dedicated to delivering excellence in healthcare software solutions customized to your specific business requirements.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'HOSPITALS & MEDICAL INSTITUTIONS',
    description:
      'Empowering hospitals and medical institutions by offering security in an IT software solution that is meticulously crafted to solve your specific medical requirements',
  },
  {
    icon: <Lock size={20} />,
    title: 'MEDICAL SOFTWARE PROVIDERS',
    description:
      'Empowering medical institutions with the expertise of Go InfoTech’s professionals. We deliver to the healthcare sector’s unique requirements with a safe and scalable solution that is responsive and user-friendly.',
  },
   {
    icon: <Lock size={20} />,
    title: 'PHARMACEUTICAL & BIOTECH COMPANIES',
    description:
      'Enhancing the pharmaceutical and biotech sectors with the professional assistance of specialists and optimizing user interaction while making use of predictive analysis.',
  },
];
  return (
    <>
    
     <StatsSection stats={stats} content={content}/>
    <IconTopCard servicesData={iconTopCardData} heading='WHY CHOOSE GO INFOTECH AS YOUR PARTNER FOR DIGITAL SOLUTIONS'/>
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

export default Healthcare