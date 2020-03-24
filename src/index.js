import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import App from './containers/App';
import store from './store/store';
import Routes from './routes';

render(
  <Provider store={store}>
    {/* <App /> */}
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
