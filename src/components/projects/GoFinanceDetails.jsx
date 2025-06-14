import React from 'react'
const defaultPoints = [
  "Agent Productivity Enhancement",
  "Integrated Data Management",
  "Centralized Customer Information",
  "Personalized Customer Interactions",
  "Customer Preferences Insights",
  "Proactive Customer Engagement",
  "Seamless Communication Channels",
  "Long-term Customer Loyalty Development",
];
function GoFinanceDetails({ title = "GO FINANCE SOFTWARE", points = [] }) {
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
             Go Finance Software is a comprehensive solution designed to revolutionize operations within the finance industry. It serves as a pivotal tool for businesses, offering a range of features aimed at enhancing efficiency and optimizing customer interactions. 
            </p>

            <p className="mb-4">
             At its core, GO Finance Software focuses on maximizing agent productivity by providing intuitive tools and streamlined processes. Through integrated data management capabilities, it centralizes customer information, transaction history, and other pertinent data points, ensuring that agents have access to all relevant information at their fingertips. By leveraging integrated data management, businesses can gain deeper insights into customer preferences, behavior patterns, and past interactions. Armed with this knowledge, agents can engage customers in meaningful conversations, offer relevant products or services, and anticipate their needs proactively. This personalized approach not only enhances customer satisfaction but also fosters long-term loyalty and retention.
            </p>

            <p>
              Whether it’s through phone calls, emails, chat support, or social media platforms, businesses can maintain consistent and timely communication with customers, enhancing their overall experience and satisfaction.
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
  )
}

export default GoFinanceDetails