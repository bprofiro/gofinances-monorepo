import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import { AxiosResponse } from 'axios';
import * as actions from './actions';
import api from '../../../services/api';
import { ISignUpResponse } from './types';

export function* signUp({
  payload,
}: ActionType<typeof actions.signUpRequest>) {
  try {
    const { name, email, password } = payload;

    const { data }: AxiosResponse<ISignUpResponse> = yield call(
      api.post,
      '/users',
      { name, email, password },
    );

    yield put(
      actions.signUpSuccess({
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    );
  } catch (err) {
    put(actions.signUpFailure());
  }
}

export default all([takeLatest('@user/SIGN_UP_REQUEST', signUp)]);
