//import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = event => {
    const value = event.target.value.toLowerCase();
    dispatch(setContactsFilter(value));
  };

  return (
    <label>
      Find contacts by name
      <FilterInput type="text" onChange={handleFilter} />
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
