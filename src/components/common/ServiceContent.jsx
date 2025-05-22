import React from 'react';

const ServiceContent = ({ description, sections }) => {
  return (
    <div className="flex-col text-lg flex-3/5 text-blue-800 pl-10">
      <p>{description}</p>
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <br />
          <h1 className="text-blue-900 font-bold text-lg sm:text-xl">
            {section.title}
          </h1>
          <br />
          <p className="mt-2">{section.content}</p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ServiceContent; 