
import  { useState } from 'react';
import IconTopCard from '../../../../components/common/IconTopCard'
import GridBlueCard from '../../../../components/common/GridBlueCard'
import ServicesStartCount from '../../../../components/common/ServicesStartCount'
import BoxBaseBord from '../../../../components/common/BoxBaseBord'
import StatsSection from '../../../../components/common/StatsSection'
import { DollarSign, Lightbulb, Lock, ImageIcon } from 'lucide-react';

import WhiteBgCard from '../../../../components/common/WhiteBgCard'
import CallToAction from '../../../../components/common/CallToAction'
import ContactModal from '../../../../components/common/ContactModal'
import CardGridHovBase from '../../../../components/common/CardGridHovBase';
import CardMethodologyBase from '../../../../components/common/CardMethodologyBase';
import MobileMvp from '../../../../components/startupMvp/MobileMvp';
import FrontMvp from '../../../../components/startupMvp/FrontMvp';
import BackMvp from '../../../../components/startupMvp/BackMvp';
import BlockMvp from '../../../../components/startupMvp/BlockMvp';
import TechStackSection from '../../../../components/common/TechStackSection';

const StartupMvpDev = () => {

  
 
   
  const [showModal, setShowModal] = useState(false);
  
 const stats = [
   { value: 6, label: "experienced Node specialists worldwide", suffix: "+" },
  { value: 4.8, label: "rating based on 55+ reviews", decimals: 1, suffix: "/5 stars" },
  { value: 90, label: "Node projects successfully delivered", suffix: "+" },
  { value: 8, label: "of expertise in Node development", suffix: " years" },
 ];

 const content = {
   heading: "NODE DEVELOPMENT SERVICES",
  subheading:
    "Count on the expertise of Go InfoTech’s Node professionals to deliver robust solutions tailored to users, incorporating the latest technologies and frameworks.",
 };


const startupmvpData = [


   {
    title: 'IT SOLUTIONS FOR STARTUPS',
    description:
      'Our team of experts at Go InfoTech Solution is committed to your service that suits best your requirements, from initial to market launch.',
    icon: '🎯',
  },

  {
    title: 'RAPID DEVELOPMENT AND PROTOTYPING',
    description:
      'Our aim is to pay attention to rapid development and prototyping to transform your idea into reality using our expertise and knowledge.',
    // highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
 
  {
    title: "UNDERSTANDING THE STARTUPS",
    description:
      'Our team is dedicated to using their skills and expertise to design and develop functional solutions that are requirements of the startups.',
    highlight: 'Software Development company in Udaipur',
    icon: '🛡️',
  },
  {
    title: 'INDUSTRY NETWORK ACCESS',
    description:
      'We ensure that startup owners gain proper insights, access to a vast network of industry experts, and the assistance of the right mentors.',
    icon: '📋',
  },
  {
    title: 'AI R&D LAB',
    description:
      'Witness our teams commitment to digital innovation for the successful start of startups at AI Research and Development Lab.',
    icon: '🌐',
  },
  {
    title: 'HIGH SATISFACTION RATES',
    description:
      'Achieve business growth with GoTech, where we are determined to satisfy our clients and serve with expertise and knowledge.',
    icon: '⚙️',
  },
];



const industryData = [
  {
    title: "ENTREPRENEURS ON BUDGET",
    description:
      "Entrepreneurs seek expertise to launch their products without requiring a large sum of money upfront.",
  },
  {
    title: "NON-TECH FOUNDERS",
    description:
      "Empowering non-tech founders who are dedicated to boosting visions into reality but lack technical know-how.",
  },
  {
    title: "MARKET PENETRATION FOR STARTUPS",
    description:
      "For startups that are aiming to enter the market, we equip them with the right technology and expertise to stay ahead of their rivals.",
  },
  {
    title: "BUSINESSES SEEKING GROWTH",
    description:
      "Equip the startups that are determined to bag a prominent position in the market and bring in new investment in the business.",
  },
  
  
];


const whitecardsData = [
  {
    title: 'FINANCE',
    titlePath: '/services/finance',
    description: [
      'Empowering the financial sector by incorporating the expertise of a   ',
      { text: 'Development company in Udaipur', path: '/services/development-company' },
      ' to enhance  the security and efficiency of the services.',
    ],
  },
   {
    title: 'HEALTHCARE',
    titlePath: '/services/finance',
    description: [
      'We offer cutting-edge solutions for healthcare by making use of managed IT services at a ',
      { text: ' Web Development company in Udaipur ', path: '/services/development-company' },
      ' and digital health technologies.',
    ],
  },
   {
    title: 'MEDIA & ENTERTAINMENT',
    titlePath: '/services/finance',
    description: [
      'Robust IT Solutions at  ',
      { text: ' Digital Marketing Company in Udaipur', path: '/services/development-company' },
      ' offering innovative solutions for digital platforms along with',
      {text: 'SEO Services in Udaipur.',  path: '/services/development-company'},
    ],
  },
   {
    title: 'AUTOMOTIVE',
    titlePath: '/services/finance',
    description: [
      'Dedicated experts provide advanced IT solutions by making use of innovative and effective solutions for the automotive industry, offering operational efficiency.',
      
    ],
  },
   {
    title: 'EDUCATION',
    titlePath: '/services/finance',
    description: [
      'Leveraging the excellence of our ',
      { text: ' IT Company in Udaipur ', path: '/services/development-company' },
      '  to empower educational institutions with digital assistance by our professionals.',
    ],
  },
   {
    title: 'E-COMMERCE',
    titlePath: '/services/finance',
    description: [
      'Ensuring that the website generates enhanced customer engagement and optimizes the user experience, the Digital Marketing Agency in Udaipur generates higher sales. ',
     
    ],
  },
    {
    title: 'GIS',
    titlePath: '/services/finance',
    description: [
      'Accurate data visualization and incorporation of geospatial data for designing advanced Geographic Information Systems at a',
      { text: 'Web Development company in Udaipur. ', path: '/services/development-company' },
      
    ],
  },
];


  const roadmapData = [
    
  {
    title: "IDENTIFY YOUR SCOPE",
    description:
      "The initial start of your project requires clearly identifying the scope of your business and necessitating defining the key features of MPV, your goals associated with it, and its functionality.",
    
  },
  {
    title: "FORMATION OF A VISION:",
    description:
      "Make sure that you have a vision in mind when planning to move forward with an MVP. Estimate the nature, time, extent, and budget involved to set a realistic expectation.",
    
  },
  {
    title: "VALIDATE DESIGN",
    description:
      "Before we embark on the development process, we urge you to approve the MPV designs through wireframes, prototypes, or mockups, which will enable us to gather your feedback.",
    
  },
  {
    title: "MVP DEVELOPMENT STAGE",
    description:
      "After clearly defining your needs and approving the prototype, our experts at GoTech, a reliable Software Development company in Udaipur, begin with the development of the MPV process. There are several procedures that the MVP undergoes before it is functional.",
    
  },
  {
    title: "NECESSITATING USER FEEDBACK:",
    description:
      "We make sure that the feedback from your first users is given due importance and make the necessary changes accordingly. The amendments made are as per the feedback and gauging market response.",
    
  },
  {
    title: "SCALE UP",
    description:
      "In response to the initial feedback received, we made a decision regarding how to expand your MVP. At this stage we make sure that we add new features, improve the functionality, and increase your customer base.",
    
  },
];

const cardData = [
  {
    title: 'MARKET RESEARCH',
    description: 'Comprehensive market analysis to gain an understanding of existing and upcoming trends, know your potential business rivals, and conduct a thorough analysis of them.',
  },
  {
    title: 'USER RESEARCH',
    description: 'We identify your target users, their unique requirements, and the challenges posed in the industry, and enhance user experience using our SEO Services in Udaipur',
  },
  {
    title: 'PRIORITIZED PRODUCT BACKLOG',
    description: 'Ensuring the integrity of business and technical terms by incorporating functional requirements into clear user stories within the prioritized product backlog.',
  },
  {
    title: 'INTEGRATIONS RESEARCH',
    description: 'We make use of integration research while also assessing your MVP’s core functionality, further incorporating additional features.',
  },
  {
    title: 'DESIGN VALIDATION',
    description: 'We make sure that the designs we make use of are effective and functional through thorough testing, conducting surveys, and moving forward with a problem-solving approach.',
  },
  {
    title: 'NO-CODE MVP DEVELOPMENT',
    description: 'We make use of no-code platforms for rapid prototyping and a functional application creation process for launching the basic versions of your product.',
  },
];

const methodologyData = [
  {
    icon: <DollarSign size={20} />,
    title: 'EFFECTIVE COSTING',
    description:
      'We offer unique and custom solutions as per your individual preferences at the renowned Software Development company in Udaipur, making use of cutting-edge technology at a budgeted price while making sure that our solutions produce high-quality results. We believe in leveraging our extensive knowledge and skills for visible results for the robust growth of your business and also generating an organic audience for your page by incorporating SEO Services in Udaipur.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'UI/UX DESIGN FOR APP SYSTEMS',
    description:
      'Our team of skilled professionals and experts is dedicated to crafting exceptional user experiences with the functionality and intuitiveness of the product. We are a custom Software Development Company in Udaipur, that designs and develops a user-friendly website/ web application interface that is functional and makes proper updates by evaluating how users interact with the application and the users needs.',
  },
  {
    icon: <Lock size={20} />,
    title: 'TRUSTED AND SKILLED DEVELOPERS',
    description:
      'We take pride in our team and their unwavering dedication to serving our clients and fulfilling their needs and preferences by making use of their expertise in iOS and Android development for a customized solution. We aim to fulfill all the requirements of our clients and aid them in turning their dreams into reality',
  },
];
 const [stacklist] = useState([
    {
      title: "FRONT-END ",
      element: <FrontMvp />,
    },
    {
      title: "BACK-END",
      element: <BackMvp />,
    },
    {
      title: "MOBILE",
      element: <MobileMvp />,
    },
    {
      title: "BLOCK-CHAIN",
      element: <BlockMvp  />,
    },
  ]);

  const [selectedStack, setSelectedStack] = useState(stacklist[0].element);

  const handleStackClick = (stackl) => {
    setSelectedStack(stackl.element);
  };
  

  return (
   <>
   
    <StatsSection stats={stats} content={content} />
    <IconTopCard servicesData={startupmvpData} />
    <GridBlueCard
    
    title="WHO NEEDS STARTUP MVP DEVELOPMENT?"
    industries={industryData}
     columns={2} 
    
    /> 

   <CardGridHovBase
   
   heading="UNLEASH YOUR POTENTIAL: MVP MASTERY WITH GO-TECH SOLUTION"
        cards={cardData}
        bgColor="bg-white"
        cardBgColor="bg-white"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
   
   />
     
    <CardMethodologyBase
     heading="OUR METHODOLOGY FOR RAPID STARTUP MVP GROWTH:"
        items={methodologyData}
        bgColor="bg-[#284181]"
        cardColor="bg-[#284181]"
        textColor="text-white"
        iconColor="bg-white/10"
  />

    <ServicesStartCount onClick={() => setShowModal(true)}/>
    <BoxBaseBord headsection="OUR APPROACH WHEN DEVELOPING A REMARKABLE STARTUP MVP APP" steps={roadmapData}    />
    
      <TechStackSection
        title="TECH STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
      />
    
    <CallToAction
    
    title="INDUSTRIES GO INFOTECH SOLUTION SERVES:"
    
    buttonText="ALL INDUSTRIES"
    onClick={() => setShowModal(true)}
    
    />
     <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    <WhiteBgCard
    whitecards={whitecardsData}
    columns={3}
    />
    
   </>
  )
}

export default StartupMvpDev