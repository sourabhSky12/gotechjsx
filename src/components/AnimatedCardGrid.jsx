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
  { title: "CRM SOFTWARE", image: "/1.jpg", Component: CrmDetails },
  { title: "HRM SOFTWARE", image: "/3.jpg", Component: HrmDetails },
  { title: "BILLING SOFTWARE", image: "/5.jpg", Component: BillDetails },
  { title: "GO FINANCE SOFTWARE", image: "/4.jpg", Component: GoFinanceDetails },
  { title: "PHOTO SCANNER SOFTWARE", image: "/2.jpg", Component: ScannerDetails },
];

// ✅ Card Component (stateless)
const AnimatedCard = ({ title, image, onOpen }) => {
  return (
    <div className="bg-white overflow-hidden max-w-sm w-full">
      <motion.div
        whileHover={{ y: -15 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="cursor-pointer"
        onClick={onOpen}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[500px] object-cover rounded-2xl shadow-md"
        />
      </motion.div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-blue-800">{title}</h3>
        <button
          onClick={onOpen}
          className="text-blue-700 mt-2 font-semibold underline text-sm"
        >
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

// ✅ Main Grid with Modal Control
const AnimatedCardGrid = () => {
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
      <div className="w-full px-4 lg:pl-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-y-20 gap-y-10">
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

export default AnimatedCardGrid;
