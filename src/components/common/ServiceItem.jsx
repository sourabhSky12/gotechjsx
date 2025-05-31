import React from 'react';

const ServiceItem = ({ icon, title,  isSelected, onClick }) => {
  return (
    <div
      className={`min-w-full h-16 sm:h-20 cursor-pointer rounded-xl flex flex-row items-center pl-5 sm:pl-5 ${
        isSelected ? "bg-blue-900 text-white hover:bg-gray-800 " : "bg-blue-100 hover:bg-blue-200"
      }`}
      onClick={onClick}
    >
      <div className="pt-1">{icon}</div>
      <h1
        className={`text-left pl-3 sm:pl-4 font-bold ${
          isSelected ? "text-white" : "text-blue-900"
        }`}
      >
        {title}
      </h1>
    </div>
  );
};

export default ServiceItem; 