import React, { useEffect } from "react";
import { useRouter } from "next/router";
import HeaderSearchBar from "@/components/layout/HeaderSearchBar";

const Web = () => {
  const router = useRouter();
  const { query, pathname } = router; // Destructuring query and pathname from router

  useEffect(() => {
    // Storing only the necessary data instead of the entire router object
    localStorage.setItem("fullUrl", JSON.stringify({ query, pathname }));
  }, [query, pathname]); // Adding query and pathname as dependencies

  return (
    <>
      {query.q && (
        // Using destructured query and pathname
        <HeaderSearchBar query={query.q} asPath={pathname} />
      )}
    </>
  );
};

export default React.memo(Web);
