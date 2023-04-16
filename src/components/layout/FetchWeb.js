import React from "react";
import Footer from "@/components/layout/Footer";
import { FallbackFav } from "@/components/utils/FallbackIFav";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const FetchWeb = ({ searchResults }) => {
  const convertUrl = (inputUrl) => {
    let url = new URL(inputUrl);
    let path = url.pathname.split("/");
    let output = url.origin;
    for (let i = 1; i < path.length; i++) {
      if (path[i] !== "") {
        output += " > " + path[i];
      }
    }
    if (output.split(" ").length > 6) {
      return output.split(" ").slice(0, 6).join(" ") + "...";
    } else {
      return output;
    }
  };

  const convertDate = (inputDate) => {
    if (inputDate) {
      let date = new Date(inputDate);
      let day = date.getDate().toString().padStart(2, "0");
      let month = (date.getMonth() + 1).toString().padStart(2, "0");
      let year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }
    return null;
  };

  const getFavicon = (inputLink) => {
    let url = new URL(inputLink);
    return url.origin + "/favicon.ico";
  };

  const handleSelect = (related) => {
    window.location.assign(`/web?q=${related.displayText}`);
  };
  return (
    <>
      {searchResults.webPages.value?.length > 0 && (
        <>
          <div className="flex p-2 text-gray-400 text-sm md:w-8/12 :w-5/12 md:mx-40">
            About {searchResults.webPages.totalEstimatedMatches} results 0.35
            seconds
          </div>
          <div className="space-y-3 md:w-7/12 md:mx-40 ">
            {searchResults.webPages.value?.map((searchResult) => (
              <div className="content-center" key={searchResult.id}>
                <a
                  href={searchResult.url}
                  className="block p-2 bg-white border shadow-md rounded-xl content-center"
                >
                  <div className="flex items-center">
                    <div className="w-6 p-1 mr-2 rounded-full bg-gray-100">
                      <FallbackFav
                        src={getFavicon(searchResult.url)}
                        alt={searchResult.name}
                      />
                    </div>
                    <p className="text-sm md:text-sm">
                      {convertUrl(searchResult.url)}
                    </p>
                  </div>
                  <h6 className="mb-2 text-lg md:text-xl font-semibold tracking-tight text-blue-800 hover:underline font-sans">
                    {searchResult.name}
                  </h6>
                  <div className="flex">
                    <p className="text-sm md:text-sm text-gray-700 dark:text-gray-400 content-between">
                      <span className="text-xs text-gray-500 mr-2">
                        {convertDate(searchResult.dateLastCrawled)}
                      </span>
                      {searchResult.snippet}
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
          <p className="py-2 px-4 xl:text-xl md:mx-40 mt-8 mb-4">Related</p>
          <ul className="md:grid md:grid-cols-2 md:gap-4 grid grid-cols-1 gap-2 md:mx-40 text-sm md:text-md mx-2  md:w-6/12 mb-14">
            {searchResults.relatedSearches.value?.map((related) => (
              <li
                className="px-4 py-2 cursor-pointer text-black hover:underline flex items-center bg-gray-100 rounded-full"
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
      <Footer />
    </>
  );
};

export default FetchWeb;
