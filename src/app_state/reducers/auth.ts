
export interface AuthReducerState {
  authenticated: string;
  errorMessage: string;
}

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '',
}

const authReducer = (state: AuthReducerState = INITIAL_STATE, action: any) => {
  return state;
};

export default authReducer;