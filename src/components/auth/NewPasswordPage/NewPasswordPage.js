import React from 'react';
import NewPasswordForm from './NewPasswordForm';

const NewPasswordPage = () => {
  const [error, setError] = React.useState(null);

  const handleSubmit = async (credentials) => {
    setError(null);
    try {
    } catch (error) {
      setError(error);
    }

    console.log(credentials);

    //COMPROBAR EN LA BBDD USUARIO Y CONTRASEÑA CON REDUX Y LOADING

    //CORRECTO
  };
  return (
    <div>
      <NewPasswordForm onSubmit={handleSubmit} />
      {error && <div className="registerPage-error">{error.message}</div>}
    </div>
  );
};

export default NewPasswordPage;
