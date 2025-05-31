import React from 'react'
import CountUp from "react-countup";

const HomeNumbSec = () => {
    const numb =[
    { number: 200, label: "Projects" },
    { number: 5, label: "Years of Experience" },
    { number: 70, label: "Happy Clients" },];
  return (
   <>
    <div className="flex flex-row sm:flex-row justify-between text-center mt-8 gap-6 sm:gap-0">
      {numb.map((stat, index) => (
        <div key={index} className="flex-1">
          <h1 className="text-3xl text-blue-800 font-bold">
            <CountUp end={stat.number} duration={2} />
          </h1>
          <p className="text-blue-950 font-semibold">{stat.label}</p>
        </div>
      ))}
    </div>
   
   
   </>
  )
}

export default HomeNumbSec