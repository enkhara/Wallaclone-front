import React from 'react';
import { useDispatch } from 'react-redux';
import NewPasswordForm from './NewPasswordForm';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { newPasswordAction } from '../../../store/actions';

const NewPasswordPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { id, token } = useParams();

  const handleSubmit = async (credentials) => {
    dispatch(newPasswordAction(credentials, id, token, history, location));
  };
  return (
    <div>
      <NewPasswordForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewPasswordPage;
