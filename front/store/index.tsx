import React, { useReducer, useContext, createContext } from 'react';
import { Store } from '../domain/entities/store.interface'

export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_REALTORS = 'SET_REALTORS';
export const SET_SELECTED_MESSAGE = 'SET_SELECTED_MESSAGE';
export const SET_SELECTED_REALTOR_ID = 'SET_SELECTED_REALTOR_ID';
export const SET_UNREAD_COUNT = 'SET_UNREAD_COUNT';

export const initialState = {
  realtors: [],
  messages: [],
  selectedRealtorId: localStorage.getItem('selectedRealtorId') || "",
  selectedMessageId: localStorage.getItem('selectedMessageId') || "",
  selectedMessage: null,
  unreadCount: 0
};

// const StoreContext = createContext();
const StoreContext = createContext<{
  state: Store;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});
StoreContext.displayName = 'Store';

export const useStore = () => useContext(StoreContext);

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  messages,
});
export const setRealtors = (realtors) => ({
  type: SET_REALTORS,
  realtors,
});
export const setSelectedRealtorId = (selectedRealtorId) => ({
  type: SET_SELECTED_REALTOR_ID,
  selectedRealtorId,
});
export const setSelectedMessage = (selectedMessage) => ({
  type: SET_SELECTED_MESSAGE,
  selectedMessage,
});
export const setUnreadCount = (unreadCount) => ({
  type: SET_UNREAD_COUNT,
  unreadCount,
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
      realtors: action.realtors
    };
  }
  if (action.type === SET_SELECTED_REALTOR_ID) {
    return {
      ...state,
      selectedRealtorId: action.selectedRealtorId
    };
  }
  if (action.type === SET_SELECTED_MESSAGE) {
    return {
      ...state,
      selectedMessage: action.selectedMessage,
      selectedMessageId: action.selectedMessage.id.toString(),
    };
  }
  if (action.type === SET_UNREAD_COUNT) {
    console.log(state)
    return {
      ...state,
      unreadCount: action.unreadCount
    };
  }
};

const StoreProvider = ({ children, initialState, reducer }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider