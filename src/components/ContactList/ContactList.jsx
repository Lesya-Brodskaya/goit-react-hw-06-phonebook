import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { List, Item, Text, Button } from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = ({ listContact }) => {
  const dispatch = useDispatch();

  return (
    <List>
      {listContact.map(({ id, name, number }) => {
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
