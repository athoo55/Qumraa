import React from 'react';
import { FaTelegramPlane, FaWhatsapp, FaInstagram, FaEnvelope, FaPhone} from 'react-icons/fa';
import { BsFillCameraReelsFill } from "react-icons/bs";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-yellow-300 text-black py-8 mt-10">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-xl"><FaTelegramPlane/></a>
          <a href="https://www.instagram.com/0.1ado?igsh=dHR6MXg1MnMyM3Zl" className="text-xl"><FaInstagram /></a>
          <a href="#" className="text-xl"><FaWhatsapp /></a>
        </div>
        <div className="text-center mb-4">
          <div className="flex justify-center space-x-4 mb-2">
            <FaEnvelope className="text-xl" />
            <span>dhwdhwra@gmail.com</span>
          </div>
          <div className="flex justify-center space-x-4">
            <FaPhone className="text-xl" />
            <span>07744898857</span>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border-2 border-yellow-500 rounded-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border-2 border-yellow-500 rounded-full"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border-2 border-yellow-500 rounded-xl"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className="bg-black w-full text-white p-2 rounded-full hover:bg-yellow-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        
        
        <div className="mt-8 flex justify-end items-end">
          <button
            onClick={scrollToTop}
            className="text-4xl text-black hover:text-yellow-600 transition duration-300"
            aria-label="Scroll to top"
          >
            <BsFillCameraReelsFill />
          </button>
        </div>
        <p className="text-sm mt-8">&copy; 2024 Qumra. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
