import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import CardGridHovBase from '../../../../components/common/CardGridHovBase'
import SelectSidebar from '../../../../components/common/sidebarselect/SelectSidebar'
const Flutter = () => {
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
    title: 'EFFICIENT CROSS-PLATFORM DEVELOPMENT',
    description: 'Develop for both iOS and Android using a single codebase with Flutter, simplifying the development process and ensuring consistency across platforms.',
  },
  {
    title: 'RAPID DEVELOPMENT WITH HOT RELOAD',
    description: 'Speed up development cycles with Flutters hot reload feature, enabling instant viewing of changes without requiring full app restarts, thereby boosting productivity.',
  },
  {
    title: 'REDUCED DEVELOPMENT COSTS',
    description: 'Save on development expenses by leveraging Flutters reusable code and widgets, which streamline the creation process across multiple platforms, leading to cost-efficiency.',
  },
  {
    title: 'HIGH-PERFORMANCE APPLICATIONS',
    description: 'Deliver smooth and responsive applications with Flutters high-performance rendering engine, guaranteeing a native-like user experience and optimal performance.',
  },
  {
    title: 'CUSTOMIZABLE AND EXPRESSIVE UI',
    description: 'Design visually appealing and highly customizable user interfaces using Flutters extensive set of material design and Cupertino widgets, enabling expressive UI design.',
  },
  {
    title: 'INTEGRATION WITH EXISTING CODE',
    description: 'Seamlessly integrate Flutter into your existing application codebase, making it a versatile choice for both new projects and ongoing developments, ensuring compatibility and flexibility.',
  },
];
   const sidebarData = [
  {
    title: 'STAFF AUGMENTATION FOR FLUTTER PROJECTS',
    content: {
      paragraphs: [
        `Augment your development squad with our proficient Flutter experts, amplifying your project’s prowess and expediting its fruition. `,
       
      ],
      sections:[{ heading: 'WE CAN ASSIST WITH:'}],
      list: [
        'Deploying adept Flutter developers tailored to your project requisites.',
        'Filling skill voids within your existing team framework.',
        'Delivering adaptable and scalable staffing solutions.',
       
        
      ],
    },
     button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
  {
    title: 'CUSTOM FLUTTER APP DEVELOPMENT',
    content: {
      paragraphs: [
        'Our forte lies in crafting bespoke, high-performance Flutter applications for iOS and Android platforms, ensuring a harmonized and effective user journey.',
      ],
      sections:[{ heading: 'WE CAN ASSIST WITH:'}],
      list: [
        'Creating cross-platform mobile apps that transcend device boundaries.',
        'Guaranteeing fluid performance and uniformity across various devices.',
        'Incorporating contemporary features customized to align with your business objectives.',
       
        
      ],
    },
     button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
   {
    title: 'FLUTTER APP MIGRATION',
    content: {
      paragraphs: [
        'We specialize in facilitating the smooth migration of your current mobile or web applications to Flutter, elevating them with enhanced performance and a consolidated codebase.',
      ],
      sections:[{ heading: 'WE CAN ASSIST WITH:'}],
      list: [
        'Effortlessly transitioning apps to Flutter from alternative platforms.',
        'Preserving functionality and data integrity throughout the migration process.',
        'Harnessing Flutter’s capabilities to optimize app performance and user experience.',
        
        
      ],
    },
  },
   {
    title: 'FLUTTER MAINTENANCE AND SUPPORT',
    content: {
      paragraphs: [
        'We provide extensive maintenance and support services for Flutter applications, guaranteeing their ongoing relevance, functionality, and efficiency.',
      ],
      sections:[{ heading: 'WE CAN ASSIST WITH:'}],
      list: [
        'Regularly conducting app updates and optimizations to keep your application up to date.',
        'Offering prompt bug fixes and technical support to address any issues that may arise.',
        'Ensuring your app remains adaptable to changing user requirements and advancements in technology.',
        
      ],
    },
    
  },
   {
    title: 'MOBILE APP DESIGN SERVICES',
    content: {
      paragraphs: [
        'Our mobile app design services are tailored to deliver captivating and visually appealing designs, guaranteeing an exceptional user experience.',
      ],
      sections:[{ heading: 'WHAT WE OFFER:'}],
      list: [
        'Formulating user-centric design strategies specifically crafted for mobile applications.',
        'Creating interactive and intuitive interfaces that enhance user engagement.',
        'Incorporating the latest design trends and cutting-edge technologies to ensure your app stands out.',
       
      ],
    },
     button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
  

];
  return (
    <>
    <StatsSection stats={stats} content={content} />
    <IconTopCard servicesData={icontopData}/>
     <SelectSidebar 
                               services={sidebarData}
                                headingSidebar={"OUR FLUTTER DEVELOPMENT SERVICES"} 
                                 sectbgcolor="bg-[#314B8C]"
                                 headtextcolor= "text-white"
                                 dynamicontetext= "text-white"
                                   textList = "text-[#f6ae39]"
                                   selectedClass = 'bg-white text-[#314B8C] '
                                   unselectedClass = 'bg-[#405EA9] text-white hover:bg-[#54595F]'
                                />  
    <CardGridHovBase
   
   heading="ADVANTAGES OF FLUTTER DEVELOPMENT"
        cards={cardData}
        bgColor="bg-white"
        cardBgColor="bg-white"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
   
   />
    
    </>
  )
}

export default Flutter