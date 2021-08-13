import React, { useEffect, useState, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { useTranslation } from 'react-i18next';
import T from 'prop-types';

import './Chat.css';
import ChatUserOnline from './ChatUserOnline';
import Conversation from './Conversations';
import Message from './Message';
import withUser from '../hoc/withUser';
import {
	getConversation,
	getMessages,
	createdNewMessage,
} from '../../api/chat';
import { getUi } from '../../store/selectors';
import { Header, SideBar } from '../layout';
import {
	conversationLoadAction,
	messagesCreatedAction,
	messagesLoadAction,
} from '../../store/actions';

const Chat = ({ user, ...props }) => {
	const dispatch = useDispatch();
	const [conversations, setConversations] = useState([]);
	const [currentChat, setCurrentChat] = useState(null);
	const [messages, setMessages] = useState([]);
	const [newMessages, setNewMessages] = useState('');
	const [arrivalMessages, setArrivalMessages] = useState(null);
	const [onlineUsers, setOnlineUser] = useState([]);

	const { t, i18n } = useTranslation(['global']);

	const socket = useRef();
	const scrollRef = useRef();

	const { error } = useSelector(getUi);

	/******************SOCKET CLIENT******************************/

	useEffect(() => {
		socket.current = io(process.env.REACT_APP_SOCKET_SERVER);
	}, []);

	useEffect(() => {
		socket.current.emit('addUser', user._id);
		socket.current.on('getUsers', (users) => {
			//console.log('socket io users conected', users);
			setOnlineUser(users);
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
		//control de mensajes y chat, si llega un mensaje de otro usuario no se debe mostras
		arrivalMessages &&
			currentChat?.members.includes(arrivalMessages.sender) &&
			setMessages((prev) => [...prev, arrivalMessages]);
	}, [arrivalMessages, currentChat]);

	/**************************************************************/

	useEffect(() => {
		dispatch(conversationLoadAction(user._id)).then(setConversations);
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
		//emit => send
		socket.current.emit('sendMessage', {
			senderId: user._id,
			receiverId,
			text: newMessages,
		});

		try {
			//const res = await createdNewMessage(message);
			const res = dispatch(messagesCreatedAction(message));
			console.log('respuesta guardado mensaje', res);
			setMessages([...messages, res]);
			setNewMessages('');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<React.Fragment>
			<Header />
			<SideBar />
			<div className="chat">
				<div className="chatMenu">
					<div className="chatMenuWrapper">
						<input placeholder="Search for friends"></input>
						{conversations?.map((conversation) => (
							<div
								key={conversation._id}
								onClick={() => setCurrentChat(conversation)}
							>
								<Conversation conversation={conversation} currentUser={user} />
							</div>
						))}
					</div>
				</div>
				<div className="chatBox">
					<div className="chatBoxWrapper">
						{!!currentChat ? (
							<>
								<div className="chatBoxTop">
									{messages?.map((message) => (
										<div key={message._id} ref={scrollRef}>
											<Message
												message={message}
												own={message.sender === user._id}
											/>
										</div>
									))}
								</div>
								<div className="chatBoxBottom">
									<textarea
										className="chatMessageInput"
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
							onlineUser={onlineUsers}
							currentId={user._id}
							setCurrentChat={setCurrentChat}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

const ChatWithUser = withUser(Chat);

export default ChatWithUser;
