import { combineReducers } from 'redux';

import contact from './counter';

const appReducer = combineReducers({
  contact: contact
});

export default appReducer;