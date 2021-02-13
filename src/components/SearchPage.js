import React from "react";
import "../styles/SearchPage.css";
import { useStateValue } from "../StateProvider";

function SearchPage() {
  //whenever we use value from data layer it gives us the state and dispatch
  const [{ term }, dispatch] = useStateValue();

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <h1>{term}</h1>
      </div>

      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
