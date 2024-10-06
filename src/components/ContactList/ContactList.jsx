import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);


  return (
    <ul className="contact-list">
      {contacts.map((item) => (
        <li key={item.id}>
        <Contact  contact={item} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
