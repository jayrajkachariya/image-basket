import { IMAGES, INPUT } from '../constants';

const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
    case IMAGES.LOAD_MORE_SUCCESS:
      return state + 1;

    case INPUT.CHANGE:
      return 1;

    default:
      return state;
  }
};

export default pageReducer;
