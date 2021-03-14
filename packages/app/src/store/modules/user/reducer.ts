import { UserAction, UserState } from './types';

const INITIAL_STATE: UserState = {
  loadingSignUpRequest: false,
  email: null,
  name: null,
  password: null,
  error: false,
};

export default function user(
  state = INITIAL_STATE,
  action: UserAction,
): UserState {
  switch (action.type) {
    case '@user/SIGN_UP_REQUEST':
      return { ...state, loadingSignUpRequest: true };
    case '@user/SIGN_UP_SUCCESS':
      return {
        ...state,
        loadingSignUpRequest: false,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    case '@user/SIGN_UP_FAILURE':
      return {
        ...state,
        loadingSignUpRequest: false,
        error: true,
      };
    default:
      return state;
  }
}
