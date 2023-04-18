import React from "react";
import StringShortner from "../utils/StringShortner";

const FetchVideos = ({ searchResults }) => {
  return (
    <>
      <div className="container px-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {searchResults.value?.map((videos) => (
          <a href={videos.hostPageDisplayUrl} key={videos.videoId}>
            <figure className="flex flex-col my-1 w-full items-center border shadow-md rounded-lg transform hover:scale-105 hover:bg-gray-100 transition-all duration-200">
              <video
                className="w-full lg:h-40 h-32  object-cover rounded-t-lg "
                poster={videos.thumbnailUrl}
                alt={videos.name}
              />
              <figcaption className="mt-2 text-xs text-center text-gray-500 my-2 dark:text-gray-400">
                <StringShortner string={videos.name} stringLenth={5} />
              </figcaption>
            </figure>
          </a>
        ))}
      </div>
    </>
  );
};

export default FetchVideos;
