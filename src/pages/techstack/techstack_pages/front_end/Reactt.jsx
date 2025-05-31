
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import CallToAction from '../../../../components/common/CallToAction'
import TechStackSection from '../../../../components/common/TechStackSection'
import { useState } from 'react'
import ContactModal from '../../../../components/common/ContactModal'
import FramAndLibReact from '../../../../components/react/FramAndLibReact'
import BackTechReact from '../../../../components/react/BackTechReact'
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
  return (
   <>
   <StatsSection stats={stats} content={content}/>
   <IconTopCard servicesData={reactData}/>
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

   {/* 
   <GridBlueCard/>
    */}
   </>
  )
}

export default Reactt