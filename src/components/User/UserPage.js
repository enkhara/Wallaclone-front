import React from 'react';
import withUser from '../hoc/withUser';
import { SideBar } from '../layout';
import './UserPage.css';

const UserPage = ({ user, ...props }) => {
	return (
		
		<div className="userSpace">
			<SideBar />
			<div className="userNav"></div>
			<div className="userContainer"></div>
		</div>
	
	);
};

const UserPageWithUser = withUser(UserPage);

export default UserPageWithUser;
