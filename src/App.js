import { Switch, Route } from 'react-router-dom';

import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/Register/RegisterPage';
import AdvertsPage from './components/Adverts/AdvertsPage/AdvertsPage';

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

			<Route exact path="/">
				<AdvertsPage />
			</Route>
		</Switch>
	);
}

export default App;
