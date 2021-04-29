import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './app_state';
import App from './components/app';
import Welcome from './components/welcome';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import Signout from './components/auth/signout';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <App>
          <Route path="/" exact component={Welcome} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/feature" exact component={Feature} />
          <Route path="/signout" exact component={Signout} />
        </App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
