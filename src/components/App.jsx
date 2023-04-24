// import React, { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Form/Contacts';
import { Filtr } from './Form/Filtr';
// import Notiflix from 'notiflix';
// import { nanoid } from 'nanoid';

export const App = () => {
  return (
    <>
      <Form />
      <Filtr />
      <Contacts />
    </>
  );
};
