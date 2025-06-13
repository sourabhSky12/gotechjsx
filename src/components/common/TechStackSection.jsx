import React from 'react';

const TechStackSection = ({ title, stackList, selectedStack, onStackClick }) => {
  return (
    <div className="px-2 py-10 sm:px-10 md:px-20 lg:px-40">
      {/* Header */}
      <h1 className="text-blue-900 text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-center sm:text-left font-bold">
        {title}
      </h1>

      {/* Stack List - Responsive Horizontal Bar */}
      <div className="w-full mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {stackList.map((item) => (
            <button
              key={item.title}
              onClick={() => onStackClick(item)}
              className={` py-2  sm:py-3 rounded-lg transition-colors cursor-pointer font-medium text-lg sm:text-xl text-blue-900 ${
                selectedStack === item.element
                  ? 'underline  '
                  : 'no-underline'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Stack Content */}
      <div className="mt-6">
        {selectedStack}
      </div>
    </div>
  );
};

export default TechStackSection; 