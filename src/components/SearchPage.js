import React from "react";
import "../styles/SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../hooks/useGoogleSearch";
import MockData from "../mock/mockData";
import { Link } from "react-router-dom";
import Search from "../components/Search";

function SearchPage() {
  //whenever we use value from data layer it gives us the state and dispatch
  const [{ term }, dispatch] = useStateValue();
  //   lIVE API
//   const { data } = useGoogleSearch(term);

  //MOCK DATA
  const data = MockData;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            alt="search_page_log"
            className="searchPage_logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
      </div>

      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
