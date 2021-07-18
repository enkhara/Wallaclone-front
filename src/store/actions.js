import { getAdvertsLoaded } from './selectors';
import {
	AUTH_LOGIN_REQUEST,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILURE,
	AUTH_LOGOUT,
	UI_RESET_ERROR,
	AUTH_REGISTER_SUCCESS,
	AUTH_REGISTER_REQUEST,
	AUTH_REGISTER_FAILURE,
	ADVERTS_LOADED_REQUEST,
    ADVERTS_LOADED_SUCCESS,
    ADVERTS_LOADED_FAILURE,
    
} from './types';

/** Login Pasando el history */

export const authLoginRequest = () => {
	return {
		type: AUTH_LOGIN_REQUEST,
	};
};

export const authLoginSuccess = () => {
	return {
		type: AUTH_LOGIN_SUCCESS,
	};
};

export const authLoginFailure = (error) => {
	return {
		type: AUTH_LOGIN_FAILURE,
		payload: error,
		error: true,
	};
};

export const loginAction = (credentials) => {
	return async function (dispatch, getState, { api, history }) {
		dispatch(authLoginRequest());
		try {
			await api.auth.login(credentials);
			dispatch(authLoginSuccess());

			const { from } = history.location.state || { from: { pathname: '/' } };
			history.replace(from);
		} catch (error) {
			dispatch(authLoginFailure(error));
		}
	};
};

export const authLogout = () => {
	return {
		type: AUTH_LOGOUT,
	};
};
/** Register */

export const authRegisterRequest = () => {
	return {
		type: AUTH_REGISTER_REQUEST,
	};
};

export const authRegisterFailure = (error) => {
	return {
		type: AUTH_REGISTER_FAILURE,
		payload: error,
		error: true,
	};
};

export const authRegisterSuccess = () => {
	return {
		type: AUTH_REGISTER_SUCCESS,
	};
};

export const registerAction = (credentials) => {
	return async function (dispatch, getState, { api, history }) {
		dispatch(authRegisterRequest());
		try {
			await api.auth.register(credentials);
			dispatch(authRegisterSuccess());

			const { from } = { from: { pathname: '/login' } };
			history.replace(from);
		} catch (error) {
			dispatch(authRegisterFailure(error));
		}
	};
};
/** fin register */

/** Fin login pasando history */

export const advertsLoadedRequest = () => {
	return {
	  type: ADVERTS_LOADED_REQUEST,
	};
  };
  
  export const advertsLoadedSuccess = adverts => {
	return {
	  type: ADVERTS_LOADED_SUCCESS,
	  payload: adverts,
	};
  };
  
  export const advertsLoadedFailure = error => {
	return {
	  type: ADVERTS_LOADED_FAILURE,
	  payload: error,
	  error: true,
	};
  };
  
  export const advertsLoadAction = () => {
	return async function (dispatch, getState, { api }) {
	  const tweetsLoaded = getAdvertsLoaded(getState());
	  if (tweetsLoaded) {
		return;
	  }
  
	  dispatch(advertsLoadedRequest());
	  try {
		const adverts = await api.adverts.getLatestAdverts();
		dispatch(advertsLoadedSuccess(adverts));
	  } catch (error) {
		dispatch(advertsLoadedFailure(error));
	  }
	};
  };

export const resetError = () => {
	return {
		type: UI_RESET_ERROR,
	};
};
