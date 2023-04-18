import React from "react";
import axios from "axios";
import GetLocation from "@/components/utils/GetLocation";

// home page WebSearchFooter.

const Footer = () => {
  return (
    <div className="relative text-gray-800 bg-gray-100 mt-10 bottom-0 w-full">
      <div className="flex justify-center sm:justify-start border-b px-8 py-3">
        <ul>
          <li>
            <GetLocation />
          </li>
        </ul>
      </div>
      <div className="flex flex-col text-sm sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Business</li>
        </ul>
        <ul className="flex items-center space-x-6">
          <li className="link">© 2023 Tahir Patel. All rights reserved.</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
