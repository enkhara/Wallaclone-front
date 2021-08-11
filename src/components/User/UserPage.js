import React from 'react';
import withUser from '../hoc/withUser';
import { Header, SideBar } from '../layout';
import './UserPage.css';

const UserPage = ({ user, ...props }) => {
	return (
		<React.Fragment>
			<Header />
			<div className="userSpace">
				<SideBar />
				<div className="userNav"></div>
				<div className="userContainer"></div>
			</div>
		</React.Fragment>
	);
};

const UserPageWithUser = withUser(UserPage);

export default UserPageWithUser;
