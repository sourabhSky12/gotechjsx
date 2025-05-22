import "./index.css";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Sservices from "./pages/services/Sservices";
import Techstack from "./pages/techstack/Techstack";
import Company from "./pages/company/Company";
import Projects from "./pages/projects/Projects";
import Industries from "./pages/industries/Industries";
import Java from "./pages/techstack/techstack_pages/back_end/Java";
import Net from "./pages/techstack/techstack_pages/back_end/Net";
import Node from "./pages/techstack/techstack_pages/back_end/Node";
import Php from "./pages/techstack/techstack_pages/back_end/Php";
import Python from "./pages/techstack/techstack_pages/back_end/Python";
import Reactt from "./pages/techstack/techstack_pages/front_end/Reactt";
import Angular from "./pages/techstack/techstack_pages/front_end/Angular";
import Andriod from "./pages/techstack/techstack_pages/mobile/Andriod";
import Flutter from "./pages/techstack/techstack_pages/mobile/Flutter";
import Ios from "./pages/techstack/techstack_pages/mobile/Ios";
import ReactNative from "./pages/techstack/techstack_pages/mobile/ReactNative";
import AllServices from "./pages/services/AllServices";
import Blogs from "./pages/company/company_pages/Blogs";
import Contact from "./pages/company/company_pages/Contact";
import ReferralProgram from "./pages/company/company_pages/ReferralProgram";
import AboutUs from "./pages/company/AboutUs";
import Automotive from "./pages/industries/industries_pages/Automotive";
import Ecomm from "./pages/industries/industries_pages/Ecomm";
import Fintech from "./pages/industries/industries_pages/Fintech";
import Healthcare from "./pages/industries/industries_pages/Healthcare";
import MediaEntertain from "./pages/industries/industries_pages/MediaEntertain";
import AllIndustries from "./pages/industries/AllIndustries";
import StaffAug from "./pages/services/services_pages/staf_aug/StaffAug"
import CloudDevOpsServ from "./pages/services/services_pages/managed_it_serv/CloudDevOpsServ";
import DiscoveryPhase from "./pages/services/services_pages/It_consulting/DiscoveryPhase";
import AiMlDev from "./pages/services/services_pages/intel_auto/AiMlDev"
import DigitalMarketingServices from "./pages/services/services_pages/intel_auto/DigitalMarketingServices"
import Ppc from "./pages/services/services_pages/intel_auto/Ppc"
import SearchEngineOptimization from "./pages/services/services_pages/intel_auto/SearchEngineOptimization"
import SmoSmm from "./pages/services/services_pages/intel_auto/SmoSmm"
import AndroidAppDev from "./pages/services/services_pages/cust_soft_dev/AndroidAppDev"
import CrossPlatformAppDev from "./pages/services/services_pages/cust_soft_dev/CrossPlatformAppDev"
import MobileAppDev from "./pages/services/services_pages/cust_soft_dev/MobileAppDev"
import StartupMvpDev from "./pages/services/services_pages/cust_soft_dev/StartupMvpDev"
import WebDev from "./pages/services/services_pages/cust_soft_dev/WebDev"


function App() {
  return (
    <>
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/automotive" element={<Automotive />} />
          <Route path="/industries/ecomm" element={<Ecomm />} />
          <Route path="/industries/fintech" element={<Fintech />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route
            path="/industries/mediaentertain"
            element={<MediaEntertain />}
          />
          <Route path="/industries/allindustries" element={<AllIndustries />} />

          <Route path="/tech-stack" element={<Techstack />} />

          <Route path="/techstack/java" element={<Java />} />
          <Route path="/techstack/net" element={<Net />} />
          <Route path="/techstack/node" element={<Node />} />
          <Route path="/techstack/php" element={<Php />} />
          <Route path="/techstack/python" element={<Python />} />
          <Route path="/techstack/angular" element={<Angular />} />
          <Route path="/techstack/react" element={<Reactt />} />
          <Route path="/techstack/anderiod" element={<Andriod />} />
          <Route path="/techstack/flutter" element={<Flutter />} />
          <Route path="/techstack/ios" element={<Ios />} />
          <Route path="/techstack/reactnative" element={<ReactNative />} />
          <Route path="/techstack/allservices" element={<AllServices />} />

          <Route path="/company" element={<Company />} />
          <Route path="/company/blogs" element={<Blogs />} />
          <Route path="/company/contact" element={<Contact />} />
          <Route
            path="/company/referralprogram"
            element={<ReferralProgram />}
          />
          <Route path="/company/aboutus" element={<AboutUs />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/services" element={<Sservices />} />
          <Route path="/services/androidappdev" element={<AndroidAppDev/>} />
          <Route path="/services/crossplatformdev" element={<CrossPlatformAppDev/>} /> 
          <Route path="/services/mobileappdev" element={<MobileAppDev/>} /> 
          <Route path="/services/startupmvpdev" element={<StartupMvpDev/>} />
          <Route path="/services/webdev" element={<WebDev/>} />
          <Route path="/services/aimldev" element={<AiMlDev/>}/>
          <Route path="/services/digitalmarketingserv" element={<DigitalMarketingServices/>} />
          <Route path="/services/ppc" element={<Ppc/>} />
          <Route path="/services/searchengineoptimization" element={<SearchEngineOptimization/>} />
          <Route path="/services/smosmm" element={<SmoSmm/>} />
          <Route path="/services/discoveryphase" element={<DiscoveryPhase/>} />
          <Route path="/services/clouddevopsserv" element={<CloudDevOpsServ/>} />
          <Route path="/services/staffag" element={<StaffAug/>} />
          
            
          

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
