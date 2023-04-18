import React from "react";
import StringShortner from "../utils/StringShortner";

const FetchImages = ({ searchResults }) => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 mt-4">
        {searchResults.value?.map((images) => (
          <a href={images.hostPageDisplayUrl} key={images.imageId}>
            <figure className="flex flex-col my-1 w-full items-center border shadow-md rounded-lg transform hover:scale-105 hover:bg-gray-100 transition-all duration-200">
              <img
                className="w-full h-56 object-cover rounded-t-lg "
                src={images.thumbnailUrl}
                alt={images.name}
              />
              <figcaption className="mt-2 text-xs text-center text-gray-500 my-2 dark:text-gray-400">
                <StringShortner string={images.name} stringLenth={5} />
              </figcaption>
            </figure>
          </a>
        ))}
      </div>
    </>
  );
};

export default FetchImages;
