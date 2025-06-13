import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import GridBlueCard from '../../../../components/common/GridBlueCard'
import ContactModal from '../../../../components/common/ContactModal'
import GridBordBase from '../../../../components/common/GridBordBase'
import { useState } from 'react'
import TechStackSection from '../../../../components/common/TechStackSection'
import DeepLearnAiMl from '../../../../components/aiMl/DeepLearnAiMl'
import MachineLearAiMl from '../../../../components/aiMl/MachineLearAiMl'
import NlpAiMl from '../../../../components/aiMl/NlpAiMl'
import CallToAction from '../../../../components/common/CallToAction'
import SelectSidebar from '../../../../components/common/sidebarselect/SelectSidebar'

const AiMlDev = () => {
  const [showModal, setShowModal] = useState(false);
  const stats = [
   { value: 15, label: "AI/ML experts", suffix: "+" },
    { value: 4.85, label: "overall review rating based on 55+ reviews", decimals: 2, suffix: "/5 stars" },
  { value: 8, label: " expertise in business ", suffix: " years" },
  { value: 20, label: "AI/ML projects in several industries", suffix: "+" },
 
  
 ];

 const content = {
   heading: "AI ML DEVELOPMENT SERVICES",
  subheading:
    "Navigating you through the intricate tapestry of the digital world by incorporating AI and ML into your projects for success.   ",

 };

 const aiMlData = [
  
   {
    title: 'OUR CLIENT’S EXPERIENCE',
    description:
      'Our clients have said it too, Go InfoTech has proved to be an expert custom Software Development Company in Udaipur driving seamless growth for our clients and showcasing our proficiency in web development.',
        highlight: 'custom Software Development Company in Udaipur',
    icon: '🎯',
  },
  {
    title: 'TOP AI & ML SPECIALISTS',
    description:
      'Through our comprehensive procedure, we make sure that our AI & ML specialists are engaged in your crucial project. We are dedicated to the seamless success of your project.',
    // highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
  {
    title: 'PROPRIETARY TECHNOLOGY FOR EFFICIENCY',
    description:
      'We utilize our ‘Smart Outsourcing Automation Paradigm’ to integrate cutting-edge, smart technology for your project’s success. Automating crucial procedures and operations like project management, talent acquisition, and retention for effective performance.',
    icon: '🎯',
  },
  {
    title: "GUARANTEED PROJECT CONSISTENCY",
    description:
      'Benefit from the seamless and consistent delivery of excellence for uninterrupted success.',
   // highlight: 'Software Development company in Udaipur',
    icon: '🛡️',
  },
  {
    title: 'GLOBAL COVERAGE ACROSS TIME ZONES',
    description:
      'We are available 24/7 at your service as we operate across 4 different time zones, which is why we ensure seamless communication. Our team at Go InfoTech is available at your service anytime.',
    icon: '📋',
  },
  {
    title: 'WIDE RANGE OF SERVICES',
    description:
      'As a leading Web Development company in Udaipur, we offer custom software development, mobile app development, web application development, software maintenance and support, and more while making use of AI and ML technology.',
      highlight:'Web Development company in Udaipur',
    icon: '🌐',
  },
  
];
  const [stacklist] = useState([
    {
      title: "DEEP LEARNING",
      element: <DeepLearnAiMl />,
    },
    {
      title: "MACHINE LEARNING (ML)",
      element: <MachineLearAiMl />,
    },
    {
      title: "NATURAL LANGUAGE PROCESSING (NLP)",
      element: <NlpAiMl />,
    },
   
  ]);

  const [selectedStack, setSelectedStack] = useState(stacklist[0].element);

  const handleStackClick = (stackl) => {
    setSelectedStack(stackl.element);
  };

const gridBlueCardData=[
{
    title: "ALL INDUSTRIES FINANCE",
    description:
      "Empowering the financial sector by incorporating the expertise of AI/ML in cross-platform services that enhance security and elevate user experience.",
  },
  {
    title: "HEALTHCARE",
    description:
      "We offer cutting-edge solutions for healthcare by making use of AI/ML technology at a Web Development company in Udaipur and digital health technologies for predictive health risk analysis.",
  },
   {
    title: "MEDIA & ENTERTAINMENT",
    description:
      "Robust IT Solutions at the leading Digital Marketing Company in Udaipur offering AI/ML solutions like trend recognition, market analysis, etc. for media and entertainment purposes.",
  },
  {
    title: "AUTOMOTIVE",
    description:
      "Dedicated experts provide advanced IT solutions by making use of AI/ML for the automotive industry, offering operational efficiency and cross-platform services.",
  },
  {
    title: "EDUCATION",
    description:
      "Leveraging the excellence of our IT Company in Udaipur to empower educational institutions with digital assistance using AI/ML technology by our professionals.",
  },
 {
    title: "E-COMMERCE",
    description:
      "Ensuring that the website generates enhanced customer engagement through the use of Augmented and Virtual Reality via AI/ML technology at the leading Digital Marketing Agency in Udaipur helps you generate higher sales.",
  },
   {
    title: "GIS",
    description:
      "Accurate data visualization and incorporation of geospatial data for designing advanced Geographic Information Systems using AI/ML at the trusted Web Development company in Udaipur.",
  },
  
];

const sidebarData = [
  {
    title: 'STAFF AUGMENTATION FOR AI & ML IT PRODUCTS',
    content: {
      paragraphs: [
        `Augment our top AI and ML specialists in your team for seamless integration into your projects, building the seamless entry of your products into the market and market penetration for existing ones.`,
      ],
     heading: 'HOW WE ENHANCE YOUR TEAM’S EXPERTISE:',
      list: [
        'Amplify product’s success via effective development and deployment ',
        'proficient team to enhance the expertise of the in-house team ',
        'Meticulously strategizing the use of advanced technology and best practices ',
        'Scale up the existing team as per the project’s need',
      ],
    },
     button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
  {
    title: 'CHATBOT DEVELOPMENT SERVICES',
    content: {
      paragraphs: [
        'Enhanced user experience via seamless customer interactions with our chatbot expertise. We ensure a user-centric approach through AI-driven conversations.',
      ],
      heading: 'HOW WE ELEVATE YOUR CUSTOMER EXPERIENCE:',
      list: [
        'Prompt customer support with our intelligent chatbots.',
        'Boost sales with prediction analysis for personalized recommendations .',
        'Automate daily operations, allocating humans for complex tasks .',
        'Seamless integration of CRM, ERP, and other services.',
        
      ],
    },
    button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
   {
    title: 'GENERATIVE AI',
    content: {
      paragraphs: [
        'Augment our top AI and ML specialists in your team for seamless integration into your projects, building the seamless entry of your products into the market and market penetration for existing ones.',
      ],
      heading: 'HOW WE ENHANCE YOUR TEAM’S EXPERTISE:',
      list: [
        'Amplify product’s success via effective development and deployment',
        'proficient team to enhance the expertise of the in-house team ',
        'Meticulously strategizing the use of advanced technology and best practices ',
        'Scale up the existing team as per the project’s need ',
        'Incorporating AI/ML expertise for project growth.',
       
      ],
    },
      button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
   {
    title: 'DEEP LEARNING SOLUTIONS',
    content: {
      paragraphs: [
        'Empower your business with deep-learning solutions to help you recognize patterns, images, and even audio from voluminous data as cutting-edge technology can function like a human brain.',
      ],
      heading: 'HOW WE EMPOWER YOUR PROJECTS:',
      list: [
        'Analyze visual and audio data for several entertainment companies',
        'Develop systems for image and voice recognition',
        'Predictive algorithms for e-commerce platforms',
        'Trend- analysis based on former data',
        'Implement automated content moderation and filtering.',
        
      ],
    },
      button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
  
  

  {
    title: 'NATURAL LANGUAGE PROCESSING (NLP)',
    content: {
      paragraphs: [
        'Incorporate advanced algorithms to comprehend and generate human language. NLP enables and supports chatbots, sentiment analysis, and content recommendation systems for elevated user experience.',
      ],
      heading: 'HOW WE USER EXPERIENCE USING NLP:',
      list: [
        'Innovation of advanced chatbots for customer support.',
        'Analyze customer feedback for product refinement.',
        'Automate content condensing and organizing.',
        'search engine enhancement with interpretive understanding.',
        'real-time language translation for global platforms.',
        
      ],
    },
  },
  {
    title: 'PREDICTIVE ANALYTICS ',
    content: {
      paragraphs: [
        'Leverage AI to analyze former data and future trend prediction. This can be significant for industries such as finance, e-commerce, entertainment, and healthcare.',
      ],
      heading: 'HOW WE SHAPE FUTURE OF YOUR BUSINESS:',
      list: [
        'Predict stock market analysis for the financial sector;',
        'Trend predictions and market analysis for e-commerce platforms;',
        'Evaluate patient health risks and report in healthcare;',
        'supply chain management and optimization;',
        'examine consumer behavior for strategic marketing',
        
      ],
    },
  },
  {
    title: 'AR/VR ENHANCED AI SOLUTIONS ',
    content: {
      paragraphs: [
        'Integration of  Augmented Reality and Virtual reality for elevated user experience and Quality automated AI/VR solutions for your organization to quickly identify input from users, offering real-time data visualization, for immersive experience.',
      ],
      heading: 'HOW DO WE ASSIST YOUR AR/VR EXPERIENCES:',
      list: [
        'Develop authentic AI-driven simulations for training and recreation; ',
        'Collaborate AI data in AR for effective operations;',
        'Crafting personalize AR/VR experiences via ML algorithms;',
        'Incorporate AI for intuitive gesture controls in VR;',
        
        
      ],
    },
  },
];


  return (
   <>
   <div className='px-2 sm:px-0'>
   <StatsSection stats={stats} content={content}/>
    <IconTopCard servicesData={aiMlData} />
   <SelectSidebar services={sidebarData} headingSidebar={"AI & ML DEVELOPMENT SERVICES"}  />   
  {/* TECH STACK */}
      <TechStackSection
        title="OUR EXPERTISE IN ML & AI TECHNOLOGIES"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />

 <GridBlueCard
  industries={gridBlueCardData}
  columns={3}
  cta={
    <CallToAction
      title="INDUSTRY-SPECIFIC AI & ML MASTERY"
      subtitle="our deep understanding and application of AI & ML technologies tailored for each industry’s nuances."
      buttonText="All INDUSTRIES"
      onClick={() => setShowModal(true)}
      textColor="text-white"
    />
  }
/>

    <ContactModal show={showModal} onClose={() => setShowModal(false)} />
   <GridBordBase/>
   
  </div> 
   </>
  )
}

export default AiMlDev