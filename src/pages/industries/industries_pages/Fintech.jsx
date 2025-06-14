
import StatsSection from "../../../components/common/StatsSection";
import IconTopCard from "../../../components/common/IconTopCard";
import CallToAction from "../../../components/common/CallToAction";
import BoxBaseBord from "../../../components/common/BoxBaseBord";
import TechStackSection from "../../../components/common/TechStackSection";
import { useState } from "react";
import ContactModal from "../../../components/common/ContactModal";
import WhiteBgCard from "../../../components/common/WhiteBgCard";
import { DollarSign, Lightbulb, Lock } from 'lucide-react';
import CardMethodologyBase from "../../../components/common/CardMethodologyBase";
import FrontEnd from "../../../components/fintech/FrontEnd";
import BackEnd from "../../../components/fintech/BackEnd";
import MobileApp from "../../../components/fintech/MobileApp";
import UiUx from "../../../components/fintech/UiUx";
import SelectSidebar from "../../../components/common/sidebarselect/SelectSidebar";
const Fintech = () => {
  const [showModal, setShowModal] = useState(false);
  const stats = [
    { value: 5, label: "successful FinTech projects delivered", suffix: "+" },
    { value: 10, label: "Specialist in the Financial sector", suffix: "+" },
    { value: 2, label: "years of expertise in the business ", suffix: " years" },
    { value: 4.8, label: "review rating based on 55+ reviews", decimals: 1, suffix: "/5 " },
  ];

  const content = {
    heading: "FINTECH SOFTWARE DEVELOPMENT",
    subheading:
      "Embrace your journey of stepping into the digital realm  with our meticulously planned FinTech solutions for your business growth.",
     
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
      'Explore the FinTech expertise of our professionals, offering high-quality performance and scalability in the software solutions offered.',
      // { text: ' Web Development company in Udaipur ', path: '/services/development-company' },
      // ' and digital health technologies.',
    ],
  },
   {
    title: 'COLLABORATE WITH CUTTING-EDGE TECHNOLOGIES',
    // titlePath: '/services/finance',
    description: [
      'We partner with updated technology tools to elevate performance and drive sales. We make use of AI, blockchain, and data analytics for effective operations.',
      // { text: ' Software Development company in Udaipur', path: '/services/development-company' },
      // ' we believe in incorporating AR to generate a remarkable user experience by meticulously integrating virtual try-ons and interactive 3D models into your app.',
      // {text: 'SEO Services in Udaipur.',  path: '/services/development-company'},
    ],
  },
   {
    title: 'ADHERENCE TO REGULATORY COMPLIANCE AND SECURITY',
    // titlePath: '/services/finance',
    description: [
      'At Go InfoTech, we value your credibility, which is why we prioritize security in our software solutions while simultaneously focusing on regulatory compliance.',
      
    ],
  },
  {
    title: 'FACILITATING SCALABILITY AND INTEGRATION',
    // titlePath: '/services/finance',
    description: [
      'We offer scalable solutions for facilitating seamless transactions and the integration of social media platforms while offering a compatible and interactive interface.',
      
    ],
  },
  {
    title: 'EFFECTIVE SUPPORT AND REAL-TIME MAINTENANCE',
    // titlePath: '/services/finance',
    description: [
      'We believe in offering real-time support and assistance to our clients while paying deliberate attention to their unique needs and requirements.',
      
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
    title: 'FINTECH STARTUPS',
    description:
      'We take pride in our fintech developers, designers, and specialists who have delivered excellence in software solutions customized to their unique business requirements.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'FINANCIAL INSTITUTIONS',
    description:
      'We meticulously crafted a powerful, security-rich, IT solution for the financial industry and institutions to elevate the user experience.',
  },
  {
    icon: <Lock size={20} />,
    title: 'PAYMENT SOLUTION PROVIDERS',
    description:
      'We offer digital payment options and digital wallet options for financial institutions, e-commerce service providers, and others. Our online payment solutions are feature-rich, scalable, user-friendly, and safe to use.',
  },
   {
    icon: <Lock size={20} />,
    title: 'GO FINTECH SOFTWARE PRODUCT',
    description:
      'Go Finance Software is a comprehensive solution designed to revolutionize operations within the finance industry. It serves as a pivotal tool for businesses, offering a range of features aimed at enhancing efficiency and optimizing customer interactions.',
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
  const sidebarData = [
  {
    title: 'STAFF AUGMENTATION FOR FINTECH PRODUCTS',
    content: {
      paragraphs: [
        `Add the expertise of Go InfoTech Solution to your existing team, and make sure you augment it with highly specialized and experienced professionals from the most trusted Custom Software Development Company in Udaipur.`,
      ],
     
    },
     button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
  {
    title: 'GO FINANCE APPLICATION',
    content: {
      paragraphs: [
        'Go Finance Software is a comprehensive solution designed to revolutionize operations within the finance industry.',
      ],
      sections: [
        {
          heading: 'OFFERING FUNCTIONALITIES:',
          
        },
      ],
      list: [
        'Customized alerts and daily pop-ups',
        'Account administration',
        'E-commerce and digital transactions',
        
      ],
    },
  },
   {
    title: 'RISK MANAGEMENT SOFTWARE SOLUTIONS',
    content: {
      paragraphs: [
        'Incorporate meticulously planned risk assessment and risk management software solutions to help you mitigate the risk.',
      ],
      sections:[{ heading: ' FUNCTIONALITIES OF OUR SOFTWARE SOLUTIONS:'}],
      list: [
        'Forecasting analysis',
        'On-the-fly surveillance ',
        'Adherence to regulatory compliance.',
        
      ],
    },
  },
   {
    title: 'DIGITAL WALLET SOLUTIONS',
    content: {
      paragraphs: [
        'Develop digital wallet solutions that are safe and ease the transaction process while elevating the user experience.FUNCTIONALITIES INCLUDE:',
      ],
     
      list: [
        'Several payment options',
        'Confidential ciphering',
        'Transaction Surveillance',
        'Long-term Customer Loyalty Development',
      ],
    },
  },
   {
    title: 'AI DRIVEN TRADING PLATFORM DEVELOPMENT',
    content: {
      paragraphs: [
        'Utilize the advanced capabilities of artificial intelligence to elevate your trading platforms.',
      ],
      sections:[{ heading: 'WE PROVIDE USERS WITH:'}],
      list: [
        'Forecasting insights;',
        'Instant data analysis; ',
        'Automated trading; ',
        'Customized investment plans.',
      ],
    },
  },
  {
    title: 'BLOCKCHAIN SOLUTIONS',
    content: {
      paragraphs: [
        'Indulge with the Custom Software Development Company in Udaipur and unleash the power of blockchain technology with Go InfoTech, offering security and transparency.',
      ],
     sections:[{ heading: 'WE OFFER SERVICES:'}],
      list: [
        'Personalized Customer Interactions Interface',
        'Developing decentralized applications (DApps);',
        'Secure online transactions',
        'smart contracts implementation',
      ],
    },
  },

];
  return (
    <>
      
        <StatsSection stats={stats} content={content} />
        <IconTopCard servicesData={iconTopCardData} heading="WHY CHOOSE GO INFOTECH AS YOUR PARTNER" />

        <SelectSidebar 
           services={sidebarData}
            headingSidebar={"OUR MACHINE LEARNING SERVICES"} 
             sectbgcolor="bg-[#314B8C]"
             headtextcolor= "text-white"
             dynamicontetext= "text-white"
               textList = "text-[#f6ae39]"
               selectedClass = 'bg-white text-[#314B8C] '
               unselectedClass = 'bg-[#405EA9] text-white hover:bg-[#54595F]'
            />  
        

        {/* TECH STACK */}
      <TechStackSection
        title="TECH STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />


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
     <BoxBaseBord headsection="OUR APPROACH WHEN DEVELOPING A REMARKABLE STARTUP MVP APP" steps={roadmapData}/>
     
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
  );
};

export default Fintech;
