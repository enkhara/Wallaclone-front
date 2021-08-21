import './Chat.css';
import Avatar from '@material-ui/core/Avatar';

const UserOwnAdvertChat = ({ currentChat }) => {
	console.log('currentChat', currentChat);

	return (
		<div className="userOwnBox">
			<div className="userOwnInfo">
				<Avatar className="UserOwnAdvertChatImg" src="" alt="" />
				<p className="userOwnName">hola</p>
			</div>
		</div>
	);
};

export default UserOwnAdvertChat;
