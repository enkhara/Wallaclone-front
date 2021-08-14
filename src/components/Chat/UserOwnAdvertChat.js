import './Chat.css';
import Avatar from '@material-ui/core/Avatar';

const UserOwnAdvertChat = ({ user }) => {
	return (
		<div className="userOwnBox">
			<div className="userOwnInfo">
				<Avatar className="UserOwnAdvertChatImg" src="" alt="" />
				<p className="userOwnName">{user.name}</p>
			</div>
		</div>
	);
};

export default UserOwnAdvertChat;
