import React from "react";
import { FallbackFav } from "../utils/FallbackIFav";
import TimeDiffrence from "../utils/TimeDiffrence";
import Footer from "./Footer";
import { FallBackNewsImage } from "../utils/FallBackNewsImage";

const FetchNews = ({ searchResults }) => {
  const getFavicon = (inputLink) => {
    let url = new URL(inputLink);
    return url.origin + "/favicon.ico";
  };
  return (
    <>
      {searchResults.value?.length > 0 && (
        <>
          <div className="flex p-2 text-gray-400 text-xs md:w-8/12 :w-5/12 md:mx-40">
            About {searchResults.totalEstimatedMatches} results (0.35 seconds)
          </div>
          <div className="space-y-2  md:w-7/12  md:mx-40 ">
            {searchResults.value?.map((searchResult) => (
              <>
                <a
                  key={searchResult.id}
                  href={searchResult.url}
                  className="block p-2 bg-white shadow-sm border content-center rounded-xl"
                >
                  <div className="flex items-center w-full">
                    <section className="w-5/6">
                      <div className="content-center">
                        <div className="flex items-center">
                          {searchResult.provider.map((provider) => (
                            <React.Fragment key={provider.name}>
                              <div className="w-6 p-1 mr-2 rounded-full bg-gray-100">
                                <FallbackFav
                                  src={provider.image?.thumbnail.contentUrl}
                                  alt={provider.name}
                                />
                              </div>
                              <p className="text-sm">{provider.name}</p>
                            </React.Fragment>
                          ))}
                          <span className="tex-sm text-gray-700 mx-2">
                            <TimeDiffrence input={searchResult.datePublished} />
                          </span>
                        </div>
                        <h6 className="mb-2 text-md md:text-lg font-semibold tracking-tight text-gray-800 hover:underline font-sans">
                          {searchResult.name}
                        </h6>
                        <div className="flex">
                          <p className="text-sm text-gray-700 dark:text-gray-400 content-between">
                            <span className="text-xs text-gray-500"></span>
                            {searchResult.description}
                          </p>
                        </div>
                      </div>
                    </section>
                    <section className="flex py-4">
                      {/* <img
                        
                        src={searchResult.image?.thumbnail.contentUrl}
                        alt="image"
                      /> */}
                      <FallBackNewsImage
                        className="border border-gray-300 rounded-md"
                        src={searchResult.image?.thumbnail.contentUrl}
                        alt={searchResult.name}
                      />
                    </section>
                  </div>
                </a>
              </>
            ))}
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default FetchNews;
