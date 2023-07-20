import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <span>{contact.name}: </span>
      <span>{contact.number}</span>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </>
  );
};
