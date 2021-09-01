import React, { useEffect, useState, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { useTranslation } from 'react-i18next';
//import T from 'prop-types';

import './Chat.css';
import ChatUserOnline from './ChatUserOnline';
import Conversation from './Conversations';
import UserOwnAdvertChat from './UserOwnAdvertChat';
import Message from './Message';
import withUser from '../hoc/withUser';
import { SideBar } from '../layout';
import { getUi } from '../../store/selectors';
import {
	userConversationsLoadAction,
	messagesCreatedAction,
	messagesLoadAction,
} from '../../store/actions';

const Chat = ({ user, ...props }) => {
	const dispatch = useDispatch();
	const socket = useRef();
	const scrollRef = useRef();
	const { error } = useSelector(getUi);

	const [conversations, setConversations] = useState([]);
	const [currentChat, setCurrentChat] = useState(null);
	const [messages, setMessages] = useState([]);
	const [newMessages, setNewMessages] = useState('');
	const [arrivalMessages, setArrivalMessages] = useState(null);
	const [onlineUsers, setOnlineUser] = useState([]);

	const { t, i18n } = useTranslation(['global']);

	/******************SOCKET CLIENT******************************/

	useEffect(() => {
		socket.current = io(process.env.REACT_APP_SOCKET_SERVER, {
			withCredentials: true,
			transportOptions: {
				polling: {
					extraHeaders: {
						Authorization: 'Bearer <TOKEN JWT>',
					},
				},
			},
		});
	}, []);

	useEffect(() => {
		socket.current.emit('addUser', user._id);
		socket.current.on('getUsers', (users) => {
			console.log('socket io users conected', users);
			setOnlineUser(users);
			//setOnlineUser(users.filter((u) => u.userId !== user._id));
			console.log('USUARIOS ONLINE', onlineUsers);
		});
	}, [user]);

	useEffect(() => {
		//.on => receiver message
		socket.current.on('getMessage', (data) => {
			setArrivalMessages({
				sender: data.senderId,
				text: data.text,
				createdAt: Date.now(),
			});
		});
	}, []);

	useEffect(() => {
		arrivalMessages &&
			currentChat?.members.includes(arrivalMessages.sender) &&
			setMessages((prev) => [...prev, arrivalMessages]);
	}, [arrivalMessages, currentChat]);

	/**************************************************************/

	useEffect(() => {
		dispatch(userConversationsLoadAction(user._id)).then(setConversations);
	}, [user]);

	useEffect(() => {
		if (currentChat) {
			dispatch(messagesLoadAction(currentChat._id)).then(setMessages);
		}
	}, [currentChat]);

	useEffect(() => {
		scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	if (error?.statusCode === 404) {
		return <Redirect to="/404" />;
	}
	if (error?.statusCode === 401) {
		return <Redirect to="/login" />;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const message = {
			sender: user._id,
			text: newMessages,
			conversationId: currentChat._id,
		};
		const receiverId = currentChat.members.find(
			(member) => member !== user._id
		);

		if (onlineUsers.find((onlineUser) => onlineUser.userId === receiverId)) {
			console.log(
				'***********************ENTRA EN EL IF DE USUARIO CONECTADO**************************'
			);
			socket.current.emit('sendMessage', {
				senderId: user._id,
				receiverId,
				text: newMessages,
			});
		}
		try {
			const res = await dispatch(messagesCreatedAction(message));
			setMessages([...messages, res]);
			setNewMessages('');
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<main className="main" style={{ height: '100%' }}>
			<aside className="aside">
				<SideBar />
			</aside>
			<section className="chat">
				<div className="chatMenu">
					<div className="chatMenuWrapper">
						{conversations?.map((conversation) => (
							<div
								key={conversation._id}
								onClick={() => setCurrentChat(conversation)}
							>
								<Conversation conversation={conversation} />
							</div>
						))}
					</div>
				</div>
				<div className="chatBox">
					<div style={{ padding: '0.5rem' }}>
						{currentChat && (
							<UserOwnAdvertChat currentChat={currentChat} user={user} />
						)}
					</div>
					<div className="chatBoxWrapper">
						{!!currentChat ? (
							<>
								<div className="chatBoxTop">
									{messages?.map((message) => (
										<div key={message._id} ref={scrollRef}>
											<Message
												message={message}
												own={message.sender === user._id}
												currentChat={currentChat}
												user={user}
											/>
										</div>
									))}
								</div>
								<div className="chatBoxBottom">
									<textarea
										placeholder={t('chat.type your message')}
										onChange={(e) => setNewMessages(e.target.value)}
										value={newMessages}
									></textarea>
									<button className="chatSubmitButton" onClick={handleSubmit}>
										{t('chat.Send')}
									</button>
								</div>
							</>
						) : (
							<span className="noConversationText">
								{t('chat.Open a conversation to start a chat.')}
							</span>
						)}
					</div>
				</div>
				<div className="chatOnline">
					<div className="chatOnlineWrapper">
						<ChatUserOnline
							onlineUsers={onlineUsers}
							currentId={user._id}
							setCurrentChat={setCurrentChat}
						/>
					</div>
				</div>
			</section>
		</main>
	);
};

const ChatWithUser = withUser(Chat);

export default ChatWithUser;
