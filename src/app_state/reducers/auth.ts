import { ActionType } from '../action-types';
import { Actions } from '../actions';
export interface AuthReducerState {
  authenticated: string;
  errorMessage?: string;
}

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '',
}

const authReducer = (state: AuthReducerState = INITIAL_STATE, action: Actions) => {
  switch(action.type) {
    case ActionType.AUTH_USER:
      console.log('action.payload ------> ', action.payload)
      return { ...state, authenticated: action.payload };
    case ActionType.AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default authReducer;