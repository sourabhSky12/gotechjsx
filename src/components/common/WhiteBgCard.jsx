import React from 'react';
import { useNavigate } from 'react-router-dom';

const WhiteBgCard = ({ title, whitecards, columns = 3 }) => {
  const navigate = useNavigate();
  const columnClass = `grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`;

  return (
    <section className="bg-[#F8FAFC] py-12 w-full lg:px-40 text-[#314B8C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        {title && (
          <h2 className="text-2xl md:text-4xl font-bold mb-10 uppercase text-center">
            {title}
          </h2>
        )}
        <div className={columnClass}>
          {whitecards?.map((card, idx) => (
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
      </div>
    </section>
  );
};

export default WhiteBgCard;
