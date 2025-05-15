
 import StatsSection from '../../components/common/StatsSection'
 import IconTopCard from '../../components/common/IconTopCard'
 import CallToAction from '../../components/common/CallToAction'

const Techstack = () => {
 
const techstackData = [
  {
    title: 'BUSINESS-ORIENTED PERSONALIZATION',
    description:
     ' We offer comprehensive software solutions that are custom-developed to your specific educational institution’s requirements',
    // highlight: 'custom Software Development Company in Udaipur.',
    icon: '👤',
  },
  {
    title: 'OPTIMIZED PERFORMANCE AND FLEXIBILITY',
    description:
      'Explore the expertise of our professionals, offering high-quality performance and scalability in the software solutions offered for the educational industry.',
    icon: '🎯',
  },
  {
    title: "INDUSTRIES' EXPERTISE:",
    description:
      'We partner with updated technology tools to elevate performance and drive sales. We make use of AI, forecasting analytics, and data analytics for effective operations in the educational sector.',
    // highlight: 'Software Development company in Udaipur',
    icon: '🛡️',
  },
  {
    title: 'ADHERENCE TO REGULATORY COMPLIANCE AND SECURITY',
    description:
      'At Go InfoTech, we value your credibility, which is why we prioritize security in our software solutions while simultaneously focusing on regulatory compliance in the educational industry norms.',
    icon: '📋',
  },
  
  {
    title: 'FACILITATING SCALABILITY AND INTEGRATION',
    description:
      'We offer scalable solutions for facilitating seamless user interaction with academic professionals and offering a compatible and interactive interface.',
    icon: '⚙️',
  },

  {
    title: 'EFFECTIVE SUPPORT AND REAL-TIME MAINTENANCE',
    description:
      'We believe in offering real-time support and teacher assistance while paying deliberate attention to their unique needs and requirements in the educational sector.',
    icon: '🌐',
  },
];

const stats = [
  { value: 60, label: "projects delivered successfully", suffix: "+" },
  { value: 8, label: "of expertise in business", suffix: "+" },
  { value: 7, label: "were willing to refer Go InfoTech", decimals: 1, suffix: "/9 clients" },
  { value: 20, label: "experienced specialists worldwide", suffix: "+" },
];

const content = {
  heading: "OUR TECH STACK",
  subheading:
    "Explore the blend of technologies we harness to turn challenging tasks into successful projects.",
};




  return (
    
      <>
    <StatsSection stats={stats} content={content}/>
    <IconTopCard servicesData={techstackData}/>
    <CallToAction/>
    
    </>
  );
}

export default Techstack
