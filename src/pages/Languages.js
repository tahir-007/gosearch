import React from "react";

// Todo use Google Translate API to fetch the translation
const Languages = () => {
  return (
    <>
      <div className="flex justify-center text-xs pt-12 pb-4">
        <ul>
          <li>Search Offered In</li>
        </ul>
      </div>
      <div className="flex flex-col text-xs text-blue-800 sm:flex-row justify-between items-center cursor-pointer sm:space-y-0">
        <ul className="flex sm:hidden items-center space-x-4">
          <li className="link">हिन्दी</li>
          <li className="link">मराठी</li>
          <li className="link">বাংলা</li>
          <li className="link">తెలుగు</li>
        </ul>
        <ul className="flex sm:hidden items-center space-x-4 my-2">
          <li className="link">मराठी</li>
          <li className="link">தமிழ்</li>
          <li className="link">ગુજરાતી</li>
        </ul>
        <ul className="hidden sm:flex w-screen justify-center space-x-4">
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
