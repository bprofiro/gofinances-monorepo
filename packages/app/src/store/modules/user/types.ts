import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type UserAction = ActionType<typeof actions>;

export interface UserState {
  readonly loadingSignUpRequest: boolean;
  readonly name: string | null;
  readonly email: string | null;
  readonly password: string | null;
  readonly error: boolean;
}

export interface ISignUpRequest {
  name: string;
  email: string;
  password: string;
}

export interface ISignUpResponse {
  id: string;
  name: string;
  email: string;
  password: string;
}
