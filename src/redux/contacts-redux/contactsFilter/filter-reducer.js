import { createReducer } from '@reduxjs/toolkit';
import { makeFilter } from './filter-actions';

const filterReducer = createReducer('', {
  [makeFilter]: (store, { payload }) => {
    return payload;
  },
});
export default filterReducer;
