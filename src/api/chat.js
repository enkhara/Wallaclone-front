import client from './client';
import { BASE_URL } from './adverts';

export const getConversation = (userId, advertisementId) => {
	return client.get(`${BASE_URL}/conversations/${userId}/${advertisementId}`);
};

export const getUserConversations = (userId) => {
	return client.get(`${BASE_URL}/conversations/userConversations/${userId}`);
};

export const getMessages = (conversationId) => {
	return client.get(`${BASE_URL}/messages/${conversationId}`);
};

export const createdNewMessage = (message) => {
	return client.post(`${BASE_URL}/messages`, message);
};

export const createdNewConversation = (conversation) => {
	return client.post(`${BASE_URL}/conversations/`, conversation);
};

export const getUsersWithChat = (userId) => {
	return client.get(`${BASE_URL}/conversations/users/${userId}`);
};
