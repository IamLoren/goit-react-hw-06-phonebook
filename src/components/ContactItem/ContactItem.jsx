import React from 'react';
import s from './ContactItem.module.css';

export const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <li className={s.contactItem}>
      <span>{name}: </span>
      <span>{number}</span>
      <button className={s.deleteBTN} type="button" onClick={event => deleteContact(id, event)}>
        Delete
      </button>
    </li>
  );
};
