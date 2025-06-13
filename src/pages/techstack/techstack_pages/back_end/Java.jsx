import { useState } from 'react';
import StatsSection from '../../../../components/common/StatsSection'
import IconTopCard from '../../../../components/common/IconTopCard'
import CardMethodologyBase from '../../../../components/common/CardMethodologyBase';
import { DollarSign, Lightbulb, Lock } from 'lucide-react';
import TechStackSection from '../../../../components/common/TechStackSection';
import FrameworkJava from '../../../../components/java/FrameworkJava';
import DataManageJava from '../../../../components/java/DataManageJava';
import SelectSidebar from '../../../../components/common/sidebarselect/SelectSidebar';

const Java = () => {
       const stats = [
  { value: 20, label: "experienced Java specialists worldwide", suffix: "+" },
   { value: 4.8, label: "rating based on 60+ reviews", decimals: 1, suffix: "/5 stars" },
 
  { value: 40, label: "Java projects successfully delivered", suffix: "+" },
  { value: 8, label: "of expertise in Java development ", suffix: " years" },
   
 ];


 const content = {
   heading: "JAVA DEVELOPMENT SERVICES",
  subheading:
    "Go InfoTech offers a comprehensive range of solutions designed to deliver robust, scalable, and high-performing applications. With a dedicated emphasis on Java technology, we specialize in crafting enterprise-grade applications, microservice architectures, and cloud-based solutions.",
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
  

];
 
  const [stacklist] = useState([
    {
      title: "JAVA FRAMEWORKS & LIBRARIES",
      element: <FrameworkJava />,
    },
    {
      title: "DATABASES & DATA MANAGEMENT",
      element: <DataManageJava />,
    },
   
  ]);

  const [selectedStack, setSelectedStack] = useState(stacklist[0].element);

  const handleStackClick = (stackl) => {
    setSelectedStack(stackl.element);
  };
  const sidebarData = [
  {
    title: 'STAFF AUGMENTATION FOR JAVA PROJECTS',
    content: {
      paragraphs: [
        `Elevate your team’s proficiency with our adept Java professionals, guaranteeing your project’s success with expert support. `,
            ],
      sections:[{ heading: 'HOW WE CAN ASSIST YOU:'}],
      list: [
        'Offering seasoned Java developers tailored to your project requirements.',
        'Boosting your team’s capabilities and expertise.',
        'Delivering flexible and scalable staffing solutions for Java projects.',
       
        
      ],
    },
     button: <button className="bg-[orange] text-white px-10 py-3 rounded font-bold cursor-pointer">READ MORE</button>
  },
  {
    title: 'CUSTOM JAVA APPLICATION DEVELOPMENT',
    content: {
      paragraphs: [
        'Focused on bespoke Java development, we craft applications that are scalable, secure, and robust, customized to fulfill a wide range of business requirements.',
      ],
      sections:[{ heading: 'HOW WE CAN ASSIST YOU:'}],
      list: [
        'Developing enterprise-grade web and desktop applications.',
        'Integrating advanced functionalities and modern UI/UX designs.',
        'Ensuring high performance and compliance with industry standards.',
       
        
      ],
    },
  },
   {
    title: 'KOTLIN MOBILE APP DEVELOPMENT',
    content: {
      paragraphs: [
        'Harnessing Kotlin for contemporary and efficient mobile app development, particularly targeting Android platforms.',
      ],
      sections:[{ heading: 'HOW WE CAN ASSIST YOU:'}],
      list: [
        'Creating high-performance Android applications using Kotlin.',
        'Utilizing Kotlin’s concise syntax to expedite app development.',
        'Seamlessly integrating Kotlin apps with existing Java-based systems.',
        
        
      ],
    },
  },
   {
    title: 'JAVA MICROSERVICES ARCHITECTURE',
    content: {
      paragraphs: [
        'Integrating microservice architecture into Java to improve application scalability, flexibility, and deployment speed.',
      ],
      sections:[{ heading: 'HOW WE CAN ASSIST YOU:'}],
      list: [
        'Crafting and overseeing microservices-based applications. ',
        'Ensuring smooth integration and communication among services.',
        'Ensuring smooth integration and communication among services.',
        
      ],
    },
    
  },
   {
    title: 'JAVA APPLICATION MAINTENANCE AND SUPPORT',
    content: {
      paragraphs: [
        'Offering continuous maintenance and support for Java applications to guarantee they stay up-to-date, secure, and efficient.',
      ],
      sections:[{ heading: 'HOW WE CAN ASSIST YOU:'}],
      list: [
        'Frequent updates and feature enhancements.',
        'Bug fixes and performance optimization.',
        'Ongoing technical support and troubleshooting.',
       
      ],
    },
  },
  

];
  return (
    <>
     <div className='px-3 sm:px-0' >
    <StatsSection stats={stats} content={content}/>
    <IconTopCard servicesData={icontopData}/>
        <SelectSidebar 
                                services={sidebarData}
                                 headingSidebar={"OUR SERVICES"} 
                                  sectbgcolor="bg-[#314B8C]"
                                  headtextcolor= "text-white"
                                  dynamicontetext= "text-white"
                                    textList = "text-[#f6ae39]"
                                    selectedClass = 'bg-white text-[#314B8C] '
                                    unselectedClass = 'bg-[#405EA9] text-white hover:bg-[#54595F]'
                                 />  
     {/* TECH STACK */}
      <TechStackSection
        title="JAVA DEVELOPMENT TECH-STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />

    <CardMethodologyBase
    heading="DIVERSE TECH CAPABILITIES"
        items={methodData}
        bgColor="bg-[#FAFBFF]"
        cardColor="bg-white"
        textColor="text-[#314B8C]"
        iconColor="bg-[#314B8C]"
        columns ="grid-cols-1 sm:grid-cols-3"
        cardhov="hover:bg-[#F3F6FE]"
        headSub="Our Java development services are enriched with proficiency in key front-end technologies such as React, Angular, and Vue. This synergy enables us to provide comprehensive full-stack development solutions, ensuring seamless integration between robust Java back-ends and dynamic front-ends."
    />
    </div>
    </>
  )
}

export default Java