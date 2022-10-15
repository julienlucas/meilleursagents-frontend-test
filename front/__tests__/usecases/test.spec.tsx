import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
import { getMessagesUC } from '../../domain/usecases/messages.usecase';
import App from '../../App';
import { store } from '../../store/store';

var mockInstance;
jest.mock('../../infrastructure/MessagesGateway', () => {
  mockInstance = jest.fn();

  const mock = {
    getMessages: () => 'fsdfdsfds',
  };

  const mockMessages = {
    messages: 'MESSAGES',
  };

  return {
    getInstance: () => mock,
    getMessages: () => mockMessages,
  };
});

describe('useFeature test', () => {
  test('should return present feature toggles  with its state and dispatch function', async () => {
    render(<App store={store} />);
    // await render(
    //   <StoreProvider initialState={initialState} reducer={storeReducers}>
    //     <></>
    //   </StoreProvider>,
    // );
    // const { result, rerender, waitForNextUpdate } = renderHook(() => useStore(), { wrapper });

    await waitFor(() => store.dispatch(getMessagesUC('101')));
    expect(store.getState()).toBe(2);
  });
});
