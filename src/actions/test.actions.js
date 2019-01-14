import { getFilmsFromResults, getActorsFromResults } from '../utils';
import {
  RESULTS_EMPTY,
  RESULTS_LOADED,
  LOAD_RESULTS,
  RESULTS_ERROR
} from '../types';

export function createTest() {
  return async (dispatch, getState, api) => {
    function onSuccess(res) {
      const isEmpty = !res.results.length;
      return dispatch({
        type: isEmpty ? RESULTS_EMPTY : RESULTS_LOADED,
        payload: {
          films: getFilmsFromResults(res.results),
          actors: res.results
        }
      });
    }
    function onError(error) {
      return dispatch({ type: RESULTS_ERROR, error });
    }
    try {
      dispatch({ type: LOAD_RESULTS });
      const res = await api.personPopular();
      onSuccess(res);
    } catch (err) {
      onError(err);
    }
  };
}
