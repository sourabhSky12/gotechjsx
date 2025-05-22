import React from 'react'
import StatsSection from '../../../components/common/StatsSection'

const Contact = () => {
   const stats = [
   { value: 200, label: "specialist globally", suffix: "+" },
  { value: 5, label: "offices worldwide" },
    { value: 7, label: "different time-zones" },
   { value: 8, label: "of expertise in business ", suffix: " years" },
 ];

 const content = {
   heading: "CONTACT US",
  subheading:
    "Our talented team of experts is here to serve you with the excellence that you need for the exponential growth of your business. We custom-tailor digital solutions based on your unique needs and preferences for you to strive in the competitive digital landscape.",
 };
  return (
   <>
   
   <StatsSection stats={stats} content={content}/>
   
   
   </>
  )
}

export default Contact