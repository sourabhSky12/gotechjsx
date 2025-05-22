import React from 'react';

const CardMethodologyBase = ({
  heading,
  items,
  bgColor = 'bg-white',
  textColor = 'text-blue-900',
  cardColor = 'bg-white',
  iconColor = 'bg-blue-100',
  columns = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  cardhov,
  headSub,
  borderColor='border-white/20'
}) => {
  return (
    <section className={`${bgColor} py-16 px-4 sm:px-6 lg:px-40`}>
      <h2 className={`text-3xl sm:text-4xl font-bold pb-4 text-center sm:text-start ${textColor}`}>
        {heading}
      </h2>
      <p className={`text-lg pb-8 text-center sm:text-start ${textColor}`}>{headSub}</p>
      <div className={`grid gap-8 ${columns}`}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl border ${borderColor} p-6 transition duration-300  ${cardColor} ${cardhov} `}
          >
            {item.icon && (
              <div className={`w-10 h-10 mb-4 flex items-center justify-center rounded-md ${iconColor}`}>
                {item.icon}
              </div>
            )}
            <h3 className={`text-2xl  font-bold mb-2 ${textColor}`}>{item.title}</h3>
            <p className={`${textColor} text-lg`}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardMethodologyBase;
