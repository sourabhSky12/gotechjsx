import React from 'react';

const BoxBaseBord = ({ headsection, steps, subtitle }) => {
  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-40">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-12">
        {headsection}
      </h2>
      <p>
        {subtitle}
      </p>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="border-b pt-6 flex sm:flex-row flex-col pb-6 border-blue-200">
            <div className="sm:w-1/2">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 py-5 sm:pt-8">
                {step.title}
              </h3>
            </div>
            <div className="sm:w-1/2 pb-5 text-start">
              <p className="text-blue-900 text-lg">{step.description}</p>

              {/* Only show "Result" if it exists */}
              {step.result && (
                <p className="pt-2 font-semibold text-blue-900 text-lg">
                  <strong>Result:</strong>{' '}
                  <span className="font-normal">{step.result}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoxBaseBord;
