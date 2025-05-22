import React from 'react';

const ServiceItem = ({ icon, title, element, isSelected, onClick }) => {
  return (
    <div
      className={`min-w-full h-16 sm:h-20 cursor-pointer rounded-xl flex flex-row items-center pl-5 sm:pl-5 ${
        isSelected ? "bg-blue-900 text-white" : "bg-blue-100 hover:bg-blue-200"
      }`}
      onClick={onClick}
    >
      <div className="pt-1">{icon}</div>
      <h1
        className={`text-left pl-3 sm:pl-4 ${
          isSelected ? "text-white" : "text-blue-900"
        }`}
      >
        {title}
      </h1>
    </div>
  );
};

export default ServiceItem; 