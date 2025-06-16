
import StatsSection from '../../../components/common/StatsSection'
import IconTopCard from '../../../components/common/IconTopCard'
import CallToAction from '../../../components/common/CallToAction'
import BoxBaseBord from '../../../components/common/BoxBaseBord'
import TechStackSection from '../../../components/common/TechStackSection'
import { useState } from 'react'
import { DollarSign, Lightbulb, Lock } from 'lucide-react';
import WhiteBgCard from '../../../components/common/WhiteBgCard'
import CardMethodologyBase from '../../../components/common/CardMethodologyBase'
import ContactModal from '../../../components/common/ContactModal'
import FrontEnd from '../../../components/techstack/FrontEnd'
import BackEnd from '../../../components/techstack/BackEnd'
import MobileApp from '../../../components/techstack/MobileApp'
import UiUx from '../../../components/techstack/UiUx'
import SelectSidebar from '../../../components/common/sidebarselect/SelectSidebar'
const Automotive = () => {
  const [showModal, setShowModal] = useState(false);
   const stats = [
    { value: 4, label: "successful projects in Automotive industry served", suffix: "+" },
    { value: 30, label: "specialist in the Automotive industry", suffix: "+" },
    { value: 8, label: "years of expertise in business", suffix: " years" },
    { value: 4.8, label: "review rating based on 55+ reviews", decimals: 1, suffix: "/5 " },
  ];

 const content = {
   heading: "AUTOMOTIVE SOFTWARE DEVELOPMENT",
  subheading:
    "Empower your automotive business with meticulously crafted software solutions for your automotive business at Go InfoTech.",
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
      'Explore the expertise of our professionals, offering high-quality performance and scalability in the software solutions offered.',
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
    title: 'AUTOMOTIVE STARTUPS',
    description:
      'We take pride in our professional developers, designers, and specialists who have delivered excellence in software solutions customized to their unique automotive business needs.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'CAR MANUFACTURING CORPORATIONS',
    description:
      'We meticulously crafted a powerful, security-rich, IT solution for several car manufacturing corporations to elevate the user experience while incorporating innovation.',
  },
  {
    icon: <Lock size={20} />,
    title: 'ELECTRIC & AUTONOMOUS VEHICLE VENTURES',
    description:
      'Empowering electric and autonomous vehicle ventures by unleashing the power of technology and innovation and providing solutions that are feature-rich, scalable, user-friendly, and safe to use.',
  },
   {
    icon: <Lock size={20} />,
    title: 'AUTOMOTIVE SOFTWARE PRODUCT COMPANIES',
    description:
      'A comprehensive solution designed to revolutionize the automotive industry. It serves as a pivotal tool for businesses, offering a range of features aimed at enhancing efficiency and optimizing for a swift driving experience.',
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
    title: 'STAFF AUGMENTATION FOR AUTOMOTIVE IT PRODUCTS',
    content: {
      paragraphs: [
        `Add the expertise of Go InfoTech Solution to your existing team, and make sure you augment it with highly specialized and experienced professionals from the most trusted Custom Software Development Company in Udaipur.`,
      ],
     
    },
     button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
  {
    title: 'CAR RENTAL MANAGEMENT SOFTWARE SOLUTIONS',
    content: {
      paragraphs: [
        'At Go InfoTech, we offer comprehensive software solutions for car rental services designed to revolutionize operations within the automotive industry.',
      ],
      sections:[{ heading: 'OFFERING FUNCTIONALITIES:'}],
      list: [
        'Scheduling and Booking administration',
        'Automotive fleet administration',
        'Pricing policies',
       
        
      ],
    },
  },
   {
    title: 'VEHICLE DIAGNOSTIC SOFTWARE SOLUTIONS',
    content: {
      paragraphs: [
        'Incorporate meticulously planned, AI-driven risk assessment software solutions for vehicle diagnosis, which will include regular vehicle maintenance.',
      ],
      sections:[{ heading: ' FUNCTIONALITIES OF OUR SOFTWARE SOLUTIONS:'}],
      list: [
        'Identify faults and issues ',
        'Assessment of vehicle performance',
        'Recommending maintenance actions',
        
        
      ],
    },
  },
   {
    title: 'AUTONOMOUS CAR SOFTWARE DEVELOPMENT',
    content: {
      paragraphs: [
        'Lead the way in innovation with state-of-the-art autonomous vehicle software.',
      ],
      sections:[{ heading: 'We are excellent at enabling the smooth integration of many autonomous features, such as:'}],
      list: [
        'Self-navigation;',
        'Obstacle detection;',
        'Automated parking.',
        
      ],
    },
  },
   {
    title: 'CONNECTIVITY AND TELEMATICS SOLUTIONS',
    content: {
      paragraphs: [
        'Responsive vehicle connectivity with telematics solutions.',
      ],
      sections:[{ heading: 'FUNCTIONALITIES OF OUR SOFTWARE SOLUTIONS:'}],
      list: [
        'Implementation of real-time vehicle tracking',
        'Remote diagnostics',
        'Advanced navigation systems.',
       
      ],
    },
  },
  {
    title: 'FLEET MANAGEMENT SOFTWARE',
    content: {
      paragraphs: [
        'We offer smooth fleet solutions for your customers with our fleet management software.',
      ],
     sections:[{ heading: 'FUNCTIONALITIES OF OUR SOFTWARE SOLUTIONS:'}],
      list: [
        'Deployment of live vehicle tracking',
        'Scheduling and easy vehicle booking options',
        'Enhanced routing technology',
        
      ],
    },
  },

];
  return (
    <>
    
     <StatsSection stats={stats} content={content}/>
    <IconTopCard servicesData={iconTopCardData} heading='WHY CHOOSE GO INFOTECH AS YOUR PARTNER'/>

     <SelectSidebar 
                       services={sidebarData}
                        headingSidebar={"PARTNER WITH GO INFOTECH TO DRIVE AUTOMOTIVE SUCCESS"} 
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

export default Automotive