import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
   
const stats = [
  { value: 30, suffix: "+", label: "projects delivered successfully", isCountable: true },
  { value: 80, suffix: "+", label: "specialists globally", isCountable: true },
  { value: 8, suffix: " years", label: "expertise in business", isCountable: true },
  { value: 35, suffix: " %", label: "clients request additional services within 3 months of collaboration.", isCountable: true },
  {
    value: 7,
    suffix: " out of 9 clients",
    label: "were willing to recommend Go InfoTech",
    isCountable: true,
  },
  { value: 60, suffix: "+", label: "verified reviews on Google", isCountable: true },
];
const GridRightStatsCard = () => {
 
 

const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });


  return (
   <>
    <div className="sm:px-10 py-15 max-w-7xl mx-auto px-2">
      <h2 className="text-3xl font-bold text-blue-900 pb-15">ABOUT GO-TECH SOLUTION</h2>
      <div className="flex flex-col sm:flex-row">
        
        <div className="space-y-4 sm:pr-10 text-lg sm:flex-1/2 text-blue-900">
          <p>
            We are a leading <strong>Custom Software Development Company in Udaipur</strong> providing functional and efficient 
            software solutions that will enhance your visibility in the intricate tapestry of digitalization.
            We focus on elevating the user experience by providing exponential services. As a well-known <strong>Digital
            Marketing Company in Udaipur</strong>, we excel at delivering exponential services that will help users engage with
            your website and further the exponential growth of your business. We incorporate meticulously strategized IT solutions,
            along with <strong>SEO Services in Udaipur</strong>. At Go InfoTech Solution, a trusted <strong>Software Development company in Udaipur</strong>, 
            be prepared to experience excellence with our team of skilled professionals who are dedicated to driving competitive 
            advantages for your business by crafting user-friendly interfaces backed by data-driven UX strategies. 
          </p>
          <p>
            As a prominent <strong>Web Development company in Udaipur</strong>, we believe in crafting an effective software solution that goes beyond mere aesthetics, 
            seamlessly integrating functionality with an elevated user experience. Our talented team of developers, designers, content writers,
            and UX specialists work closely to create intuitive interfaces that engage users and drive meaningful interactions.
          </p>
        </div>

        {/* Vertical divider */}
        <div className="invisible sm:visible inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>

        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 sm:pl-10 sm:flex-1/2">
          {stats.map((item, index) => (
            <div key={index} className="bg-blue-900 p-6 rounded-xl shadow-md">
              <div className="text-2xl font-bold mb-2 text-orange-500">
                {item.isCountable && inView ? (
                  <>
                    <CountUp end={item.value} duration={2} />
                    {item.suffix}
                  </>
                ) : (
                  item.isCountable ? `${item.value}${item.suffix}` : item.value
                )}
              </div>
              <div className="text-white text-lg">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
   
   </>
  )
}

export default GridRightStatsCard