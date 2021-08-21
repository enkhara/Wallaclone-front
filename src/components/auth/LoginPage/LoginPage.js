import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../../shared';
import LoginForm from './LoginForm';
import {
  loginAction,
  resetError,
  userLoggedAction,
} from '../../../store/actions';
import { getUi } from '../../../store/selectors';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

function LoginPage() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(getUi);
  const [t] = useTranslation('global');

  const handleSubmit = async (credentials) => {
    await dispatch(loginAction(credentials));
    dispatch(userLoggedAction());
  };

  let status;
  if (error != null) {
    status = error.status;
    if (status === 400) {
      Swal.fire(
        t('message.Somenthing goes wrong !') + t('message.Unauthorized'),
        t('message.Try again!')
      );
    }
  }

  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
      {loading && <Spinner/>}
      {error && <div onClick={() => dispatch(resetError())} />}
    </>
  );
}

export default LoginPage;
