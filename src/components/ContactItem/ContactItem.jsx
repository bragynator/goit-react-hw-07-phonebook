import { useDeleteContactMutation } from 'services/contactsApi';
import styles from './ContactItem.module.css';

export function ContactItem({ id, name, number }) {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <li key={id} className={styles.contactItem}>
      <p>
        {name} : {number}
      </p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
}
