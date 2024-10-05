import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;