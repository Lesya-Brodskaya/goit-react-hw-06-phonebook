import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const contactsSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push({
        id: shortid.generate(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },

    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
