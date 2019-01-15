import {
  LOAD_RESULTS,
  RESULTS_EMPTY,
  RESULTS_LOADED,
  RESULTS_ERROR
} from '../types';

const initialState = {
  isLoading: false,
  isLoaded: false,
  isEmpty: false,
  isError: false,
  films: [],
  actors: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RESULTS:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isError: false,
        isEmpty: false
      };
    case RESULTS_EMPTY:
      return {
        ...state,
        isEmpty: true,
        isLoading: false,
        isLoaded: true
      };
    case RESULTS_LOADED:
      return {
        ...state,
        isLoading: false,
        isEmpty: false,
        isLoaded: true,
        ...action.payload
      };
    case RESULTS_ERROR:
      return {
        ...state,
        isLoaded: true,
        isEmpty: false,
        isLoading: false,
        isError: true,
        ...action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;
