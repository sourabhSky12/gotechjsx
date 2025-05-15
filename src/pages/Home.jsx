import React from 'react'
import CallToAction from '../components/common/CallToAction'
import BluePart from '../components/common/BluePart'

const Home = () => {
  return (
    <>
    {/* Starting Part */}

<div className="flex flex-col lg:flex-row mt-12 pl-4 w-full lg:px-40 overflow-hidden  ">
  {/* Text + Button + Stats */}
  <div className="flex-1 flex flex-col  ">
    <div className="mb-6 pl-10 lg:pl-0">
      <h1 className="text-4xl sm:text-5xl text-[#405EA9] font-bold">SOFTWARE</h1>
      <h1 className="text-4xl sm:text-5xl text-[#405EA9] font-bold">DEVELOPMENT</h1>
      <h1 className="text-4xl sm:text-5xl text-[#405EA9] font-bold">COMPANY</h1>

      <p className="text-lg text-[#405EA9] mt-4">
        We take pride in announcing that we are the leading{" "}
        <span className="underline text-blue-900 font-semibold">
          Software Development Company in Udaipur
        </span>{" "}
        providing comprehensive IT Solutions to your Digital needs.
      </p>
    </div>

    <div className="pt-6 flex justify-center sm:justify-start">
      <button 
        type="button"
        className="focus:outline-none  text-white  bg-[#ED8628] hover:bg-[#FFDBA1] focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-base px-8 py-4 dark:focus:ring-yellow-900 w-100 sm:w-50 "
      >
        <b>GET IN TOUCH</b>
      </button>
    </div>

    

    {/* Stats Cards */}
    <div className="flex flex-row sm:flex-row justify-between text-center mt-8 gap-6 sm:gap-0">
      <div className="flex-1">
        <h1 className="text-3xl text-blue-800 font-bold">200</h1>
        <p className="text-blue-950 font-semibold">Projects</p>
      </div>
      <div className="flex-1">
        <h1 className="text-3xl text-blue-800 font-bold">5</h1>
        <p className="text-blue-950 font-semibold">Years of Experience</p>
      </div>
      <div className="flex-1">
        <h1 className="text-3xl text-blue-800 font-bold">70</h1>
        <p className="text-blue-950 font-semibold">Happy Clients</p>
      </div>
    </div>
  </div>

  {/* Image Section */}
  <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0">
    <img className="max-w-full h-auto object-contain" src="/spw.png" alt="spw image" />
  </div>
</div>

{/* Call to action part */}

<CallToAction/>
<BluePart/>

    </>
  )
}

export default Home