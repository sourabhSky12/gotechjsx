import React from 'react';

const CardGridHovBase = ({ 
  subdescription,
  heading, 
  cards, 
  bgColor = 'bg-white', 
  cardBgColor = 'bg-white', 
  columns = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3' 
}) => {
  return (
    <section className={`${bgColor} py-16 px-4 sm:px-6 lg:px-40`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 pb-4 text-center sm:text-start">
        {heading}
      </h2>
      <p className='text-sm text-blue-900 sm:text-lg pb-16'>
        {subdescription}
      </p>
      <div className={`grid gap-8 ${columns}`}>
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={`  px-6 pb-8 sm:px-0  border-b border-blue-100 hover:border-blue-300 ${cardBgColor}`}
          >
            <h3 className="text-xl font-bold text-blue-900 mb-2">{card.title}</h3>
            <p className="text-blue-800">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGridHovBase;
