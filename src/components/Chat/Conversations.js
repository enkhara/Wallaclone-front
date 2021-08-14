import './Chat.js';
import Avatar from '@material-ui/core/Avatar';
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { advertDetailAction } from '../../store/actions';
import { getAdvertDetail } from '../../store/selectors.js';

import placeholder from '../../assets/images/placeholder.png';

const Conversation = ({ conversation, currentUser }) => {
	const dispatch = useDispatch();
	const advert = useSelector((state) =>
		getAdvertDetail(state, conversation.advertisementId)
	);

	useEffect(() => {
		dispatch(advertDetailAction(conversation.advertisementId));

		console.log('friends en convesation component', advert);
	}, [dispatch, currentUser, conversation]);

	return (
		advert && (
			<div className="conversation">
				<Avatar
					className="conversationImg"
					src={advert.image ? advert.image : placeholder}
					alt=""
				/>
				<span className="conversationName">{advert.name}</span>
				<span className="advertisementName">{advert.user}</span>
			</div>
		)
	);
};

export default Conversation;
