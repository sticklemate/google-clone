import React, { useState } from "react";
import "../styles/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom';

function Search({hideButtons = false}) {
  //functional component for state management
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    history.push('/search');

    //do something with input
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={e=>setInput(e.target.value)}></input>
        <MicIcon />
      </div>

      {!hideButtons ? (

      
      <div className="search__buttons">
        <Button type='submit' onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm feeling lucky</Button>
      </div>
      ): (
        <div className="search__buttons">
        <Button className='search_buttonsHidden' type='submit' onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button className='search_buttonsHidden' variant="outlined">I'm feeling lucky</Button>
      </div>
      )}
    </form>
  );
}

export default Search;
