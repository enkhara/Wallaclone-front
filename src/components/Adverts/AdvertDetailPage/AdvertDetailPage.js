import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { getAdvertDetail, getUi, getUser } from '../../../store/selectors';
import { Spinner } from '../../shared';
import {
  advertDeletedAction,
  advertDetailAction,
  advertEditAction,
  resetError,
} from '../../../store/actions';

import AdvertDetail from './AdvertDetail';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

function AdvertPage(...props) {
  const dispatch = useDispatch();
  const { advertId } = useParams();
  const advert = useSelector((state) => getAdvertDetail(state, advertId));
  const user = useSelector((state) => getUser(state)); // usuario de la aplicación (puede estar loggeado o no)
  const { loading, error } = useSelector(getUi);
  const history = useHistory();
  const { t } = useTranslation(['global']);

  React.useEffect(() => {
    dispatch(advertDetailAction(advertId));
  }, [dispatch, advertId]);

  const handleDelete = () => {
    const isPropietary = isUserPropietary(user, advert);
    if (isPropietary) {
      const title = t('adverts.Are you sure?');
      Swal.fire({
        title: title,
        text: t('adverts.You will not be able to reverse this !'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: t('adverts.Yes, delete it!'),
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(advertDeletedAction(advertId));
          Swal.fire(t('adverts.Deleted!'), t('adverts.Your advert has been deleted.'), 'success');
        }
      });
    }
  };

	const handleEdit = () => {
		
		 const isPropietary = isUserPropietary(user, advert);
		 //console.log('isPropietary handleEdit', isPropietary);
		 if (isPropietary) {
		 	dispatch(advertEditAction(advertId));
			//return <Redirect to={`/adverts/edit/${advertId}`} />;
		 }
		 else {
		 	history.goBack();
		 };
	};

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  }

  if (error?.statusCode === 404) {
    return <Redirect to="/404" />;
  }

  const isUserPropietary = (user, advert) => {
    // Función para comprobar si el usuario puede editar y/borrar un anuncio
   
    if (user !== null && user !== undefined) {
     
      if (user._id !== advert.userId._id) {
        Swal.fire(t('adverts.Action not allowed'));
        //console.log('user.userId', user._id,'advert.userId',advert.userId._id);
        //console.log('este usuario no puede editar ni borrar, solo consultar');
        return false;
      }
    } else {
      Swal.fire(t('adverts.You will need to log in'));
      //console.log('Usuario nulo, este usuario no puede editar ni borrar, solo consultar');
      return false;
    }
    return true;
  };

  return (
    <React.Fragment>
      {loading && <Spinner />}
      {advert && (
        <AdvertDetail {...advert} onDelete={handleDelete} onEdit={handleEdit} />
      )}
      {error && <div onClick={() => dispatch(resetError())} />}
    </React.Fragment>
  );
}

export default AdvertPage;
