import React from "react";
import axios from "axios";
import GetLocation from "@/components/GetLocation";

// home page footer.

const Footer = () => {
  const getIp = () => {
    const response = axios.get("https://ipapi.co/json/");
    const data = response.data;
  };
  return (
    <footer className="absolute w-screen bottom-0 text-xs md:text-sm text-gray-800 bg-gray-100">
      <div className="flex justify-center sm:justify-start border-b px-8 py-3">
        <ul>
          <li>
            <GetLocation />
          </li>
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Business</li>
          <li className="link">How Search Works</li>
        </ul>
        <ul className="flex items-center space-x-6">
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Settings</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
