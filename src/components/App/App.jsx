import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container, Phonebook, Contacts, AllСontacts } from './App.styled';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filterContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <Phonebook>Phonebook</Phonebook>
      <ContactForm />

      <Contacts>Contacts</Contacts>
      <AllСontacts>All contacts: {contacts.length}</AllСontacts>
      <Filter />
      <ContactList listContact={filterContact()} />
    </Container>
  );
};

export default App;
