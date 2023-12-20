import { ContactItem } from 'components/ContactItem/ContactItem';
import s from './ContactList.module.css';

export const ContactsList = ({ contacts, getFilteredData, children, deleteContact }) => {
  const filteredContacts = getFilteredData(contacts);

    return ( 
    <>
   {children}
   {
    filteredContacts.length === 0 
    ? (<p className={s.noMatchesVessage}>No contacts match your search</p>)
    : ( <ul className={s.listOfContacts}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} deleteContact={deleteContact}/>
      ))}
    </ul>)
   }
    </>  
  );
};
