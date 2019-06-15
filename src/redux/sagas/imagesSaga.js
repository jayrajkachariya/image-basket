import { put, call, takeEvery, select } from 'redux-saga/effects';

import { setImages, setError, setMoreImages } from '../actions';
import { IMAGES } from '../constants';
import { fetchImages } from '../../api';

export const getPage = state => state.nextPage;

export const getSearch = state => state.input;

export function* handleImagesLoad(loadingMore) {
  try {
    const page = yield select(getPage);
    const query = yield select(getSearch);
    const images = yield call(fetchImages, { query: query, page: page });
    const filteredImages = images.map(img => img.assets.preview.url);
    if (loadingMore) {
      yield put(setMoreImages(filteredImages));
    } else {
      yield put(setImages(filteredImages));
    }
  } catch (error) {
    console.log(error);
    yield put(setError(error.toString()));
  }
}

export function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, () => handleImagesLoad(false));
}

export function* watchMoreImagesLoad() {
  yield takeEvery(IMAGES.LOAD_MORE, () => handleImagesLoad(true));
}
