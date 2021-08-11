import './Chat.css';
import Avatar from '@material-ui/core/Avatar';

import { format } from 'timeago.js';

const Message = ({ message, own }) => {
	//const { user } =
	//console.log('en el componenete MESSAGE la prop OWN', own);

	return (
		<div className={own ? 'message own' : 'message'}>
			<div className="messageTop">
				<Avatar className="messageImg" src="" alt="" />
				<p className="messageText">{message.text}</p>
			</div>
			<div className="messageBottom">{format(message.createdAt)}</div>
		</div>
	);
};

export default Message;
