import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
	LoginPage,
	PrivateRoute,
	RegisterPage,
	ForgotPasswordPage,
	NewPasswordPage,
} from '../../components/auth';
import {
	AdvertsPage,
	AdvertPage,
	NewAdvertPage,
	EditAdvertPage,
} from '../Adverts';
import UserPageWithUser from '../User/UserPage';
import ChatWithUser from '../Chat/Chat';
import NotfoundPage from './NotFoundPage';

const AppRoutes = () => {
	return (
		<Switch>
			<PrivateRoute exact path="/adverts/new" 
				component={NewAdvertPage} />
			
			<PrivateRoute
				exact path="/adverts/edit/:advertId"
				component={EditAdvertPage} />

			<PrivateRoute
				exact path="/user"
				component={UserPageWithUser} />

			<PrivateRoute exact path="/user/chat">
				<ChatWithUser />
			</PrivateRoute>
			
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
			
			{/* <Route exact path="/:username/adverts">
				<AdvertsPage />
			</Route> */}

			<Route exact path="/">
				<Redirect to="/adverts" />
			</Route>

			<Route exact path="/adverts">
				<AdvertsPage />
			</Route>

			<Route exact path="/404">
				<NotfoundPage />
			</Route>

			<Redirect to="/404" />
			
		</Switch>
	);
};

export default AppRoutes;
