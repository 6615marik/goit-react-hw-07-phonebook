import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // console.log(contacts);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  // console.log(visibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>
                <span>
                  {name} :{number}
                </span>
              </p>
              <button onClick={() => dispatch(deleteContacts(id))}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
