import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";
import DarkMode from "../utils/DarkMode";

// home page header that will used only for home page

const Header = () => {
  return (
    <div className="flex justify-end p-3 mx-2 text-sm items-center space-x-2">
      <Link href={`https://mail.google.com`} className="hover:underline">
        Gmail
      </Link>
      <Link href={`https://image.google.com`} className="hover:underline">
        Images
      </Link>
      <DarkMode />
      <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full cursor-pointer text-4xl p-2 dark:hover:bg-gray-600" />
      <button className="bg-blue-600 text-white px-4 py-2 font-bold rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
        Sign in
      </button>
    </div>
  );
};

export default Header;
