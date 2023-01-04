import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
//import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { Box } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const contactsList = useSelector(state => state.contacts);

  // const addNewContact = (name, number) => {
  //   const normalizedName = name.toLowerCase();
  //   const checkName = contacts.some(contact =>
  //     contact.name.toLowerCase().includes(normalizedName)
  //   );

  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   return checkName
  //     ? alert(`${name} is already in contacts`)
  //     : setContacts(prevState => [...prevState, newContact]);
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  // const filterNames = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <Box>
      <Title title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      {/* <Filter /> */}
      <ContactList />
    </Box>
  );
}
