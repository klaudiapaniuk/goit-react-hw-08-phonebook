import { Form } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactListItem } from '../components/ContactListItem/ContactListItem';
import { Filter } from '../components/Filter/Filter';

const ContactsPage = () => {
  return (
    <div>
      <Form />
      <Filter />
      <ContactList>
        <ContactListItem />
      </ContactList>
    </div>
  );
};

export default ContactsPage;
