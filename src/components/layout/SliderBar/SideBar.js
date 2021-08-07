import React from 'react';
import './SideBar.css';

import ChatIcon from '@material-ui/icons/Chat';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BallotIcon from '@material-ui/icons/Ballot';

const SideBar = () => {
	return (
		<nav className="sideBarContainer">
			<div className="sideBarWrapper">
				<li className="sideBarButton">
					<AccountBoxIcon className="sideBarButtonImg" />
					<span className="sideBarButtonName">Profile</span>
				</li>
				<li className="sideBarButton">
					<BallotIcon className="sideBarButtonImg" />
					<span className="sideBarButtonName">Products</span>
				</li>
				<li className="sideBarButton">
					<ChatIcon className="sideBarButtonImg" />
					<span className="sideBarButtonName">Chat</span>
				</li>
				<li className="sideBarButton">
					<FavoriteBorderIcon className="sideBarButtonImg" />
					<span className="sideBarButtonName">Favorites</span>
				</li>
			</div>
		</nav>
	);
};

export default SideBar;
