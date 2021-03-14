import { action } from 'typesafe-actions';
import { ISignUpRequest, ISignUpResponse } from './types';

export function signUpRequest({
  name,
  email,
  password,
}: ISignUpRequest) {
  return action('@user/SIGN_UP_REQUEST', { name, email, password });
}

export function signUpSuccess({
  id,
  name,
  email,
  password,
}: ISignUpResponse) {
  return action('@user/SIGN_UP_SUCCESS', {
    id, name, email, password,
  });
}

export function signUpFailure() {
  return action('@user/SIGN_UP_FAILURE');
}
