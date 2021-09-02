import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdverts } from '../../../store/selectors';
import UserEmptyList from './UserEmptyList';
import UserAdvertsList from './UserAdvertsList';
import withUser from '../../hoc/withUser';
import { SideBar } from '../../layout';
import { useTranslation } from 'react-i18next';
import { advertsLoadAction } from '../../../store/actions';
import './User.css';
 

const UserAdvertsPage = ({ user, props }) => {
	const dispatch = useDispatch();
	const adverts = useSelector(getAdverts);
	//const user = useSelector(getUser);
	//const username = props.match.params.username;

	const { t } = useTranslation(['global']);
	
    const [userAdverts,setUserAdverts] = React.useState(adverts);
	
	React.useEffect(() => {
		console.log('entro en use effect de userAdvertsPage 2');
		dispatch(advertsLoadAction());
	}, [dispatch]);

    React.useEffect(() => {
		console.log('entro en use effect de userAdvertsPage', user.username);
        if (user.username !== undefined) {
        
            setUserAdverts(adverts.filter(advert => {
                
                return (advert.userId.username.toLowerCase() === user.username.toLowerCase());
            
            }));
        }
	}, [user.username]);


	return (
		<main className='main'>
			<aside className="aside">
				<SideBar {...props} />
			</aside>
			<section className="userAdverts">
				{userAdverts.length ? (
					<UserAdvertsList
						adverts={userAdverts}
						username={user.username}
						//onDelete={handleDelete}
						//onChangeReserved={handleReserved}
						
					/>
					
					) : (
					<div style={{
							display:'flex',width:'100%',
							alignItems:'center',
							justifyContent:'center',
							
						}}>
						<UserEmptyList />

					</div>
					)}
	
			</section>
		</main>
	);
};

const UserAdvertsPageWu = withUser(UserAdvertsPage);

export default UserAdvertsPageWu;

