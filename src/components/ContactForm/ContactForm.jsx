import PropTypes from 'prop-types';
import { Form, FormInput, ButtonAddContact } from './ContactForm.styled';

import { useDispatch } from 'react-redux';
import { addConact } from 'redux/contactsSlice';

export const ContactForm = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        dispatch(addConact(value));
        break;

      case 'number':
        dispatch(addConact(value));
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      addConact(form.elements.name.value),
      addConact(form.elements.number.value)
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>

      <label>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <ButtonAddContact type="submit" onSubmit={onSubmit}>
        Add contact
      </ButtonAddContact>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
