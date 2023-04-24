import { useSelector, useDispatch } from 'react-redux';
import { React, useEffect } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Form/Contacts';
import { Filtr } from './Form/Filtr';
import { Title } from './Form/Title';
import { getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Title text="Phonebook" />
      <Form />
      <Filtr />
      <Contacts /> {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
    </>
  );
};
