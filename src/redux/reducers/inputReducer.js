import { INPUT } from '../constants';

const inputReducer = (state = '', { type, input }) => {
  if (type === INPUT.CHANGE) {
    return input;
  }
  return state;
};

export default inputReducer;
