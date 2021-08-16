import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ForgotPasswordForm from './ForgotPasswordForm';
import { forgotPasswordAction, resetError } from '../../../store/actions';
import { getUi } from '../../../store/selectors';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getUi);
  const [t] = useTranslation('global');

  const handleSubmit = (credenciales) => {
    dispatch(forgotPasswordAction(credenciales));
  };

  let status;
  if (error != null) {
    status = error.status;
    if (status === 400) {
      Swal.fire(
        t('message.Somenthing goes wrong !') + t('message.Unauthorized'),
        t('message.Try again!')
      );
    } else {
      Swal.fire(`${error.message}`, t('message.Try again!'));
    }
  }

  return (
    <div>
      <ForgotPasswordForm onSubmit={handleSubmit} />
      {error && <div onClick={() => dispatch(resetError())} />}
    </div>
  );
};

export default ForgotPasswordPage;
