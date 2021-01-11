//Combining all the reducers of the applicaiton
import { combineReducers } from 'redux';
import IncDecReducer, { types as aboutUsTypes} from '../AboutUs/duck';
//import more reducers

const rootReducer = combineReducers({
  [aboutUsTypes.NAMESPACE]: IncDecReducer,
  //can add more reducers here
});

export default rootReducer;
