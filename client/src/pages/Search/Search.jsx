import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  let m = ["type", "name"];
  console.log(searchParams[0]); // 'name'

  return <div>Search</div>;
};

export default Search;
