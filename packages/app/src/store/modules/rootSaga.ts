import { all } from 'redux-saga/effects';

import user from './user/sagas';
import auth from './auth/sagas';

export default function* rootSaga() {
  yield all([user, auth]);
  return 0;
}
