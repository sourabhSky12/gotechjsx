import LogoSlider from '../../../components/common/LogoSlider'
import StatsSection from '../../../components/common/StatsSection'
import { ImageIcon } from 'lucide-react'
import GridBlueCard from '../../../components/common/GridBlueCard'
import CardGridHovBase from '../../../components/common/CardGridHovBase'
import { DollarSign, Lightbulb, Lock } from 'lucide-react';
import CardMethodologyBase from '../../../components/common/CardMethodologyBase'
import { useState } from 'react'
import StaffAug from '../../../components/ourServices/StaffAug'
import ItConsulting from '../../../components/ourServices/ItConsulting'
import CustomSoftware from '../../../components/ourServices/CustomSoftware'
import IntelAuto from '../../../components/ourServices/IntelAuto'
import ManagedIt from '../../../components/ourServices/ManagedIt'
import ServiceItem from '../../../components/common/ServiceItem'

const ReferralProgram = () => {
   const stats = [
   { value: 150, label: "mobile development experts", suffix: "+" },
   { value: 7, label: "are satisfied with our services",  suffix: "/7+ " },
  { value: 3, label: "in business ", suffix: "+ years" },
  { value: 70, label: "qualified employes within the team", suffix: "+" },
 
   
 ];

 const content = {
   heading: "REFERRAL PROGRAM",
  subheading:
    "Join our Referral Program and help others find our world-class services while reaping the rewards.",
 };
 const cardData = [
  {
    title: '10% REFERRAL COMMISSION',
    description: 'With an average project budget of around $150,000, your commission will be approximately $15,000.',
  },
  {
    title: 'PAYMENT PROCESS',
    description: 'You will receive your payment once we have collected it from the client.',
  },
  {
    title: 'QUALITY ASSURANCE',
    description: 'Our services are guaranteed to be of the highest quality, protecting your reputation.',
  },
  {
    title: 'ZERO FINANCIAL RISK',
    description: 'No financial investments or program fees are required, ensuring a worry-free experience.',
  },
  
];
const webdevDataBlue = [
  {
    title: "FINANCET",
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
const methodologyData = [
  {
    icon: <DollarSign size={20} />,
    title: 'CURRENT OR FORMER CLIENT',
    },
  {
    icon: <Lightbulb size={20} />,
    title: 'STARTUP CONSULTING FIRMS',
     },
  {
    icon: <Lock size={20} />,
    title: 'INDIVIDUAL CONSULTANT',
    },
     {
    icon: <DollarSign size={20} />,
    title: 'SALES PROFESSIONAL',
    },
  {
    icon: <Lightbulb size={20} />,
    title: 'DESIGN STUDIO',
     },
  {
    icon: <Lock size={20} />,
    title: 'DEVELOPMENT COMPANY',
    },
     {
    icon: <DollarSign size={20} />,
    title: 'MARKETING AGENCY',
    },
  {
    icon: <Lightbulb size={20} />,
    title: 'YOU’VE JUST FOUND OUR COMPANY!',
     },
 
];
  const ImageIcon = ({ path, text }) => {
  return <img src={path} alt={text} />;
};
  const [serviceList] = useState([
    {
      icon: <img src='/Aug.svg'></img>,
      title: "STAFF AUGMENTATION",
      element: <StaffAug />,
    },
    { icon: <img src='/ItConsul.svg'/>,
      
      title: "IT CONSULTING",
      element: <ItConsulting />,
    },
    {
      icon: <img src='/cus.svg'/>,
      title: "CUSTOM SOFTWARE DEVELOPMENT",
      element: <CustomSoftware />,
      
    },
    {
       icon: <img src='/intel.svg'/>,
      title: "INTELLIGENT AUTOMATION",
      element: <IntelAuto />,
    },
    {
       icon: <img src='/manage.svg'/>,
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

  return (
   <>
   <div className='px-3 sm:px-0'>
   <StatsSection stats={stats} content={content}/>
   
   <div className='sm:px-40'>
<div className="client-slider ">
                <LogoSlider />
            </div>
 </div>  



     <CardMethodologyBase
     heading="WHO MIGHT BE SUITABLE FOR THE PROGRAM"
        items={methodologyData}
        bgColor="bg-[#284181]"
        cardColor="bg-[#284181]"
        textColor="text-white"
        iconColor="bg-white/10"
        cardhov="hover:bg-[#405EA9]"
        columns = 'grid-cols-1 md:grid-cols-4'
        
  />
    <CardGridHovBase
   
   heading="WHAT WE OFFER TO YOU AS A REFERRAL PARTNER"
        cards={cardData}
        bgColor="bg-white"
        cardBgColor="bg-white"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
   
   />

 <div className="pl-8 pr-0 py-10 sm:px-10 md:px-20 lg:px-40">
        {/* Header */}
        <h1 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-center sm:text-left">
          OUR SERVICES
        </h1>

        {/* Service List + Selected Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Service List - Full width on small screens, column on large */}
          <div className="lg:basis-2/5 ">
            <div className="w-screen -ml-4 sm:ml-0 sm:w-auto sm:pr-0 lg:pr-0 flex overflow-x-auto space-x-4 text-lg sm:text-xl text-center lg:flex-col lg:space-x-0 lg:space-y-4">
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
          <div className="mt-6 lg:mt-0 lg:ml-10 lg:basis-3/5">
            {selectedService}
          </div>
        </div>
      </div>

   <GridBlueCard
    
    title="INDUSTRIES Go InfoTech SOLUTION SERVES:"
    industries={webdevDataBlue}
     columns={3} 
    
   />
   </div>
   </>
  )
}

export default ReferralProgram