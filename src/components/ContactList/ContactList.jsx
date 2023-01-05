//import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListTitle,
  ButtonDelete,
  ContactItem,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilters } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);
  const filterName = useSelector(getFilters);

  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(filterName)
  );

  return (
    <List>
      <ListTitle>You have {filteredContacts.length} contacts</ListTitle>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ContactItem>
            {name}: {number}
          </ContactItem>
          <ButtonDelete
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ButtonDelete>
        </ListItem>
      ))}
    </List>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
