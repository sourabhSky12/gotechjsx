import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import BlueForm from "../forms/BlueForm";
import ContactSection from "../common/ContactSection";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <ContactSection/>
    <BlueForm/>
    <footer className="bg-[#1e3a8a] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-8">
        {/* Logo and Copyright */}
        <div>
          <img className="w-20 h-20" src="/Logo.webp" alt="go icon"/>
          {/* <h2 className="text-xl font-bold mb-2">GO TECH SOLUTION</h2> */}
          <p className="pt-3">© 2024 Go-tech Solution Inc. All Rights Reserved.</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">SERVICES</h3>
          <ul className="space-y-2 text-sm">
            <Link to='/cloud-devops-services' className="block"><li>Cloud & DevOps Services</li></Link>
            <Link to='/services/aimldev' className="block"><li>AI & ML Development</li></Link>
            <Link to='/services/aimldev' className="block"><li>UI/UX Design</li></Link>
            <Link to='/industries/ecomm' className="block"><li>E-Commerce App Development</li></Link>
            <Link to='/services/crossplatformdev' className="block"><li>Cross-Platform App Development</li></Link>
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="font-semibold mb-3">TECH STACK</h3>
        
          <ul className="space-y-2 text-sm columns-2 ">
          <Link to='/techstack/angular' className="block"><li>Angular</li></Link>
          <Link to='/techstack/node' className="block">  <li>Node</li></Link>
          <Link to='/techstack/net' className="block">  <li>.NET</li></Link>
          <Link to='/techstack/python' className="block">  <li>Python</li></Link>
          <Link to='/techstack/ios' className="block">  <li>iOS  </li></Link>
          <Link to='/techstack/react' className="block">  <li>React </li></Link>
          <Link to='/' className="block">  <li>Rails  </li></Link>
          <Link to='/techstack/reactnative' className="block">  <li>React Native</li></Link>
          <Link to='/techstack/php' className="block">  <li>PHP</li></Link>
          <Link to='/techstack/java' className="block">  <li>Java</li></Link>
          <Link to='/techstack/anderiod' className="block">  <li>Android</li></Link>
          <Link to='/techstack/flutter' className="block">  <li>Flutter</li></Link>
          
          </ul>
         
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-3">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <Link to='/' className="block"><li>Home</li></Link>
            <Link to='/services' className="block"><li>Services</li> </Link>          
            <Link to='/company/contact' className="block"><li>Contact</li></Link>
            <Link to='/company/contact' className="block"><li>About Us</li></Link>
            <Link to='/tech-stack' className="block"><li>Technologies</li></Link>
            <Link to='/' className="block"><li>Blogs</li></Link>
            
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">CONTACTS</h3>
          <ul className="text-sm space-y-2">
            <li>Email: career@go-techsolution.com</li>
            <li>Phone: +91-8769365375</li>
            <li>
              Address: 515-517, 5th Floor, Amrit Shree, University Road, Udaipur,
              Rajasthan 313001
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
          <Link to="https://www.facebook.com/GoTechSolution05">  <FaFacebookF className="hover:text-gray-300 cursor-pointer " /></Link>
          <Link to="https://www.instagram.com/gotech_solution/"> <FaInstagram className="hover:text-gray-300 cursor-pointer" /> </Link> 
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
           <Link to="https://www.youtube.com/@Gotechsolution">   <FaYoutube className="hover:text-gray-300 cursor-pointer" /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 text-sm border-t border-white/20 pt-4">
        © 2025 Go-tech Solution Inc. All Rights Reserved.
      </div>
    </footer>
    
    </>
  );
};

export default Footer;