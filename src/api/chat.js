import client from './client';
import { BASE_URL } from './adverts';

export const getConversation = (userId, advertisementId) => {
	return client.get(`${BASE_URL}/conversations/${userId}/${advertisementId}`);
};

export const getMessages = (conversationId) => {
	return client.get(`${BASE_URL}/messages/${conversationId}`);
};

export const createdNewMessage = (message) => {
	return client.post(`${BASE_URL}/messages`, message);
};

export const createdNewConversation = (
	advertisementId,
	senderId,
	receiverId
) => {
	return client.post(
		`${BASE_URL}/conversations/`,
		advertisementId,
		senderId,
		receiverId
	);
};
