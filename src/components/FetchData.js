import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

const FetchData = (props) => {
  const [searchResults, setSearchResults] = useState(null);
  const [relatedSearch, setRelatedSearch] = useState(null);
  const [totalSearch, setTotalSearch] = useState(null);

  useEffect(() => {
    const url = "https://api.bing.microsoft.com/v7.0/search";
    const apiKey = process.env.BING_API_KEY;
    const config = {
      params: {
        q: props.query,
        count: "20",
      },
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.NEXT_PUBLIC_BING_API_KEY,
      },
    };
    const fetchData = async () => {
      const result = await axios.get(url, config).then((response) => {
        setSearchResults(response.data["webPages"]["value"]);
        if (response.data["relatedSearches"]["value"] !== undefined) {
          setRelatedSearch(response.data["relatedSearches"]["value"]);
        }
        setTotalSearch(response.data["webPages"]["totalEstimatedMatches"]);
      });
    };
    fetchData();
    console.log(props.searchQuery);
  }, []);

  const handleSelect = (related) => {
    window.location.assign(`/web?q=${related.displayText}`);
  };

  return (
    <>
      <div className="flex p-2 text-gray-400 text-xs  md:w-8/12 md:mx-40">
        About {totalSearch} results (0.35 seconds)
      </div>
      {searchResults?.length > 0 && (
        <div className="space-y-2  md:w-8/12 md:mx-40 ">
          {searchResults?.map((searchResult) => (
            <div className="content-center">
              <a
                href={searchResult.url}
                className="block p-2 bg-white shadow-sm content-center"
              >
                <div className="flex items-center">
                  <div className="w-4 mr-2">
                    <img
                      src="https://instagram.com/favicon.ico"
                      alt={searchResult.name}
                    />
                  </div>
                  <p className="text-xs md:text-sm">
                    {searchResult.displayUrl}
                  </p>
                </div>
                <h6 className="mb-2 text-sm md:text-xl font-semibold tracking-tight text-blue-800 hover:underline font-sans">
                  {searchResult.name}
                </h6>
                <div className="flex">
                  <p className="text-xs md:text-sm text-gray-700 dark:text-gray-400 content-between">
                    <span className="text-xs text-gray-400">2023-04-10</span> .
                    {searchResult.snippet}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
      {relatedSearch?.length > 0 && (
        <ul className="bg-white rounded-md text-xs md:text-sm border-2 my-6 shadow-md md:w-8/12 md:mx-40">
          <p className="py-2 px-4">Related</p>
          {relatedSearch?.map((related) => (
            <li
              key={related.displayText}
              className="px-4 py-2 cursor-pointer text-gray-700 hover:bg-gray-100"
              onClick={() => handleSelect(related)}
            >
              {related.displayText}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FetchData;
