import React from 'react';
import { render as rtRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'
import { initialState as reducerInitialState, reducer } from '../reducers'
import App from '../App'

function render(ui, {
  initialState = reducerInitialState,
  store = createStore(reducer, initialState),
  ...renderOptions
} = {}) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react';

export { render }
