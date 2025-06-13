
import StatsSection from '../../components/common/StatsSection'
import IconTopCard from '../../components/common/IconTopCard'
import GridBlueCard from '../../components/common/GridBlueCard'
import LogoSlider from '../../components/common/LogoSlider'
import  { useState } from 'react';
import FrontEnd from '../../components/techstack/FrontEnd';
import BackEnd from '../../components/techstack/BackEnd';
import UiUx from '../../components/techstack/UiUx';
import MobileApp from '../../components/techstack/MobileApp';
import TechStackSection from '../../components/common/TechStackSection';
import StaffAug from '../../components/ourServices/StaffAug';
import ItConsulting from '../../components/ourServices/ItConsulting';
import CustomSoftware from '../../components/ourServices/CustomSoftware';
import IntelAuto from '../../components/ourServices/IntelAuto';
import ManagedIt from '../../components/ourServices/ManagedIt';
import ServiceItem from '../../components/common/ServiceItem';

const Sservices = () => {
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

const servicesData = [
  {
    title: 'TRUSTED AND RENOWNED',
    description:
      'We are dedicated to serving you with excellence, and this is vouched by our client’s unwavering trust in our services, as we are a trusted custom Software Development Company in Udaipur.',
    highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
  {
    title: 'EXPERTISE AT YOUR SERVICE:',
    description:
      'Our team is dedicated to serving you with expertise, knowledge, and professionalism working to fuel the growth of your business. Choose Go InfoTech Solution for a reliable digital partner.',
    icon: '🎯',
  },
  {
    title: "INDUSTRIES' EXPERTISE:",
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

 const stats = [
   { value: 6, label: "experienced Node specialists worldwide", suffix: "+" },
  { value: 4.8, label: "rating based on 55+ reviews", decimals: 1, suffix: "/5 stars" },
  { value: 90, label: "Node projects successfully delivered", suffix: "+" },
  { value: 8, label: "of expertise in Node development", suffix: " years" },
 ];

 const content = {
   heading: "NODE DEVELOPMENT SERVICES",
  subheading:
    "Count on the expertise of Go InfoTech’s Node professionals to deliver robust solutions tailored to users, incorporating the latest technologies and frameworks.",
 };

const webdevDataBlue = [
  {
    title: "FINANCE",
    description:
      "Empowering the financial sector by incorporating the expertise of Software Development company in Udaipur to enhance the security and efficiency of the services.",
  },
  {
    title: "HEALTHCARE",
    description:
      "We offer cutting-edge solutions for healthcare by making use of managed IT services at web Development company in Udaipur and digital health technologies.",
  },
  {
    title: "MEDIA & ENTERTAINMENT",
    description:
      "Robust IT Solutions at Digital Marketing Company in Udaipur offering innovative solutions for digital platforms along with SEO Services in Udaipur.",
  },
  {
    title: "AUTOMOTIVE",
    description:
      "Dedicated experts providing advanced IT Solutions by making use of innovative and effective solutions for the automotive industry offering operational efficiency.",
  },
   {
    title: "EDUCATION",
    description:
      "Leveraging the excellence of our IT Company in Udaipur to empower educational institutions with digital assistance by our professionals.",
  },
   {
    title: "E-COMMERCE",
    description:
      "Ensuring that the website generates enhanced customer engagement and optimizes user experience Digital Marketing Agency in Udaipur generating higher sales.",
  },
   {
    title: "GIS",
    description:
      "Accurate data visualization and incorporation of geospatial data for designing advanced Geographic Information Systems at a Web Development company in Udaipur.",
  },
  
];
  return (
    <>
   
    <StatsSection stats={stats} content={content}/>
    
<div className='sm:px-40'>
<div className="client-slider ">
                <LogoSlider />
            </div>
 </div>    
    
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

 <TechStackSection
        title="TECH STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />


    <IconTopCard servicesData={servicesData}/>
    <GridBlueCard
    
    title="INDUSTRIES Go InfoTech SOLUTION SERVES:"
    industries={webdevDataBlue}
     columns={3} 
    
   />
  
    </>
  )
}

export default Sservices