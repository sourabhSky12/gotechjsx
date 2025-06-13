import { useState } from "react";

import React from "react";


const getButtonClasses = (
  isSelected,
  
  selectedClasses,
  unselectedClasses
) => {
  const baseClasses =
    'snap-start flex-shrink-0 text-left px-6 py-4 sm:py-6 whitespace-normal break-words rounded-lg text-sm md:text-xl font-bold cursor-pointer min-w-[200px] max-w-screen lg:max-w-[500px] shadow-sm transition';

  return `${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`;
};
  
export default function SelectSidebar({
  services = [],
  headingSidebar,
  textList,
  
  dynamicontetext = 'text-[#405EA9]',
  sectbgcolor = 'bg-white',
  headtextcolor = 'text-[#314B8C]',
  selectedClass = 'bg-[#405EA9] text-white hover:bg-[#54595F]',
  unselectedClass = 'bg-[#f3f6ff] text-[#314B8C] hover:bg-[#D0DCFA]',
}) {
  const [selected, setSelected] = useState(0);
  const current = services[selected]?.content;

  return (
    <section className={`py-10 ${sectbgcolor}`}>
       <h2 className={`text-2xl md:text-3xl font-bold ${headtextcolor} mb-4 text-center md:text-start px-3 py-5 lg:px-46`}>
            {headingSidebar}
          </h2>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-15 px-3 lg:px-0">
        
        {/* Sidebar Buttons */}
        <div className="lg:flex lg:flex-col flex-1 ">
        
          <div className="flex overflow-x-auto lg:overflow-visible lg:flex-col gap-4 pb-2 snap-x snap-mandatory scrollbar-hide">


            {services.map((service, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(idx)}
                className={getButtonClasses(
                  selected === idx,
                  selectedClass,
                  unselectedClass
                )}
              >
                {service.title.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content */}
        <div className={`flex-1  leading-relaxed ${dynamicontetext}`}>
          {/* Paragraphs */}
          {current?.paragraphs?.map((p, i) => (
            <p key={`p-${i}`} className="mb-4">{p}</p>
          ))}

          {/* Multiple Headings and Paragraph Sections */}
          {current?.sections?.map((section, idx) => (
            <div key={`section-${idx}`} className="mt-6">
              <h2 className="text-lg font-bold mb-2">{section.heading}</h2>
              {section.paragraphs?.map((para, i) => (
                <p key={`s-${idx}-p-${i}`} className="mb-4">{para}</p>
              ))}
            </div>
          ))}

          {/* List */}
          {current?.list && (
            <ul className={`text-base font-bold ${textList} mt-4 list-disc pl-4`}>
              {current.list.map((item, idx) => (
                <li key={idx} className="pb-6">
                  <span className="flex items-start gap-4">
                    <span>{item}</span>
                  </span>
                  <hr className="mt-8 border-gray-300" />
                </li>
              ))}
            </ul>
          )}

          {/* Button */}
            {services[selected]?.button && (
            <div className="mt-6">{services[selected].button}</div>
          )} 
        

 

        </div>
      </div>
    </section>
  );
}
