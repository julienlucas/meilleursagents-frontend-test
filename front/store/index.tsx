import React, { useReducer, useContext, createContext } from 'react';

const Store = createContext();
Store.displayName = 'Store';

export const useStore = () => useContext(Store);

export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_REALTORS = 'SET_REALTORS';
export const initialState = {
  realtors: [],
  messages: []
};

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  messages,
});
export const setRealtors = (realtors) => ({
  type: SET_REALTORS,
  realtors,
});

export const storeReducers = (state = initialState, action) => {
  if (action.type === SET_MESSAGES) {
    return {
      ...state,
      messages: action.messages,
    };
  }
  if (action.type === SET_REALTORS) {
    return {
      ...state,
      realtors: action.realtors,
    };
  }
};

const StoreProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
  );
};

export default StoreProvider