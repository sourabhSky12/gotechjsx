import React from 'react'
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import GridBlueCard from '../../../../components/common/GridBlueCard'
import WhiteBgCard from '../../../../components/common/WhiteBgCard'
import { useState } from 'react'
import ContactModal from '../../../../components/common/ContactModal'
import CallToAction from '../../../../components/common/CallToAction'
import IosMobile from '../../../../components/mobileAppDev/IosMobile'
import AnderoidMobile from '../../../../components/mobileAppDev/AnderoidMobile'
import CrossPLatMobile from '../../../../components/mobileAppDev/CrossPLatMobile'
import TechStackSection from '../../../../components/common/TechStackSection'
import SelectSidebar from '../../../../components/common/sidebarselect/SelectSidebar'
const MobileAppDev = () => {
const [showModal, setShowModal] = useState(false);

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


const mobileAppData = [


   {
    title: 'TTRUSTED AND RENOWNED:',
    description:
      'We are dedicated to serving you with excellence, and this is vouched by our client’s unwavering trust in our services, as we are a trusted custom Software Development Company in Udaipur.',
    icon: '🎯',
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
   // highlight: 'Software Development company in Udaipur',
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
const mobAppvData=[
{
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "Empower your business with the unique capabilities of AI by partnering with Go InfoTech Solution where we make sure to incorporate more intuitive and responsive results with the use of predictive analytics and chatbots.",
  },
  {
    title: "CLOUD INTEGRATION",
    description:
      "Ensuring seamless integration of cloud services will improve your app’s scalability, effectiveness, and functionality by making sure that the data is integrated and accessible from anywhere.",
  },
  {
    title: "AUGMENTED REALITY",
    description:
      "As a leading Software Development company in Udaipur we believe in incorporating AR to generate a remarkable user experience by meticulously integrating virtual try-ons and interactive 3D models into your app.",
  },
  {
    title: "INTERNET OF THINGS",
    description:
      "Harmonizing the use of sensors and smart devices to integrate real-time data while increasing its functionality and user experience. Incorporating IoT in the business can generate expanded opportunities for user engagement.",
  },

];
 const [stacklist] = useState([
    {
      title: "IOS APP DEVELOPMENT",
      element: <IosMobile />,
    },
    {
      title: "ANDROID APP DEVELOPMENT",
      element: <AnderoidMobile />,
    },
    {
      title: "CROSS-PLATFORM APP DEVELOPMENT",
      element: <CrossPLatMobile />,
    },
   
  ]);

  const [selectedStack, setSelectedStack] = useState(stacklist[0].element);

  const handleStackClick = (stackl) => {
    setSelectedStack(stackl.element);
  };
const sidebarData = [
  {
    title: 'TEAM AUGMENTATION FOR MOBILE PRODUCTS',
    content: {
      paragraphs: [
        `At Go-Infotech Solution, the Best Development Company, we offer top-tier team augmentation services to boost your mobile product development. Our skilled professionals seamlessly integrate with your team, providing expertise in the latest mobile technologies. Whether you need developers, designers, testers, or project managers, we provide flexible solutions to meet your project demands. Focus on your core business while we handle recruitment, training, and management, ensuring your product is delivered on time and within budget. Enhance your team’s capabilities and accelerate your mobile projects with Go-Infotech Solution.`,
      ],
    
    },
     button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
  {
    title: 'CROSS-PLATFORM APP DEVELOPMENT',
    content: {
      paragraphs: [
        'At Go-Infotech Solution, the Best Development Company, we specialize in cross-platform app development to ensure your app reaches the widest possible audience. Our expert team uses the latest technologies to create seamless and high-performing apps for both iOS and Android platforms. By leveraging a single codebase, we streamline the development process, reducing costs and time-to-market while maintaining top-notch quality and performance. Partner with Go-Infotech Solution to bring your app vision to life efficiently and effectively, ensuring a consistent user experience across all devices.',
      ],
      heading: 'PARTNER WITH Go InfoTech EXPERTISE FOR:',
      list: [
        'Optimized code reuse quickens time-to-market.',
        'Improved scalability across platforms for applications. ',
        'Cross-platform Solutions Maintenance & Support. ',
        
      ],
    },
  },
   {
    title: 'NATIVE MOBILE APP DEVELOPMENT',
    content: {
      paragraphs: [
        'The Best Software Development Company, Go-Infotech Solution, specializes in native mobile app development and builds powerful applications for the iOS and Android operating systems. Our committed development team makes the most of native technology to create apps that are faster, more useful, and offer a better user experience. Through the use of best practices and platform-specific functionality, we guarantee that your app stands out in the crowded market. Put your trust in Go-Infotech Solution to deliver unparalleled native mobile development quality and efficiency to realize your app vision.',
      ],
      heading: 'Select Go InfoTech for:',
      list: [
        'Features-rich Mobile App Development for iOS and Android;',
        'Scalable, Interactive & High-performing Mobile Apps; ',
        'Platform Specific & Custom UX/UI Design.',
       
      ],
    },
  },
   {
    title: 'CONSULTING AND PROTOTYPING',
    content: {
      paragraphs: [
        'The IT Company, Go-Infotech Solution, provides thorough consulting and prototyping services to assist you in honing your concepts and realizing your vision. To guarantee that your project is in line with market trends and industry best practices, our knowledgeable consultants offer strategic advice. We build interactive models of your application with our prototype services so you can see and test your ideas before moving forward with full-scale development. Join together with Go-Infotech Solution to reduce risks, maximize the potential of your product, and quicken the process of taking your idea from paper to market.',
      ],
      heading: 'CONNECT WITH GO INFOTECH FOR:',
      list: [
        'Proper Consultation & guidance for mobile app',
        'Seamless Prototyping of Your Ideas',
        'Regular updates with feedback & product-market fit.',
        
      ],
    },
  },
  
];
const sidebarbgData =[
    {
    title: 'STAFF AUGMENTATION ',
    content: {
      paragraphs: [
        `Go Tech Solution is a custom Software Development Company in Udaipur aiming to provide seamless project execution by staff augmentation for optimal resource management`,
      ],
      
       sections: [
        {
          heading: 'IT STAFF AUGMENTATION',
          paragraphs: [
            'We are dedicated to providing you with highly skilled and experienced IT professionals who will help you focus on core aspects so that your business reaches new heights.'
          ]
        },
      
      ],
    },
     button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
   
   {
    title: 'IT CONSULTING ',
    content: {
      paragraphs: [
        'Our IT Company in Udaipur is here to navigate you in the evolving tapestry of Technology while providing appropriate guidance from highly qualified professionals:',
      ],
       sections: [
        {
          heading: 'TECHNICAL DUE DILIGENCE',
          paragraphs: [
            'After conducting a thorough evaluation of your business while assessing the project feasibility, relevant risks, and growth ambition of your project, our team provides strategic insights for your project growth.'
          ]
        },
        {
          heading: 'PROJECT MANAGEMENT AND COORDINATION',
          paragraphs: [
          ' Our team ensures that your project delivery is timely and effective through proper management and streamlined communication with the development teams.'
          ]
        
        },
      ],
     
    },
  },
   {
    title: 'CUSTOM SOFTWARE DEVELOPMENT',
      content: {
      paragraphs: [
        'Our team is committed to delivering unique software solutions to your specific business requirements. Our end-to-end development service results in high-performance outcomes that are structured to your business needs.',
      ],
       sections: [
        {
          heading: 'WEB DEVELOPMENT',
          paragraphs: [
            'Aim to develop a user-centric web application that is adaptive, intuitive, visually engaging, and designed to meet the unique needs of your business.'
          ]
        },
        {
          heading: 'MOBILE DEVELOPMENT',
          paragraphs: [
          'Crafting a mobile application that is user-friendly, visually appealing, and can be used on Android and iOS platforms to stay updated with the evolving tech.'
          ]
        
        },
      ],
     
    },
  },
   {
    title: 'INTELLIGENT AUTOMATION',
    content: {
      paragraphs: [
        'We are dedicated to serving you with the best services incorporating state-of-the-art technologies like AI, machine learning, blockchain, and IoT, while we transform your business to achieve new heights.',
      ],
       sections: [
        {
          heading: 'AI & ML SOLUTIONS:',
          paragraphs: [
            'Empower your business to grow by incorporating Artificial Intelligence and Machine Learning to enhance the decision making process and robust growth of business.'
          ]
        },
        {
          heading: 'BLOCKCHAIN SOLUTIONS:',
          paragraphs: [
          'Secure and transparent blockchain solutions tailored to your unique needs and industry requirements, ranging from cryptocurrencies to decentralized applications (DApps).'
          ]
        
        },
      ],
     
    },
  },
  ];

  return (
   <>
   <div className='px-2 sm:px-0'>
   <StatsSection stats={stats} content={content}/>
   <IconTopCard
   servicesData={mobileAppData}
   />



<SelectSidebar services={sidebarData} headingSidebar={"OUR MOBILE SERVICES:"}  />   





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


    <GridBlueCard
 
  title="TECH INNOVATIONS FOR YOUR MOBILE APP"
  subtitle="AUtilizing cutting-edge technology and innovation to design and deploy functional mobile apps will revolutionize your business growth. Our experts believe in crafting a remarkable user experience to captivate the audience."
    industries={mobAppvData}
     columns={2} 
 
 />   
   <TechStackSection
        title="TECH STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />


   <SelectSidebar 
   services={sidebarbgData}
    headingSidebar={"OUR MACHINE LEARNING SERVICES"} 
     sectbgcolor="bg-[#314B8C]"
     headtextcolor= "text-white"
     dynamicontetext='text-white'
       selectedClass = 'bg-white text-[#314B8C] '
       unselectedClass = 'bg-[#405EA9] text-white hover:bg-[#54595F]'
    />  


</div>
   </>
  )
}

export default MobileAppDev