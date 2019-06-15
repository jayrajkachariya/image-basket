import { IMAGES } from '../constants';

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case IMAGES.LOAD:
      return true;
    case IMAGES.LOAD_SUCCESS:
    case IMAGES.LOAD_FAIL:
      return false;

    default:
      return state;
  }
};

const loadingMoreReducer = (state = false, { type }) => {
  switch (type) {
    case IMAGES.LOAD_MORE:
      return true;
    case IMAGES.LOAD_MORE_SUCCESS:
    case IMAGES.LOAD_MORE_FAIL:
      return false;

    default:
      return state;
  }
};

export { loadingReducer, loadingMoreReducer };
