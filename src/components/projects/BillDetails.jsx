import React from 'react'
const defaultPoints = [
  " Invoicing Automation",
  "Customizable Templates",
  "Tax Calculation",
  "Payment Tracking",
  "Customer Management",
  "Expense Tracking",
  "Reporting and Analytics",
  " Integration Capabilities",
];
function BillDetails({ title = "BILLING SOFTWARE", points = [] }) {
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
              Our Billing software will enable you to automate the process of creating and managing invoices for businesses. It simplifies billing operations, reduces errors, and improves cash flow management by ensuring timely and accurate invoicing.
            </p>

            <p className="mb-4">
              One of the primary features of our billing software is its ability to generate invoices quickly and efficiently. It allows businesses to customize invoice templates with their branding, add line items for products or services sold, and calculate taxes and discounts automatically. 
            </p>

            <p>
             Our billing software also includes other features for managing customer information and payment details. It centralizes customer data, making it easy to access contact information, payment history, and outstanding balances. This enables businesses to send invoices electronically and track payments more effectively.
            </p>
            <p>
              Businesses should lean toward automating invoicing tasks and providing valuable insights into financial performance, billing software empowers businesses to optimize their revenue generation efforts and achieve long-term success.
            </p>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block w-px bg-gray-300 mx-4" />

          {/* Right Column */}
          <div className="md:w-1/2 md:pl-6">
            <ol className="list-decimal list-inside text-[16px]  space-y-2">
              {(points.length ? points : defaultPoints).map((point, index) => (
                <li key={index} className='marker:font-bold'>{point}</li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    
    
    
    
    </>
  )
}

export default BillDetails