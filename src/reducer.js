//this is to hold all search input - > data lives in this object
export const initialState = {
  terms: null,
};

//Dispatch an action when you change the data layer - >sets the search term
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

//reducer where state is state of data layer and action is whatever we are dispatching into context api
//This listens for any dispatched actions
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term, //change the term to whatever action you dispatch
      };
    default:
      return state;
  }
};

export default reducer;
