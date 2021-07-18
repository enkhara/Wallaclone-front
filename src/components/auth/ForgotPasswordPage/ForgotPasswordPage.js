import React from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';
import { forgotPassword } from '../../../api/auth';

const ForgotPasswordPage = () => {
  const [error, setError] = React.useState(null);

  const handleSubmit = async (credentials) => {
    setError(null);
    try {
      await forgotPassword(credentials);
      console.log('se envia el email para actualizar contraseña');
    } catch (error) {
      setError(error);
    }

    console.log(credentials);
  };
  return (
    <div>
      <ForgotPasswordForm onSubmit={handleSubmit} />
      {error && <div className="forgotPasswordPage-error">{error.message}</div>}
    </div>
  );
};

export default ForgotPasswordPage;
