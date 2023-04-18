import React from "react";
import TimeDiffrence from "../utils/TimeDiffrence";
import { FallBackImage } from "../utils/FallBackImage";
import StringShortner from "../utils/StringShortner";

const FetchNews = ({ searchResults }) => {
  return (
    <>
      {searchResults.value?.length > 0 && (
        <>
          <div className="flex p-2 text-gray-400 text-xs lg:w-5/12 lg:mx-52">
            About {searchResults.totalEstimatedMatches} results (0.35 seconds)
          </div>
          <div className="space-y-2  lg:w-7/12 lg:mx-52">
            {searchResults.value?.map((searchResult) => (
              <>
                <a
                  key={searchResult.id}
                  href={searchResult.url}
                  className="block p-2 bg-white shadow-md border content-center rounded-xl"
                >
                  <div className="flex w-full justify-between items-center md:items-stretch">
                    <section className="flex w-5/6">
                      <div className="">
                        <div className="flex items-center">
                          {searchResult.provider.map((provider) => (
                            <React.Fragment key={provider.name}>
                              <div className="w-6 p-1 mr-2 rounded-full bg-gray-100">
                                <FallBackImage
                                  className=""
                                  src={provider.image?.thumbnail.contentUrl}
                                  alt={provider.name}
                                  defaultImage={"/defaultFav.png"}
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
                          <StringShortner
                            string={searchResult.name}
                            stringLenth={10}
                          />
                        </h6>
                        <div className="flex">
                          <p className="text-sm text-gray-700 dark:text-gray-400 content-between">
                            <span className="text-xs text-gray-500"></span>
                            <StringShortner
                              string={searchResult.description}
                              stringLenth={15}
                            />
                          </p>
                        </div>
                      </div>
                    </section>
                    <section className="flex mx-1 lg:w-52 h-full w-48 justify-end">
                      <FallBackImage
                        className="flex w-42 border-gray-300 rounded-md"
                        src={`${searchResult.image?.thumbnail.contentUrl} + &w=234&c=14&rs=2&qlt=90&dpr=1.3`}
                        alt={searchResult.name}
                        defaultImage={"/defaultNewsImage.png"}
                      />
                    </section>
                  </div>
                </a>
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default FetchNews;
