import React, { useState, useCallback } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import axios from "axios";
import Link from "next/link";
import FetchData from "@/components/FetchData";
import SearchTypeHeader from "@/components/layout/SearchTypeHeader";
import DarkMode from "../utils/DarkMode";

const HeaderSearchBar = ({ query, asPath }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [fetchQuery, setFetchQuery] = useState(query);

  // Function to handle changes to the search input
  const handleChange = async (event) => {
    // Get the current value of the search input
    const searchWord = event.target.value;
    // Update the searchTerm state variable
    setSearchTerm(searchWord);
    // Set the URL for the Bing Suggestions API
    const url = "https://api.bing.microsoft.com/v7.0/Suggestions";
    // Set the config object for the API request
    const config = {
      params: {
        query: searchWord,
      },
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.BING_API_KEY,
      },
    };
    // Only make the API request if the searchWord is at least 3 characters long
    if (searchWord.length >= 3) {
      try {
        // Make the API request
        const response = await axios.get(url, config);
        // If the searchWord is empty, clear the suggestions
        if (searchWord === "") {
          setSuggestions([]);
        } else {
          // Otherwise, update the suggestions state variable with the API response data
          setSuggestions(
            response.data["suggestionGroups"][0]["searchSuggestions"]
          );
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      // If the searchWord is less than 3 characters long, clear the suggestions
      setSuggestions([]);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the search results page with the current searchTerm as a query parameter
    window.location.assign(`/web?q=${searchTerm}`);
  };

  // Memoized handleSelect function using useCallback
  const handleSelect = useCallback((suggestion) => {
    window.location.assign(`/web?q=${suggestion}`);
  }, []);

  // Memoized handleClear function using useCallback
  const handleClear = useCallback(() => {
    setSearchTerm("");
    setSuggestions([]);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900">
      <div className="flex items-center py-2 mx-2">
        <GiHamburgerMenu className="flex-none md:hidden mx-2 bg-transparent text-gray-600 hover:bg-gray-200 rounded-full" />
        <div className="flex grow justify-center md:flex-none md:justify-start">
          <Link href="/">
            <div className="flex text-4xl lg:text-5xl font-medium">
              <span className="text-blue-500 dark:text-gray-300">g</span>
              <span className="text-red-500 dark:text-gray-300">o</span>
              <span className="text-yellow-400 dark:text-gray-300">S</span>
              <span className="text-blue-500 dark:text-gray-300">e</span>
              <span className="text-green-500 dark:text-gray-300">a</span>
              <span className="text-red-500 dark:text-gray-300">r</span>
              <span className="text-yellow-400 dark:text-gray-300">c</span>
              <span className="text-blue-500 dark:text-gray-300">h</span>
            </div>
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className="hidden md:flex-grow md:flex md:justify-start md:mx-4 md:w-screen items-center mt-3 h-12 border border-gray-300 rounded-full hover:shadow-md transition-shadow focus-within:shadaw-md dark:border-gray-600"
        >
          <input
            type="text"
            className="flex-grow text-sm px-6 md:text-sm border-transparent focus:border-transparent focus:ring-0 rounded-full text-gray-700  dark:bg-gray-900 dark:text-gray-300 "
            placeholder=""
            value={searchTerm}
            onChange={handleChange}
          />
          {searchTerm?.length > 0 && (
            <>
              <MdClose
                onClick={handleClear}
                className="text-sm sm:text-xl cursor-pointer text-gray-500 hover:text-gray-600 "
              />
              <span className="flex -mt-1 align-middle text-xs sm:text-xl mx-2 text-gray-300 dark:text-gray-500">
                |
              </span>
            </>
          )}
          <AiOutlineSearch className="flex text-sx sm:text-xl  text-blue-500 mr-4" />
        </form>
        <div className="flex md:w-6/12 md:justify-end items-center">
          <DarkMode />
          <button className="ml-4 flex-none text-sm bg-blue-600 text-white px-2 py-2 md:px-4 font-bold rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
            Sign in
          </button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex md:hidden items-center my-3 h-12 mx-2 border border-gray-500 rounded-full hover:shadow-md transition-shadow focus-within:shadaw-md dark:border-gray-600"
      >
        <input
          type="text"
          className="flex-grow text-md px-6 md:text-sm border-transparent focus:border-transparent focus:ring-0 rounded-full dark:bg-gray-900 dark:text-gray-300 "
          placeholder=""
          value={searchTerm}
          onChange={handleChange}
        />
        {searchTerm?.length > 0 && (
          <>
            <MdClose
              onClick={handleClear}
              className="text-xl cursor-pointer text-gray-500 hover:text-gray-600 "
            />
            <span className="flex -mt-1 align-middle text-lg sm:text-xl mx-2 text-gray-300 dark:text-gray-500">
              |
            </span>
          </>
        )}
        <AiOutlineSearch className="flex text-xl sm:text-xl  text-blue-500 mr-4" />
      </form>
      {suggestions.length > 0 && (
        <ul className="absolute bg-white rounded-lg w-11/12 shadow-lg md:mx-52 md:w-7/12 z-10">
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

export default React.memo(HeaderSearchBar);
