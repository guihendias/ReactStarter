import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// Components
import App from './App';

// Reducers
import reducers from './reducers';

// Stylesheets
require('../scss/style.scss');

//const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <App/>, document.getElementById('container'));
