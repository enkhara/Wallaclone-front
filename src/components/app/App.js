import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
	LoginPage,
	PrivateRoute,
	RegisterPage,
	ForgotPasswordPage,
	NewPasswordPage,
} from '../../components/auth';
import { AdvertsPage, AdvertPage, NewAdvertPage } from '../Adverts';
import Chat from '../Chat/Chat';
import NotfoundPage from './NotFoundPage';

import './reset.css';
import './App.css';

function App() {
	return (
		<Switch>
			<Route exact path="/login">
				<LoginPage />
			</Route>

			<Route exact path="/register">
				<RegisterPage />
			</Route>

			<Route exact path="/forgot-password">
				<ForgotPasswordPage />
			</Route>

			<Route exact path="/new-password/:id/:token">
				<NewPasswordPage />
			</Route>

			<Route exact path="/adverts/:advertName/:advertId">
				<AdvertPage />
			</Route>

			<PrivateRoute exact path="/adverts/new" component={NewAdvertPage} />

			<Route exact path="/">
				<Redirect to="/adverts" />
			</Route>

			<Route exact path="/adverts">
				<AdvertsPage />
			</Route>

			<PrivateRoute exact path="/chat/:advertId">
				<Chat />
			</PrivateRoute>

			<Route exact path="/404">
				<NotfoundPage />
			</Route>
			<Redirect to="/404" />
		</Switch>
	);
}

export default App;
