import { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
import FetchData from "@/components/FetchData";
import SearchTypeHeader from "@/components/layout/SearchTypeHeader";

const HeaderSearchBar = ({ query, asPath }) => {
  const [changeData, setChangeData] = useState(query);
  const [suggestions, setSuggestions] = useState([]);
  const [fetchQuery, setFetchQuery] = useState(query);

  const handleChange = async (event) => {
    const searchWord = event.target.value;
    setChangeData(searchWord);
    const url = "https://api.bing.microsoft.com/v7.0/Suggestions";
    const apiKey = process.env.BING_API_KEY;
    const config = {
      params: {
        query: searchWord,
      },
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.NEXT_PUBLIC_BING_API_KEY,
      },
    };
    if (searchWord.length >= 3) {
      await axios.get(url, config).then((response) => {
        if (searchWord === "") {
          setSuggestions([]);
        } else {
          setSuggestions(
            response.data["suggestionGroups"][0]["searchSuggestions"]
          );
        }
      });
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.assign(`${asPath}?q=${changeData}`);
  };

  const handleSelect = (suggestion) => {
    window.location.assign(`${asPath}?q=${suggestion}`);
  };

  const handleClear = () => {
    setChangeData("");
    setSuggestions([]);
  };
  return (
    <div className="w-full px-2">
      <div className="flex items-center my-2">
        <GiHamburgerMenu className="flex-none md:hidden mx-2 bg-transparent text-gray-600 hover:bg-gray-200 rounded-full" />
        <div className="flex grow justify-center md:flex-none md:justify-start">
          <Link href="/">
            <Image
              src="/gosearch.webp"
              alt="goSearch image"
              width={200}
              height={70}
            ></Image>
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className="hidden md:flex-grow md:flex md:justify-start md:mx-4 md:w-screen items-center mt-3 h-12 border border-gray-200 rounded-full hover:shadow-md transition-shadow focus-within:shadaw-md"
        >
          <input
            type="text"
            className="flex-grow text-sm px-6 md:text-sm border-transparent focus:border-transparent focus:ring-0 rounded-full "
            placeholder=""
            value={changeData}
            onChange={handleChange}
          />
          {changeData?.length > 0 && (
            <>
              <MdClose
                onClick={handleClear}
                className="mt-1 text-sm sm:text-xl cursor-pointer text-gray-500 hover:text-gray-600 "
              />
              <span className="flex align-middle text-xs sm:text-xl mx-2 text-gray-300">
                |
              </span>
            </>
          )}
          <BsFillMicFill className="text-xs text-blue-500 sm:text-xl" />
          <AiOutlineSearch className="flex text-sx sm:text-xl  text-blue-500 mx-2" />
        </form>
        <div className="flex md:w-6/12 md:justify-end">
          <AiOutlineSetting className="hidden bg-transparent text-gray-600 hover:bg-gray-200 rounded-full text-4xl p-2" />
          <TbGridDots className="hidden bg-transparent text-gray-600 hover:bg-gray-200 rounded-full text-4xl p-2 mr-2" />
          <button className="flex-none text-sm bg-blue-600 text-white px-2 py-2 md:px-4 font-bold rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
            Sign in
          </button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex md:hidden items-center my-3 h-12 border border-gray-200 rounded-full hover:shadow-md transition-shadow focus-within:shadaw-md"
      >
        <input
          type="text"
          className="flex-grow text-md px-6 md:text-sm border-transparent focus:border-transparent focus:ring-0 rounded-full "
          placeholder=""
          value={changeData}
          onChange={handleChange}
        />
        {changeData?.length > 0 && (
          <>
            <MdClose
              onClick={handleClear}
              className="mt-1 text-xl cursor-pointer text-gray-500 hover:text-gray-600 "
            />
            <span className="flex align-middle text-lg sm:text-xl mx-2 text-gray-300">
              |
            </span>
          </>
        )}
        <BsFillMicFill className="text-lg text-blue-500 sm:text-xl" />
        <AiOutlineSearch className="flex text-xl sm:text-xl  text-blue-500 mx-2" />
      </form>
      {suggestions.length > 0 && (
        <ul className="absolute bg-white rounded-lg w-11/12 shadow-lg md:mx-52 md:w-7/12">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="px-4 py-2 cursor-pointer text-md text-gray-600 hover:bg-gray-100"
              onClick={() => handleSelect(suggestion.displayText)}
            >
              {suggestion.displayText}
            </li>
          ))}
        </ul>
      )}
      <SearchTypeHeader query={fetchQuery} asPath={asPath} />
      {fetchQuery?.length > 0 && (
        <FetchData query={fetchQuery} asPath={asPath} />
      )}
    </div>
  );
};

export default HeaderSearchBar;
