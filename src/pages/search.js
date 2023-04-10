import { useRouter } from "next/router";

const SearchResults = () => {
  const router = useRouter();
  const { query } = router.query;

  return <div>Search Results for: {query}</div>;
};

export default SearchResults;
