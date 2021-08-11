import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './SideBar.css';

import ChatIcon from '@material-ui/icons/Chat';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BallotIcon from '@material-ui/icons/Ballot';

const SideBar = () => {
	const { t, i18n } = useTranslation(['global']);

	return (
		<nav className="sideBarContainer">
			<div className="sideBarWrapper">
				<Link to={''} className="sideBarButton">
					<AccountBoxIcon className="sideBarButtonImg" />
					<span className="sideBarButtonName">{t('sideBar.Profile')}</span>
				</Link>
				<Link to={''} className="sideBarButton">
					<BallotIcon className="sideBarButtonImg" />
					<span className="sideBarButtonName">{t('sideBar.Products')}</span>
				</Link>
				<Link className="sideBarButton" to={'/chat'}>
					<ChatIcon className="sideBarButtonImg" />
					<span className="sideBarButtonName">{t('sideBar.Chat')}</span>
				</Link>
				<Link to={''} className="sideBarButton">
					<FavoriteBorderIcon className="sideBarButtonImg" />
					<span className="sideBarButtonName">{t('sideBar.Favorites')}</span>
				</Link>
			</div>
		</nav>
	);
};

export default SideBar;
