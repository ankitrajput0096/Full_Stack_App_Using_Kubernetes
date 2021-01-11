import * as types from './types';

const getState = state => state[types.NAMESPACE];

const getValue = state => getState(state).value;
const getGETApitData = state => getState(state).getApiData;
const isFetching = state => getState(state).isFetching;
//Similarly, can add more redux state variables selectors

export default {
  getValue,
  getGETApitData,
  isFetching,
  //can export more selectors
};
