

import React from 'react';
import { useNavigate } from 'react-router-dom';

const GridBlueCard = ({ title,subtitle, industries, columns = 3 }) => {
  const navigate = useNavigate();

  const columnClass = `grid md:grid-cols-${columns} gap-6 pt-5`;

  return (
    <section className="bg-[#314B8C] text-white py-12 w-full">
      <div className="max-w-7xl mx-auto sm:px-10 sm:pt-5">
        {title && (
          <h2 className="text-2xl md:text-4xl font-bold sm:py-10  uppercase">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg  sm:pt-3 pb-15 ">
            {subtitle}
          </p>
        )}
        <div className={columnClass}>
          {industries?.map((industry, idx) => (
            <div
              key={idx}
              className="border-[#405EA9] p-5 rounded-xl hover:shadow-lg transition duration-300 border-1 hover:bg-[#405EA9]"
              onClick={() => navigate(industry.path || '/')}
              style={{ cursor: 'pointer' }} // Keep basic pointer for clarity
            >
              <h3 className="font-bold text-xl mb-2">
                {industry.title}
              </h3>
              <p className="text-lg">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridBlueCard;








// const GridBlueCard = ({ title, industries }) => {
//   return (
//     <section className="bg-[#314B8C] text-white py-12 w-full">
//       <div className="max-w-7xl mx-auto sm:px-10 sm:pt-5">
//         {title && (
//           <h2 className="text-2xl md:text-4xl font-bold sm:pt-5 mb-10 uppercase">
//             {title}
//           </h2>
//         )}
//         <div className="grid md:grid-cols-3 gap-6">
//           {industries?.map((industry, idx) => (
//             <div
//               key={idx}
//               className="border-[#405EA9] p-5 rounded-xl hover:shadow-lg transition duration-300 border-s-1 hover:bg-[#405EA9]"
//             >
//               <h3 className="font-bold text-lg mb-2">{industry.title}</h3>
//               <p className="text-base">{industry.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GridBlueCard;



























// const GridBlueCard = () => { 


//     const industries = [
//       {
//         title: "FINANCE",
//         description:
//           "Empowering the financial sector by incorporating the expertise of Software Development company in Udaipur to enhance the security and efficiency of the services.",
//       },
//       {
//         title: "HEALTHCARE",
//         description:
//           "We offer cutting-edge solutions for healthcare by making use of managed IT services at web Development company in Udaipur and digital health technologies.",
//       },
//       {
//         title: "MEDIA & ENTERTAINMENT",
//         description:
//           "Robust IT Solutions at Digital Marketing Company in Udaipur offering innovative solutions for digital platforms along with SEO Services in Udaipur.",
//       },
//       {
//         title: "AUTOMOTIVE",
//         description:
//           "Dedicated experts providing advanced IT Solutions by making use of innovative and effective solutions for the automotive industry offering operational efficiency.",
//       },
//       {
//         title: "EDUCATION",
//         description:
//           "Leveraging the excellence of our IT Company in Udaipur to empower educational institutions with digital assistance by our professionals.",
//       },
//       {
//         title: "E-COMMERCE",
//         description:
//           "Ensuring that the website generates enhanced customer engagement and optimizes user experience Digital Marketing Agency in Udaipur generating higher sales.",
//       },
//       {
//         title: "GIS",
//         description:
//           "Accurate data visualization and incorporation of geospatial data for designing advanced Geographic Information Systems at a Web Development company in Udaipur.",
//       },
//     ];


//   return (
//    <>
//    <section className="bg-[#314B8C] text-white py-12 w-full">
//         <div className="max-w-7xl mx-auto sm:px-10 sm:pt-5">
//         <h2 className="text-2xl md:text-4xl font-bold sm:pt-5 mb-10 uppercase">
//             Industries Go Infotech Solution Serves:
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {industries.map((industry, idx) => (
//               <div
//                 key={idx}
//                 className="border-[#405EA9] p-5 rounded-xl hover:shadow-lg transition duration-300 border-s-1 hover:bg-[#405EA9]"
//               >
//                 <h3 className="font-bold text-lg mb-2">{industry.title}</h3>
//                 <p className="text-base">{industry.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//    </>
//   )
// }

// export default GridBlueCard