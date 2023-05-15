import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { filterContact } from 'redux/selectors';
import { List, Item, Text, Button } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(filterContact);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Button type="submit" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
