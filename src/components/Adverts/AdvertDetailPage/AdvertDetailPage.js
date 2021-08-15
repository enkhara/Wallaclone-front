import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams, useHistory, useLocation } from 'react-router-dom';
import { Layout } from '../../layout';
import { getAdvertDetail, getUi, getUser } from '../../../store/selectors';
import {
	advertDeletedAction,
	advertDetailAction,
	advertEditAction,
	resetError,
} from '../../../store/actions';
import withUser from '../../hoc/withUser';

import AdvertDetail from './AdvertDetail';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

//function AdvertPage({ user, ...props }) {
function AdvertPage(...props) {
	const dispatch = useDispatch();
	const { advertId } = useParams();
	const advert = useSelector((state) => getAdvertDetail(state, advertId));
	const user = useSelector((state) => getUser(state)); // usuario de la aplicación (puede estar loggeado o no)
	//const { error } = useSelector(getUi);
	const { isLoading, error } = useSelector(getUi);
	const history = useHistory();
	const location = useLocation();
	const { t } = useTranslation(['global']);

	React.useEffect(() => {
		dispatch(advertDetailAction(advertId));
	}, [dispatch, advertId]);

	// const handleDelete = () => {
	// 	const isPropietary = isUserPropietary(user, advert);
	// 	if (isPropietary) {	
	// 		dispatch(advertDeletedAction(advertId))
	// 	};
	// };

	const handleDelete = () => {
		const isPropietary = isUserPropietary(user, advert);
		if (isPropietary) {
			const title = t('adverts.Are you sure?');
			Swal.fire({
				title: title,
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!'
			}).then((result) => {
				if (result.isConfirmed) {
					dispatch(advertDeletedAction(advertId));
					Swal.fire(
						'Deleted!',
						'Your file has been deleted.',
						'success'
					)
				}
			})
		}

		// Swal.fire({
		// 	title: 'Are you sure?',
		//   icon: 'warning',
		//   showCancelButton: true,
		//   confirmButtonColor: '#3085d6',
		//   cancelButtonColor: '#d33',
		//   confirmButtonText: 'Yes',
		// }).then((result) => {
		// 	if (result.isConfirmed) {
		// 		const isPropietary = isUserPropietary(user, advert);
		// 		if (isPropietary) {	
		// 			dispatch(advertDeletedAction(advertId))
		// 		};
		//   }
		// });
	  };

	const handleEdit = () => {
		const isPropietary = isUserPropietary(user, advert);
		console.log('isPropietary handleEdit', isPropietary);
		if (isPropietary) {
			dispatch(advertEditAction(advertId));
			//return <Redirect to={`/adverts/edit/${advertId}`} />;
		}
		else {
			// console.log('location', location);
			// console.log('entro aqui', 'advert.name', advert.name, 'advertId', advertId);
			// Swal.fire('Deberá Iniciar Sesión');
			history.goBack();
			//const { from } = location.pathname; // || { from: { pathname: '/' } };
			//console.log('from', from, 'location.path', location.pathname) ;
			//return history.replace(location.pathname);
			//return <Redirect to={{ pathname: '/', state: { from: location } }} />

			//history.push(`/adverts/${advert.name}/${advertId}`);
			//return <Redirect to={`/adverts/${advert.name}/${advertId}`} />;
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
		console.log('user de la aplicacion', user);
		console.log('USER ADVERT', advert.userId);
		console.log('user != null', user != null);
		console.log('user != undefined', user != undefined);
		if (user !== null && user !== undefined) {
			console.log('user._id', user._id);
			console.log('advert.userId._id', advert.userId._id);
			if (user._id !== advert.userId._id) {
				Swal.fire('Acción No Permitida');
				console.log('user.userId', user._id, 'advert.userId', advert.userId._id);
				console.log('este usuario no puede editar ni borrar, solo consultar')
				return false;
			}
		}
		else {
			Swal.fire('Deberá Iniciar Sesión');
			console.log('Usuario nulo, este usuario no puede editar ni borrar, solo consultar');
			return false;
		}
		return true;
	};

	return (
		<React.Fragment>
			{isLoading && <p> ...loading advert</p>}
			{advert && (
				<AdvertDetail {...advert} onDelete={handleDelete} onEdit={handleEdit} />
			)}
			{error && <div onClick={() => dispatch(resetError())} />}
		</React.Fragment>
	);
}

//const AdvertPageWithUser = withUser(AdvertPage);

//export default AdvertPageWithUser;
export default AdvertPage;
