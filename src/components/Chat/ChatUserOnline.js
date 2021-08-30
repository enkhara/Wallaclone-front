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
	// console.log('online useers', onlineUsers);
	// console.log('currentId', currentId);
	//console.log('onlineSpeakers', onlineSpeakers);

	useEffect(() => {
		const IDonlineUsers = onlineUsers.map((o) => o.userId);

		const result = speakers.filter((f) => IDonlineUsers.includes(f._id));
		const speakersOnline = result.filter((f) => f._id !== currentId);
		setOnlineSpeakers(speakersOnline);
	}, [speakers, onlineUsers]);

	return (
		<div className="chatUserOnline">
			{onlineSpeakers.map((onlineSpeaker) => (
				<div key={onlineSpeaker.userId} className="chatOnlineFriend">
					<div className="chatUserOnlineImgContainer">
						<Avatar
							className="chatUserOnlineImg"
							src={`${process.env.REACT_APP_API_BASE_URL}images/adverts/${onlineSpeaker.image}`}
							alt={onlineSpeaker.username}
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
