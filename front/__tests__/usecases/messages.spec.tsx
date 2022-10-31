import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  getMessagesUC,
  getSelectedMessageUC,
  getMessagesPaginatedUC,
  setDefaultSelectedMessageUC,
  setMessageReadedUC,
} from '../../domain/usecases/messages.usecase';
import { getRealtorsUC } from '../../domain/usecases/realtors.usecase';
import App from '../../App';
import { store } from '../../store/store';
import { setPage, resetStore } from '../../store/reducers';

var mockInstance;
var mockSelectedMessage = {
  body: "Lorem Ipsum #10117 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  contact: {
    email: 'jwilliams@gmail.com',
    firstname: 'James',
    lastname: 'Williams',
    phone: '0691231825',
  },
  date: '2022-10-07T08:33:59.404454',
  id: 10117,
  read: false,
  subject: 'SMS #10117',
  type: 'sms',
};
var mock1stMessage = {
  body: 'Lorem Ipsum #10110 is simply dummy text.',
  contact: {
    email: 'tbrown@gmail.com',
    firstname: 'Thomas',
    lastname: 'Brown',
    phone: '0666106982',
  },
  date: '2022-10-15T12:22:10.208969',
  id: 10110,
  read: false,
  subject: 'Email #10110',
  type: 'email',
};
var mock2ndMessage = {
  body: 'Lorem Ipsum #10112 is simply dummy text.',
  contact: {
    email: 'ddavis@gmail.com',
    firstname: 'David',
    lastname: 'Davis',
    phone: '0642289973',
  },
  date: '2022-10-06T12:22:10.209061',
  id: 10112,
  read: false,
  subject: 'Appel #10112',
  type: 'phone',
};
var newMessages = [
  {
    body: "Lorem Ipsum #10102 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    contact: {
      email: 'dsmith@gmail.com',
      firstname: 'David',
      lastname: 'Smith',
      phone: '0666438682',
    },
    date: '2022-09-22T08:33:59.404015',
    id: 10102,
    read: false,
    subject: 'SMS #10102',
    type: 'sms',
  },
];
var mock1stMessageReaded = { ...mock1stMessage, read: true };
var messages = [mock1stMessage, mock2ndMessage];

jest.mock('../../infrastructure/MessagesGateway', () => {
  mockInstance = jest.fn();

  const mock = {
    getMessages: () => messages,
    getSelectedMessage: () => mockSelectedMessage,
    setMessageReaded: () => mock1stMessageReaded,
  };

  return {
    getInstance: () => mock,
  };
});

var mockRealtors = [
  {
    id: 101,
    logo: 'http://placehold.it/100x100?text=Agence+101',
    name: 'Agence #101',
    unread_messages: 80,
  },
  {
    id: 102,
    logo: 'http://placehold.it/100x100?text=Agence+102',
    name: 'Agence #102',
    unread_messages: 78,
  },
];

jest.mock('../../infrastructure/RealtorsGateway', () => {
  mockInstance = jest.fn();

  const mock = {
    getRealtors: () => mockRealtors,
  };

  return {
    getInstance: () => mock,
  };
});

const observe = jest.fn();
const unobserve = jest.fn();

// @ts-ignore: Unreachable code error
window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}));

describe('getMessages usecase test', () => {
  beforeEach(() => {
    store.dispatch(resetStore());
  });

  test('should fetch fetch & set new messages when pagination + 1', async () => {
    render(<App store={store} />);
    const mockRealtorId = '101';

    expect(store.getState().messages).toHaveLength(0);
    await waitFor(() => store.dispatch(getMessagesUC(mockRealtorId)));
    expect(store.getState().messages).toHaveLength(2);
    expect(store.getState().page).toBe(1);

    // Change mocks for next API call
    messages = [...messages, ...newMessages];
    await waitFor(() => store.dispatch(setPage()));

    expect(store.getState().page).toBe(2);
    expect(store.getState().messages).toHaveLength(5);
  });

  test('should fetch & return messages in store', async () => {
    const mockRealtorId = '101';

    // Change mocks for next API call
    messages = [mock1stMessage, mock2ndMessage];

    expect(store.getState().messages).toHaveLength(0);
    await waitFor(() => store.dispatch(getMessagesUC(mockRealtorId)));
    expect(store.getState().messages).toHaveLength(2);
  });

  test('should fetch with pagination & return messages in store', async () => {
    const page = store.getState().page;
    const mockRealtorIdAndParms = {
      selectedRealtorId: '101',
      params: `page=${page}`,
    };

    expect(store.getState().messages).toHaveLength(0);
    await waitFor(() => store.dispatch(getMessagesPaginatedUC(mockRealtorIdAndParms)));
    expect(store.getState().messages).toHaveLength(2);
  });

  test('should fetch & return selectedMessage in store', async () => {
    const mockRealtorIdAndMessageId = {
      selectedRealtorId: '101',
      messageId: '10110',
    };

    expect(store.getState().selectedMessage).toBe(null);
    await waitFor(() => store.dispatch(getSelectedMessageUC(mockRealtorIdAndMessageId)));
    expect(store.getState().selectedMessage).toBe(mockSelectedMessage);
  });

  test('should fetch & return defaultSelectedMessage in store', async () => {
    const mockRealtorId = '101';

    expect(store.getState().messages).toHaveLength(0);
    await waitFor(() => store.dispatch(setDefaultSelectedMessageUC(mockRealtorId)));
    expect(store.getState().selectedMessage).toBe(mock1stMessage);
  });

  test('should post message as readed & return new fetched messages in store', async () => {
    const mockRealtorIdAndMessageId = {
      realtorId: '101',
      messageId: '10110',
    };
    const mockRealtorId = '101';

    expect(store.getState().messages).toHaveLength(0);
    await waitFor(() => store.dispatch(getMessagesUC(mockRealtorId)));
    await waitFor(() => store.dispatch(getRealtorsUC(mockRealtorId)));
    expect(store.getState().unreadCount).toBe(80);

    // Change mocks for next API call
    mockRealtors = [
      {
        id: 101,
        logo: 'http://placehold.it/100x100?text=Agence+101',
        name: 'Agence #101',
        unread_messages: 79,
      },
    ];
    mock1stMessage = {
      ...mock1stMessage,
      read: true,
    };
    messages = [mock1stMessage, mock2ndMessage];

    await waitFor(() => store.dispatch(setMessageReadedUC(mockRealtorIdAndMessageId)));
    expect(store.getState().unreadCount).toBe(79);

    const message = store
      .getState()
      .messages.filter((m) => m.id.toString() === mockRealtorIdAndMessageId.messageId);
    expect(message[0]).toBe(mock1stMessage);
  });
});
