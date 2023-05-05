import { useState, useEffect } from "react";
import {
  AiOutlineSearch,
  AiOutlineCamera,
  AiOutlineGlobal,
} from "react-icons/ai";

import { GiNewspaper } from "react-icons/gi";
import { MdSlowMotionVideo } from "react-icons/md";

const SearchTypeHeader = ({ query, asPath }) => {
  return (
    <ul className="flex space-x-3 border-b py-2 items-center text-gray-600 dark:text-gray-200 md:w-8/12 md:mx-52 ">
      <li
        className={`flex items-center cursor-pointer ${
          asPath === "/web" ? "border-b-2 border-blue-700" : ""
        }`}
        onClick={() => window.location.assign(`/web?q=${query}`)}
      >
        <AiOutlineGlobal className="text-xl text-blue-500 mx-1 " />
        <span>Web</span>
      </li>
      <li
        className={`flex items-center cursor-pointer ${
          asPath === "/news" ? "border-b-2 border-blue-700" : ""
        }`}
        onClick={() => window.location.assign(`/news?q=${query}`)}
      >
        <GiNewspaper className="text-xl text-blue-500 mx-1" />
        <span>News</span>
      </li>
      <li
        className={`flex items-center cursor-pointer ${
          asPath === "/images" ? "border-b-2 border-blue-700" : ""
        }`}
        onClick={() => window.location.assign(`/images?q=${query}`)}
      >
        <AiOutlineCamera className="text-xl text-blue-500 mx-1" />
        <span>Images</span>
      </li>
      <li
        className={`flex items-center cursor-pointer ${
          asPath === "/videos" ? "border-b-2 border-blue-700" : ""
        }`}
        onClick={() => window.location.assign(`/videos?q=${query}`)}
      >
        <MdSlowMotionVideo className="text-xl text-blue-500 mx-1" />
        <span>Videos</span>
      </li>
    </ul>
  );
};

export default SearchTypeHeader;
