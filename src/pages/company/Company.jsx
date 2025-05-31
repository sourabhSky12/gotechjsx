import { ImageIcon } from 'lucide-react'
import GridRightStatsCard from '../../components/common/GridRightStatsCard'
import IconTopCard from '../../components/common/IconTopCard'
import RightSideTextDesc from '../../components/common/RightSideTextDesc'
import { useState } from 'react'
import ServiceItem from '../../components/common/ServiceItem'
import StaffAug from '../../components/ourServices/StaffAug'
import ItConsulting from '../../components/ourServices/ItConsulting'
import CustomSoftware from '../../components/ourServices/CustomSoftware'
import IntelAuto from '../../components/ourServices/IntelAuto'
import ManagedIt from '../../components/ourServices/ManagedIt'
import LogoSlider from '../../components/common/LogoSlider'


const Company = () => {
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
          path={"/ItConsul.svg"}
          text={"custom software development"}
        />
      ),
      title: "CUSTOM SOFTWARE DEVELOPMENT",
      element: <CustomSoftware />,
      
    },
    {
      icon: <ImageIcon path={"ItConsul.svg"} text={"Intelligent Automation"} />,
      title: "INTELLIGENT AUTOMATION",
      element: <IntelAuto />,
    },
    {
      icon: <ImageIcon path={"ItConsul.svg"} text={"Managed it services"} />,
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
   
const companyData = [
  {
    title: 'TRUSTED AND RENOWNED:',
    description:
     ' We are dedicated to serving you with excellence, and this is vouched by our client’s unwavering trust in our services, as we are a trusted custom Software Development Company in Udaipur.',
     highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
  {
    title: 'EXPERTISE AT YOUR SERVICE',
    description:
      'Our team is dedicated to serving you with expertise, knowledge, and professionalism working to fuel the growth of your business. Choose Go InfoTech Solution for a reliable digital partner.',
    icon: '🎯',
  },
  {
    title: "INDUSTRIES' EXPERTISE:",
    description:
      'We are a trusted Software Development company in Udaipur, with expertise from different industries all around the world using innovation, knowledge, and skills.',
    // highlight: 'Software Development company in Udaipur',
    icon: '🛡️',
  },
]
  return (
    <>
    <RightSideTextDesc
    heading="EXPERIENCE EXCELLENCE WITH GO INFOTECH"
    subheading="Excel Your Business with Custom Software Development Company in Udaipur"
       
    
    />
    <GridRightStatsCard/>

    
<div className='sm:px-40'>
<div className="client-slider ">
                <LogoSlider />
            </div>
 </div>        


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
    <IconTopCard servicesData={companyData} />

    
    </>
  )
}

export default Company