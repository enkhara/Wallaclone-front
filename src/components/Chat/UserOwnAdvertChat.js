import './Chat.css';
import Avatar from '@material-ui/core/Avatar';
import { advertDetailAction } from '../../store/actions.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertDetail } from '../../store/selectors.js';
import React from 'react';

const UserOwnAdvertChat = ({ currentChat }) => {
	console.log('currentChat', currentChat);
	const dispatch = useDispatch();

	const advertId = currentChat.advertisementId._id;
	const advert = useSelector((state) => getAdvertDetail(state, advertId));

	React.useEffect(() => {
		dispatch(advertDetailAction(advertId));
	}, [dispatch, advertId]);
	return (
		<div className="userOwnBox">
			<div className="userOwnInfo">
				<Avatar className="UserOwnAdvertChatImg" src="" alt="" />
				<p className="userOwnName">{advert?.userId.username}</p>
			</div>
		</div>
	);
};

export default UserOwnAdvertChat;
