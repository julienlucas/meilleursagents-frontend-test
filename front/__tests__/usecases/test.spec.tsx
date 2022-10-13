// import {
//     createFunctionKeyUC,
//     deleteFunctionKeyUC,
// } from '../../../app/domain/usecases/functionKey.usecase';
// import { hostedTelephonyStore } from '../../../app/store/hostedTelephonyStore';
// import { Store } from '../../../app/store';

import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';
import { renderHook } from '@testing-library/react-hooks';
import { initialState, storeReducers } from '../../store';
import StoreProvider, { useStore, StoreContext } from '../../store';
import Header from '../../userinterface/components/Header/Header';

const state = { realtors: [] };
const dispatch = jest.fn();

const wrapper = () => (
  <StoreContext.Provider value={[state, dispatch]}></StoreContext.Provider>
);

const mockUseContext = jest.fn().mockImplementation(() => ({ state, dispatch }));
React.useContext = mockUseContext;

// describe('<AuthProvider />', () => {
//   test('provides expected AuthContext obj to child elements', () => {
//     render(
//       <StoreProvider initialState={initialState} reducer={storeReducers}>
//         <p>fdsfdsfds</p>
//       </StoreProvider>
//     );
//   });
// });

describe('useFeature test', () => {
  test('should return present feature toggles  with its state and dispatch function', () => {
    render(
      <StoreProvider initialState={initialState} reducer={storeReducers}></StoreProvider>,
    );
    const { result } = renderHook(() => useStore(), { wrapper });

    // expect(result.state.messages.length).toBe(0);
    // expect(result.current).toEqual({ state, dispatch });
  });
});

/* eslint-disable no-var */
var mockGetFunctionKeyTemplatesByOrgId;
var mockCreateFunctionKey;
var mockUpdateFunctionKey;
var mockDeleteFunctionKey;
/* eslint-disable no-var */

// jest.mock('../../../app/infrastructure/FunctionKeyGateway', () => {
//     mockGetFunctionKeyTemplatesByOrgId = jest.fn();
//     mockCreateFunctionKey = jest.fn();
//     mockUpdateFunctionKey = jest.fn();
//     mockDeleteFunctionKey = jest.fn();

//     const mock = {
//         getFunctionKeyTemplatesByOrgId: mockGetFunctionKeyTemplatesByOrgId,
//         createFunctionKey             : mockCreateFunctionKey,
//         updateFunctionKey             : mockUpdateFunctionKey,
//         deleteFunctionKey             : mockDeleteFunctionKey,
//     };

//     return {
//         getInstance: () => mock,
//     };
// });

// beforeEach(() => {
//     mockGetFunctionKeyTemplatesByOrgId.mockClear();
//     mockCreateFunctionKey.mockClear();
//     mockUpdateFunctionKey.mockClear();
//     mockDeleteFunctionKey.mockClear();
// });

// describe('FunctionKey usecases', () => {
//   describe('createFunctionKeyUC', () => {
//       it('throws when creating a key without a selected template', async () => {
//           hostedTelephonyStore.update(() => ({
//               functionKeyTemplates: {
//                   data: null,
//               },
//               selectedTemplateId: null,
//           }));
//     mockCreateFunctionKey.mockImplementation((res) => ({ ...res, id: 'f3' }));
//     const functionKeyToBeCreated = {
//         keyNumber  : 3,
//         keyLabel   : 'Accueil',
//         destination: '0113221218',
//         keyType    : 'Raccourci',
//         locked     : true,
//     };
//     try {
//         await createFunctionKeyUC(functionKeyToBeCreated);
//     } catch (err) {
//         expect(err).toContainEqual('no function key template in store');
//     }
// });
//   });
// });
