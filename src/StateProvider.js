import React, { createContext, useContext, useReducer } from "react";

//This is preparing the data layer with context api
export const StateContext = createContext();


//Intial state is what that data layer looks like when the app is loaded
//Reducer is clever and listens to any changes
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//this is a hook which pulls information from the data layer
export const useStateValue = () => useContext(StateContext);
