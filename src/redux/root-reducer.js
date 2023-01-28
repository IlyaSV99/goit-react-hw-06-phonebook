import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contacts-redux/contacts-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});
export default rootReducer;
