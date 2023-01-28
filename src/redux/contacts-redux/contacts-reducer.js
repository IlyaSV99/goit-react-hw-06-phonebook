import { combineReducers } from '@reduxjs/toolkit';
import filterReducer from './contactsFilter/filter-reducer';
import itemsReducer from './items/items-reducer';

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
