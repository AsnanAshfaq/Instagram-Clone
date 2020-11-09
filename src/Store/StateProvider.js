import React, { createContext, useContext, useReducer } from "react";

// creates the context
export const StateContext = createContext();

// function which provides the context in our components
// where children is the component to which the context will be provided to

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// allow us to use the value in the context
export const Context = () => useContext(StateContext);
