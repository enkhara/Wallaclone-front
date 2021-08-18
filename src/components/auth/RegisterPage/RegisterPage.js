import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegisterForm from './RegisterForm';
import { registerAction, resetError } from '../../../store/actions';
import { getUi } from '../../../store/selectors'; 
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import { Spinner } from '../../shared';


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
        t('message.Somenthing goes wrong !') +
          t('message.user already registered'),
        t('message.Try again!')
      );
    } else {
      Swal.fire(`${error.message}`, t('message.Try again!'));
    }
  }

  return (
    <>
      <RegisterForm onSubmit={handleSubmit} />
      {isLoading && <Spinner/>}
      {error && <div onClick={() => dispatch(resetError())} />}
    </>
  );
}

export default RegisterPage;
