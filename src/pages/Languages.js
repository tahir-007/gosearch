import React from "react";

// Todo use Google Translate API to fetch the translation
const Languages = () => {
  return (
    <div className="flex justify-center mt-14">
      <div className="flex justify-center">
        <span className="mr-2 text-xs">Languages</span>
        <ul className="flex space-x-2 text-xs text-blue-800 underline cursor-pointer">
          <li>हिन्दी</li>
          <li>বাংলা</li>
          <li>తెలుగు</li>
          <li>मराठी</li>
          <li>தமிழ்</li>
          <li>ગુજરાતી</li>
          <li>ಕನ್ನಡ</li>
          <li>മലയാളം</li>
          <li>ਪੰਜਾਬੀ</li>
        </ul>
      </div>
    </div>
  );
};

export default Languages;
