// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const WhiteBgCard = ({ title, whitecards, columns = 3 }) => {
//   const navigate = useNavigate();
//   const columnClass = `grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`;

//   return (
//     <section className="bg-[#F8FAFC] py-12 w-full lg:px-40 text-[#314B8C]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-0">
//         {title && (
//           <h2 className="text-2xl md:text-4xl font-bold mb-10 uppercase text-center">
//             {title}
//           </h2>
//         )}
//         <div className={columnClass}>
//           {whitecards?.map((card, idx) => (
//             <div
//               key={idx}
//               className="border border-[#CBD5E1] p-5 rounded-xl bg-white transition duration-300 hover:bg-[#F3F6FE]"
//             >
//               <h3
//                 className={`font-bold text-lg mb-3 ${
//                   card.titlePath ? 'cursor-pointer' : ''
//                 }`}
//                 onClick={() => card.titlePath && navigate(card.titlePath)}
//               >
//                 {card.title}
//               </h3>

//               <p className="text-base leading-relaxed">
//                 {card.description.map((part, i) =>
//                   typeof part === 'string' ? (
//                     part
//                   ) : (
//                     <span
//                       key={i}
//                       onClick={() => navigate(part.path)}
//                       className="font-semibold cursor-pointer"
//                     >
//                       {part.text}
//                     </span>
//                   )
//                 )}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhiteBgCard;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const WhiteBgCard = ({ title, whitecards = [], columns = 3 ,heading,subheading}) => {
  const navigate = useNavigate();

  // Check if exactly 7 cards
  const isSevenItems = whitecards.length === 7;
  const firstRow = isSevenItems ? whitecards.slice(0, 3) : [];
  const secondRow = isSevenItems ? whitecards.slice(3) : [];

  return (
    <section className="bg-[#F8FAFC] py-12 w-full lg:px-40 text-[#314B8C]">
       <div className="text-center md:text-left pb-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 ">
          {heading}
        </h1>
        <p className="text-base md:text-lg text-blue-800 max-w-full mx-auto pt-4">
          {subheading}
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        {title && (
          <h2 className="text-2xl md:text-4xl font-bold mb-10 uppercase text-center">
            {title}
          </h2>
        )}

        {isSevenItems ? (
          <>
            {/* First row: 3 columns */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {firstRow.map((card, idx) => (
                <div
                  key={idx}
                  className="border border-[#CBD5E1] p-5 rounded-xl bg-white transition duration-300 hover:bg-[#F3F6FE]"
                >
                  <h3
                    className={`font-bold text-lg mb-3 ${
                      card.titlePath ? 'cursor-pointer' : ''
                    }`}
                    onClick={() => card.titlePath && navigate(card.titlePath)}
                  >
                    {card.title}
                  </h3>
                  <p className="text-base leading-relaxed">
                    {card.description.map((part, i) =>
                      typeof part === 'string' ? (
                        part
                      ) : (
                        <span
                          key={i}
                          onClick={() => navigate(part.path)}
                          className="font-semibold cursor-pointer"
                        >
                          {part.text}
                        </span>
                      )
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* Second row: 4 columns */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {secondRow.map((card, idx) => (
                <div
                  key={idx + 3}
                  className="border border-[#CBD5E1] p-5 rounded-xl bg-white transition duration-300 hover:bg-[#F3F6FE]"
                >
                  <h3
                    className={`font-bold text-lg mb-3 ${
                      card.titlePath ? 'cursor-pointer' : ''
                    }`}
                    onClick={() => card.titlePath && navigate(card.titlePath)}
                  >
                    {card.title}
                  </h3>
                  <p className="text-base leading-relaxed">
                    {card.description.map((part, i) =>
                      typeof part === 'string' ? (
                        part
                      ) : (
                        <span
                          key={i}
                          onClick={() => navigate(part.path)}
                          className="font-semibold cursor-pointer"
                        >
                          {part.text}
                        </span>
                      )
                    )}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Default layout for any other number of cards
          <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
            {whitecards.map((card, idx) => (
              <div
                key={idx}
                className="border border-[#CBD5E1] p-5 rounded-xl bg-white transition duration-300 hover:bg-[#F3F6FE]"
              >
                <h3
                  className={`font-bold text-lg mb-3 ${
                    card.titlePath ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => card.titlePath && navigate(card.titlePath)}
                >
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed">
                  {card.description.map((part, i) =>
                    typeof part === 'string' ? (
                      part
                    ) : (
                      <span
                        key={i}
                        onClick={() => navigate(part.path)}
                        className="font-semibold cursor-pointer"
                      >
                        {part.text}
                      </span>
                    )
                  )}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WhiteBgCard;

