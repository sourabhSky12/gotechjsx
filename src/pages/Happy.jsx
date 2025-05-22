import React from 'react'
import CallToAction from '../components/common/CallToAction';
import BluePart from '../components/common/BluePart';
import GridBordBase from '../components/common/GridBordBase';
import GridBlueBaseBord from '../components/common/GridBlueBaseBord';
import GridBlueCard from '../components/common/GridBlueCard';
import GridRightStatsCard from '../components/common/GridRightStatsCard';
import BoxBaseBord from '../components/common/BoxBaseBord';
import IconTopCard from '../components/common/IconTopCard';
import StatsSection from '../components/common/StatsSection';
import ServicesStartCount from '../components/common/ServicesStartCount';
import SoftwareProvide from '../components/common/SoftwareProvide';

const Happy = () => {
     const handleInfoClick = () => {
    // Trigger modal, redirect, or alert
    console.log('Button clicked!');
  };
  const blueBaseData = [
  {
    title: "PHP Staff Augmentation and Dedicated Teams",
    description:
      "You can flexibly augment the team of PHP developers with assistance at Go InfoTech, to ensure seamless integration into your workflow. PHP staff augmentation with a dedicated team that adheres to internal protocols and delivers excellence.",
  },
  {
    title: "PHP Web & Mobile Development",
    description:
      "Our experts and developers are dedicated to crafting a dynamic platform with interactive custom solutions making use of PHP to craft a seamless user experience.",
  },
  {
    title: "PHP-Based CMS Development",
    description:
      "We develop a Content Management System that is secure, scalable and functional while making use of PHP solutions, allowing you to retain full control over the web content.",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Experts at Go InfoTech are committed to develop a feature-rich and functional e-commerce platform that attracts potential customers and accelerates sales.",
  },
  {
    title: "API Integration & Development",
    description:
      "Our team excels at integrating APIs and developing custom APIs in PHP, harnessing a seamless data flow between several software systems.",
  },
  {
    title: "PHP Migration and Upgrade",
    description:
      "We offer smooth PHP migration and upgrade services, allowing you to remain current with the latest PHP versions and ensuring optimal performance of your applications.",
  },
];
  return (
   <>
 <CallToAction
      title="READY TO START YOUR DIGITAL TRANSFORMATION JOURNEY?"
      subtitle="With our innovative and industry-proven services, we’ll help you unlock new growth opportunities."
      buttonText="GET INFO"
      onClick={handleInfoClick}
    />
    
    <SoftwareProvide/>
    <BluePart/>
    <StatsSection/>
    <GridBordBase/>
    <GridBlueBaseBord/>
    <GridBlueCard/>
    <GridRightStatsCard/>
    <BoxBaseBord/>
    <IconTopCard/>
    <ServicesStartCount/>

   
       <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>


    
   </>
  )
}

export default Happy