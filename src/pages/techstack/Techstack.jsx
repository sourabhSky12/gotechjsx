
 import StatsSection from '../../components/common/StatsSection'
 import IconTopCard from '../../components/common/IconTopCard'
 import CallToAction from '../../components/common/CallToAction'
import LogoSlider from '../../components/common/LogoSlider';

import { useState } from 'react';
import FrontEnd from '../../components/techstack/FrontEnd';
import BackEnd from '../../components/techstack/BackEnd';
import UiUx from '../../components/techstack/UiUx';
import MobileApp from '../../components/techstack/MobileApp';
import TechStackSection from '../../components/common/TechStackSection';
import ServiceItem from '../../components/common/ServiceItem';
import StaffAug from '../../components/ourServices/StaffAug';
import ItConsulting from '../../components/ourServices/ItConsulting';
import CustomSoftware from '../../components/ourServices/CustomSoftware';
import IntelAuto from '../../components/ourServices/IntelAuto';
import ManagedIt from '../../components/ourServices/ManagedIt';
const Techstack = () => {
   const ImageIcon = ({ path, text }) => {
  return <img src={path} alt={text} />;
};
  const [serviceList] = useState([
    {
      icon: <ImageIcon path={"/Aug.svg"} text={"AUGMENTATION"} />,
      title: "STAFF AUGMENTATION",
      element: <StaffAug />,
    },
    {
      icon: <ImageIcon path={"/ItConsul.svg"} text={"IT CONSULTING"} />,
      title: "IT CONSULTING",
      element: <ItConsulting />,
    },
    {
      icon: (
        <ImageIcon
          path={"/cus.svg"}
          text={"custom software development"}
        />
      ),
      title: "CUSTOM SOFTWARE DEVELOPMENT",
      element: <CustomSoftware />,
      
    },
    {
      icon: <ImageIcon path={"/intel.svg"} text={"Intelligent Automation"} />,
      title: "INTELLIGENT AUTOMATION",
      element: <IntelAuto />,
    },
    {
      icon: <ImageIcon path={"/manage.svg"} text={"Managed it services"} />,
      title: "MANAGED IT SERVICES",
      element: <ManagedIt />,
    },
  ]);
  const [selectedService, setSelectedService] = useState(
    serviceList[0].element
  );


  const [selectedTitle, setSelectedTitle] = useState(serviceList[0].title);

  const handleServiceClick = (service) => {
    setSelectedService(service.element);
    setSelectedTitle(service.title);
  };
  console.log(selectedService);

  const [stacklist] = useState([
    {
      title: "FRONT-END DEVELOPMENT",
      element: <FrontEnd />,
    },
    {
      title: "BACK-END DEVELOPMENT",
      element: <BackEnd />,
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      element: <MobileApp />,
    },
    {
      title: "UI/UX DESIGN",
      element: <UiUx />,
    },
  ]);

  const [selectedStack, setSelectedStack] = useState(stacklist[0].element);

  const handleStackClick = (stackl) => {
    setSelectedStack(stackl.element);
  };
  console.log(selectedStack);  

 
const techstackData = [
  {
    title: 'BUSINESS-ORIENTED PERSONALIZATION',
    description:
     ' We offer comprehensive software solutions that are custom-developed to your specific educational institution’s requirements',
    // highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
  {
    title: 'OPTIMIZED PERFORMANCE AND FLEXIBILITY',
    description:
      'Explore the expertise of our professionals, offering high-quality performance and scalability in the software solutions offered for the educational industry.',
    icon: '🎯',
  },
  {
    title: "INDUSTRIES' EXPERTISE:",
    description:
      'We partner with updated technology tools to elevate performance and drive sales. We make use of AI, forecasting analytics, and data analytics for effective operations in the educational sector.',
    // highlight: 'Software Development company in Udaipur',
    icon: '🛡️',
  },
  {
    title: 'ADHERENCE TO REGULATORY COMPLIANCE AND SECURITY',
    description:
      'At Go InfoTech, we value your credibility, which is why we prioritize security in our software solutions while simultaneously focusing on regulatory compliance in the educational industry norms.',
    icon: '📋',
  },
  
  {
    title: 'FACILITATING SCALABILITY AND INTEGRATION',
    description:
      'We offer scalable solutions for facilitating seamless user interaction with academic professionals and offering a compatible and interactive interface.',
    icon: '⚙️',
  },

  {
    title: 'EFFECTIVE SUPPORT AND REAL-TIME MAINTENANCE',
    description:
      'We believe in offering real-time support and teacher assistance while paying deliberate attention to their unique needs and requirements in the educational sector.',
    icon: '🌐',
  },
];

const stats = [
  { value: 60, label: "projects delivered successfully", suffix: "+" },
  { value: 8, label: "of expertise in business", suffix: "+" },
  { value: 7, label: "were willing to refer Go InfoTech", decimals: 1, suffix: "/9 clients" },
  { value: 20, label: "experienced specialists worldwide", suffix: "+" },
];

const content = {
  heading: "OUR TECH STACK",
  subheading:
    "Explore the blend of technologies we harness to turn challenging tasks into successful projects.",
};




  return (
    
      <>
    <StatsSection stats={stats} content={content}/>
    
<div className='sm:px-40'>
<div className="client-slider ">
                <LogoSlider />
            </div>
 </div>    


<TechStackSection
        title="TECH STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />




    

 
    <IconTopCard servicesData={techstackData}/>

     <div className=" py-10 sm:px-10 md:px-20 lg:px-40 px-4">
        {/* Header */}
        <h1 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-center sm:text-left font-bold">
          OUR SERVICES
        </h1>

        {/* Service List + Selected Content */}
        <div className="flex flex-col lg:flex-row ">
          {/* Service List - Full width on small screens, column on large */}
          <div className="lg:basis-2/5 ">
            <div className="w-screen -ml-4 sm:ml-0 sm:w-auto  flex overflow-x-auto space-x-4 text-lg sm:text-xl text-center lg:flex-col lg:space-x-0 lg:space-y-4">
              {serviceList.map((item) => (
                <ServiceItem
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  element={item.element}
                  isSelected={selectedTitle === item.title}
                  onClick={() => handleServiceClick(item)}
                />
              ))}
            </div>
          </div>

          {/* Selected Service Content */}
          <div className="mt-6 lg:mt-0 lg:ml-10 lg:basis-3/5  ">
            {selectedService}
          </div>
        </div>
      </div>
    <CallToAction/>
    
    </>
  );
}

export default Techstack
