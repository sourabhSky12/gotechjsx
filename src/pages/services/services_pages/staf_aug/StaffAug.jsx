import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import GridBordBase from '../../../../components/common/GridBordBase'
import IconTopCard from '../../../../components/common/IconTopCard'
import BoxBaseBord from '../../../../components/common/BoxBaseBord'
import CallToAction from '../../../../components/common/CallToAction'
import CardGridHovBase from '../../../../components/common/CardGridHovBase'
import { useState } from 'react'
import { DollarSign, Lightbulb, Lock } from 'lucide-react';
import ContactModal from '../../../../components/common/ContactModal'
import CardMethodologyBase from '../../../../components/common/CardMethodologyBase'
const StaffAug = () => {
  const [showModal, setShowModal] = useState(false);
     const stats = [
   { value: 30, label: "mobile development specialists", suffix: "+" },
  { value: 8, label: "of expertise in business ", suffix: " years" },
  { value: 60, label: "successful projects delivery", suffix: "+" },
 
   { value: 4.85, label: "overall review rating based on 55+ reviews", decimals: 2, suffix: "/5 stars" },
 ];

 const content = {
   heading: "CROSS-PLATFORM MOBILE APP DEVELOPMENT SERVICES",
  subheading:
    "Developing high-performing and responsive apps that are on multiple platforms that are scalable.",
 };

 const staffAugData = [
    
  {
    title: "1. IDENTIFY YOUR PROJECT’S NEEDS",
    description:
      "Identify the unique needs of your business or specific project and what you are searching for in a candidate, such as qualifications, experience level, or project scope, to ease up the process.",
    
  },
  {
    title: "2. RECEIVE THE CV",
    description:
      "Communicate your specific requirements to us and be prepared to embark on the hiring process as we make available the CVs of talented candidates to engage in your advancing business with relevant proficiency in web development within 24 hours.",
    
  },
  {
    title: "3. CONNECT WITH THE CANDIDATE",
    description:
      "Upon receiving the CV of the eligible candidate, connect with them by scheduling an interview with them and assessing their capabilities and competencies to check their ability to adapt to your project’s requirements.",
    
  },
  {
    title: "4. FAST ONBOARDING",
    description:
      "We ensure the swift onboarding of the candidate to reduce the downtime period and avoid any unnecessary delay in your project’s productivity.",
    
  },
  {
    title: "5. TRIAL PERIOD",
    description:
      "We aim to provide you with the best fit for your business, which is why we also ensure that you appoint the fit that suits the best for your crucial projects by offering a week’s trial period to assess the candidate correctly and then deploy them to your important projects.",
    
  },
  {
    title: "6. TEAM EXPANSION",
    description:
      "Collaborate with Go InfoTech and equip your business with dedicated specialists who are here to fulfill the specific project requirements of your business and provide enhanced operational efficiency. ",
    
  },
  
];

const cardData = [
  {
    title: 'DOMAIN EXPERTISE',
    description: 'At Go InfoTech, we are dedicated to serving you with the expertise of professionals who possess the knowledge and experience of a range of industries and ensure to equip them with relevant skills and proficiency.',
  },
  {
    title: 'SMART OUTSOURCING AUTOMATION PARADIGM',
    description: 'Our experts and professionals are ready to serve you with excellence and optimize your operational performance while collaborating with our client’s businesses and serving their unique needs.',
  },
  {
    title: 'BUSINESS-SCALE SUPPORT',
    description: 'Supporting several industries and equipping them with relevant expertise and technical guidance to scale up their businesses exponentially, Go InfoTech Solution offers assistance to your business following the best practices.',
  },
  {
    title: 'FAST ONBOARDING',
    description: 'A seamless collaboration process without much hassle enables us to use emerging resources in no time.',
  },
  {
    title: 'INTERNSHIP PROGRAM',
    description: 'At Go InfoTech Solution, we offer an internship program for students who wish to learn and educate themselves in a cohesive learning environment. Work alongside the expertise of highly talented individuals who possess several years of experience in the field.',
  },
  {
    title: 'PREMIUM TECH TALENT',
    description: 'We make use of highly updated and cutting-edge technology, which goes beyond coding and development. We take pride in our team of exceptionally talented professionals who are highly skilled and have years of experience.',
  },
];
 const crossPlatData = [


   {
    title: 'SWIFT TALENT ONBOARDING',
    description:
      'At Go InfoTech, we make available the CVs of talented candidates to engage in your advancing business with relevant proficiency in web development.',
     // highlight:"Custom Software Development Company in Udaipur ",
    icon: '🎯',
  },

  {
    title: 'TOP AI & ML SPECIALISTS',
    description:
      'Through our comprehensive procedure, we make sure that our experts and specialists are engaged in your crucial project. We are dedicated to the seamless success of your project.',
    
    icon: '👤',
  },
 
  {
    title: "TRAIL PERIOD",
    description:
      'We aim to provide you with the best fit for your business, which is why we also ensure that you appoint the fit that suits the best for your crucial projects by offering a weeks trial period to assess the candidate correctly and then deploy them to your important projects.',
    //highlight: 'Digital Marketing Company in Udaipur',
    icon: '🛡️',
  },
  {
    title: 'OUR CLIENT’S EXPERIENCE',
    description:
      'Our clients have said it too, Go InfoTech has proved to be an expert custom Software Development Company in Udaipur driving seamless growth for our clients and showcasing our proficiency in web development.',
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
      'As a leading Web Development company in Udaipur, we offer custom team augmentation in software development, mobile app development, web application development, software maintenance and support, and more.',
    //  highlight:'Web Development company in Udaipur',
     
    icon: '⚙️',
  },
];

const methodologyData = [
  {
    icon: <DollarSign size={20} />,
    title: 'STARTUPS',
    description:
      'We empower our startups with digital excellence, by essentially aiding their journey from inception and regularly updating them.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'SMALL TO MEDIUM-SIZED ENTERPRISES (SMES)',
    description:
      'We are also a trusted IT Company in Udaipur with cost-effective digital solutions to your unique needs for SMEs by focusing on their robust growth in the competitive environment.',
  },
  {
    icon: <Lock size={20} />,
    title: 'BIG CORPORATIONS',
    description:
      'We provide tailored IT solutions for large corporations by equipping them for their persistent success in the ever-evolving digital tapestry.',
  },
   {
    icon: <Lock size={20} />,
    title: 'ORGANIZATIONS TRANSITIONING TO REMOTE WORK',
    description:
      'We enable businesses to transition to a remote work model effortlessly by making use of cutting-edge technology.',
  },
];

const methodData=[
   {
    icon: <DollarSign size={20} />,
    title: 'PROJECT ASSESSMENT',
    description:
      'Ensuring that your project is assessed with the relevant expertise and knowledge to enable you to optimize your operations. We make available software developers who will help accelerate the growth of your business.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'KNOWLEDGE BASE',
    description:
      'At Go InfoTech, we operate within a highly conducive learning environment, ensuring that each individual grows and builds their own core competencies. Making it easier for our clients to reach out to us with their specific requirements.',
  },
  {
    icon: <Lock size={20} />,
    title: 'TECH EXPERTISE',
    description:
      'Our tech experts specialize in providing you with technical assistance for the exponential business growth of your platform.',
  },
   {
    icon: <Lock size={20} />,
    title: 'ACCOUNT MANAGER',
    description:
      'At Go InfoTech, we even provide account management services for the expansion of your business. We will help you onboard a project manager who will handle your core tasks and meet deadlines.',
  },
    {
    icon: <DollarSign size={20} />,
    title: 'DIRECT COMMUNICATION',
    description:
      'Schedule an interview with the potential employees or the candidates we recommend. Connect with our professionals and augment them with your existing team to optimize your operations.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'FAST RECRUITMENT',
    description:
      'We believe in reducing unnecessary delay in the process of onboarding a potential candidate, allowing on time advancement of your business/ projects.',
  },
  {
    icon: <Lock size={20} />,
    title: 'OUR RESPONSIBILITY',
    description:
      'At Go InfoTech, we take care of crucial tasks like managing remunerations, adhering to legal compliances, human resource management, and more, helping you to focus on core areas.',
  },
   {
    icon: <Lock size={20} />,
    title: 'TRIAL PERIOD',
    description:
      'We offer a one-week trial period for the potential candidate. So that you hire the candidate who suits the best to your project’s requirements.',
  },

];
  return (
   <>
   
   <StatsSection stats={stats} content={content}/>

  <CardGridHovBase
  
   heading="ABOUT OUR APPROACH"
     subdescription="As a renowned IT company in Udaipur, at Go InfoTech Solution, we offer Staff Augmentation Services for your business’s exponential growth with the expertise of our experienced professionals in your existing team."
        cards={cardData}
        bgColor="bg-white"
        cardBgColor="bg-white"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
  
  
  />

<IconTopCard
   servicesData={crossPlatData}
   />
   <BoxBaseBord headsection="STEPS TO COLLABORATION"  steps={staffAugData}/>
   
   
   
   <CallToAction
   
   title="CONSULT WITH US TODAY"
    subtitle="Our team at Go InfoTech will ensure that you are equipped with tailored solutions to your unique business needs and augmentation facilities. Don’t hesitate to reach out."
    buttonText="BOOK A CONSULTATION"
    onClick={() => setShowModal(true)}
   
   />
   <ContactModal show={showModal} onClose={() => setShowModal(false)}/>

<CardMethodologyBase
     heading="WHO WE WORK WITH"
        items={methodologyData}
        bgColor="bg-[#314B8C]"
        cardColor="bg-[#314B8C]"
        textColor="text-white"
        iconColor="bg-white/10"
         columns ="grid-cols-1 sm:grid-cols-2"
         cardhov='hover:bg-[#405EA9]'
  />

  
<CardMethodologyBase
     heading="WHO WE WORK WITH"
        items={methodData}
        bgColor="bg-white"
        cardColor="bg-[#F3F6FE]"
        textColor="text-[#314B8C]"
        iconColor="bg-white"
         columns ="grid-cols-1 sm:grid-cols-2"

       
  />
    
   </>
  )
}

export default StaffAug