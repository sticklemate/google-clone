import { useState, useEffect } from "react";

const { REACT_APP_GOOGLE_CUSTOM_API_KEY } = process.env;
const CONTEXT_KEY = "ef9e022c0a397857d";

const url=`https://www.googleapis.com/customsearch/v1?key=${REACT_APP_GOOGLE_CUSTOM_API_KEY}&cx=${CONTEXT_KEY}`;

//Custom hook to return search results
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    //fetch using the api
    const fetchData = async () => {
      
      fetch(`${url}&q=${term}`)      
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
