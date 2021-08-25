import React from 'react';
import withUser from '../hoc/withUser';
import { SideBar } from '../layout';
import './UserPage.css';

const UserPage = ({ user, ...props }) => {
	console.log('USER PAGE', user, 'props', props)
	return (
		
		<div className="userSpace">
			<SideBar user={user} {...props} />
			<div className="userNav"></div>
			<div className="userContainer"></div>
		</div>
	
	);
};

const UserPageWithUser = withUser(UserPage);

export default UserPageWithUser;
