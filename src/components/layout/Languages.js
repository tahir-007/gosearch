import React from "react";

// Todo use Google Translate API to fetch the translation
const Languages = () => {
  return (
    <>
      <div className="flex justify-center pt-12 pb-4 dark:text-gray-400">
        <ul>
          <li>Search Offered In</li>
        </ul>
      </div>
      <div className="flex flex-col text-blue-800 sm:flex-row justify-between items-center sm:space-y-0">
        <ul className="flex sm:hidden items-center space-x-5">
          <li className="cursor-pointer ">हिन्दी</li>
          <li className="cursor-pointer ">मराठी</li>
          <li className="cursor-pointer ">বাংলা</li>
          <li className="cursor-pointer ">తెలుగు</li>
        </ul>
        <ul className="flex sm:hidden items-center space-x-5 my-">
          <li className="cursor-pointer ">मराठी</li>
          <li className="cursor-pointer ">தமிழ்</li>
          <li className="cursor-pointer ">ગુજરાતી</li>
        </ul>
        <ul className="hidden sm:flex w-screen justify-center sm:cursor-pointer space-x-4">
          <li className="link">हिन्दी</li>
          <li className="link">मराठी</li>
          <li className="link">বাংলা</li>
          <li className="link">తెలుగు</li>
          <li className="link">मराठी</li>
          <li className="link">தமிழ்</li>
          <li className="link">ગુજરાતી</li>
        </ul>
      </div>
    </>
  );
};

export default Languages;
