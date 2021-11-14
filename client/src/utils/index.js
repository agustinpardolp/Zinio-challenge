import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import LanguageWrapper from '../components/LenguageWrapper';

export const getFullWrappedComponent = (
  Component,
  props = {},
  reduxStore = store,
) => (
  <BrowserRouter>
    <MemoryRouter>
      <LanguageWrapper>
        <Provider store={reduxStore}>
          <Component {...props} />
        </Provider>
      </LanguageWrapper>
    </MemoryRouter>
  </BrowserRouter>
);

export const debounce = (func, timeout = DEBOUNCE_DELAY_TIME) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};

export const DEBOUNCE_DELAY_TIME = 200;