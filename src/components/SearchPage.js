import React from "react";
import "../styles/SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../hooks/useGoogleSearch";
import MockData from "../mock/mockData";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOffer from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  //whenever we use value from data layer it gives us the state and dispatch
  const [{ term }, dispatch] = useStateValue();
  //   lIVE API
    const { data } = useGoogleSearch(term);

  //MOCK DATA
  // const data = MockData;

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
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOffer />
                <Link to="/shoppinh">shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/maps">more</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && <div className="searchPage__results">
        <p className="searchPage__resultCount">
        About {data?.searchInformation.formattedTotalResults} results({data?.searchInformation.formattedSearchTime} seconds) for {term}
        </p>

        
        {data?.items.map(item=>(
          <div className='searchPage_result'>
           <a className="searchPage_resultLink" href={item.link}> 
           {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0].src && (
             
             <img className="searchPage_resultImage" src={item.pagemap?.cse_image[0].src} alt="search_image"></img>

           )}
           {item.displayLink}🔽</a>
           <a className="searchPage_resultTitle" href={item.link}>
           <h2>{item.title}</h2></a>
           <p className="searchPage_resultSnippet">{item.snippet}</p>
          </div>

        ))}</div>}
    </div>
  );
}

export default SearchPage;
