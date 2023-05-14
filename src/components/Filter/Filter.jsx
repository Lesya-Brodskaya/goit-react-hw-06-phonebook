import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilter } from 'redux/filterSlice';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filter}
          onChange={event => dispatch(setFilter(event.currentTarget.value))}
        ></Input>
      </Label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
