import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: {
    contacts: [
      { id: '1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: '2', name: 'Hermione Kline', number: '443-89-12' },
      { id: '3', name: 'Eden Clements', number: '645-17-79' },
      { id: '4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  // Об'єкт редюсерів
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push({ ...action.payload });
      },
      prepare(cont) {
        return {
          payload: {
            name: cont.name,
            number: cont.number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

const filtersSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    setContactFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { setContactFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
