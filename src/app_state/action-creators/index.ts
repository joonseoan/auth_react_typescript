import axios from 'axios';

import { ActionType } from '../action-types';
import { FormProps } from '../../components/auth/signup';
import { Dispatch } from 'redux';
import {AuthUserAction, AuthUserError} from '../actions';


export const signup = ({ email, password }: FormProps, callback: () => void) => {
  return async (dispatch: Dispatch) => {
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

export const signout = () => {
  localStorage.clearItem('token');
  return { type: ActionType.AUTH_USER, payload: '' };
}