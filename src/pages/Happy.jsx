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