import './Chat.css';
import Avatar from '@material-ui/core/Avatar';
import { useEffect, useState } from 'react';
import { getUsersWithChat } from '../../api/chat';
import { getUser } from '../../api/user';

import { useSelector, useDispatch } from 'react-redux';

const ChatUserOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
	// const [friends, setFriends] = useState([]);
	// const [onlineFriends, setOnlineFriends] = useState([]);
	// const user = useSelector(getUser);

	// useEffect(() => {
	// 	getUsersWithChat(user._id).then(setFriends);
	// }, [currentId]);

	//console.log('friends in chat users online', friends);

	return (
		<div className="chatUserOnline">
			<div className="chatOnlineFriend">
				<div className="chatUserOnlineImgContainer">
					<Avatar className="chatUserOnlineImg" src="" alt="" />
					<div className="chatUserOnlineBadge"></div>
				</div>
				<span className="chatUserOnlineName">John Doe</span>
			</div>
		</div>
	);
};

export default ChatUserOnline;
