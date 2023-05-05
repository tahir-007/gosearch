import React from "react";
import axios from "axios";
import GetLocation from "@/components/utils/GetLocation";

// home page HomeFooter.

const HomeFooter = () => {
  const getIp = () => {
    const response = axios.get("https://ipapi.co/json/");
    const data = response.data;
  };
  return (
    <div className="absolute w-screen bottom-0 text-sm md:text-md text-gray-800 bg-gray-100 dark:bg-gray-950 dark:text-gray-400">
      <div className="flex justify-center sm:justify-start border-b dark:border-gray-500 px-8 py-3">
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

export default HomeFooter;
