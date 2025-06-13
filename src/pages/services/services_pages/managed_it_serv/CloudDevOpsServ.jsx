import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import GridBlueCard from '../../../../components/common/GridBlueCard'
import CallToAction from '../../../../components/common/CallToAction'
import GridBlueBaseBord from '../../../../components/common/GridBlueBaseBord'
import { useState } from 'react'
import TechStackSection from '../../../../components/common/TechStackSection'
import CloudPlatTools from '../../../../components/cloudDevOps/CloudPlatTools'
import BackEndCloud from '../../../../components/cloudDevOps/BackEndCloud'
import DatabaseStorage from '../../../../components/cloudDevOps/DatabaseStorage'
import SelectSidebar from '../../../../components/common/sidebarselect/SelectSidebar'
import ContactModal from '../../../../components/common/ContactModal'

const CloudDevOpsServ = () => {
  const [showModal, setShowModal] = useState(false);
  const stats = [
   { value: 40, label: "team members", suffix: "+" },
     { value: 4.85, label: "overall review rating based on 55+ reviews", decimals: 2, suffix: "/5 stars" },
      { value: 300, label: "Projects delivered successfully", suffix: "+" },
  { value: 8, label: "of expertise in cloud development ", suffix: " years" },
 ];

 const content = {
   heading: "CLOUD & DEVOPS DEVELOPMENT CONSULTING",
  subheading:
    "Unlock the power of Cloud and DevOps collaboration, customized to strengthen your business.",
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
const blueBaseData = [
  {
    title: "SCALABILITY & FLEXIBILITY",
    description:
      "Cloud development enables seamless business transition and scale-up or down according to operational requirements, ensuring efficient resource allocation and cost-effectiveness.",
  },
   {
    title: "COST-EFFICIENCY",
    description:
      "Transitioning to Cloud will help businesses avoid the elevated costs of purchasing and maintaining hardware solutions, resulting in substantial cost reductions.",
  },
  {
    title: "ENHANCED COLLABORATION",
    description:
      "Cloud platforms enable teams to collaborate in real-time, irrespective of their geographic location, enhancing operating effectiveness and expediting decision-making processes.",
  },
  {
    title: "HIGH AVAILABILITY & DISASTER RECOVERY",
    description:
      "Cloud services typically include built-in backup solutions, guaranteeing the availability of applications and data security even in the event of hardware failures or other disasters.",
  },
 
  
  {
    title: "SECURITY & COMPLIANCE",
    description:
      "Major cloud providers prioritize security, investing significantly in measures such as encryption, multifactor authentication, and compliance certifications, thereby ensuring data security and adherence to regulatory protocols.",
  },
   {
    title: "RAPID DEPLOYMENT & TIME-TO-MARKET",
    description:
      "Cloud development platforms come equipped with pre-built tools and frameworks that catalyze the development process, allowing businesses to launch their applications quicker and respond promptly to market shifts.",
  },
 
];
 const [stacklist] = useState([
    {
      title: "CLOUD PLATFORMS & TOOLS",
      element: <CloudPlatTools />,
    },
    {
      title: "BACK-END TECHNOLOGIES",
      element: <BackEndCloud />,
    },
    {
      title: "DATABASES & STORAGE SOLUTIONS",
      element: <DatabaseStorage />,
    },
   
  ]);

  const [selectedStack, setSelectedStack] = useState(stacklist[0].element);

  const handleStackClick = (stackl) => {
    setSelectedStack(stackl.element);
  };
const sidebarData = [
  {
    title: 'STAFF AUGMENTATION FOR CLOUD & DEVOPS',
    content: {
      paragraphs: [
        `Augment our top Cloud and DevOps specialists in your team for seamless integration of expertise into your projects and their success.`,
      ],
      heading: 'PARTNER WITH GO INFOTECH FOR:',
      list: [
        'Offering ad interim expertise for your projects;',
        'Scaling teams according to your project requirements;',
        'Delivering high-performance and skills in Cloud architecture and DevOps methodologies.',
        
      ],
    },
  },
  {
    title: 'CLOUD MIGRATION & STRATEGY',
    content: {
      paragraphs: [
        'We guide your business to seamlessly transition to a cloud server while also ensuring the incorporation of a strategic approach that is personalized as per your unique needs.',
      ],
      heading: 'PARTNER WITH Go InfoTech FOR:',
      list: [
        'Facilitating legacy systems transition to cloud platforms.',
        'Cloud-first strategy personalized for startups and enterprises.',
        'Cloud service providers based on the unique business requirements.',
        
      ],
    },
  },
   {
    title: 'DEVOPS CONSULTING & IMPLEMENTATION',
    content: {
      paragraphs: [
        'Our DevOps specialists incorporate optimal practices, procedures, and methodologies to catalyze software delivery while ensuring operational efficiency.',
      ],
      
      list: [
        'Optimizing CI/CD pipelines for efficiency.',
        'Incorporating infrastructure as code solutions. ',
        'Managing effective synergy between development and operations teams.',
        
      ],
    },
  },
   {
    title: 'CLOUD SECURITY & COMPLIANCE',
    content: {
      paragraphs: [
        'Ensuring compliance with GDPR, HIPAA, and other regulatory standards.',
        'We prioritize the security of your cloud infrastructure, ensuring data protection, adherence to regulations, and minimizing potential risks.',
        'Incorporation of vigorous security protocols;',
      ],
     
      list: [
        'Ensuring compliance with GDPR, HIPAA, and other regulatory standards.',
        'Conducting routine security audits and vulnerability assessments.',
        
      ],
    },
  },
   {
    title: 'INFRASTRUCTURE AUTOMATION & MANAGEMENT',
    content: {
      paragraphs: [
        'We rationalize infrastructure deployment and regulation through automation, maintaining scalability, resilience, and efficient resource utilization.',
      ],
      
      list: [
        'Infrastructure provisioning and scaling operations automation',
        'Regulating and overseeing cloud resources.',
        'Deploying load balancing and auto-scaling solutions.',
        
      ],
    },
  },
 {
    title: 'CONTINUOUS INTEGRATION & CONTINUOUS DEPLOYMENT (CI/CD)',
    content: {
      paragraphs: [
       ' Our team establishes and oversees CI/CD pipelines, guaranteeing swift, dependable, and uniform software delivery.',
      ],
     
      list: [
        'Code integration and deployment procedures automation;',
        'Maintaining high code quality and enabling prompt feedback loops. ',
        'Enabling frequent and dependable releases.',
       
      ],
    },
  },
];
  return (
    <>
    
    <StatsSection stats={stats} content={content}/>
     <TechStackSection
        title="OUR EXPERTISE IN ML & AI TECHNOLOGIES"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />
    <SelectSidebar services={sidebarData} headingSidebar={"OUR CLOUD & DEVOPS SERVICES"}  />
    <IconTopCard servicesData={iconTopCard} heading='WHY CHOOSE GO INFOTECH'/>
    <CallToAction
    title="OUR CLOUD-BASED SOLUTIONS CAN ENHANCE USER EXPERIENCE AND BOOST THE SCALABILITY OF YOUR SERVICES."
    subtitle="Personalize IT solutions for your unique requirements and help transition to the Cloud or into DevOp services for the enhancement of your business and its exponential growth."
    buttonText="REQUEST A CONSULTATION"
    onClick={() => setShowModal(true)}
/>
<ContactModal show={showModal} onClose={() => setShowModal(false)}/>
   
    <GridBlueBaseBord blueBaseData={blueBaseData} headings="ADVANTAGES OF OUR CLOUD DEVELOPMENT & CONSULTING SERVICES"/>
    
    </>
  )
}

export default CloudDevOpsServ