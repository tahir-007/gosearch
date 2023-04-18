import { useEffect } from "react";
import { useRouter } from "next/router";
import HeaderSearchBar from "@/components/layout/HeaderSearchBar";

const Images = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("fullUrl", JSON.stringify(router));
  }, [router]);

  return (
    <>
      {router.query.q && (
        <HeaderSearchBar query={router.query.q} asPath={router.pathname} />
      )}
    </>
  );
};

export default Images;
