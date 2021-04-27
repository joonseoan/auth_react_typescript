import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './app_state';
import App from './components/app';
import Welcome from './components/welcome';
import Signup from './components/auth/signup';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <App>
          <Route path="/" component={Welcome} />
          <Route path="/signup" component={Signup} />
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
