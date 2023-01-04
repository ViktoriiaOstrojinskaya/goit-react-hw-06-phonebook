//import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters);

  const filterNames = event => {
    const changeInput = event.target.value;
    dispatch(setFilter(changeInput));
  };

  return (
    <label>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={filterNames} />
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
