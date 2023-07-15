import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <span>{contact.name}: </span>
      <span>{contact.phone}</span>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </>
  );
};
