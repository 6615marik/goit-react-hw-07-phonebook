import { addContacts } from 'redux/operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
export const Form = () => {
  const contacts = useSelector(getContacts);
  // console.log(contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const takeInputValue = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };
  const formSubmit = e => {
    e.preventDefault();
    const match = contacts.find(
      contact => contact.name === name && contact.number === number
    );
    if (match) {
      alert(`${name} already in contacts!!!`);
    } else {
      const cont = {
        name,
        number,
      };
      dispatch(addContacts(cont));
      setName('');
      setNumber('');
    }
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            onChange={takeInputValue}
            value={name}
          />
          <label htmlFor="number" />
          Number
          <input
            type="tel"
            name="number"
            onChange={takeInputValue}
            value={number}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
