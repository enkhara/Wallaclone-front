import './Chat.css';
import Avatar from '@material-ui/core/Avatar';

import { format } from 'timeago.js';

const Message = ({ message, own, currentChat, user }) => {
	const speaker = currentChat.members.filter((c) => c._id !== user._id);

	return (
		<div className={own ? 'message own' : 'message'}>
			<div className="messageTop">
				<Avatar
					className="messageImg"
					src={
						own
							? `${process.env.REACT_APP_API_BASE_URL}images/adverts/${user.image}`
							: `${process.env.REACT_APP_API_BASE_URL}images/adverts/${speaker.image}`
					}
					alt=""
				/>
				<p className="messageText">{message.text}</p>
			</div>
			<div className="messageBottom">{format(message.createdAt)}</div>
		</div>
	);
};

export default Message;
