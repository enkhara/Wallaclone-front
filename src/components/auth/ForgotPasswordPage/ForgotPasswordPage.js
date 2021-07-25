import React from 'react';
import { useDispatch } from 'react-redux';
import ForgotPasswordForm from './ForgotPasswordForm';
import { forgotPasswordAction } from '../../../store/actions';

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (credenciales) => {
    await dispatch(forgotPasswordAction(credenciales));
  };

  return (
    <div>
      <ForgotPasswordForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ForgotPasswordPage;
