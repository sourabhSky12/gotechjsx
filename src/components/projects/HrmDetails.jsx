import React from 'react'
const defaultPoints = [
  "Employee Data Management",
  "Recruitment and Onboarding",
  "Performance Management",
  "Training and Development",
  "Time and Attendance Tracking",
  "Payroll Processing",
  " Compliance Management",
 
];
function HrmDetails({ title = "HUMAN RESOURCE MANAGEMENT SOFTWARE", points = [] }) {
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
             Our Human Resource Management (HRM) software is an essential tool for modern organizations, offering a comprehensive solution to streamline HR operations. From employee data management to recruitment, performance evaluation, and payroll processing, HRM software simplifies complex tasks, saving time and enhancing efficiency.
            </p>

            <p className="mb-4">
              One of the key features of our HRM software is its ability to centralize employee information, including personal details, employment history, and performance records. This centralized database facilitates easy access to critical information, enabling our HR professionals to make informed decisions and provide personalized support to employees.
            </p>

            <p>
              Furthermore, Our HRM software automates various processes such as recruitment and onboarding, eliminating manual tasks and reducing administrative burdens. It allows organizations to post job openings, track applicants, and manage candidate communication efficiently, leading to a more streamlined hiring process.
            </p>
            <p>
              Our HRM software tracks individual performance metrics, identifies areas for improvement, and fosters a culture of continuous learning and development, ultimately resulting in the overall growth of the organization.
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

export default HrmDetails