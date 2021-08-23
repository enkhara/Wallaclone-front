import './Chat.css';
import Avatar from '@material-ui/core/Avatar';
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { getChatSpeakersAction } from '../../store/actions';

const ChatUserOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
	const dispatch = useDispatch();

	const [speakers, setSpeakers] = useState([]);
	const [onlineSpeakers, setOnlineSpeakers] = useState([]);

	useEffect(() => {
		dispatch(getChatSpeakersAction(currentId)).then(setSpeakers);
	}, [dispatch, currentId]);

	//console.log('speakers', speakers);
	//console.log('online useers', onlineUsers);

	useEffect(() => {
		setOnlineSpeakers(onlineUsers.filter((f) => speakers.includes(f.userId)));
	}, [speakers, onlineUsers]);

	return (
		<div className="chatUserOnline">
			{onlineSpeakers.map((onlineSpeaker) => (
				<div key={onlineSpeaker.userId} className="chatOnlineFriend">
					<div className="chatUserOnlineImgContainer">
						<Avatar
							className="chatUserOnlineImg"
							src={onlineSpeaker.image}
							alt=""
						/>
						<div className="chatUserOnlineBadge"></div>
					</div>
					<span className="chatUserOnlineName">{onlineSpeaker.username}</span>
				</div>
			))}
		</div>
	);
};

export default ChatUserOnline;
