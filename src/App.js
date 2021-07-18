import React from 'react';
import T from 'prop-types';

import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/Register/RegisterPage';
import ForgotPasswordPage from './components/auth/ForgotPassword/ForgotPasswordPage'
import AdvertsPage from './components/Adverts/AdvertsPage/AdvertsPage';
import { BrowserRouter as Router } from 'react-router-dom';


import { useDispatch } from 'react-redux';
import { loggedAction } from './store/actions';


import './reset.css';
import './App.css';

function App({ isInitiallyLogged }) {

	const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(loggedAction(isInitiallyLogged));
    },[dispatch,isInitiallyLogged]);    

	return (

		<Router>
			<Switch>
				<Route exact path="/login">
					<LoginPage />
				</Route>

				<Route exact path="/register">
					<RegisterPage />
				</Route>
				<Route exact path="/forgotPassword">
					<ForgotPasswordPage />
				</Route>

				<Route exact path="/">
					<AdvertsPage />
				</Route>
			</Switch>
		
		</Router>
	);
}

App.propTypes = {
	isInitiallyLogged: T.bool,
};
  
App.defaultProps = {
	isInitiallyLogged: false,
};
  

export default App;
