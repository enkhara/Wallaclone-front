import client from './client';
import { BASE_URL } from './adverts';

export const getConversation = (userId) => {
	return client.get(`${BASE_URL}/conversations/${userId}`);
};

export const getMessages = (conversationId) => {
	return client.get(`${BASE_URL}/messages/${conversationId}`);
};

export const createdNewMessage = (message) => {
	return client.post(`${BASE_URL}/messages`, message);
};
