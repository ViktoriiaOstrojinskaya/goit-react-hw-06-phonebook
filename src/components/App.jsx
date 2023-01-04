import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { Box } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();
  const contactsList = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filters);

  const addNewContact = (id, name, number) => {
    contactsList.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(id, name, number));
  };

  const filterNames = () => {
    const normalizedFilter = filter.toLowerCase();
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Box>
      <Title title="Phonebook" />
      <ContactForm onSubmit={addNewContact} />
      <Title title="Contacts" />
      <Filter onChange={filterNames} />
      <ContactList />
    </Box>
  );
}
