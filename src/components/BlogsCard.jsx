import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

// Component Imports
import CrmDetails from "./projects/CrmDetails";
import HrmDetails from "./projects/HrmDetails";
import BillDetails from "./projects/BillDetails";
import GoFinanceDetails from "./projects/GoFinanceDetails";
import ScannerDetails from "./projects/ScannerDetails";
// ✅ Data: Components passed as functions
const cardData = [
  { title: "A Prestigious Software Development Company in Udaipur", image: "/Go-Teck-2048x1366.jpg", Component: CrmDetails },
  { title: "The Evolution Of SEO: Trends And Strategies For 2024", image: "/evosol.jpg", Component: HrmDetails },
  { title: "Optimize Your Website For Success In 2024 With This SEO Checklist", image: "/backlinks.jpg", Component: BillDetails },
  { title: "How To Grow In Business By Using Software Development ?", image: "/businesdev.jpg", Component: GoFinanceDetails },
  { title: "What Do You Understand About Local SEO & Its Benefits?", image: "/localseo.jpg", Component: ScannerDetails },
  { title: "Trends Shaping The Future Of Software Development In Ahmedabad", image: "/ahemdabad.jpg", Component: ScannerDetails },
  { title: "ReactJS Revolution: Why It’s The Preferred Choice For Web Development In 2023", image: "/reactjs.png", Component: ScannerDetails },
  { title: "Top 5 Software Development Companies In Ahmedabad", image: "/top5.png", Component: ScannerDetails },
];

// ✅ Card Component (stateless)
const AnimatedCard = ({ title, image, onOpen }) => {
  return (
   <div className="bg-white overflow-hidden w-full">

      <motion.div
        whileHover={{ y: -15 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="cursor-pointer"
        onClick={onOpen}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-contain rounded-2xl shadow-md"
        />
      </motion.div>
      <div className="text-start pt-6 text-[#314B8C]">
        <h3 className="text-lg font-bold ">{title}</h3>
        <button
          onClick={onOpen}
          className=" pt-6 font-bold  text-base"
        >
          VIEW MORE &gt;
        </button>
      </div>
    </div>
  );
};

// ✅ Main Grid with Modal Control
const BlogsCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [SelectedComponent, setSelectedComponent] = useState(null);

  const openModal = (Component) => {
    setSelectedComponent(() => Component);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedComponent(null);
  };

  return (
    <>
      {/* Grid */}
      <div className="w-full px-4 lg:px-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-y-10 gap-y-10 w-full">
          {cardData.map((card, index) => (
            <AnimatedCard
              key={index}
              title={card.title}
              image={card.image}
              onOpen={() => openModal(card.Component)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="relative bg-white rounded-lg w-full max-w-6xl p-6 overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-blue-600"
            >
              <X size={24} />
            </button>

            {/* Dynamic Content */}
            {SelectedComponent && <SelectedComponent />}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogsCard;
