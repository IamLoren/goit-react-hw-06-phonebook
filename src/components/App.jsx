import { InputField } from './InputField/InputField';
import { ContactsList } from './contactsList/ContactsList';

import { SearchFilter } from './SearchFilter/SearchFilter';
import { useEffect, useState } from 'react';

export const App =() => {

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ])
  const [filter, setFilter] = useState('');

  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

const  deleteContact = (id) => {
    setContacts(prevState => (prevState.filter(contact => contact.id !== id)))
  }

  const updateContactState = (newContact) => {
  setContacts((prevState) => [...prevState, newContact]);
};

  const changeFilter = (event) => {
    setFilter(event.target.value)
  }

  const getFilteredData = () => {
    if (filter) {
      return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
    return contacts;
  }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <InputField contacts={contacts} updateContactState={updateContactState}/>

         <h2>Contacts</h2>
        <ContactsList contacts={contacts} getFilteredData={getFilteredData} deleteContact={deleteContact}>
          <SearchFilter changeFilter={changeFilter} filterState={filter} />
        </ContactsList>
      </div>
    );
}
