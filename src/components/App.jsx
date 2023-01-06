import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { Box } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

export default function App() {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);

  const addNewContact = (id, name, number) => {
    contactsList.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(
          addContact({
            id: nanoid(),
            name,
            number,
          })
        );
  };

  return (
    <Box>
      <Title title="Phonebook" />
      <ContactForm onSubmit={addNewContact} />
      <Title title="Contacts" />
      <Filter />
      <ContactList />
    </Box>
  );
}
