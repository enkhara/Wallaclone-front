import React from 'react';
import T from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LoginPage, PrivateRoute, RegisterPage } from '../../components/auth';
import AdvertsPage from '../Adverts/AdvertsPage/AdvertsPage';

import NotfoundPage from './NotFoundPage';
// import { BrowserRouter as Router } from 'react-router-dom';

// import { useDispatch } from 'react-redux';
// import { loggedAction } from '../../store/actions';

import './reset.css';
import './App.css';

// function App({ isInitiallyLogged }) {
// 	const dispatch = useDispatch();

// 	React.useEffect(() => {
// 		dispatch(loggedAction(isInitiallyLogged));
// 	}, [dispatch, isInitiallyLogged]);
function App() {
	return (
		<Switch>
			<Route exact path="/login">
				<LoginPage />
			</Route>

			<Route exact path="/register">
				<RegisterPage />
			</Route>

			<Route exact path="/">
				<AdvertsPage />
			</Route>
			<Route exact path="/404">
				<NotfoundPage />
			</Route>
			<Redirect to="/404" />
		</Switch>
	);
}

App.propTypes = {
	isInitiallyLogged: T.bool,
};

App.defaultProps = {
	isInitiallyLogged: false,
};

export default App;
