import { IMAGES } from '../constants';

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case IMAGES.LOAD_FAIL:
    case IMAGES.LOAD_MORE_FAIL:
      return action.error;
    case IMAGES.LOAD:
    case IMAGES.LOAD_SUCCESS:
    case IMAGES.LOAD_MORE:
    case IMAGES.LOAD_MORE_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default errorReducer;
