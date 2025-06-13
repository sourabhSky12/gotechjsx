import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import GridBlueCard from '../../../../components/common/GridBlueCard'
import BoxBaseBord from '../../../../components/common/BoxBaseBord'
import CardGridHovBase from '../../../../components/common/CardGridHovBase'
const DiscoveryPhase = () => {
   const stats = [
   { value: 30, label: "mobile development experts", suffix: "+" },
  { value: 8, label: "of expertise ", suffix: " years" },
  { value: 60, label: "successful projects delivered", suffix: "+" },
 
   { value: 4.85, label: "overall review rating based on 55+ reviews", decimals: 2, suffix: "/5 stars" },
 ];

 const content = {
   heading: "MANAGE YOUR FINANCES OUR ASSITANCE IN DISCOVERY PHASE",
  subheading:
    "We ensure that you are able to manage your financeswith the proficiency of our team, you can stay on budgetwithout settling for any less in thediscovery phase of your business.",
 };

 const iconTopCard = [


   {
    title: 'OUR CLIENT’S EXPERIENCE',
    description:
      'Our clients have said it too, Go InfoTech has proved to be an expert custom Software Development Company in Udaipur driving seamless growth for our clients and showcasing our proficiency in web development.',
    icon: '🎯',
    highlight: 'custom Software Development Company in Udaipur',
  },

  {
    title: 'TOP CLOUD AND DEVOPS SPECIALISTS',
    description:
      'Through our comprehensive procedure, we make sure that our cloud and DevOps specialists are engaged in your crucial project. We are dedicated to the seamless success of your project.',
    // highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
 
  {
    title: "PROPRIETARY TECHNOLOGY FOR EFFICIENCY",
    description:
      'We utilize our ‘Smart Outsourcing Automation Paradigm’ to integrate cutting-edge, smart technology for your project’s success. Automating crucial procedures and operations like project management, talent acquisition, and retention for effective performance.',
   // highlight: 'Software Development company in Udaipur',
    icon: '🛡️',
  },
  {
    title: 'GUARANTEED PROJECT CONSISTENCY:',
    description:
      'Benefit from the seamless and consistent delivery of excellence for uninterrupted success.',
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
      'As a leading Web Development company in Udaipur, we offer custom software development, mobile app development, web application development, software maintenance and support, and more while making use of AI and ML technology.',
    icon: '⚙️',
  },
];

const gridBlueCardData=[
{
    title: "CLEARLY DEFINED SCOPE OF WORK",
    description:
      "The initial start of your project requires clearly identifying the scope of your business and necessitating defining the key features of MPV, your goals associated with it, and its functionality.",
  },
  {
    title: "COST-EFFECTIVE PLANNING",
    description:
      "We ensure that your finances stay intact by conducting comprehensive and cost-effective planning. We believe in managing the increased cost of your projects without sacrificing quality services.",
  },
  {
    title: "TIMELY PROJECT DELIVERY",
    description:
      "We are dedicated to empowering your startup by incorporating cutting-edge technology and crafting a tailored solution through functional MPV development while adhering to project deadlines.",
  },
  {
    title: "ALIGNED PROJECT OUTCOMES",
    description:
      "We ensure that our solutions are meticulously crafted to suit your unique project requirements. We believe in incorporating additional features, improving the functionality, and enhancing your customer base.",
  },

];

const iconTopCardSecData =[
  {
    title: 'PRODUCT OWNER',
    description:
      'Craft unique business strategies that fulfill your specific project requirements, and ensure that these strategies align with your project’s goals and objectives. Identify your unique business vision and what you expect from the product.',
    icon: '🎯',
   // highlight: 'custom Software Development Company in Udaipur',
  },

  {
    title: 'SOLUTION ARCHITECT',
    description:
      'We conduct comprehensive research to analyze the workings of the industry and craft solutions based on your unique needs.',
    // highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
 
  {
    title: "PROJECT MANAGER",
    description:
      'We meticulously plan and work closely with our team to ensure that our technical team optimizes the project workflow and its timely execution.',
   // highlight: 'Software Development company in Udaipur',
    icon: '🛡️',
  },
  {
    title: 'UI/UX DESIGNER',
    description:
      'Through our user-centric approach, we are successful in reaching the target audience via our visually appealing UI/UX designs that are user-friendly and lead to an exceptional user experience on all platforms.',
    icon: '📋',
  },
];


  const boxBaseData = [
    
  {
    title: "PRODUCT CONCEPT OUTLINE:",
    description:
      "A brief description that outlines the vision and objectives of your business and your project’s specific requirements.",
    
  },
 
  {
    title: "TARGET AUDIENCE, USE CASES",
    description:
      "Evaluate and recognize who your target audience is, and further evaluate user behavior and preferences.",
    
  },
  {
    title: "IDENTIFICATION OF MVP FEATURES",
    description:
      "We make use of integration research while also assessing your MVP’s core functionality, further incorporating additional features.",
    
  },
  {
    title: "FEATURE BREAKDOWN",
    description:
      "We make sure that the designs we make use of are effective and functional through thorough testing, conducting surveys, and moving forward with a problem-solving approach.",
    
  },
  {
    title: "ESTIMATION OF BUDGET AND TIMELINE",
    description:
      "We draft a template stating a ballpark figure for the project and an estimated timeline within which we shall serve.",
    
  },
  
   {
    title: "PROJECT DISCOVERY OUTCOME DOCUMENT",
    description:
      "We draft a document stating insights from the results of the discovery phase, relevant findings, and necessary feedback and recommendations. ",
    
  },
   {
    title: "RISK ASSESSMENT AND MITIGATION PLAN",
    description:
      "Identifying the potential threats and meticulously planning and strategizing ways to combat them.",
    
  },
   {
    title: "RECOMMENDATION ON TECHNOLOGIES",
    description:
      "Our experts make use of cutting-edge technology and best practices as per your project’s unique requirements and industry trends.",
    
  },
   {
    title: "WIREFRAME CONCEPT (2-3 SCREENS)",
    description:
      "A foundational visual guide illustrating the core structure of the product",
    
  },
   {
    title: "USER WORKFLOW",
    description:
      "A strategic map displaying the workflow of the users. ",
    
  },
];
const cardData = [
  {
    title: 'USER NEEDS DETERMINATION',
    description: 'We identify your target users, their unique requirements, and the challenges posed in the industry, and enhance user experience using our SEO Services in Udaipur',
  },
  {
    title: 'DEVELOPING FULL-PRODUCT DESIGN',
    description: 'Our team develops interactive prototypes that will generate an elevated user experience. Further, present it to potential users and investors.',
  },
  {
    title: 'COMPETITOR ANALYSIS',
    description: 'A comprehensive research plan evaluating the strengths and weaknesses of your rivals in the industries and existing opportunities for you to exploit.',
  },
  {
    title: 'USER STORIES',
    description: 'illustrative feedback of the users of the product, providing necessary insights to understand the needs and user preferences.',
  },
  
];
  return (
   <>
   <StatsSection stats={stats} content={content}/>
   <IconTopCard servicesData={iconTopCard} heading='WHY CHOOSE GO INFOTECH'/>
    <GridBlueCard
 
  title="Discovery PHASE AT GO infotech solution:"
 
    industries={gridBlueCardData}
     columns={2} 
 
 />   

 <IconTopCard servicesData={iconTopCardSecData} colum="grid-cols-1 md:grid-cols-2 lg:grid-cols-2" heading='GET TO KNOW GO INFOTECH’S DISCOVERY TEAM:'/>
    <BoxBaseBord headsection="DISCOVERY PHASE SERVICES" steps={boxBaseData}    />
   
   <CardGridHovBase
   
   heading="ADDITIONAL SERVICES"
        cards={cardData}
        bgColor="bg-white"
        cardBgColor="bg-white"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
   
   />
   
   </>
  )
}

export default DiscoveryPhase