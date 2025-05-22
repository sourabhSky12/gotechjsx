import React from 'react'
import StatsSection from '../../../components/common/StatsSection'
import BoxBaseBord from '../../../components/common/BoxBaseBord'
import GridBlueCard from '../../../components/common/GridBlueCard'
import CardGridHovBase from '../../../components/common/CardGridHovBase'
import { DollarSign, Lightbulb, Lock } from 'lucide-react';
import CardMethodologyBase from '../../../components/common/CardMethodologyBase'
const ReferralProgram = () => {
   const stats = [
   { value: 150, label: "mobile development experts", suffix: "+" },
   { value: 7, label: "are satisfied with our services",  suffix: "/7+ " },
  { value: 3, label: "in business ", suffix: "+ years" },
  { value: 70, label: "qualified employes within the team", suffix: "+" },
 
   
 ];

 const content = {
   heading: "REFERRAL PROGRAM",
  subheading:
    "Join our Referral Program and help others find our world-class services while reaping the rewards.",
 };
 const cardData = [
  {
    title: '10% REFERRAL COMMISSION',
    description: 'With an average project budget of around $150,000, your commission will be approximately $15,000.',
  },
  {
    title: 'PAYMENT PROCESS',
    description: 'You will receive your payment once we have collected it from the client.',
  },
  {
    title: 'QUALITY ASSURANCE',
    description: 'Our services are guaranteed to be of the highest quality, protecting your reputation.',
  },
  {
    title: 'ZERO FINANCIAL RISK',
    description: 'No financial investments or program fees are required, ensuring a worry-free experience.',
  },
  
];
const webdevDataBlue = [
  {
    title: "FINANCET",
    description:
      "Empowering the financial sector by incorporating the expertise of Software Development company in Udaipur to enhance the security and efficiency of the services.",
  },
  {
    title: "HEALTHCARE",
    description:
      "We offer cutting-edge solutions for healthcare by making use of managed IT services at web Development company in Udaipur and digital health technologies.",
  },
  {
    title: "MEDIA & ENTERTAINMENT",
    description:
      "Robust IT Solutions at Digital Marketing Company in Udaipur offering innovative solutions for digital platforms along with SEO Services in Udaipur.",
  },
  {
    title: "AUTOMOTIVE",
    description:
      "Dedicated experts providing advanced IT Solutions by making use of innovative and effective solutions for the automotive industry offering operational efficiency.",
  },
   {
    title: "EDUCATION",
    description:
      "Leveraging the excellence of our IT Company in Udaipur to empower educational institutions with digital assistance by our professionals.",
  },
   {
    title: "E-COMMERCE",
    description:
      "Ensuring that the website generates enhanced customer engagement and optimizes user experience Digital Marketing Agency in Udaipur generating higher sales.",
  },
   {
    title: "GIS",
    description:
      "Accurate data visualization and incorporation of geospatial data for designing advanced Geographic Information Systems at a Web Development company in Udaipur.",
  },
  
];
const methodologyData = [
  {
    icon: <DollarSign size={20} />,
    title: 'CURRENT OR FORMER CLIENT',
    },
  {
    icon: <Lightbulb size={20} />,
    title: 'STARTUP CONSULTING FIRMS',
     },
  {
    icon: <Lock size={20} />,
    title: 'INDIVIDUAL CONSULTANT',
    },
     {
    icon: <DollarSign size={20} />,
    title: 'SALES PROFESSIONAL',
    },
  {
    icon: <Lightbulb size={20} />,
    title: 'DESIGN STUDIO',
     },
  {
    icon: <Lock size={20} />,
    title: 'DEVELOPMENT COMPANY',
    },
     {
    icon: <DollarSign size={20} />,
    title: 'MARKETING AGENCY',
    },
  {
    icon: <Lightbulb size={20} />,
    title: 'YOU’VE JUST FOUND OUR COMPANY!',
     },
 
];
  return (
   <>
   
   <StatsSection stats={stats} content={content}/>
     <CardMethodologyBase
     heading="WHO MIGHT BE SUITABLE FOR THE PROGRAM"
        items={methodologyData}
        bgColor="bg-[#284181]"
        cardColor="bg-[#284181]"
        textColor="text-white"
        iconColor="bg-white/10"
        cardhov="hover:bg-[#405EA9]"
        columns = 'grid-cols-2 md:grid-cols-4'
        
  />
    <CardGridHovBase
   
   heading="WHAT WE OFFER TO YOU AS A REFERRAL PARTNER"
        cards={cardData}
        bgColor="bg-white"
        cardBgColor="bg-white"
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
   
   />
   <GridBlueCard
    
    title="INDUSTRIES Go InfoTech SOLUTION SERVES:"
    industries={webdevDataBlue}
     columns={3} 
    
   />
   
   </>
  )
}

export default ReferralProgram