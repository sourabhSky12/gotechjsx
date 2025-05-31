import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import GridBlueCard from '../../../../components/common/GridBlueCard'
import WhiteBgCard from '../../../../components/common/WhiteBgCard'
import { useState } from 'react'
import BackAndroid from '../../../../components/android/BackAndroid'
import CloudAndroid from '../../../../components/android/CloudAndroid'
import MobileTechAnd from '../../../../components/android/mobileTechAnd'
import TechStackSection from '../../../../components/common/TechStackSection'
import SelectSidebar from '../../../../components/common/sidebarselect/SelectSidebar'
const AndroidAppDev = () => {
  
 const stats = [
   { value: 30, label: "mobile development experts", suffix: "+" },
  { value: 8, label: "of expertise ", suffix: " years" },
  { value: 60, label: "successful projects delivered", suffix: "+" },
 
   { value: 4.85, label: "overall review rating based on 55+ reviews", decimals: 2, suffix: "/5 stars" },
 ];

 const content = {
   heading: "MOBILE APPLICATION DEVELOPMENT BY EXPERTS",
  subheading:
    "Empower your business with the excellence of the experts in Mobile App Development at GoTech.",
 };

 const startupmvpData = [


   {
    title: 'TRUSTED AND RENOWNED',
    description:
      'We are dedicated to serving you with excellence, and this is vouched by our client’s unwavering trust in our services, as we are a trusted custom Software Development Company in Udaipur.',
    icon: '🎯',
    highlight: 'custom Software Development Company in Udaipur',
  },

  {
    title: 'EXPERTISE AT YOUR SERVICE',
    description:
      'Our team is dedicated to serving you with expertise, knowledge, and professionalism working to fuel the growth of your business. Choose Go InfoTech Solution for a reliable digital partner.',
    // highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
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
      'Empower your business with promising results and IT solutions by professionals who are dedicated to serving you right.',
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
const whitecardsData = [
  {
    title: 'EDUCATION',
    titlePath: '/services/finance',
    description: [
      'Developing Android apps that result in e-learning, integration of assignments, and elevated student engagement.   ',
      // { text: 'Development company in Udaipur', path: '/services/development-company' },
      // ' to enhance  the security and efficiency of the services.',
    ],
  },
   {
    title: 'HEALTHCARE',
    titlePath: '/services/finance',
    description: [
      'Integrating operations like telemedicine, scheduling appointments, monitoring healthcare, & more by developing Android Solutions.',
      
    ],
  },
   {
    title: 'FINTECH',
    titlePath: '/services/finance',
    description: [
      'Crafting an Android application that is secure for monetary monitoring sectors like banking, insurance, and fintech with an interactive and scalable user interface.  ',
      // { text: ' Digital Marketing Company in Udaipur', path: '/services/development-company' },
      // ' offering innovative solutions for digital platforms along with',
      // {text: 'SEO Services in Udaipur.',  path: '/services/development-company'},
    ],
  },
   {
    title: 'MEDIA & ENTERTAINMENT',
    titlePath: '/services/finance',
    description: [
      'Designing Android apps for seamless content management, a visually appealing user interface, & engaging platforms.',
      
    ],
  },
   {
    title: 'E-COMMERCE',
    titlePath: '/services/finance',
    description: [
      'Creating Android platforms for hassle-free product browsing, predictive analysis, enhanced customer engagement, & value delivery.',
     
    ],
  },
   {
    title: 'AUTOMOTIVE',
    titlePath: '/services/finance',
    description: [
      'Developing apps that optimize the vehicles capabilities by offering navigation, diagnostics, & a car stereo system. ',
     
    ],
  },
    {
    title: 'GIS',
    titlePath: '/services/finance',
    description: [
      'Creating Android applications for gathering data, conducting spatial analysis, and visualizing maps within Geographic Information Systems.',
      
      
    ],
  },
];
const andAppvData=[
{
    title: "WEB DEVELOPMENT",
    description:
      "Our specialty is building gorgeous, responsive websites that are customized to your company's requirements.",
  },
  {
    title: "MOBILE APP",
    description:
      "For the iOS and Android operating systems, we develop beautiful, intuitive mobile applications.",
  },
  {
    title: "DEV OPS",
    description:
      "To improve operational effectiveness and optimize your development process, we provide all-inclusive DevOps services.",
  },
  {
    title: "DIGITAL MARKETING",
    description:
      "Our premium digital marketing services are intended to increase your online visibility and quicken the expansion of your company.",
  },

];
  const [stacklist] = useState([
    {
      title: "MOBILE TECHNOLOGIES",
      element: <MobileTechAnd/>,
    },
    {
      title: "BACKEND TECHNOLOGIES",
      element: <BackAndroid/>,
    },
    {
      title: "CLOUD PLATFORMS",
      element: <CloudAndroid/>,
    },
   
  ]);

  const [selectedStack, setSelectedStack] = useState(stacklist[0].element);

  const handleStackClick = (stackl) => {
    setSelectedStack(stackl.element);
  };

 const sidebarData = [
  {
    title: 'STAFF AUGMENTATION FOR ANDROID PRODUCTS',
    content: {
      paragraphs: [
        `We make sure to enhance your team’s proficiency with seasoned Android developers. We are dedicated to serving you with excellence while incorporating scalability, efficiency, and expertise that is custom-curated to your unique needs.`,
      ],
      heading: '  WHY PARTNER WITH US:',
      list: [
        'Access to highly-skilled Android developers.',
        'Flexible models that align with your project’s scale & complexity.',
        'Streamlined integration with your existing team & operations.',
        'Cost-effective solutions for your unique development needs.',
        'Expertise in the evolving Android technologies.',
      ],
    },
  },
  {
    title: 'ANDROID NATIVE APP DEVELOPMENT',
    content: {
      paragraphs: [
        'We offer exceptional services by designing high-quality Android Native Apps that are custom-curated by using your ideas as a base and making sure that they are responsive to the Android platform’s capabilities.',
      ],
      heading: 'REACH OUT TO US FOR:',
      list: [
        'Seamless & Efficient Native Android apps;',
        'Harnessing Android-specific Features & functionalities ',
        'Compatibility with Diverse Android Devices. ',
        
      ],
    },
  },
   {
    title: 'HYBRID APP DEVELOPMENT',
    content: {
      paragraphs: [
        'We specialize in developing hybrid apps that are integrated with native and web solutions that are crafted by making use of standard web technologies and enclosed within a native app shell.',
      ],
      heading: 'PARTNER WITH US FOR:',
      list: [
        'Uniform Applications across various Platforms.',
        'Rapid development cycles utilizing a single codebase. ',
        'Cost-effective solutions that are akin to native applications. ',
       
      ],
    },
  },
   {
    title: 'MOBILE APP UI/UX DESIGN',
    content: {
      paragraphs: [
        'We stand as a prominent Web Development company in Udaipur, known for our exceptional delivery of quality mobile applications to entrepreneurs, startups, and businesses that are feature-rich and visually appealing.',
      ],
      heading: 'WORK WITH US FOR:',
      list: [
        'User-Centric Designs that boost engagement.',
        'Engaging Wireframing and Prototyping.',
        'Uniform Design coherence across diverse Android Devices ',
        
      ],
    },
  },
   {
    title: 'MULTI-DEVICE ANDROID DEVELOPMENT',
    content: {
      paragraphs: [
        'Our custom Android apps provide intelligent business solutions for clients across multiple industries. Go-Tech’s Android apps for smartphones, tablets, and Android TV help our partners carve out a niche using apps that are fully compatible with all devices and the latest Android operating systems and make a real impact in the online marketplace. ',
      ],
      heading: ' HARMONIZING THE USE OF ANDROID:',
      list: [
        'Crafting adaptable Apps for different screens & resolutions',
        'Leveraging Android’s adaptability for diverse devices ',
        'Maintaining Uniform UI/UX across Android devices',
        'Improving performance on resource-limited devices',
        'Seamless Incorporation of device-specific features & capabilities',
      ],
    },
  },
 {
    title: 'TECHNICAL AUDIT & CONSULTATION',
    content: {
      paragraphs: [
       ' Harnessing the expertise of our team in responsive Android app development. We meticulously ensure that the app is optimized and feature-rich while conducting thorough audits and consultations with the client.',
      ],
      heading: ' PARTNER WITH US FOR:',
      list: [
        'Technical issues & infrastructural flaws',
        'Comprehensive reports with actionable suggestions',
        'Optimizing Android solutions for efficient performance.',
        
      ],
    },
  },
  {
    title: 'THIRD PARTY INNTEGRATION',
    content: {
      paragraphs: [
       ' We make sure to streamline your Android apps with external systems and data sources, elevated functionality, and user experience.',
      ],
      heading: '  JOIN HANDS WITH US FOR:',
      list: [
        'Smooth integration of payment processors, analytics, and more',
        'Secure data exchange with third-party services. ',
        'Feature-rich app & external functionality ',
        
      ],
    },
  },
];

  return (
    <>
    
    <StatsSection stats={stats} content={content}/>
    <IconTopCard servicesData={startupmvpData}/>


       <SelectSidebar services={sidebarData} headingSidebar={"WEB DEVELOPMENT SOLUTIONS"}  />   



     <TechStackSection
        title="TECH STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />



     

   <WhiteBgCard
    whitecards={whitecardsData}
    columns={3}
     heading="ANDROID SOLUTIONS TO INDUSTRY-SPECIFIC NEEDS"
    subheading="Connecting technology with different industries through tailored Android applications for enhanced growth and innovation."
  
    />
    
    <GridBlueCard
 
  title="TECH INNOVATIONS FOR YOUR ANDROID APP"
  subtitle="Bridging the gap between technology and diverse industries with customized Android applications that drive growth and innovation"
    industries={andAppvData}
     columns={2} 
 
 />   
    

    
    </>
  )
}

export default AndroidAppDev