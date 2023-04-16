import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import FetchNews from "@/components/layout/FetchNews";
import FetchWeb from "./layout/FetchWeb";

const FetchData = ({ query, asPath }) => {
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url =
      asPath === "/web"
        ? "https://api.bing.microsoft.com/v7.0/search"
        : asPath === "/news"
        ? "https://api.bing.microsoft.com/v7.0/news/search"
        : "https://api.bing.microsoft.com/v7.0/videos";
    const config = {
      params: {
        q: query,
        count: "15",
      },
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.NEXT_PUBLIC_BING_API_KEY,
      },
    };
    const fetchData = async () => {
      const result = await axios.get(url, config).then((response) => {
        setSearchResults(response.data);
        setIsLoading(false);
      });
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex w-full justify-center my-52">
        <Image
          src="/spinner.svg"
          alt="Loading Spinner"
          width={50}
          height={20}
        ></Image>
      </div>
    );
  }
  if (asPath === "/web") {
    return <FetchWeb searchResults={searchResults} />;
  }

  if (asPath === "/news") {
    return <FetchNews searchResults={searchResults} />;
  }
};

export default FetchData;
