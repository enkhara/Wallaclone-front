import './Chat.css';
import Avatar from '@material-ui/core/Avatar';

const UserOwnAdvertChat = ({ currentChat, user }) => {
	return (
		<div className="userOwnBox">
			<div className="userOwnInfo">
				<Avatar className="UserOwnAdvertChatImg" src="" alt="" />
				<p className="userOwnName">{}</p>
			</div>
		</div>
	);
};

export default UserOwnAdvertChat;
