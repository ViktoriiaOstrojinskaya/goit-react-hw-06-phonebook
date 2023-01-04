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

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(state => state.contacts);

  return (
    <List>
      <ListTitle>You have {contactsList.length} contacts</ListTitle>
      {contactsList.map(({ id, name, number }) => (
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
