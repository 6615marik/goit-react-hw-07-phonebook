import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/slice';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  // console.log(contacts);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();
  let nanoId = nanoid();
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <li key={id || nanoId}>
              <p>
                <span>{name} : </span>
                {number}
              </p>
              <button onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
