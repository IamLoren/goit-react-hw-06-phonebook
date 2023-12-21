import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsSlice.js';
import s from './InputField.module.css';

export const InputField = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleValueChange = (event) => {
    if (event.target.name === 'number') {
      setNumber(event.target.value);
    }
    if (event.target.name === 'name') {
      setName(event.target.value);
    }
  };

  const createContact = (event) => {
    event.preventDefault();

    if (contacts.some((contact) => contact.name === name)) {
      alert(`Contact with the name ${name} already exists!`);
      return;
    }

    dispatch(addContact({ name, number }));

    setNumber('');
    setName('');
  };

    return (
      <form className={s.formInput} onSubmit={createContact}>
        <label className={s.nameLabel}>
          Name <br />
          <input
          className={s.nameInput}
            name="name"
            value={name}
            type="text"
            placeholder='Enter contact name'
            onChange={handleValueChange}
          />
        </label>

        <label className={s.numberLabel}>
          Number <br />
          <input
          className={s.numberInput}
            name="number"
            value={number}
            type="tel"
            placeholder='Enter contact number'
            onChange={handleValueChange}
            required
          />
        </label>
        <button className={s.searchBTN} type="submit">Add contact</button>
      </form>
    );
}
