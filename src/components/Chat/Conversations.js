import './Chat.js';
import Avatar from '@material-ui/core/Avatar';
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { advertDetailAction } from '../../store/actions';
import { getAdvertDetail } from '../../store/selectors.js';

import placeholder from '../../assets/images/placeholder.png';

const Conversation = ({ conversation, currentUser }) => {
	return (
		conversation && (
			<div className="conversation">
				<Avatar
					className="conversationImg"
					src={
						conversation.advertisementId.image
							? `${process.env.REACT_APP_API_BASE_URL}images/adverts/${conversation.advertisementId.image}`
							: placeholder
					}
					alt=""
				/>
				<span className="advertisementName">
					{conversation.advertisementId.name}
					{conversation.advertisementId.price}
					{conversation.advertisementId.transaction}
				</span>
				<span className="conversationName">{currentUser.username}</span>
			</div>
		)
	);
};

export default Conversation;
