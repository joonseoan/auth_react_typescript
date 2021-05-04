import axios from 'axios';

import { ActionType } from '../action-types';
import { FormProps } from '../../components/auth/signup';
import { Dispatch } from 'redux';
import {AuthUserAction, AuthUserError} from '../actions';

export const signup = ({ email, password }: FormProps, callback: () => void): (dispatch: Dispatch) => Promise<void> => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const {data} = await axios.post('http://localhost:3090/signup', {
        email,
        password
      });
  
      if (!data) {
        throw new Error('Unable to signup');
      }

      dispatch<AuthUserAction>({ type: ActionType.AUTH_USER, payload: data.token });
      localStorage.setItem('token', data.token);
      callback();
    } catch(e) {
      dispatch<AuthUserError>({ type: ActionType.AUTH_ERROR, payload: 'Email in use' });
    }
  }
};

export const signin = ({ email, password }: FormProps, callback: () => void): (dispatch: Dispatch) => Promise<void> => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const {data} = await axios.post('http://localhost:3090/signin', {
        email,
        password
      });
  
      if (!data) {
        throw new Error('Unable to signin');
      }

      dispatch<AuthUserAction>({ type: ActionType.AUTH_USER, payload: data.token });
      localStorage.setItem('token', data.token);
      callback();
    } catch(e) {
      dispatch<AuthUserError>({ type: ActionType.AUTH_ERROR, payload: 'Invalid login credentials.' });
    }
  }
};

// the return without redux thunk@@@@
export const signout = (): AuthUserAction => {
  localStorage.removeItem('token');
  return { type: ActionType.AUTH_USER, payload: '' };
}

