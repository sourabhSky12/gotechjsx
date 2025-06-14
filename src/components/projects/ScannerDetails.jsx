import React from 'react'
const defaultPoints = [
  "Image Digitization",
  "High-Quality Scanning",
  "Document Conversion",
  "Automatic Cropping",
  " Image Enhancement",
  "Color Correction",
  " Metadata Organization",
  " OCR (Optical Character Recognition)",
];
function ScannerDetails({ title = "PHOTO SCANNER SOFTWARE", points = [] }) {
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
             Our Photo scanner software is a valuable tool engineered to digitize physical photographs, slides, and documents, preserving memories and enabling easy access to visual content. Our software offers a range of features to ensure high-quality scanning and efficient management of digitized images.
            </p>

            <p className="mb-4">
              One of the key functionalities of our photo scanner software is its ability to digitize physical photographs and documents with precision. Moreover, our photo scanner software typically includes options for organizing and managing digitized images. Users can add metadata such as tags and descriptions to images, making it easier to categorize and search for specific photos or documents.
            </p>

            <p>
              Our photo scanner software also has advanced features for preserving memories in a digital format. Its intuitive interface and advanced features have simplified the process of digitizing physical photos and documents, ensuring that these photos are safely stored and easily accessible. The app’s face recognition technology has been particularly useful, allowing the user to quickly locate specific photos and share them with their loved ones. 
            </p>
            <p>
              In summary, photo scanner software is an essential tool, With its range of features for high-quality scanning, image enhancement, and organization, this software helps users efficiently manage their visual content in digital format.
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

export default ScannerDetails