import { all } from 'redux-saga/effects';

import { watchImagesLoad, watchMoreImagesLoad } from './imagesSaga';

export default function* rootSaga() {
  yield all([watchImagesLoad(), watchMoreImagesLoad()]);
}
