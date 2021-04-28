import { ActionType } from '../action-types';

export interface AuthUserAction {
  type: ActionType.AUTH_USER;
  payload: string;
};

export interface AuthUserError {
  type: ActionType.AUTH_ERROR;
  payload: string;
}

export type Actions =
  AuthUserAction
  | AuthUserError;