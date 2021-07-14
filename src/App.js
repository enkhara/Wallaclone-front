import T from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/Register/RegisterPage';
import AdvertsPage from './components/Adverts/AdvertsPage/AdvertsPage';


import { Provider } from 'react-redux';
import store from './store/store';

import './reset.css';
import './App.css';

function App({ isInitiallyLogged }) {
	return (

		<Provider store={store}>
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
			</Switch>
		</Provider>
	
	);
}

App.propTypes = {
	isInitiallyLogged: T.bool,
};
  
App.defaultProps = {
	isInitiallyLogged: false,
};
  


export default App;
