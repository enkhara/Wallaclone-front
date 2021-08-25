import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../../../store/selectors';
import { advertsLoadAction } from '../../../store/actions';
import UserEmptyList from './UserEmptyList';
import UserAdvertsList from './UserAdvertsList';
import withUser from '../../hoc/withUser';
 

const UserAdvertsPage = (props) => {
	//const dispatch = useDispatch();
	const adverts = useSelector(getAdverts);
	const username = props.match.params.username;
	
	// React.useEffect(() => {
	// 	dispatch(advertsLoadAction());
	// }, [dispatch]);

    const [userAdverts,setUserAdverts] = React.useState(adverts);
   
    React.useEffect(() => {

        if (username !== undefined) {
        
            setUserAdverts(adverts.filter(advert => {
                
                return (advert.userId.username.toLowerCase() === username.toLowerCase());
            
            }));
        }
	}, [username]);
	
	return (
		
		<main 
			style={{marginTop:'0.5rem', marginBottom:'2rem' , width:'100%', height:'auto'}}
		 
        >
            <React.Fragment>
                
			{userAdverts.length ? (
				<section>
					<UserAdvertsList
						adverts={userAdverts}
						username={username}
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

//export default UserAdvertsPage;