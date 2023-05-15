import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

const getFilter = state => state.filter;

export const filterContact = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
