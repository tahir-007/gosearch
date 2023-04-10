"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

const SearchInput = () => {
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
    await axios.get(url, config).then((response) => {
      if (searchWord === "") {
        setSuggestions([]);
      } else {
        setSuggestions(
          response.data["suggestionGroups"][0]["searchSuggestions"]
        );
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?query=${changeData}`);
  };

  const handleSelect = (suggestion) => {
    router.push(`/search?query=${suggestion}`);
  };

  return (
    <div className="container relative">
      <div className="flex flex-col items-center mt-8 xl:mt-24 justify-center">
        <div className="container flex justify-center w-4/12">
          <Image
            src="/gosearch.png"
            alt="goSearch image"
            width={300}
            height={100}
          ></Image>
        </div>
        <div className="container flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex mt-5 mx-2 w-screen h-10 sm:h-max md:w-8/12 xl:w-5/12 border border-gray-200 px-5 py-1 rounded-full hover:shadow-md transition-shadow focus-within:shadaw-md"
          >
            <AiOutlineSearch className="flex text-sx mt-2 md:mt-3  sm:text-xl text-gray-500 mr-3" />
            <input
              type="text"
              className="flex-grow text-xs border-transparent focus:border-transparent focus:ring-0 rounded-full "
              placeholder=""
              value={changeData}
              onChange={handleChange}
            />
            <BsFillMicFill className="mt-2 text-xs sm:text-xl" />
          </form>
        </div>
        <div className="container flex justify-center w-screen md:w-8/12 xl:w-5/12 z-50">
          {suggestions.length > 0 && (
            <ul className="w-full mx-2 py-3 z-10 bg-white rounded-md shadow-md">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="px-4 py-2 cursor-pointer text-xs hover:bg-gray-100"
                  onClick={() => handleSelect(suggestion.displayText)}
                >
                  {suggestion.displayText}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
