import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom'
import StoreProvider, { useStore, StoreContext, initialState, storeReducers, setMessages, setPage } from '../../store';
import MessagesGateway from '../../infrastructure/MessagesGateway';
import { getMessagesUC } from '../../domain/usecases/messages.usecase';
import App from '../../App';
import Message from '../../userinterface/pages/Message/Message';

var mockInstance
jest.mock('../../infrastructure/MessagesGateway', () => {
  mockInstance = jest.fn();

  const mock = {
    getMessages: () => ''
  };

  const mockMessages = {
    messages: 'MESSAGES'
  };

  return {
    getInstance: () => mock,
    getMessages: () => mockMessages
  };
});

const state = initialState;
const dispatch = jest.fn();
const wrapper = ({ children }) => {
  return (
    <StoreContext.Provider value={[state, dispatch]}>{children}</StoreContext.Provider>
  )
}

const mockUseContext = jest.fn().mockImplementation(() => ({ state, dispatch }));
React.useContext = mockUseContext;


describe('useFeature test', () => {
  test('should return present feature toggles  with its state and dispatch function', async () => {
    await render(
      <StoreProvider initialState={initialState} reducer={storeReducers}>
        <></>
      </StoreProvider>,
    );
    const { result, rerender, waitForNextUpdate } = renderHook(() => useStore(), { wrapper });

    // const messagesGateway = MessagesGateway.getInstance();
    // // @ts-ignore: Unreachable code error
    // await MessagesGateway.getMessages("101");

    // await waitFor(() => getMessagesUC("101", dispatch))

    // const [top, deux] = useStore();
    // await waitFor(() => deux(setPage(3)))


    // @ts-ignore: Unreachable code error
      // await getMessagesUC("101",result.current.dispatch)

    //  await act(() =>  {
    //   // @ts-ignore: Unreachable code error
    //   result.current.dispatch(setPage(2))
    // })

  // @ts-ignore: Unreachable code error
    await waitFor(() => expect(result.current.state).toBe(2))

    // const action = {
    //   type: "SET_PAGE",
    //   page: 3
    // };

    // const updatedState = storeReducers(initialState, action);

    // expect(updatedState).toBe(2);

    // await waitFor(() => expect(wrapper).toBeInTheDocument());
  })
});