import * as types from './types';
import actions from './actions';
import reducer from './reducer';
import selectors from './selectors';
import utils from './utils';

//Note: reducer is exported separately
export default reducer;

//Note: other files in duck structure are exported with
// names accordingly.
export { 
    types, 
    actions, 
    selectors,
    utils
};
