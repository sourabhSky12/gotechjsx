import React from 'react'
import StatsSection from '../../../../components/common/StatsSection';
import IconTopCard from '../../../../components/common/IconTopCard';
import SelectSidebar from '../../../../components/common/sidebarselect/SelectSidebar';
function AiChatBot() {
     const stats = [
   { value: 30, label: "mobile development specialists", suffix: "+" },
  { value: 60, label: "Projects successfully delivered", suffix: "+" },
  { value: 8, label: "of expertise in business ", suffix: " years" },
    { value: 4.8, label: "rating based on 55+ reviews", decimals: 1, suffix: "/5 stars" },
 ];

 const content = {
   heading: "ANDROID APP DEVELOPMENT SERVICE",
  subheading:
    "Creating smooth and intuitive experiences within the Android ecosystem: Customized solutions that deeply connect with your target audience.",
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
const sidebarData = [
  {
    title: 'CUSTOM CHATBOT DESIGN',
    content: {
      paragraphs: [
        `Our bespoke chatbots can streamline and simplify your business processes. Go-Tech’s NLP/deep learning-driven chatbots conduct in-depth conversations with users and deliver a significant return on investment. `,
      ],
      sections:[{heading: ' OUR SPECIALISTS ARE EXPERTS AT:'},],
      
      list: [
        'Gain access to a proficient pool of Android developers.',
        'Choose from flexible engagement models adaptable to your project’s size and intricacy.',
        'Seamlessly integrate with your current team and workflows.',
        'Avail cost-efficient solutions aligned with your development objectives.',
        'Benefit from expertise in cutting-edge Android technologies and industry standards.',
      ],
    },
     button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
  {
    title: 'MULTI-PLATFORM INTEGRATION',
    content: {
      paragraphs: [
        'Our expertise lies in developing high-performance Android native applications customized to your unique requirements, maximizing the capabilities offered by the Android platform.',
      ],
      sections:[{
      heading: 'WHY COLLABORATE WITH US:',
      },],
      list: [
        'Streamlined and seamless native Android applications.',
        'Utilization of Android-specific features and functionalities to enhance user experience. ',
        'Compatibility ensured across an extensive array of Android devices.',
        
      ],
    },
  },
   {
    title: 'NATURAL LANGUAGE PROCESSING',
    content: {
      paragraphs: [
        'We excel in crafting hybrid applications that amalgamate the strengths of both native and web solutions, employing standard web technologies encapsulated within a native app shell.',
      ],
      sections:[{
      heading: 'WHY PARTNER WITH US:',
      },],
      list: [
        'Ensure uniformity across various platforms with consistent applications.',
        'Expedite development cycles by leveraging a single codebase.',
        'Attain cost-effective solutions while maintaining performance akin to native applications.',
       
      ],
    },
     button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
   {
    title: 'E-COMMERCE CHATBOTS',
    content: {
      paragraphs: [
        'Our emphasis lies in crafting intuitive mobile app designs that elevate user experience by seamlessly blending creativity with platform-specific design principles.',
      ],
      sections:[{
      heading: 'REASONS TO COLLABORATE WITH US:',
      },],
      list: [
        'User-centric designs aimed at enhancing user engagement and satisfaction.',
        'Interactive wireframing and prototyping to visualize and refine design concepts.',
        'Ensured design consistency across diverse Android devices, ensuring a cohesive user experience.',
        
      ],
    },
  },
   {
    title: 'ANALYSIS & REPORTING',
    content: {
      paragraphs: [
        'We specialize in developing versatile Android applications optimized for a wide range of devices, including smartphones, tablets, wearables, and TVs, ensuring a uniform and superior user experience across all Android platforms.',
      ],
      sections:[{
      heading: ' EMBRACING THE ANDROID ECOSYSTEM:',
      },],
      list: [
        'Crafting responsive applications that seamlessly adapt to various screen sizes and resolutions.',
        'Leveraging Android’s flexibility to cater to the diverse landscape of devices.',
        'Ensuring a consistent UI/UX design across all Android devices, enhancing user interaction.',
        'Optimizing performance to deliver smooth operation even on resource-constrained devices.',
        'Integrating seamlessly with device-specific features and capabilities to enhance functionality.',
      ],
    },
  },
 {
    title: 'VOICE-ACTIVATED CHATBOTS',
    content: {
      paragraphs: [
       ' Benefit from our wealth of experience in Android app development. We provide consulting services on industry best practices, security measures, and performance optimization strategies.',
      ],
      sections:[{
      heading: ' PARTNER WITH US TO GAIN:',
      },],
      list: [
        'In-depth analysis of technical issues and architectural weaknesses.',
        'Comprehensive reports containing actionable recommendations for improvement.',
        'Refinement of your Android solution to achieve optimal performance and functionality.',
        
      ],
    },
  },
 
];
  return (
    <>
    
    <StatsSection stats={stats} content={content} />
    <IconTopCard servicesData={icontopData}/>
     <SelectSidebar services={sidebarData} headingSidebar={"OUR AI CHATBOT SERVICES"}  />
    
    </>
  )
}

export default AiChatBot