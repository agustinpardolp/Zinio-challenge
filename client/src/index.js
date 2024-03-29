import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import LanguageWrapper from './components/LenguageWrapper';

ReactDOM.render(
  <LanguageWrapper>
    <App />
  </LanguageWrapper>,
  document.getElementById('root'),
);