import './Chat.css';
import Avatar from '@material-ui/core/Avatar';
import { useEffect, useState } from 'react';

import { getChatSpeakersAction } from '../../store/actions';

import { useDispatch } from 'react-redux';

const ChatUserOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
	const dispatch = useDispatch();

	const [speakers, setSpeakers] = useState([]);
	const [onlineSpeakers, setOnlineSpeakers] = useState([]);

	useEffect(async () => {
		const speakersResponse = await dispatch(getChatSpeakersAction(currentId));
		setSpeakers(speakersResponse);
	}, [dispatch, currentId]);

	//console.log('speakers', speakers);
	//console.log('online useers', onlineUsers);

	// useEffect(() => {
	// 	setOnlineSpeakers(speakers.filter((f) => onlineUsers.includes(f._id)));
	// }, []);

	//buscar el usuaris amb els que tenim una conversa
	// const [speakers, setSpeakers] = useState([]);
	// const [onlineSpeakers, setOnlineSpeakers] = useState([]);
	// const user = useSelector(getUser);

	// useEffect(() => {
	// 	getUsersWithChat(user._id).then(setSpeakers);
	// }, [currentId]);
	console.log('en onlinechat users', onlineUsers);

	//console.log('Speakers in chat users online', Speakers);

	return (
		<div className="chatUserOnline">
			{onlineSpeakers.map((onlineSpeaker) => (
				<div className="chatOnlineFriend">
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
