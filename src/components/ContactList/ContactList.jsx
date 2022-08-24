import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { useGetContactsQuery } from 'services/contactsApi';
import styles from './ContactList.module.css';

export function ContactList() {
  const filter = useSelector(state => state.contacts.filter);
  const { data: contacts, isFetching } = useGetContactsQuery();

  const normalizedFilter = filter?.toLowerCase();
  const filteredContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={styles.contactList}>
      {!isFetching &&
        filteredContacts?.map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} number={phone} />
        ))}
    </ul>
  );
}
