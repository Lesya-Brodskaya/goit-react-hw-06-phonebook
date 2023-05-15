import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Label>
        Find contacts by name
        <Input
          type="text"
          onChange={event => dispatch(setFilter(event.currentTarget.value))}
        ></Input>
      </Label>
    </>
  );
};

export default Filter;
