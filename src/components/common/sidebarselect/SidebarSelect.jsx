import React from 'react'
import { useState } from "react";
const SidebarSelect = () => {
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
  return (
   <>
   
    <div className="pl-8 pr-0 py-10 sm:px-10 md:px-20 lg:px-40">
        {/* Header */}
        <h1 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-center sm:text-left">
          OUR SERVICES
        </h1>

        {/* Service List + Selected Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Service List - Full width on small screens, column on large */}
          <div className="lg:basis-2/5 ">
            <div className="w-screen -ml-4  sm:ml-0 sm:w-auto sm:pr-0 lg:pr-0 flex overflow-x-auto space-x-4 text-lg sm:text-xl text-center lg:flex-col lg:space-x-0 lg:space-y-4">
              {serviceList.map((item) => (
                <div
                  key={item.title}
                  className={`min-w-full h-16  sm:h-20 cursor-pointer rounded-xl flex flex-row items-center pl-5 sm:pl-5 ${
                    selectedTitle === item.title
                      ? "bg-blue-900 text-white"
                      : "bg-blue-100 hover:bg-blue-200"
                  }`}
                  onClick={() => handleServiceClick(item)}
                >
                  <div className="pt-1">{item.icon}</div>
                  <h1
                    className={`text-left pl-3 sm:pl-4 ${
                      selectedTitle === item.title
                        ? "text-white"
                        : "text-blue-900"
                    }`}
                  >
                    {item.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Service Content */}
          <div className="mt-6 lg:mt-0 lg:ml-10 lg:basis-3/5">
            {selectedService}
          </div>
        </div>
      </div>
   
   </>
  )
}

export default SidebarSelect