import './Chat.css';
import Avatar from '@material-ui/core/Avatar';
import { useEffect, useState } from 'react';

const ChatUserOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
	const [friends, setFriends] = useState([]);
	const [onlineFriends, setOnlineFriends] = useState([]);

	//useEffect(() => {});

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
