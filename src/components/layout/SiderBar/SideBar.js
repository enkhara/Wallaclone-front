import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './SideBar.css';

import ChatIcon from '@material-ui/icons/Chat';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BallotIcon from '@material-ui/icons/Ballot';

const SideBar = () => {

	const { t } = useTranslation(['global']);
	
	return (
	
		<React.Fragment>
			
			<Link to={'/user/account'} className="sideBarButton">
				<AccountBoxIcon/>
				<span>{t('sideBar.Profile')}</span>
			</Link>
			<Link to={{ pathname: '/myadverts' }} className="sideBarButton">
				<BallotIcon/>
				<span>{t('sideBar.Products')}</span>
			</Link>
			<Link className="sideBarButton" to={'/user/chat'}>
				<ChatIcon />
				<span >{t('sideBar.Chat')}</span>
			</Link>
			<Link to={'/myfavourites'} className="sideBarButton">
				<FavoriteBorderIcon/>
				<span>{t('sideBar.Favorites')}</span>
			</Link>
		</React.Fragment>
		
	);
};

export default SideBar;
