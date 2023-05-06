import React from "react";
import { FallBackImage } from "../utils/FallBackImage";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import StringShortner from "../utils/StringShortner";

// FetchWeb component
const FetchWeb = ({ searchResults }) => {
  // Function to convert a URL into a readable format
  const convertUrl = (inputUrl) => {
    let url = new URL(inputUrl);
    let path = url.pathname.split("/");
    let output = url.origin;
    for (let i = 1; i < path.length; i++) {
      if (path[i] !== "") {
        output += " > " + path[i];
      }
    }
    let outputSplit = output.split(" ");
    if (outputSplit.length > 4) {
      return outputSplit.slice(0, 4).join(" ") + "...";
    } else {
      return output;
    }
  };

  // Function to get the favicon of a website
  const getFavicon = (inputLink) => {
    let url = new URL(inputLink);
    return url.origin + "/favicon.ico";
  };

  // Function to handle selection of a search result
  const handleSelect = (related) => {
    window.location.assign(`/web?q=${related.displayText}`);
  };
  return (
    <>
      {searchResults.webPages.value?.length > 0 && (
        <>
          <div className="flex p-2 text-gray-400 text-sm lg:w-5/12 lg:mx-52 ">
            About {searchResults.webPages.totalEstimatedMatches} results 0.35
            seconds
          </div>
          <div className="space-y-3 lg:w-7/12 lg:mx-52  ">
            {searchResults.webPages.value?.map((searchResult) => (
              <div className="content-center" key={searchResult.id}>
                <a
                  href={searchResult.url}
                  className="block p-2 bg-white border shadow-md rounded-xl content-center dark:bg-gray-700 dark:text-gray-400"
                >
                  <div className="flex items-center">
                    <div className="w-6 p-1 mr-2 rounded-full bg-gray-100">
                      <FallBackImage
                        className=""
                        src={getFavicon(searchResult.url)}
                        alt={searchResult.name}
                        defaultImage={"/defaultFav.png"}
                      />
                    </div>
                    <p className="text-sm md:text-sm">
                      {convertUrl(searchResult.url)}
                    </p>
                  </div>
                  <h6 className="mb-2 text-lg md:text-xl font-semibold tracking-tight text-blue-800 hover:underline font-sans">
                    {searchResult.name}
                  </h6>
                  <div className="flex items-center">
                    <p className="flex text-sm md:text-sm text-gray-700 dark:text-gray-400 items-center">
                      <StringShortner
                        string={searchResult.snippet}
                        stringLenth={20}
                      />
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </>
      )}
      {searchResults.relatedSearches?.value.length > 0 && (
        <>
          <p className="py-2 px-4 xl:text-xl md:mx-52 mt-8 mb-4">Related</p>
          <ul className="md:grid md:grid-cols-2 md:gap-4 grid grid-cols-1 gap-2 md:mx-52 text-sm md:text-md mx-2  md:w-6/12 mb-14 ">
            {searchResults.relatedSearches.value?.map((related) => (
              <li
                className="px-4 py-2 cursor-pointer text-black hover:underline flex items-center bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-400"
                onClick={() => handleSelect(related)}
                key={related.id}
              >
                <AiOutlineSearch className="flex text-sx sm:text-xl  text-gray-700 mx-2" />
                {related.displayText}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default FetchWeb;
