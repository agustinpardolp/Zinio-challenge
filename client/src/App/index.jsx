import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { store } from '../store';
import Main from '../screens/Main';

function App(props) {
  return (
    <Provider store={store}>
      <Router>
          <Main props={props} />
      </Router>
    </Provider>
  );
}

export default App;
