import { IMAGES } from '../constants';

const imagesReducer = (state = [], { type, images }) => {
  switch (type) {
    case IMAGES.LOAD_SUCCESS:
      return [...images];

    case IMAGES.LOAD_MORE_SUCCESS:
      return [...state, ...images];

    default:
      return [...state];
  }
};

export default imagesReducer;
