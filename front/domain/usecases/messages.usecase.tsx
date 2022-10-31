import MessagesGateway from '../../infrastructure/MessagesGateway';
import RealtorsGateway from '../../infrastructure/RealtorsGateway';
import { Message } from '../entities/message.interface';
import { Realtor } from '../entities/realtor.interface';
import { Store } from '../entities/store.interface';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMessagesUC = createAsyncThunk(
  'messages/fetchMessages',
  async (realtorId: string): Promise<Message> => {
    const messagesGateway = MessagesGateway.getInstance();
    try {
      const messages = await messagesGateway.getMessages(realtorId);

      return messages;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export const getMessagesPaginatedUC = createAsyncThunk(
  'messages/fetchMessagesPaginated',
  async ({
    selectedRealtorId,
    params,
  }: {
    selectedRealtorId: string;
    params: any;
  }): Promise<Message> => {
    const messagesGateway = MessagesGateway.getInstance();
    try {
      const messages = await messagesGateway.getMessages(selectedRealtorId, params);

      return messages;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export const getSelectedMessageUC = createAsyncThunk(
  'messages/fetchSelectedMessage',
  async ({
    selectedRealtorId,
    messageId,
  }: {
    selectedRealtorId: string;
    messageId: string;
  }): Promise<Message> => {
    const messagesGateway = MessagesGateway.getInstance();
    try {
      const message = await messagesGateway.getSelectedMessage(
        selectedRealtorId,
        messageId,
      );

      return message;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export const setDefaultSelectedMessageUC = createAsyncThunk(
  'messages/fetchDefaultSelectedMessage',
  async (realtorId: string): Promise<Message> => {
    const messagesGateway = MessagesGateway.getInstance();
    try {
      const messages = await messagesGateway.getMessages(realtorId);

      return messages[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export const setMessageReadedUC = createAsyncThunk(
  'messages/postMessageAsReaded',
  async (
    { realtorId, messageId }: { realtorId: string; messageId: string },
    { getState },
  ): Promise<{
    messages: Message[];
    unreadCount: number;
  }> => {
    const messagesGateway = MessagesGateway.getInstance();
    const realtorsGateway = RealtorsGateway.getInstance();

    try {
      const state: Store | any = getState();
      await messagesGateway.setMessageReaded(realtorId, messageId);

      const prevMessagesCount = state.messages.length;
      let messages;
      if (prevMessagesCount > 0) {
        messages = await messagesGateway.getMessages(
          realtorId,
          `&page_size=${prevMessagesCount}`,
        );
      }

      const realtors = await realtorsGateway.getRealtors();
      const unreadCount = realtors.filter(
        (realtor: Realtor) => realtor.id === Number(realtorId),
      )[0].unread_messages;

      return { messages, unreadCount };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
);

export const setSelectedMessageKeyPressUC = createAsyncThunk(
  'messages/setSelectedMessageWhenKeyPress',
  async (key: string, { getState, dispatch }) => {
    const state: Store | any = getState();
    const realtorId = state.selectedRealtorId.toString();
    const getMessageIndex = state.messages.findIndex(
      (message) => message.id === Number(state.selectedMessageId),
    );

    if (key === 'ArrowUp') {
      const messageId = state.messages[getMessageIndex - 1].id;
      dispatch(setMessageReadedUC({ realtorId, messageId }));

      return state.messages[getMessageIndex - 1];
    } else if (key === 'ArrowDown') {
      const messageId = state.messages[getMessageIndex + 1].id;
      dispatch(setMessageReadedUC({ realtorId, messageId }));

      return state.messages[getMessageIndex + 1];
    }
  },
);
