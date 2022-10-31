import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  getRealtorsUC,
  setSelectedRealtorUC,
} from '../../domain/usecases/realtors.usecase';
import App from '../../App';
import { store } from '../../store/store';
import { resetStore } from '../../store/reducers';

var mockInstance;
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
  {
    id: 103,
    logo: 'http://placehold.it/100x100?text=Agence+103',
    name: 'Agence #103',
    unread_messages: 79,
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

var localStorageMock = (() => {
  var store = {};
  return {
    getItem: function (key) {
      return store[key];
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key) {
      delete store[key];
    },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const observe = jest.fn();
const unobserve = jest.fn();

// @ts-ignore: Unreachable code error
window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}));

describe('getRealtors usecase test', () => {
  beforeEach(() => {
    store.dispatch(resetStore());
  });

  test('should fetch & return realtors & unreadcount in store', async () => {
    const mockRealtorId = '101';

    expect(store.getState().realtors).toHaveLength(0);
    await waitFor(() => store.dispatch(getRealtorsUC(mockRealtorId)));
    expect(store.getState().realtors).toHaveLength(3);
    expect(store.getState().unreadCount).toBe(80);
  });

  test('should set realtordId in localstorage', async () => {
    const mockRealtorId = '101';

    expect(store.getState().realtors).toHaveLength(0);
    expect(localStorageMock.getItem('selectedRealtorId')).toBe(undefined);
    await waitFor(() => store.dispatch(setSelectedRealtorUC(mockRealtorId)));
    expect(localStorageMock.getItem('selectedRealtorId')).toBe('101');
  });
});
