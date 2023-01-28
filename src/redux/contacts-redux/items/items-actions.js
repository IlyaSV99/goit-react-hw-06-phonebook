import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contact/add', data => {
  return {
    payload: { ...data, id: nanoid() },
  };
});
export const removeContact = createAction('contact/remove');
