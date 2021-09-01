import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdverts, getUser } from '../../../store/selectors';
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

	const { t } = useTranslation(['global']);
	
    const [userAdverts,setUserAdverts] = React.useState(adverts);
	
	React.useEffect(() => {
		 
		dispatch(advertsLoadAction());
	}, [dispatch]);

    React.useEffect(() => {
 
        if (user.username !== undefined) {
        
            setUserAdverts(adverts.filter(advert => {
                
                return (advert.userId.username.toLowerCase() === user.username.toLowerCase());
            
            }));
        }
	}, [user.username,adverts]);

	 

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

