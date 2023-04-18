import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import FetchNews from "@/components/layout/FetchNews";
import FetchWeb from "./layout/FetchWeb";
import FetchImages from "./layout/FetchImages";
import Pagination from "./utils/Pagination";
import Footer from "./layout/Footer";
import FetchVideos from "./layout/FetchVideos";

const FetchData = ({ query, asPath }) => {
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageCount, setNextPageCount] = useState(
    asPath === "/images" || asPath === "/videos" ? 48 : 15
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const url =
      asPath === "/web"
        ? "https://api.bing.microsoft.com/v7.0/search"
        : asPath === "/news"
        ? "https://api.bing.microsoft.com/v7.0/news/search"
        : asPath === "/images"
        ? "https://api.bing.microsoft.com/v7.0/images/search"
        : "https://api.bing.microsoft.com/v7.0/videos/search";
    const config = {
      params: {
        q: query,
        count: asPath === "/images" || asPath === "/videos" ? "48" : "15",
        sortBy: asPath === "/news" ? "Date" : "",
        offset: String(nextPageCount),
      },
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.NEXT_PUBLIC_BING_API_KEY,
      },
    };
    const fetchData = async () => {
      const result = await axios.get(url, config).then((response) => {
        setSearchResults(response.data);
        setIsLoading(false);
        setNextPageCount(
          asPath === "/images" || asPath === "/videos"
            ? nextPageCount + 48
            : nextPageCount + 15
        );
        window.scrollTo(0, 0);
      });
    };
    fetchData();
  };

  useEffect(() => {
    const url =
      asPath === "/web"
        ? "https://api.bing.microsoft.com/v7.0/search"
        : asPath === "/news"
        ? "https://api.bing.microsoft.com/v7.0/news/search"
        : asPath === "/images"
        ? "https://api.bing.microsoft.com/v7.0/images/search"
        : "https://api.bing.microsoft.com/v7.0/videos/search";
    const config = {
      params: {
        q: query,
        count: asPath === "/images" || asPath === "/videos" ? "48" : "15",
        sortBy: asPath === "/news" ? "Date" : "",
        offset: "0",
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
    return (
      <>
        <FetchWeb searchResults={searchResults} />
        <Pagination
          totalCount={90}
          pageSize={15}
          onPageChange={handlePageChange}
        />
        <Footer />
      </>
    );
  }

  if (asPath === "/news") {
    return (
      <>
        <FetchNews searchResults={searchResults} />
        <Pagination
          totalCount={90}
          pageSize={15}
          onPageChange={handlePageChange}
        />
        <Footer />
      </>
    );
  }
  if (asPath === "/images") {
    return (
      <>
        <FetchImages searchResults={searchResults} />
        <Pagination
          totalCount={90}
          pageSize={15}
          onPageChange={handlePageChange}
        />
        <Footer />
      </>
    );
  }
  if (asPath === "/videos") {
    return (
      <>
        <FetchVideos searchResults={searchResults} />
        <Pagination
          totalCount={90}
          pageSize={15}
          onPageChange={handlePageChange}
        />
        <Footer />
      </>
    );
  }
};

export default FetchData;
