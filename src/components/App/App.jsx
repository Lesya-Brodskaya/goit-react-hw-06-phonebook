import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Container, Phonebook, Contacts } from './App.styled';

const App = () => {
  return (
    <Container>
      <Phonebook>Phonebook</Phonebook>
      <ContactForm />

      <Contacts>Contacts</Contacts>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
