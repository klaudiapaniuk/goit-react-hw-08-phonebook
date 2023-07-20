import styles from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredContacts,
  selectError,
  selectLoading,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {!filteredContacts?.length && !error && !loading && (
        <p>No contacts. Enter data</p>
      )}
      {error && <p>{error}</p>}

      <ul className={styles.contact_list}>
        {filteredContacts.map(contact => {
          return (
            <li key={contact.id} className={styles.item_list}>
              <ContactListItem contact={contact} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
