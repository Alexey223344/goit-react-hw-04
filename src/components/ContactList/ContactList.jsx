import Contact from '../Contact/Contact';
import s from './ContactList.module.css';


const ContactList = ({ userContacts, handleDeleteContactUser }) => {
  const createContact = userContacts.map(user => (
    <li className={s.contactItem} key={user.id}>
      <Contact user={user} handleDeleteContactUser={handleDeleteContactUser} />
    </li>
  ));
  return (
    <div>
      <ul className={s.contactList}>{createContact}</ul>
    </div>
  );
};
export default ContactList;