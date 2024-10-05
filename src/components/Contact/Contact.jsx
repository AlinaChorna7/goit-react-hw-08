import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operation';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className="contact-item">
      {contact.name}: {contact.number}
      <button onClick={handleDelete} className="delete-button">Delete</button>
    </li>
  );
};

export default Contact;