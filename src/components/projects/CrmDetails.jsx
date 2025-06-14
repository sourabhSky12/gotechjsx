import React from 'react';

const defaultPoints = [
  "Centralized Customer Data Management",
  "Streamlined Interaction Tracking",
  "Reporting and Analytics",
  "Personalized Engagement",
  "Collaboration and Alignment",
  "Scalability and Customization",
  "Enhanced Customer Journey",
];

function CrmDetails({ title = "CUSTOMER RELATIONSHIP MANAGEMENT (CRM) SOFTWARE", points = [] }) {
  return (
    <>
      <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 text-gray-800">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2A388F] mb-4">
              {title}
            </h2>

        <div className="flex flex-col md:flex-row">
          
          {/* Left Column */}
          <div className="md:w-1/2 md:pr-6">
          
            <p className="mb-4">
              Our meticulously crafted CRM software revolutionizes how your business manages customer relationships. By centralizing customer data and interactions, it offers a comprehensive view of each customer, enabling personalized engagement strategies that drive loyalty and retention.
            </p>

            <p className="mb-4">
              Moreover, CRM automates repetitive tasks, freeing up valuable time for sales, marketing, and support teams to focus on delivering exceptional customer experiences.
            </p>

            <p>
              With our CRM software, businesses can track the entire customer journey, from lead generation to conversion and beyond. Detailed analytics provide insights into customer behavior and preferences, guiding targeted marketing campaigns and sales strategies. Additionally, CRM fosters collaboration among team members, ensuring seamless communication and alignment across departments.
            </p>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block w-px bg-gray-300 mx-4" />

          {/* Right Column */}
          <div className="md:w-1/2 md:pl-6">
            <ol className="list-decimal list-inside text-[16px]  space-y-2">
              {(points.length ? points : defaultPoints).map((point, index) => (
                <li key={index} className='marker:font-bold' >{point}</li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </>
  );
}

export default CrmDetails;
