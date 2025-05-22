import React from 'react'



const IconTopCard = ({ servicesData ,heading="WHY CHOOSE US"}) => {
  return (
    <div className='w-full'>   
      <h2 className="text-2xl md:text-4xl font-bold sm:pt-5 mb-10 uppercase text-blue-900 lg:px-40">
        {heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-40 pb-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition-all"
          >
            <div className="text-3xl mb-4">{service.icon}</div>
            <h3 className="font-bold text-lg mb-2 text-blue-900">{service.title}</h3>
            <p className="text-blue-800 text-lg">
              {service.highlight ? (
                service.description.split(service.highlight).map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <span className="font-semibold text-blue-900">
                        {service.highlight}
                      </span>
                    </span>
                  ) : (
                    part
                  )
                )
              ) : (
                service.description
              )}
            </p>
          </div>
        ))}
      </div>
    </div> 
  );
};

export default IconTopCard;
