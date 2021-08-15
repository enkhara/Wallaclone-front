import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import {
  loginAction,
  resetError,
  userLoggedAction,
} from '../../../store/actions';
import { getUi } from '../../../store/selectors';
import { Header } from '../../layout';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

function LoginPage() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getUi);
  const [t] = useTranslation('global');

  const handleSubmit = (credentials) => {
    dispatch(loginAction(credentials));
    dispatch(userLoggedAction());
  };

  let status;
  if (error != null) {
    status = error.status;
    if (status === 401) {
      Swal.fire(
        t('message.Somenthing goes wrong !') + t('message.Unauthorized'),
        t('message.Try again!')
      );
    }
  }

  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
      {isLoading && <p>...login in wallaclone</p>}
      {error && <div onClick={() => dispatch(resetError())} />}
    </>
  );
}

export default LoginPage;
