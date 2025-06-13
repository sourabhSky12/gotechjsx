
import CallToAction from '../components/common/CallToAction'
import BluePart from '../components/common/BluePart'
import ContactModal from '../components/common/ContactModal'
import  { useState } from 'react';

// import ImageIcon from '../components/common/ImageIcon'
import StaffAug from '../components/ourServices/StaffAug'
import ItConsulting from '../components/ourServices/ItConsulting'
import CustomSoftware from '../components/ourServices/CustomSoftware'
import IntelAuto from '../components/ourServices/IntelAuto'
import ManagedIt from '../components/ourServices/ManagedIt'


import FrontEnd from '../components/techstack/FrontEnd'
import BackEnd from '../components/techstack/BackEnd'
import MobileApp from '../components/techstack/MobileApp'
import UiUx from '../components/techstack/UiUx'
import ServiceItem from '../components/common/ServiceItem'
import TechStackSection from '../components/common/TechStackSection'
import HomeNumbSec from '../components/common/HomeNumbSec';
import LogoSlider from '../components/common/LogoSlider';



  const Home = () => {
 
const [showModal, setShowModal] = useState(false);

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

  return (
    <>
   
  

    {/* Starting Part */}

<div className="flex flex-col lg:flex-row mt-12 p-4 w-full lg:px-40 overflow-hidden  ">
  {/* Text + Button + Stats */}
  <div className="flex-1 flex flex-col  ">
    <div className="mb-6 pl-10 lg:pl-0">
      <h1 className="text-4xl sm:text-5xl text-[#405EA9] font-bold">SOFTWARE</h1>
      <h1 className="text-4xl sm:text-5xl text-[#405EA9] font-bold">DEVELOPMENT</h1>
      <h1 className="text-4xl sm:text-5xl text-[#405EA9] font-bold">COMPANY</h1>

      <p className="text-lg text-[#405EA9] mt-4">
        We take pride in announcing that we are the leading{" "}
        <span className="underline text-blue-900 font-semibold">
          Software Development Company in Udaipur
        </span>{" "}
        providing comprehensive IT Solutions to your Digital needs.
      </p>
    </div>

    <div className="pt-6 flex justify-center sm:justify-start">
      <button 
         onClick={() => setShowModal(true)}
        type="button"
        className="focus:outline-none  text-white  bg-[#ED8628] hover:bg-[#FFDBA1] focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-base px-8 py-4 dark:focus:ring-yellow-900 w-100 sm:w-50 "
      >
        <b>GET IN TOUCH</b>
      </button>
    </div>

    

    {/* Stats Cards */}
   
    <HomeNumbSec/>
  </div>

  {/* Image Section */}
  <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0">
    <img className="max-w-full h-auto object-contain" src="/spw.png" alt="spw image" />
  </div>
</div>
<div className='sm:px-40'>
<div className="client-slider ">
                <LogoSlider />
            </div>
 </div>        
 {/* OUR SERVICES */}

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

{/* Call to action part */}

<CallToAction
title="READY TO START YOUR DIGITAL TRANSFORMATION JOURNEY?"
    subtitle="With our innovative and industry-proven services, we'll help you unlock new growth opportunities."
    buttonText="GET INFO"
    onClick={() => setShowModal(true)}
    
/>

<ContactModal show={showModal} onClose={() => setShowModal(false)} />

   

<BluePart/>



  {/* TECH STACK */}
      <TechStackSection
        title="TECH STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
        
      />
   
    </>
  )
}

export default Home