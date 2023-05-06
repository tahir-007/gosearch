import React, { useState, useCallback } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import axios from "axios";

const HomeSearchBar = () => {
  // State variables for the search term and suggestions
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

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
    <div className="relative">
      <div className="flex flex-col items-center mt-4 xl:mt-10 justify-center">
        <div className="flex justify-center w-screen items-center">
          <form
            onSubmit={handleSubmit}
            className="flex items-center w-screen mt-5 h-12 mx-3 md:h-12 md:w-8/12 xl:w-5/12 border border-gray-200 px-3 rounded-full hover:shadow-md transition-shadow focus-within:shadaw-md dark:border-gray-500"
          >
            <AiOutlineSearch className="flex text-lg text-gray-500" />
            <input
              type="text"
              className="flex-grow md:text-sm border-transparent dark:bg-gray-900 focus:border-transparent focus:ring-0 rounded-full "
              placeholder=""
              value={searchTerm}
              onChange={handleChange}
            />
            {searchTerm.length > 0 && (
              <>
                <MdClose
                  onClick={handleClear}
                  className="text-lg cursor-pointer text-gray-500 hover:text-gray-600 "
                />
              </>
            )}
          </form>
        </div>
        <div className="flex mx-4 justify-center">
          {suggestions.length > 0 && (
            <ul className="absolute w-full md:w-5/12 py-3 z-10 bg-white dark:bg-gray-800 rounded-md shadow-md">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  className="px-4 py-2 cursor-pointer text-sm md:text-md hover:bg-gray-100"
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
export default React.memo(HomeSearchBar);
