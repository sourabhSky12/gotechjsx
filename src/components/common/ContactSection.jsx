// ContactSection.jsx
import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const ContactSection = () => {
  return (
    <section className="bg-white px-6 py-12 md:px-40 mb-10">
      

      <div className="flex flex-col md:flex-row justify-between items-start gap-10 h-fit">

      

        {/* Map Embed */}
        <div className="w-full md:w-1/2 h-96">
        <h2 className="text-3xl font-bold  mb-10">TELL US ABOUT YOUR NEEDS</h2>
          <iframe
            title="Go-Tech Solution Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.1711346506365!2d73.69700817482665!3d24.8697788454218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5e6e92db40f%3A0x34e9b0c7bb6ac812!2sGo-Tech%20Solution!5e0!3m2!1sen!2sin!4v1715165919924!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 space-y-4">
        <h4 className="pb-10 text-blue-900 invisible sm:visible">Just fill out the form or contact us via email or phone:</h4>
          <p className="flex items-center text-lg font-bold"><FaEnvelope className="mr-2 " /> <a href="mailto:projects@go-techsolution.com">projects@go-techsolution.com</a></p>
          <p className="flex items-center text-lg font-bold"><FaEnvelope className="mr-2" /> <a href="mailto:career@go-techsolution.com">career@go-techsolution.com</a></p>
          <p className="flex items-center text-lg font-bold"><FaPhone className="mr-2" /> +91-8769365375</p>
          <p className="flex items-center text-lg font-bold"><FaMapMarkerAlt className="mr-2" /> 515-517, 5th Floor, Amrit Shree, University Road, Udaipur, Rajasthan 313001</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-2xl">
          <Link to="https://www.facebook.com/GoTechSolution05">  <FaFacebook className="hover:text-blue-600 cursor-pointer" /></Link>
          <Link to="https://www.instagram.com/gotech_solution/">  <FaInstagram className="hover:text-pink-500 cursor-pointer" /></Link>
            <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
           <Link to="https://www.youtube.com/@Gotechsolution"> <FaYoutube className="hover:text-red-600 cursor-pointer" /> </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
