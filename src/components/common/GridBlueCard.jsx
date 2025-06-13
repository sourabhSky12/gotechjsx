

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const GridBlueCard = ({ title,subtitle, industries, columns = 3 }) => {
//   const navigate = useNavigate();

//   const columnClass = `grid md:grid-cols-${columns} gap-6 pt-5`;

//   return (
//     <section className="bg-[#314B8C] text-white py-12 w-full">
//       <div className="max-w-7xl mx-auto sm:px-10 sm:pt-5">
//         {title && (
//           <h2 className="text-2xl md:text-4xl font-bold sm:py-10  uppercase">
//             {title}
//           </h2>
//         )}
//         {subtitle && (
//           <p className="text-lg  sm:pt-3 pb-15 ">
//             {subtitle}
//           </p>
//         )}
//         <div className={columnClass}>
//           {industries?.map((industry, idx) => (
//             <div
//               key={idx}
//               className="border-[#405EA9] p-5 rounded-xl hover:shadow-lg transition duration-300 border-1 hover:bg-[#405EA9]"
//               onClick={() => navigate(industry.path || '/')}
//               style={{ cursor: 'pointer' }} // Keep basic pointer for clarity
//             >
//               <h3 className="font-bold text-xl mb-2">
//                 {industry.title}
//               </h3>
//               <p className="text-lg">{industry.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GridBlueCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const GridBlueCard = ({ title, subtitle, industries = [], columns = 3 , cta}) => {
  const navigate = useNavigate();

  // Check if exactly 7 items
  const isSevenItems = industries.length === 7;
  const firstRow = isSevenItems ? industries.slice(0, 3) : [];
  const secondRow = isSevenItems ? industries.slice(3) : [];

  return (
    <section className="bg-[#314B8C] text-white py-12 w-full">
      {cta && <div className="mt-8 px-2">{cta}</div>}
      <div className="max-w-7xl mx-auto px-2 sm:px-10 sm:pt-5">
        {title && (
          <h2 className="text-2xl md:text-4xl font-bold sm:py-10 uppercase">
            {title}
          </h2>
        )}
        {subtitle && <p className="text-lg sm:pt-3 pb-15">{subtitle}</p>}

        {/* Custom layout for exactly 7 items */}
        {isSevenItems ? (
          <>
            {/* First Row: 3 columns */}
            <div className="grid md:grid-cols-3 gap-6 pt-5">
              {firstRow.map((industry, idx) => (
                <div
                  key={idx}
                  className="border-[#405EA9] p-5 rounded-xl hover:shadow-lg transition duration-300 border-1 hover:bg-[#405EA9]"
                  onClick={() => navigate(industry.path || '/')}
                  style={{ cursor: 'pointer' }}
                >
                  <h3 className="font-bold text-xl mb-2">{industry.title}</h3>
                  <p className="text-lg">{industry.description}</p>
                </div>
              ))}
            </div>

            {/* Second Row: 4 columns */}
            <div className="grid md:grid-cols-4 gap-6 pt-5">
              {secondRow.map((industry, idx) => (
                <div
                  key={idx + 3}
                  className="border-[#405EA9] p-5 rounded-xl hover:shadow-lg transition duration-300 border-1 hover:bg-[#405EA9]"
                  onClick={() => navigate(industry.path || '/')}
                  style={{ cursor: 'pointer' }}
                >
                  <h3 className="font-bold text-xl mb-2">{industry.title}</h3>
                  <p className="text-lg">{industry.description}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Normal case for any number of items
          <div className={`grid md:grid-cols-${columns} gap-6 pt-5`}>
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="border-[#405EA9] p-5 rounded-xl hover:shadow-lg transition duration-300 border-1 hover:bg-[#405EA9]"
                onClick={() => navigate(industry.path || '/')}
                style={{ cursor: 'pointer' }}
              >
                <h3 className="font-bold text-xl mb-2">{industry.title}</h3>
                <p className="text-lg">{industry.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GridBlueCard;
