import * as types from './types';

const initialState = {  //initial state of reducer for this component in redux store.
  value: 0,
  receivedAt: null,
  isFetching: false,
  getApiData: [],
  postApiDataStatus: 'no post data',
  putApiDataStatus: 'no put data',
  deleteApiDataStatus: 'no delete data',
};

//This function handles operations which needs to be performed 
//depending on the action Type and payload of the action triggered.
const IncDecReducer = (state = initialState, action) => {
  switch (action.type) { // 'switch' case based on action type
    case types.INCREMENT:
      return {
        ...state,
        value: state.value + 1,
        receivedAt: Date.now(),
      };
    case types.DECREMENT:
      return {
        ...state,
        value: state.value - 1,
        receivedAt: Date.now(),
      };
    case types.FETCH:
      return {
        ...state,
        isFetching: true
      };
    case types.GET_API_DATA:
      return {
        ...state,
        getApiData: action.payload,
        isFetching: false
      }
    case types.POST_API_STATUS:
      return {
        ...state,
        postApiDataStatus: action.payload,
        isFetching: false
      }
    case types.PUT_API_STATUS:
      return {
        ...state,
        putApiDataStatus: action.payload,
        isFetching: false
      }
    case types.DELETE_API_STATUS:
      return {
        ...state,
        deleteApiDataStatus: action.payload,
        isFetching: false
      }
    case types.GET_API_DATA_WITH_DELAY:
      return {
        ...state,
        getApiData: action.payload,
        isFetching: false
      }
    default:
      return state;
  }
};

export default IncDecReducer;
