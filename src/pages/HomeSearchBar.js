import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

const HomeSearchBar = () => {
  const [changeData, setchangeData] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = async (event) => {
    const searchWord = event.target.value;
    setchangeData(searchWord);
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
    window.location.assign(`/web?q=${changeData}`);
  };

  const handleSelect = (suggestion) => {
    window.location.assign(`/web?q=${suggestion}`);
  };

  const handleClear = () => {
    setchangeData("");
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center mt-4 xl:mt-10 justify-center">
        <div className="container flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex mt-5 mx-3 w-screen h-8 sm:h-max md:w-8/12 xl:w-5/12 border border-gray-200 px-3 py-1 rounded-full hover:shadow-md transition-shadow focus-within:shadaw-md"
          >
            <AiOutlineSearch className="flex text-sx mt-1 sm:mt-2 sm:text-xl text-gray-500" />
            <input
              type="text"
              className="flex-grow text-xs  md:text-sm border-transparent dark:bg-gray-700 focus:border-transparent focus:ring-0 rounded-full "
              placeholder=""
              value={changeData}
              onChange={handleChange}
            />
            {changeData.length > 0 && (
              <>
                <MdClose
                  onClick={handleClear}
                  className="mt-1 text-xs sm:mt-2 sm:text-xl cursor-pointer text-gray-500 hover:text-gray-600 "
                />
                <span className="flex align-middle text-xs sm:text-xl mx-2 text-gray-300">
                  |
                </span>
              </>
            )}
            <BsFillMicFill className="mt-1 text-xs sm:mt-2 text-blue-500 sm:text-xl" />
          </form>
        </div>
        <div className="container flex justify-center">
          <div className="flex mx-3 w-screen md:w-8/12 xl:w-5/12 z-50">
            {suggestions.length > 0 && (
              <div className="container">
                <ul className="w-full py-3 z-10 bg-white dark:bg-gray-800 rounded-md shadow-md">
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion.displayText}
                      className="px-4 py-2 cursor-pointer text-xs md:text-sm hover:bg-gray-100"
                      onClick={() => handleSelect(suggestion.displayText)}
                    >
                      {suggestion.displayText}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSearchBar;
