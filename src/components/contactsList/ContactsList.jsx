import { ContactItem } from 'components/ContactItem/ContactItem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';

export const ContactsList = ({children }) => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter?.toLowerCase() || '')
  );

    return ( 
    <>
   {children}
   {
    filteredContacts.length === 0 
    ? (<p className={s.noMatchesVessage}>No contacts match your search</p>)
    : ( <ul className={s.listOfContacts}>
      {filteredContacts?.map(({name, number, id}) => (
        <ContactItem key={id} name={name} number={number} id={id}/>
      ))}
    </ul>)
   }
    </>  
  );
};
