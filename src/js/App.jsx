import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Main from './components/Main';

const App = () => (
  <Provider store={store}>
    <Main/>
  </Provider>
);

export default App;
