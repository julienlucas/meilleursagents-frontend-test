import React, { useReducer, useContext, createContext, ReactNode } from 'react';
import { Message } from '../domain/entities/message.interface';
import { Realtor } from '../domain/entities/realtor.interface';
import { Store } from '../domain/entities/store.interface';

export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_MESSAGES_PAGINATED = 'SET_MESSAGES_PAGINATED';
export const SET_REALTORS = 'SET_REALTORS';
export const SET_SELECTED_MESSAGE = 'SET_SELECTED_MESSAGE';
export const SET_SELECTED_REALTOR_ID = 'SET_SELECTED_REALTOR_ID';
export const SET_UNREAD_COUNT = 'SET_UNREAD_COUNT';
export const SET_PAGE = 'SET_PAGE';

export const initialState: Store = {
  realtors: [],
  messages: [],
  selectedRealtorId: localStorage.getItem('selectedRealtorId') || '',
  selectedMessageId: localStorage.getItem('selectedMessageId') || '',
  selectedMessage: null,
  unreadCount: 0,
  page: 1,
};

export const StoreContext = createContext<[Store, React.Dispatch<any>]>([
  initialState,
  () => {},
]);

export const useStore = () => useContext(StoreContext);

export const setPage = (page: number) => ({
  type: SET_PAGE,
  page,
});
export const setMessages = (messages: Message[]) => ({
  type: SET_MESSAGES,
  messages,
});
export const setMessagesPaginated = (messages: Message[]) => ({
  type: SET_MESSAGES_PAGINATED,
  messages,
});
export const setRealtors = (realtors: Realtor[]) => ({
  type: SET_REALTORS,
  realtors,
});
export const setSelectedRealtorId = (selectedRealtorId: string) => ({
  type: SET_SELECTED_REALTOR_ID,
  selectedRealtorId,
});
export const setSelectedMessage = (selectedMessage: Store) => ({
  type: SET_SELECTED_MESSAGE,
  selectedMessage,
});
export const setUnreadCount = (unreadCount: number) => ({
  type: SET_UNREAD_COUNT,
  unreadCount,
});

import {
  getMessagesUC,
} from '../domain/usecases/messages.usecase';

export const storeReducers = (state = initialState, action: any) => {
  if (action.type === SET_PAGE) {
    return {
      ...state,
      page: action.page,
    };
  }
  if (action.type === SET_MESSAGES) {
    return {
      ...state,
      messages: action.messages,
    };
  }
  if (action.type === SET_MESSAGES_PAGINATED) {
    return {
      ...state,
      messages: state.messages.concat(action.messages),
    };
  }
  if (action.type === SET_REALTORS) {
    return {
      ...state,
      realtors: action.realtors,
    };
  }
  if (action.type === SET_SELECTED_REALTOR_ID) {
    return {
      ...state,
      selectedRealtorId: action.selectedRealtorId,
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
    return {
      ...state,
      unreadCount: action.unreadCount,
    };
  }
};

const StoreProvider = ({ children, initialState, reducer }: { children: ReactNode, initialState: Store, reducer: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={[state as Store, dispatch]}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
