import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

export const store = createStore(reducers, {
  auth: { authenticated: localStorage.getItem('token') || '' }
}, applyMiddleware(reduxThunk));