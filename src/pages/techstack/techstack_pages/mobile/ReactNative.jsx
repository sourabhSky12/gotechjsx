import { useState } from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import CardGridHovBase from '../../../../components/common/CardGridHovBase'
import TechLib from '../../../../components/reactNative/TechLib'
import TechStackSection from '../../../../components/common/TechStackSection'
import SelectSidebar from '../../../../components/common/sidebarselect/SelectSidebar'
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

  const [stacklist] = useState([
    {
      title: "TECHNOLOGIES & LIBRARIES",
      element: <TechLib/>,
    },
  
  ]);

  const [selectedStack, setSelectedStack] = useState(stacklist[0].element);

  const handleStackClick = (stackl) => {
    setSelectedStack(stackl.element);
  };
  console.log(selectedStack);
    const sidebarData = [
  {
    title: 'STAFF AUGMENTATION FOR REACT NATIVE PROJECTS',
    content: {
      paragraphs: [
        `Enhance your team’s capabilities by collaborating with our proficient React Native developers, who bring a wealth of expertise and efficiency to your project.`,
        
      ],
      sections:[{ heading: 'HOW WE CAN HELP:'}],
      list: [
        'Seamlessly integrate experienced developers into your existing team, ensuring smooth collaboration and synergy.',
        'Accelerate project timelines by leveraging additional manpower from our skilled React Native developers.',
        'Provide specialized React Native expertise tailored to address specific project requirements, ensuring optimal outcomes and success.',
       
        
      ],
    },
     button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
   {
    title: 'CUSTOM REACT NATIVE APP DEVELOPMENT',
    content: {
      paragraphs: [
        'Craft custom React Native applications tailored to match your distinct business needs and user expectations.',
      ],
      sections:[{ heading: 'HOW WE CAN HELP:'}],
      list: [
        'Build bespoke applications from the ground up, aligning them precisely with your business objectives and user preferences.',
        'Ensure that your apps are optimized for seamless performance across both Android and iOS platforms, guaranteeing a consistent user experience.',
        'Integrate the latest React Native features and functionalities to keep your applications innovative and competitive in the market.',
        
        
      ],
    },
  },
   {
    title: 'REACT NATIVE APP MIGRATION',
    content: {
      paragraphs: [
        'Effortlessly shift from native frameworks to the versatile, cross-platform environment of React Native, elevating app performance and expanding your reach.',
      ],
      sections:[{ heading: 'HOW WE CAN HELP:'}],
      list: [
        'Migrate your existing iOS/Android apps to React Native, ensuring a seamless transition while preserving functionalities and data integrity.',
        'Minimize downtime during the migration process, allowing your business operations to continue smoothly without interruptions.',
        'Enhance app functionality and user experience within the React Native ecosystem, leveraging its capabilities to deliver superior performance and engagement.',
        
        
      ],
    },
  },
   {
    title: 'REACT NATIVE MAINTENANCE & SUPPORT',
    content: {
      paragraphs: [
        'Continuously maintain and support your React Native applications to guarantee they remain current, secure, and optimized for peak performance.',
      ],
      sections:[{ heading: 'HOW WE CAN ASSIST YOU:'}],
      list: [
        'Deliver regular updates and feature enhancements to keep your apps aligned with evolving market trends and user expectations.',
        'Provide comprehensive technical support and troubleshooting services to address any issues or concerns promptly and effectively.',
        'Ensure app compatibility with the latest operating system versions and devices, allowing your applications to reach a wider audience and remain accessible to all users.',
        
      ],
    },
    
  },
   {
    title: 'E-COMMERCE MOBILE SOLUTIONS',
    content: {
      paragraphs: [
        'Create state-of-the-art e-commerce mobile applications using React Native, providing a seamless shopping experience across various devices.',
      ],
      sections:[{ heading: 'HOW WE CAN ASSIST YOU:'}],
      list: [
        'Develop responsive and intuitive e-commerce apps tailored to your brand’s identity and user preferences, ensuring a visually appealing and engaging shopping experience.',
        'Implement secure payment gateways and advanced shopping features, such as product search, filtering, and checkout processes, to facilitate seamless transactions and enhance user convenience.',
        'Optimize app performance to withstand high traffic volumes typical of e-commerce platforms, ensuring smooth operation and minimal downtime during peak periods.',
       
      ],
    },
     button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
    {
    title: 'UI/UX DESIGN',
    content: {
      paragraphs: [
        'Specializing in crafting visually appealing and intuitive user interfaces and experiences tailored specifically for React Native applications.',
      ],
      sections:[{ heading: 'HOW WE CAN ASSIST YOU:'}],
      list: [
        'Design engaging and interactive UI elements that captivate users and enhance their overall app experience.',
        'Create user-centric design flows that prioritize usability and ease of navigation, ensuring seamless interaction with the app.',
        'Implement responsive designs that adapt effortlessly to various screen sizes and devices, providing a consistent and enjoyable user experience across platforms.',
       
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
                               headingSidebar={"OUR REACT NATIVE SERVICES"} 
                                sectbgcolor="bg-[#314B8C]"
                                headtextcolor= "text-white"
                                dynamicontetext= "text-white"
                                  textList = "text-[#f6ae39]"
                                  selectedClass = 'bg-white text-[#314B8C] '
                                  unselectedClass = 'bg-[#405EA9] text-white hover:bg-[#54595F]'
                               />  
   <CardGridHovBase
   
   heading="ADVANTAGES OF REACT NATIVE DEVELOPMENT"
        cards={cardData}
        bgColor="bg-white"
        cardBgColor="bg-white"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
   
   />
    <TechStackSection
        title="REACT NATIVE DEVELOPMENT TECH STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />
   </>
  )
}

export default ReactNative