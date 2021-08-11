import './Chat.js';
import Avatar from '@material-ui/core/Avatar';
import React, { useEffect, useState } from 'react';

import { getUser } from '../../api/user';

const Conversation = ({ conversation, currentUser }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const friendId = conversation.members.find((m) => m !== currentUser._id);

		getUser(friendId).then(setUser);
		console.log('friends en convesation component', friendId);
	}, [currentUser, conversation]);

	return (
		user && (
			<div className="conversation">
				<Avatar
					className="conversationImg"
					src={
						user.result.profilePicture
							? user.result.profilePicture
							: '/broken-image.jpg'
					}
					alt=""
				/>
				<span className="conversationName">{user.result.username}</span>
			</div>
		)
	);
};

export default Conversation;
