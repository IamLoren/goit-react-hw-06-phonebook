import React from 'react';
import s from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsSlice.js';

export const ContactItem = ({name, number, id}) => {

const dispatch = useDispatch();

  return (
    <li className={s.contactItem}>
      <span>{name}: </span>
      <span>{number}</span>
      <button className={s.deleteBTN} type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};
