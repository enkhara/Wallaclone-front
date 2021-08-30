import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdverts} from '../../../store/selectors';
import UserEmptyList from './UserEmptyList';
import UserAdvertsList from './UserAdvertsList';
import withUser from '../../hoc/withUser';
import { SideBar } from '../../layout';
import { useTranslation } from 'react-i18next';

 
const UserAdvertsPage = ({ user, props }) => {
	const dispatch = useDispatch();
	const adverts = useSelector(getAdverts);
	const { t } = useTranslation(['global']);
	const favs = true;
	
    const [userAdverts,setUserAdverts] = React.useState(adverts);
   
    React.useEffect(() => {

        if (user.ads_favs.length > 0) {
			
            setUserAdverts(adverts.filter(advert => {
            
				return (user.ads_favs.includes(advert._id));
				
            }));
        }
	}, [user.ads_favs]);

	
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
							favs = {favs}
						/>
					</section>
				) : (
						<UserEmptyList favs={favs}/>
					)}
            </React.Fragment>
		</main>
	);
};

const UserAdvertsFavPage = withUser(UserAdvertsPage);

export default UserAdvertsFavPage;

