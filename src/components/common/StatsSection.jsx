
import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ContactModal from './ContactModal';
const StatsSection = ({ stats, content }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div ref={ref} className="px-4 py-10 bg-white md:px-12 lg:px-40">
      <div className="max-w-7xl mx-auto text-center sm:text-start sm:flex">
        <div className="sm:flex-1/2 sm:pr-10 sm:pt-40">
          <h2 className="text-3xl md:text-4xl font-bold text-[#314B8C] mb-4">
            {content.heading}
          </h2>
          <p className="text-lg text-[#405EA6] pb-8 max-w-2xl mx-auto">
            {content.subheading}
          </p>
          <button className="bg-orange-500 text-white px-10 py-3 rounded-md font-semibold hover:bg-orange-600 transition sm:px-12 sm:py-4 " onClick={() => setShowModal(true)}>
            GET INFO →
          </button>
        </div>

        <div className="sm:flex-1/2 sm:pl-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 pt-12 text-start">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-blue-900 text-white rounded-xl py-6 px-4 shadow-lg"
              >
                <div className="text-3xl font-bold text-orange-400">
                  {inView && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      decimals={stat.decimals || 0}
                    />
                  )}
                  {stat.suffix}
                </div>
                <p className="mt-2 text-sm pb-6 sm:pb-8">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default StatsSection;
