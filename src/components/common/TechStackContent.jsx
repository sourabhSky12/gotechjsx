import React from 'react';
import { useState } from 'react';
import ContactModal from './ContactModal';
const TechStackContent = ({ title, description, stats, technologies}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col md:flex-row lg:flex-row">
      <div className="flex-1/2 text-blue-900 bg-blue-50 rounded-2xl pt-4 pl-4 pr-4">
        <br />
        <div>
          <h1 className="text-2xl">
            <b>{title}</b>
          </h1>
          <p className="text-lg">{description}</p>
          <br />
        </div>
        <h1 className="text-2xl">
          <b>OUR {title.toUpperCase()} DEPARTMENT HAS:</b>
        </h1>
        <ul className="list-disc pl-6 text-lg">
          {stats.map((stat, index) => (
            <li key={index}>{stat}</li>
          ))}
        </ul>
        <br />
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#ED8628] text-amber-50 text-lg h-14 w-40 rounded-xl ml-10 hover:bg-[#FFDBA1] cursor-pointer mb-20 "
        >
          CONTACT US
        </button>
       <ContactModal show={showModal} onClose={() => setShowModal(false)} />
       
      </div>

      <div className="flex-1/2 bg-[#fff]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 pl-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white shadow rounded-xl  hover:grayscale-0 transition grayscale-200 cursor-pointer"
            >
              <img src={tech.image} alt={tech.name} />
              <span className="text-gray-700 font-medium text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackContent; 