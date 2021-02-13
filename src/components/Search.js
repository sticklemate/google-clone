import React, { useState } from "react";
import "../styles/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

function Search() {
  //functional component
  const [state, setstate] = useState("");

  const search = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input></input>
        <MicIcon />
      </div>
      <div className="search__buttons">
        <Button onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm feeling lucky</Button>
      </div>
    </div>
  );
}

export default Search;
