import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdverts} from '../../../store/selectors';
import UserEmptyList from './UserEmptyList';
import UserAdvertsList from './UserAdvertsList';
import withUser from '../../hoc/withUser';
import { SideBar } from '../../layout';
import './User.css';
 
const UserAdvertsPage = ({ user, props }) => {
	const dispatch = useDispatch();
	const adverts = useSelector(getAdverts);
	const favs = true;
	
    const [userAdverts,setUserAdverts] = React.useState(adverts);
   
    React.useEffect(() => {
		
		if (user.ads_favs.length > 0) {
			
			setUserAdverts(adverts.filter(advert => {
            
				return (user.ads_favs.includes(advert._id));
				
			}));
		}
		else { // no hay favoritos en el usuario 
			setUserAdverts({});
		}
			
	}, [user.ads_favs,dispatch,adverts]);

	return (
		
		<main className='main'>
            <aside className="aside">
				<SideBar {...props} />
			</aside>
			<section className="userAdverts">
				{(userAdverts.length > 0) ? (
					
					<UserAdvertsList
					adverts={userAdverts}
					username={user.username}
					favs = {favs}
					/>
					
					) : (
						<UserEmptyList favs={favs}/>
						)} 
			</section>
		</main>
	);
};

const UserAdvertsFavPage = withUser(UserAdvertsPage);

export default UserAdvertsFavPage;

