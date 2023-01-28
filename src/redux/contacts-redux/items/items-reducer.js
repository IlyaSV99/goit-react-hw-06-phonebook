import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact } from './items-actions';

const itemsReducer = createReducer([], {
  [addContact]: (store, { payload }) => {
    store.push(payload);
  },
  [removeContact]: (store, { payload }) => {
    return store.filter(({ id }) => id !== payload);
  },
});

export default itemsReducer;
