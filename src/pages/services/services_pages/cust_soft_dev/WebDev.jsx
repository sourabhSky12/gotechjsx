import React from 'react'

import IconTopCard from '../../../../components/common/IconTopCard'
import SelectSidebar from '../../../../components/common/sidebarselect/SelectSidebar'
import GridBlueCard from '../../../../components/common/GridBlueCard'
import CallToAction from '../../../../components/common/CallToAction'
import StatsSection from '../../../../components/common/StatsSection'
import CardGridHovBase from '../../../../components/common/CardGridHovBase'
import { useState } from 'react'
import ContactModal from '../../../../components/common/ContactModal'
import TechStackSection from '../../../../components/common/TechStackSection'
import FrontWeb from '../../../../components/webdevside/FrontWeb'
import BackWeb from '../../../../components/webdevside/BackWeb'
import UiUxWeb from '../../../../components/webdevside/UiUxWeb'

const WebDev = () => {
const [showModal, setShowModal] = useState(false);
 const stats = [
   { value: 140, label: "web development experts", suffix: "+" },
  { value: 4.85, label: "rating based on 55+ reviews", decimals: 1, suffix: "/5 stars" },
  { value: 50, label: "successful projects delivered", suffix: "+" },
  { value: 8, label: "expertise in business", suffix: " years" },
 ];

 const content = {
   heading: "TOP WEB DEVELOPMENT COMPANY IN INDIA",
  subheading:
    "Exclusive web development services tailored to meet the specific needs of startups and global companies, available only at Go InfoTech.",
 };

const startupmvpData = [


   {
    title: 'TRUSTED AND RENOWNED',
    description:
      'As a renowned web development company in India, we take pride in the unwavering trust our clients place in our expertise. This trust serves as a testament to our firm commitment to delivering exceptional service and exceeding our clients expectations.',
    icon: '🎯',
    highlight: 'web development company in India,',
  },

  {
    title: 'EXPERTISE AT YOUR SERVICE',
    description:
      'Opt for Select Go InfoTech Solution as your dependable online partner, committed to offering professional, knowledgeable, and experienced service to aid in your companys expansion.',
    // highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
 
  {
    title: "INDUSTRIES' EXPERTISE",
    description:
      'We are a Top Web Development Company in India, with expertise from different industries all around the world using innovation, knowledge, and skills.',
    highlight: 'Web Development Company in India',
    icon: '🛡️',
  },
  {
    title: 'HIGH SATISFACTION RATES',
    description:
      'Harness the potential of your business with promising outcomes and IT solutions provided by dedicated professionals committed to serving your needs.',
    icon: '📋',
  },
  {
    title: 'GLOBAL COVERAGE ACROSS TIME ZONES',
    description:
      'Our team at Go InfoTech is dedicated to providing seamless communication and is available to serve you round-the-clock, operating across four different time zones.',
    icon: '🌐',
  },
  {
    title: 'WIDE RANGE OF SERVICES',
    description:
      'We provide a range of software development services, encompassing custom software development, mobile app development, web application development, software maintenance and support, and beyond.',
    icon: '⚙️',
  },
];
const cardData = [
  {
    title: 'CUSTOM WEB DEVELOPMENT',
    description: 'As a custom web development company in India, we take pride in being globally trusted for our exceptional and high-quality standard services.',
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


const webdevDataBlue = [
  {
    title: "FINANCET",
    description:
      "Leveraging the proficiency of a web development company in India to bolster security and efficiency, we empower the financial sector.",
  },
  {
    title: "HEALTHCARE",
    description:
      "Offering cutting-edge solutions for healthcare by making use of managed IT services and digital health technologies at the Best Web Development Agencies in India.",
  },
  {
    title: "MEDIA & ENTERTAINMENT",
    description:
      "Proactive IT Solutions offering an innovative and optimal solutions for digital platforms along with Web Developmet Services in India",
  },
  {
    title: "AUTOMOTIVE",
    description:
      "In the automotive industry, our dedicated experts utilize innovative and effective IT solutions to improve operational efficiency.",
  },
   {
    title: "EDUCATION",
    description:
      "Utilizing the expertise of Go InfoTech, we offer digital support for educational institutions through our team of professionals.",
  },
   {
    title: "E-COMMERCE",
    description:
      "We ensure that the website enhances customer engagement, optimizes user experience, and drives increased sales.",
  },
   {
    title: "GIS",
    description:
      "Utilizing precise data visualization and integrating geospatial data to develop advanced Geographic Information Systems is a specialty at a web development company in India.",
  },
  
];
const webInovData=[
{
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "Elevate your business with the unparalleled potential of AI by partnering with Go InfoTech Solution. We excel in incorporating predictive analytics and chatbots to provide intuitive and responsive outcomes, empowering your business with cutting-edge technological solutions.",
  },
  {
    title: "CLOUD INTEGRATION",
    description:
      "Ensuring seamless integration of cloud services enhances your app's scalability, effectiveness, and functionality. By guaranteeing that data is integrated and accessible from anywhere, we optimize the performance and accessibility of your application.",
  },
  {
    title: "AUGMENTED REALITY",
    description:
      "As a Top Web Development Company in India, we believe in incorporating AR to generate a remarkable user experience by meticulously integrating virtual try-ons and interactive 3D models in your app.",
  },
  {
    title: "INTERNET OF THINGS",
    description:
      "By synchronizing sensors and smart devices, we facilitate the integration of real-time data, thus enhancing functionality and improving the user experience. Incorporating IoT into your business opens up broader opportunities for engaging users and driving innovation.",
  },

];
const [stacklist] = useState([
    {
      title: "FRONT-END DEVELOPMENT",
      element: <FrontWeb/>,
    },
    {
      title: "BACK-END DEVELOPMENT",
      element: <BackWeb/>,
    },
   
    {
      title: "UI/UX DESIGN",
      element: <UiUxWeb/>,
    },
  ]);
 const [selectedStack, setSelectedStack] = useState(stacklist[0].element);

  const handleStackClick = (stackl) => {
    setSelectedStack(stackl.element);
  };

const sidebarData = [
  {
    title: 'WEB APPLICATION DEVELOPMENT',
    content: {
      paragraphs: [
        `At Go InfoTech Solution, a leading Web Development Company in India, we specialize in delivering outstanding services through the creation of state-of-the-art web solutions. Whether you require a robust e-commerce platform, a dynamic content management system, or a tailored web-based tool, our skilled developers are committed to utilizing their expertise to realize your vision.`,
      ],
      heading: 'PARTNER WITH GO INFOTECH FOR:',
      list: [
        'Tailored Web Application Development',
        'Seamless Transitions in Web Applications',
        'Creating Scalable, Mobile-Optimized Web Apps',
        'Full Lifecycle Support for Web Applications',
      ],
    },
  },
  {
    title: 'SAAS PLATFORM DEVELOPMENT',
    content: {
      paragraphs: [
        'We specialize in cloud technologies and strongly advocate for the design and development of scalable, interactive, feature-rich, and secure SaaS solutions. Our commitment lies in crafting solutions that accelerate business growth and deliver impactful results swiftly.',
      ],
      heading: 'PARTNER WITH Go InfoTech FOR:',
      list: [
        'Custom SaaS Solutions for your Projects;',
        'Responsive SaaS Architectural Design; ',
        'Seamless SaaS Migrations and Integrations; ',
        'Optimal SaaS security and high performance',
      ],
    },
  },
   {
    title: 'E-COMMERCE PLATFORM DEVELOPMENT',
    content: {
      paragraphs: [
        'With expertise in building dynamic online retail platforms and responsive applications, we propel your business to unprecedented heights. By harnessing our proficiency in technologies like Shopify and WooCommerce platforms, we craft seamless user experiences that drive heightened leads and sales for your business.',
      ],
      heading: 'Engage with Go InfoTech for:',
      list: [
        'E-Commerce Platform Development that aligns with your Business needs;',
        'Streamlined Shopping Carts and Secure Payment Gateways; ',
        'Mobile-friendly E-Commerce Solutions; ',
        'High-performing E-Commerce platforms with SEO optimization.',
      ],
    },
  },
   {
    title: 'ENTERPRISE SOFTWARE DEVELOPMENT',
    content: {
      paragraphs: [
        'At Go InfoTech, a leading Custom Software Development Company in India, we understand the unique needs of your business. That’s why we offer tailored enterprise software solutions designed to seamlessly integrate various facets of your operations. Our aim is to assist you in minimizing operational costs and improving efficiency across your organization. Through our advanced and scalable software and systems architecture, we enable you to effectively achieve these goals.  ',
      ],
      heading: 'EXPLORE CUSTOM SERVICES AT GO INFOTECH:',
      list: [
        'Custom Enterprise Software Development',
        'Enterprise Application Modernization & Update ',
        'Enterprise-level Mobile App development. ',
        'Regular enterprise software testing & maintenance.',
      ],
    },
  },
   {
    title: 'ERP DEVELOPMENT SERVICES',
    content: {
      paragraphs: [
        'At the Best Web Development Agencies in India, our dedicated team specializes in creating ERP solutions tailored to optimize your business operations. We are committed to enhancing your effectiveness and productivity by facilitating real-time growth across your business operations.',
      ],
      heading: 'Connect with Go InfoTech for:',
      list: [
        'Custom ERP Software Development;',
        'ERP infrastructure migration & integration; ',
        'Cloud-based ERP solutions; ',
        'ERP software testing & maintenance.',
      ],
    },
  },
 {
    title: 'MVP DEVELOPMENT',
    content: {
      paragraphs: [
       ' Begin an expedition towards excellence with our MVP Development services, meticulously crafted to provide a substantial boost to your business. Our interactive, feature-rich, and scalable MVPs are designed to enhance user experience while ensuring seamless functionality.',
      ],
      heading: 'REACH OUT TO US AT GOTECH:',
      list: [
        'Discovery Phase Assistance;',
        'Seamless MVP Software Development; ',
        'Sturdy MVP Design & Prototype ',
        'Scalable & Feature-rich MVP.',
      ],
    },
  },
];

  return (
    <>
    
    <StatsSection stats={stats} content={content} />
    <IconTopCard servicesData={startupmvpData}/>
    <CardGridHovBase
    
   heading="WEB DEVELOPMENT SERVICES"
        cards={cardData}
        bgColor="bg-white"
        cardBgColor="bg-white"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
   
    
    />

   <GridBlueCard
    
    title="WEB INDUSTRIES GO INFOTECH SOLUTION SERVES:"
    industries={webdevDataBlue}
     columns={3} 
    
   />
{/* TECH STACK */}
      <TechStackSection
        title="TECH STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />
<CallToAction
title="FEELING LOST IN THE INTRICATE WORLD OF WEB DEVELOPMENT?"
    subtitle="Our expert excellence is at your service, providing personalized web development solutions tailored to your unique business needs."
    buttonText="REQUEST A CONSULTATION"
    onClick={() => setShowModal(true)}
/>
<ContactModal show={showModal} onClose={() => setShowModal(false)}/>
      
 <GridBlueCard
 
  title="TECH INNOVATIONS FOR YOUR WEB APP"
  subtitle="As a premier Web Development Company in India, we are dedicated to addressing your distinct business needs through our cutting-edge technology and inventive solutions. Our paramount emphasis lies in functionality, guaranteeing that our creations effectively meet your requirements. Specializing in crafting interactive and scalable web solutions, we deliver captivating and visually appealing web applications."
    industries={webInovData}
     columns={2} 
 
 />   
  <SelectSidebar services={sidebarData} headingSidebar={"WEB DEVELOPMENT SOLUTIONS"}  />   

    </>
  )
}

export default WebDev