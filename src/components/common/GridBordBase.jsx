import React from 'react'

const GridBordBase = () => {

    
const services = [
  {
    title: "DATA ANALYSIS",
    description:
      "Using ML algorithms, we ensure that the raw data is converted into actionable insights.",
    applications: [
      "Trend forecast for e-commerce platforms",
      "Customer behavior analysis for app development",
      "Predictive analysis for optimizing operations",
    ],
  },
  {
    title: "INTELLIGENT AUTOMATION",
    description:
      "Effective utilization of AI-driven bots and systems for elimination of redundant operations",
    applications: [
      "Responsive chatbots for Customer support",
      "Leveraging advanced technology for document processing for FI",
      "Use of AI/ML mastery for inventory management in businesses.",
    ],
  },
  {
    title: "IMAGE & VIDEO ANALYSIS",
    description:
      "Revolutionize data interpretation and insight extraction from visual content.",
    applications: [
      "Facial identification used in several industries",
      "Quality inspection and automated product defect detection",
      "Generative content based on visuals",
    ],
  },
  {
    title: "VOICE & SPEECH RECOGNITION",
    description:
      "Voice-activated commands, audio transcription, and much more to elevate the user experience",
    applications: [
      "Smart audio recognition for voice-enabled commands",
      "Audio transcription for media and entertainment",
      "Voice-enabled search engines for e-commerce platforms",
    ],
  },
];


  return (
    <>
     <div className="bg-white px-6 py-12 md:px-40 text-[#405EA9]">
      <h2 className="text-3xl font-bold mb-6 text-[#314B8C]">AI & ML SOLUTIONS WE OFFER</h2>
      <p className="text-lg mb-10 max-w-3xl">
        With a well-equipped team that is dedicated to delivering excellence by
        incorporating AI/ML solutions and making sure that your project achieves
        the necessary success
      </p>
      <div className="grid md:grid-cols-2 gap-10 ">
        {services.map((service, index) => (
          <div key={index} className="border-b-1 border-[#ccc] hover:border-[#405EA9] items-center pb-10">
            <h3 className="text-xl font-bold pb-2 text-[#314B8C]">{service.title}</h3>
            <p className="pb-3 ">{service.description}</p>
            <p className="font-semibold pb-1 ">Application:</p>
            <ul className="list-disc list-inside space-y-1 text-sm ">
              {service.applications.map((app, i) => (
                <li key={i}>{app}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default GridBordBase