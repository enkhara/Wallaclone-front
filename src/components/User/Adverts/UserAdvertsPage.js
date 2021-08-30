import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdverts, getUser } from '../../../store/selectors';
import UserEmptyList from './UserEmptyList';
import UserAdvertsList from './UserAdvertsList';
import withUser from '../../hoc/withUser';
import { SideBar } from '../../layout';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import {
	advertDeletedAction,
	advertUpdateReservedAction,
	advertUpdateSoldAction
} from '../../../store/actions';
 

const UserAdvertsPage = ({ user, props }) => {
	const dispatch = useDispatch();
	const adverts = useSelector(getAdverts);
	
//	const user = useSelector(getUser);
	//const username = props.match.params.username;
	const { t } = useTranslation(['global']);
	const favs = false;

    const [userAdverts,setUserAdverts] = React.useState(adverts);
	
    React.useEffect(() => {
		//console.log('entro en use effect de userAdvertsPage');
        if (user.username !== undefined) {
        
            setUserAdverts(adverts.filter(advert => {
                
                return (advert.userId.username.toLowerCase() === user.username.toLowerCase());
            
            }));
        }
	}, [user.username]);

	// const handleReserved = async (advertId, advert) => {
	// 	console.log('entro en handleReserved');
	// 	await dispatch(advertUpdateReservedAction(advertId, advert));
	// }
	
	// const handleSold = async (advertId, advert) => {
	// 	await dispatch(advertUpdateSoldAction(advertId, advert));
	// }

	// const handleDelete = () => {
	// 	const title = t('adverts.Are you sure?');
	// 	Swal.fire({
	// 		title: title,
	// 		text: t('adverts.You will not be able to reverse this !'),
	// 		icon: 'warning',
	// 		showCancelButton: true,
	// 		confirmButtonColor: '#3085d6',
	// 		cancelButtonColor: '#d33',
	// 		confirmButtonText: t('adverts.Yes, delete it!'),
	// 	}).then((result) => {
	// 		if (result.isConfirmed) {
	// 			dispatch(advertDeletedAction(adverts._id));
	// 			Swal.fire(t('adverts.Deleted!'), t('adverts.Your advert has been deleted.'), 'success');
	// 		}
	// 	});
	// };

	return (
		
		<main 
			style={{marginTop:'0.5rem', marginBottom:'2rem' , width:'100%', height:'auto'}}
		 
        >
            <React.Fragment>
				<SideBar {...props} />
				{userAdverts.length ? (
					<section>
						<UserAdvertsList
							adverts={userAdverts}
							username={user.username}
							// onDelete={handleDelete}
							// onChangeReserved={handleReserved}
							// onChangeSold={handleSold}
							favs = {favs}
						/>
					</section>
				) : (
					<UserEmptyList />
					)}
                
            </React.Fragment>
	
		</main>
	);
};

const UserAdvertsPageWu = withUser(UserAdvertsPage);

export default UserAdvertsPageWu;

