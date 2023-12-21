import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contactsSlice',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    updateContactState: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    addContact: {
      prepare: ({ name, number }) => {
        return {
          payload: {
            id: nanoid(5),
            name,
            number,
          },
        };
      },

      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
    },
  },
});

export const { deleteContact, updateContactState, changeFilter, addContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
