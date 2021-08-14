import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import RegisterForm from './RegisterForm';
import { registerAction, resetError } from '../../../store/actions';
import { getUi } from '../../../store/selectors';
import { Header } from '../../layout';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

//** REDUX */
function RegisterPage() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getUi);
  const [t] = useTranslation('global');

  const handleSubmit = (credentials) => {
    console.log(`credentials en RegisterPage ${credentials}`);
    dispatch(registerAction(credentials));
  };

  let status;
  if (error != null) {
    status = error.status;
    if (status === 400) {
      Swal.fire(
        t('message.Somenthing goes wrong !'),
        t('message.user already registered'),
        t('message.Try again!')
      );
    }
  }

  return (
    <div>
      <Header />
      <RegisterForm onSubmit={handleSubmit} />
      {isLoading && <p>...registering in wallaclone</p>}
      {error && <div onClick={() => dispatch(resetError())} />}
    </div>
  );
}

export default RegisterPage;
