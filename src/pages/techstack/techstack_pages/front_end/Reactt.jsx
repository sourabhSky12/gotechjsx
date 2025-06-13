import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import CallToAction from '../../../../components/common/CallToAction'
import TechStackSection from '../../../../components/common/TechStackSection'
import { useState } from 'react'
import ContactModal from '../../../../components/common/ContactModal'
import FramAndLibReact from '../../../../components/react/FramAndLibReact'
import BackTechReact from '../../../../components/react/BackTechReact'
import SelectSidebar from '../../../../components/common/sidebarselect/SelectSidebar'

const Reactt = () => {
  
  const stats = [
   { value: 4, label: "React specialists worldwide", suffix: "+" },
  { value: 4.8, label: "rating based on 60+ reviews", decimals: 1, suffix: "/5 stars" },
  { value: 10, label: "Successful delivery of the React project", suffix: "+" },
  { value: 8, label: "of expertise in React development", suffix: " years" },
 ];
const [showModal, setShowModal] = useState(false);
 const content = {
   heading: "REACT.JS DEVELOPMENT SERVICES",
  subheading:
    "Explore high-quality applications that are scalable, responsive, and compatible. We assist you in achieving exponential growth in your business by delivering an unparalleled user experience.",
 };
const reactData = [
  {
    title: 'BUSINESS-ORIENTED PERSONALIZATION',
    description:
      'We offer comprehensive software solutions that are custom-developed to your specific educational institution’s requirements.',
  //  highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
  {
    title: 'OPTIMIZED PERFORMANCE AND FLEXIBILITY',
    description:
      'Explore the expertise of our professionals, offering high-quality performance and scalability in the software solutions offered for the educational industry.',
    icon: '🎯',
  },
  {
    title: "COLLABORATE WITH CUTTING-EDGE TECHNOLOGIES",
    description:
      'We partner with updated technology tools to elevate performance and drive sales. We make use of AI, forecasting analytics, and data analytics for effective operations in the educational sector.',
   // highlight: 'Software Development company in Udaipur',
    icon: '🛡️',
  },
  {
    title: 'ADHERENCE TO REGULATORY COMPLIANCE AND SECURITY',
    description:
      'At Go InfoTech, we value your credibility, which is why we prioritize security in our software solutions while simultaneously focusing on regulatory compliance in the educational industry norms.',
    icon: '📋',
  },
  {
    title: 'FACILITATING SCALABILITY AND INTEGRATION',
    description:
      'We offer scalable solutions for facilitating seamless user interaction with academic professionals and offering a compatible and interactive interface.',
    icon: '🌐',
  },
  {
    title: 'EFFECTIVE SUPPORT AND REAL-TIME MAINTENANCE',
    description:
      'We believe in offering real-time support and teacher assistance while paying deliberate attention to their unique needs and requirements in the educational sector.',
    icon: '⚙️',
  },
];
const [stacklist] = useState([
    {
      title: "REACT FRAMEWORKS & LIBRARIES",
      element: <FramAndLibReact />,
    },
    {
      title: "BACKEND TECHNOLOGIES FOR REACT",
      element: <BackTechReact />,
    },
   
  ]);

  const [selectedStack, setSelectedStack] = useState(stacklist[0].element);

  const handleStackClick = (stackl) => {
    setSelectedStack(stackl.element);
  };
     const sidebarData = [
  {
    title: 'STAFF AUGMENTATION FOR REACT PRODUCTS',
    content: {
      paragraphs: [
        `Add the expertise of the Angular team at Go InfoTech to your existing team, and make sure you augment it with highly specialized and experienced healthcare professionals from the most trusted Custom Software Development Company in Udaipur.`,
        
      ],
      sections:[{ heading: 'WE ASSIST YOU WITH:'}],
      list: [
        'Offering skilled React developers who suit both short-term and long-term requirements.',
        'Boosting your project’s development capabilities and expertise.',
        'Providing adaptable and scalable staffing solutions customized to meet your specific project needs.',
       
        
      ],
    },
     button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
  {
    title: 'CUSTOM REACT WEB DEVELOPMENT',
    content: {
      paragraphs: [
        'Our team is equipped with the necessary skills and expertise to craft a custom React website application that is responsive and modular, developed to meet your unique business requirements.',
      ],
      sections:[{ heading: 'WE ASSIST YOU WITH:'}],
      list: [
        'Developing web applications that are scalable and high-quality ',
        'Developing a user interface that is interactive and responsive with React ',
        'Collaborating React with cutting-edge web technology',
       
        
      ],
    },
  },
   {
    title: 'REACT CONSULTING AND STRATEGY',
    content: {
      paragraphs: [
        'Our React developers deliver insightful consultation sessions while also assisting you in strategizing and effectively implementing React within your technology infrastructure.',
      ],
      sections:[{ heading: 'WE ASSIST YOU WITH:'}],
      list: [
        'Suggesting the best practices and framework of React  ',
        'Helping in the transition from the existing framework to React',
        'Assistance collaboration of React with the existing framework',
        
        
      ],
    },
  },
   {
    title: 'REACT MAINTENANCE AND SUPPORRT',
    content: {
      paragraphs: [
        'We provide consistent maintenance and assistance for React applications while making sure that they are updated, prioritizing security, and ensuring that they remain functional.',
      ],
      sections:[{ heading: 'WE ASSIST YOU WITH:'}],
      list: [
        'Ensuring consistent updates and feature-rich development',
        'Identifying and resolving issues, including troubleshooting and bug-fixing',
        'Offering regular technical support and aid.',
        
      ],
    },
     button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
   {
    title: 'REACT NATIVE MOBILE APP DEVELOPMENT',
    content: {
      paragraphs: [
        'We deliver React Native to design cross-platform mobile applications, ensuring a native-like experience across iOS and Android platforms.',
      ],
      sections:[{ heading: 'WE ASSIST YOU WITH:'}],
      list: [
        'Designing feature-rich mobile applications',
        'Smooth and seamless performance across several devices ',
        'Incorporation of personalized functionalities that suit your business requirements',
       
      ],
    },
  },
  

];
  return (
   <>
   <div className='px-3 sm:px-0' >
   <StatsSection stats={stats} content={content}/>
   <IconTopCard servicesData={reactData}/>
     <SelectSidebar 
                              services={sidebarData}
                               headingSidebar={"OUR REACT DEVELOPMENT SERVICES"} 
                                sectbgcolor="bg-[#314B8C]"
                                headtextcolor= "text-white"
                                dynamicontetext= "text-white"
                                  textList = "text-[#f6ae39]"
                                  selectedClass = 'bg-white text-[#314B8C] '
                                  unselectedClass = 'bg-[#405EA9] text-white hover:bg-[#54595F]'
                                  
                               />  
       
    <CallToAction
     title="EXPLORE THE POTENTIAL OF YOUR REACT PROJECT"
    subtitle="Experience the excellence of our experts and specialist team in this intricate realm of digitalization. We offer tailored assistance that is suited to your unique needs. Consult with us now."
    buttonText="GET EXPERT ADVICE"
    onClick={() => setShowModal(true)}
    
    />
     <ContactModal show={showModal} onClose={() => setShowModal(false)} />

       {/* TECH STACK */}
      <TechStackSection
        title="REACT DEVELOPMENT TECH-STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />
</div>
   {/* 
   <GridBlueCard/>
    */}
   </>
  )
}

export default Reactt