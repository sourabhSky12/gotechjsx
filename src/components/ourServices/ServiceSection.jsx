import React from 'react';

const SectionBlock = ({ title, content }) => {
  return (
    <div className="mb-6">
      <h1 className="font-bold">{title}</h1>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default SectionBlock;
