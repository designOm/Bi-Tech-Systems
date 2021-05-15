import { combineReducers } from 'redux';

import authReducer from './auth';
import popupReducer from './popup';
import filterReducer from './filterReducer'

const rootReducer = combineReducers({ authReducer,popupReducer,filterReducer });

export default rootReducer;