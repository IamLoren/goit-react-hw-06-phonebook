import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsSlice.js';
import s from './InputField.module.css';

export const InputField = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const createContact = event => {
    event.preventDefault(); 
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    event.target.elements.name.value ='';
    event.target.elements.number.value = '';
    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact with the name ${name} already exists!`);
      return;
    }

    dispatch(addContact({ name, number }));
   
  };

  return (
    <form className={s.formInput} onSubmit={createContact}>
      <label className={s.nameLabel}>
        Name <br />
        <input
          className={s.nameInput}
          name="name"
          type="text"
          placeholder="Enter contact name"
        />
      </label>

      <label className={s.numberLabel}>
        Number <br />
        <input
          className={s.numberInput}
          name="number"
          type="tel"
          placeholder="Enter contact number"
          required
        />
      </label>
      <button className={s.searchBTN} type="submit">
        Add contact
      </button>
    </form>
  );
};
