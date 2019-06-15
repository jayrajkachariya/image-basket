import { combineReducers } from 'redux';

import { loadingReducer, loadingMoreReducer } from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import inputReducer from './inputReducer';

const rootReducer = combineReducers({
  input: inputReducer,
  isLoading: loadingReducer,
  images: imagesReducer,
  error: errorReducer,
  nextPage: pageReducer,
  isLoadingMore: loadingMoreReducer
});

export default rootReducer;
