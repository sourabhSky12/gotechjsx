import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import GridBlueCard from '../../../../components/common/GridBlueCard'
import WhiteBgCard from '../../../../components/common/WhiteBgCard'
import RightSideTextDesc from '../../../../components/common/RightSideTextDesc'
import CardMethodologyBase from '../../../../components/common/CardMethodologyBase'
import { DollarSign, Lightbulb, Lock } from 'lucide-react';
import SelectSidebar from '../../../../components/common/sidebarselect/SelectSidebar'
const Andriod = () => {
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
const whitecardsData = [
  {
    title: 'EDUCATION',
     titlePath: '/services/finance',
    description: [
      'Empower e-learning initiatives, streamline administrative tasks, and boost student engagement with meticulously crafted Android apps. ',
      //  { text: 'custom Software Development Company in Udaipur.', path: '/services/development-company' },
      // ' to enhance  the security and efficiency of the services.',
    ],
  },
   {
    title: 'HEALTHCARE',
     titlePath: '/services/finance',
    description: [
      'Facilitate telemedicine services, simplify appointment scheduling, and enable health monitoring through tailored Android solutions for the healthcare sector.',
      // { text: ' Web Development company in Udaipur ', path: '/services/development-company' },
      // ' and digital health technologies.',
    ],
  },
   {
    title: 'FINTECH',
    // titlePath: '/services/finance',
    description: [
      'Ensure secure transactions and intuitive user experiences with Android applications designed specifically for banking, insurance, and fintech purposes.',
      // { text: ' Software Development company in Udaipur', path: '/services/development-company' },
      // ' we believe in incorporating AR to generate a remarkable user experience by meticulously integrating virtual try-ons and interactive 3D models into your app.',
      // {text: 'SEO Services in Udaipur.',  path: '/services/development-company'},
    ],
  },
   {
    title: 'MEDIA & ENTERTAINMENT',
    // titlePath: '/services/finance',
    description: [
      'Enhance the entertainment experience by developing Android apps for streaming, content management, and interactive platforms.',
      
    ],
  },
  {
    title: 'E-COMMERCE',
    // titlePath: '/services/finance',
    description: [
      'Optimize customer engagement and facilitate secure transactions with Android platforms tailored for seamless product browsing and payment processing.',
      
    ],
  },
  {
    title: 'AUTOMOTIVE',
    // titlePath: '/services/finance',
    description: [
      'Integrate seamlessly with vehicle systems to offer navigation, diagnostics, and in-car entertainment through custom Android applications.',
      
    ],
  },
  {
    title: 'GIS',
    // titlePath: '/services/finance',
    description: [
      'Enable efficient data collection, spatial analysis, and map visualization in Geographic Information Systems (GIS) with purpose-built Android apps.',
      
    ],
  },
];
const andAppvData=[
{
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "Leverage the power of AI to infuse your app with intelligence, intuition, and responsiveness. From chatbots offering personalized assistance to predictive analytics predicting user preferences, AI can revolutionize user experiences and enhance engagement.",
  },
  {
    title: "CLOUD INTEGRATION",
    description:
      "Integrate seamlessly with cloud services to enhance your app's scalability, performance, and storage capabilities. Enable real-time data syncing and ensure accessibility from anywhere, empowering users with uninterrupted access to their data.",
  },
  {
    title: "AUGMENTED REALITY",
    description:
      "Immerse your users in captivating experiences by integrating augmented reality (AR) features into your app. From virtual try-ons allowing users to visualize products in real-world environments to interactive 3D models bringing static content to life, AR has the potential to redefine user interactions and create unforgettable experiences.",
  },
  {
    title: "INTERNET OF THINGS",
    description:
      "Connect your app with smart devices and sensors to provide users with real-time data, automation, and enhanced functionalities. IoT integration opens up new possibilities for user engagement and utility, enabling seamless interaction with the physical world and enhancing the overall user experience. By embracing these technological innovations, your app can break new ground, delight users, and stay ahead of the competition in today's rapidly evolving digital landscape.",
  },

];
const methodData=[
   {
    icon: <DollarSign size={20} />,
    title: 'BEGINNING FROM SCRATCH',
    description:
      'We cater to startups or businesses venturing into the mobile realm for the first time. We help build robust and scalable Android applications from the ground up, tailored to their unique requirements and aspirations.',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'MIGRATING FROM MVP TO NATIVE',
    description:
      'We assist enterprises that initially launched with a low code/no code MVP and are now transitioning to a native product. Our aim is to optimize their return on investments and provide a refined user experience.',
  },
  {
    icon: <Lock size={20} />,
    title: 'TEAM AUGMENTATION',
    description:
      'We offer services for companies seeking to augment their existing teams with specialized Android expertise. By seamlessly integrating with your team, we enhance productivity and bring in-depth knowledge to the table.',
  },
   {
    icon: <Lock size={20} />,
    title: 'PARALLEL ANDROID & IOS DEVELOPMENT',
    description:
      'For businesses aiming to expand simultaneously on both Android and iOS platforms, we provide support. We work in tandem with your in-house iOS team to ensure a consistent and unified mobile experience across all devices.',
  },

];
const sidebarData = [
  {
    title: 'STAFF AUGMENTATION FOR ANDROID PRODUCTS',
    content: {
      paragraphs: [
        `Enhance your team’s potential with our experienced Android developers. Whether you aim to expedite your project, bridge skill disparities, or expand your development endeavors, we offer seasoned professionals customized to your requirements.`,
      ],
      sections:[{heading: '  REASONS TO COLLABORATE WITH US:'},],
      
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
    title: 'ANDROID NATIVE APP DEVELOPMENT',
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
    title: 'HYBRID APP DEVELOPMENT',
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
    title: 'MOBILE APP UI/UX DESIGN',
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
    title: 'MULTI-DEVICE ANDROID DEVELOPMENT',
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
    title: 'TECHNICAL AUDIT & CONSULTATION',
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
  {
    title: 'THIRD PARTY INNTEGRATION',
    content: {
      paragraphs: [
       'Partner with us to ensure the seamless integration of your Android applications with external systems and data sources, thereby enhancing functionality and user experience.',
      ],
      sections:[{
      heading: ' BENEFITS OF COLLABORATING WITH US:',
      },],
      list: [
        'Smooth integration with payment processors, analytics services, and other third-party platforms.',
        'Secure data exchange between your app and external services, prioritizing user privacy.',
        'Enhancement of app features through the integration of external functionalities, expanding the app’s capabilities and appeal.',
        
      ],
    },
  },
];
  return (
    <>
     <div className='px-3 sm:px-0' >
    <StatsSection stats={stats} content={content} />
    <IconTopCard servicesData={icontopData}/>
     <SelectSidebar services={sidebarData} headingSidebar={"OUR SERVICES"}  />   
    <WhiteBgCard 
     whitecards={whitecardsData}
    columns={3}
    heading="ANDROID SOLUTIONS TO INDUSTRY-SPECIFIC NEEDS"
     subheading="Tailoring Android solutions to meet industry-specific demands, we bridge the gap between technology and diverse sectors, fostering growth and innovation through customized applications."
    />
    <GridBlueCard
    title="TECH INNOVATIONS FOR YOUR ANDROID APP"
  subtitle="Elevate your application with cutting-edge technological advancements, ensuring it goes beyond mere functionality to become truly revolutionary. Stay at the forefront of innovation, remain relevant, and captivate your audience with these transformative features:"
    industries={andAppvData}
     columns={2} 
 
    />

     <CardMethodologyBase
    heading="WHOM WE SERVE"
        items={methodData}
        borderColor='border-[#D0DCFA]'
        bgColor="bg-[#FAFBFF]"
        cardColor="bg-white"
        textColor="text-[#314B8C]"
        iconColor="bg-[#314B8C]"
        columns ="grid-cols-1 sm:grid-cols-2"
        cardhov="hover:bg-[#F3F6FE]"
       
    />
    
    </div>
    </>
  )
}

export default Andriod