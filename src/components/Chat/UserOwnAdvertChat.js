import './Chat.css';
import Avatar from '@material-ui/core/Avatar';
import { advertDetailAction } from '../../store/actions.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertDetail } from '../../store/selectors.js';
import React from 'react';

const UserOwnAdvertChat = ({ currentChat, user }) => {
	//console.log('currentChat', currentChat);
	//console.log('user', user);

	const userInChat = currentChat.members.filter(
		(member) => member._id !== user._id
	);
	//console.log('user filtrado', userInChat[0]);

	return (
		<div className="userOwnBox">
			<div className="userOwnInfo">
				<Avatar
					className="UserOwnAdvertChatImg"
					src={`${process.env.REACT_APP_API_BASE_URL}images/adverts/${userInChat[0].image}`}
					alt=""
				/>
				<p className="userOwnName">{userInChat[0].username}</p>
			</div>
		</div>
	);
};

export default UserOwnAdvertChat;
