import { IMAGES, INPUT } from '../constants';

const changeInput = input => ({
  type: INPUT.CHANGE,
  input
});

const loadImages = () => ({
  type: IMAGES.LOAD
});

const setImages = images => ({
  type: IMAGES.LOAD_SUCCESS,
  images
});

const setError = error => ({
  type: IMAGES.LOAD_FAIL,
  error
});

const loadMoreImages = () => ({
  type: IMAGES.LOAD_MORE
});

const setMoreImages = images => ({
  type: IMAGES.LOAD_MORE_SUCCESS,
  images
});

export { loadImages, setImages, setError, changeInput, loadMoreImages, setMoreImages };
