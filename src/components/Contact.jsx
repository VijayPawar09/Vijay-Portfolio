import React from "react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="w-full px-4 py-10 flex flex-col items-center justify-center gap-10">
      {/* First Row: Address & Socials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Address */}
        <div className="text-center space-y-3 border border-indigo-500 rounded-2xl px-6 py-6 shadow-md shadow-indigo-800/20">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">Address</h2>
          <p className="text-gray-400 text-2xl md:text-3xl font-medium">
            Pune, Maharashtra
          </p>
        </div>

        {/* Social Profiles */}
        <div className="text-center space-y-3 border border-indigo-500 rounded-2xl px-6 py-6 shadow-md shadow-indigo-800/20">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">Social Profiles</h2>
          <ul className="flex justify-center gap-6 pt-2 text-3xl">
            <li className="text-blue-500 hover:scale-110 transition-transform duration-300">
              <a href="https://www.linkedin.com/in/vijay-a-pawar/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
              </a>
            </li>
            <li className="text-orange-500 hover:scale-110 transition-transform duration-300">
              <a href="https://github.com/VijayPawar09" target="_blank" rel="noopener noreferrer">
                <BsGithub />
              </a>
            </li>
            <li className="text-red-500 hover:scale-110 transition-transform duration-300">
              <a href="https://x.com/VijayPawar61855" target="_blank" rel="noopener noreferrer">
                <BsTwitterX />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Second Row: Email & Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Email */}
        <div className="text-center space-y-3 border border-indigo-500 rounded-2xl px-6 py-6 shadow-md shadow-indigo-800/20">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">Email</h2>
          <p className="text-gray-400 text-2xl font-medium">vijayp8477@gmail.com</p>
        </div>

        {/* Contact */}
        <div className="text-center space-y-3 border border-indigo-500 rounded-2xl px-6 py-6 shadow-md shadow-indigo-800/20">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">Contact</h2>
          <p className="text-gray-400 text-2xl font-medium">+91 84599-35504</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
