import React from 'react'
import CallToAction from '../components/common/CallToAction'
import BluePart from '../components/common/BluePart'
import { useState } from 'react'
// import ImageIcon from '../components/common/ImageIcon'
import StaffAug from '../components/ourServices/StaffAug'
import ItConsulting from '../components/ourServices/ItConsulting'
import CustomSoftware from '../components/ourServices/CustomSoftware'
import IntelAuto from '../components/ourServices/IntelAuto'
import ManagedIt from '../components/ourServices/ManagedIt'

import SectionBlock from '../components/ourServices/ServiceSection'
import FrontEnd from '../components/techstack/FrontEnd'
import BackEnd from '../components/techstack/BackEnd'
import MobileApp from '../components/techstack/MobileApp'
import UiUx from '../components/techstack/UiUx'
import ServiceItem from '../components/common/ServiceItem'
import TechStackSection from '../components/common/TechStackSection'

const handleCTA = () => {
  // Navigate, scroll, or open modal
  console.log("CTA clicked");
};
const sections = [
  {
    title: '',
    content: `Our team is committed to delivering unique software solutions to your specific business requirements. 
    Our end-to-end development service results in high-performance outcomes that are structured to your business needs.`
  },
  {
    title: 'WEB DEVELOPMENT',
    content: `Aim to develop a user-centric web application that is adaptive, intuitive, visually engaging, 
    and designed to meet the unique needs of your business.`
  },
  {
    title: 'MOBILE DEVELOPMENT',
    content: `Crafting a mobile application that is user-friendly, visually appealing, and can be used 
    on Android and iOS platforms to stay updated with the evolving tech.`
  },
  {
    title: 'DISCOVERY PHASE',
    content: `We assist you in a thorough evaluation of your business for properly crafting the vision, 
    goals, and intent of the business.`
  }
];
const getSoftware = () => {
  return (
    <div className="flex-col text-lg flex-3/5 text-blue-800 pl-10">
      {sections.map((section, index) => (
        <SectionBlock key={index} title={section.title} content={section.content} />
      ))}
    </div>
  );
};

const Home = () => {
  const ImageIcon = ({ path, text }) => {
    <img src={path} alt={text} />;
  };
  const [serviceList, setServiceList] = useState([
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
      // element: <getSoftware />,
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

  const [stacklist, setstacklist] = useState([
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
    {/* OUR SERVICES */}

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

      {/* TECH STACK */}
      <TechStackSection
        title="TECH STACK"
        stackList={stacklist}
        selectedStack={selectedStack}
        onStackClick={handleStackClick}
      />

    {/* Starting Part */}

<div className="flex flex-col lg:flex-row mt-12 pl-4 w-full lg:px-40 overflow-hidden  ">
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
        type="button"
        className="focus:outline-none  text-white  bg-[#ED8628] hover:bg-[#FFDBA1] focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-base px-8 py-4 dark:focus:ring-yellow-900 w-100 sm:w-50 "
      >
        <b>GET IN TOUCH</b>
      </button>
    </div>

    

    {/* Stats Cards */}
    <div className="flex flex-row sm:flex-row justify-between text-center mt-8 gap-6 sm:gap-0">
      <div className="flex-1">
        <h1 className="text-3xl text-blue-800 font-bold">200</h1>
        <p className="text-blue-950 font-semibold">Projects</p>
      </div>
      <div className="flex-1">
        <h1 className="text-3xl text-blue-800 font-bold">5</h1>
        <p className="text-blue-950 font-semibold">Years of Experience</p>
      </div>
      <div className="flex-1">
        <h1 className="text-3xl text-blue-800 font-bold">70</h1>
        <p className="text-blue-950 font-semibold">Happy Clients</p>
      </div>
    </div>
  </div>

  {/* Image Section */}
  <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0">
    <img className="max-w-full h-auto object-contain" src="/spw.png" alt="spw image" />
  </div>
</div>

{/* Call to action part */}

<CallToAction
title="READY TO START YOUR DIGITAL TRANSFORMATION JOURNEY?"
    subtitle="With our innovative and industry-proven services, we'll help you unlock new growth opportunities."
    buttonText="GET INFO"
    onClick={handleCTA}
/>
<BluePart/>

    </>
  )
}

export default Home