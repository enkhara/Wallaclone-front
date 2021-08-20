import './Chat.js';
import Avatar from '@material-ui/core/Avatar';

import { useDispatch, useSelector } from 'react-redux';
import { getAdvertDetail } from '../../store/selectors.js';

import placeholder from '../../assets/images/placeholder.png';
import React from 'react';
import { advertDetailAction } from '../../store/actions.js';

const Conversation = ({ conversation, currentUser }) => {
	const dispatch = useDispatch();

	const advertId = conversation.advertisementId._id;
	const advert = useSelector((state) => getAdvertDetail(state, advertId));

	React.useEffect(() => {
		dispatch(advertDetailAction(advertId));
	}, [dispatch, advertId]);

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
					<p> {conversation.advertisementId.name} </p>
					<p> {conversation.advertisementId.price} </p>
					<p> {conversation.advertisementId.transaction} </p>
				</span>
				<span className="conversationName">{advert.userId.username}</span>
			</div>
		)
	);
};

export default Conversation;
