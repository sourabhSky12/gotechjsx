import React from 'react'

const GridBlueBaseBord = ({blueBaseData,headings}) => {
  return (
    <>
     <section className="bg-blue-900 text-white  px-4 md:px-15 py-12">
      <div className="max-w-7xl mx-auto sm:px-15 ">
        <h2 className="text-3xl md:text-4xl font-bold pb-10 ">
          {headings}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {blueBaseData.map((service, index) => (
            <div key={index} className="border-b border-white/30 items-center pb-8">
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-white text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default GridBlueBaseBord