import React from 'react'

const RightSideTextDesc = ({ heading, subheading }) => {
  
  return (
    <>
    
     <section className= "bg-white w-full mt-10 py-20 px-4 md:px-20 lg:px-40 lg:w-2/3">
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
          {heading}
        </h1>
        <p className="text-base md:text-lg text-blue-800 max-w-3xl mx-auto md:mx-0">
          {subheading}
        </p>
      </div>
    </section>
    
    </>
  )
}

export default RightSideTextDesc