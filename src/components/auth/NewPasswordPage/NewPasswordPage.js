import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewPasswordForm from './NewPasswordForm';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { newPasswordAction, resetError } from '../../../store/actions';
import { getUi } from '../../../store/selectors';
import { useTranslation } from 'react-i18next';
import { Spinner } from '../../shared';
import Swal from 'sweetalert2';

const NewPasswordPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(getUi);  
  const history = useHistory();
  const location = useLocation();
  const { id, token } = useParams();
  const [t] = useTranslation('global');

  const handleSubmit = async (credentials) => {
    dispatch(newPasswordAction(credentials, id, token, history, location));
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
  return(
    <React.Fragment>
        {loading && <Spinner/>}
        {error && <div onClick={() => dispatch(resetError())} />}
        <NewPasswordForm onSubmit={handleSubmit} />;
    </React.Fragment>

  );

		 
};

export default NewPasswordPage;
