import Swal from 'sweetalert2';
import { user } from './reducers/advertsReducer';
import {
  getAdvertsLoaded,
  getUser,
  getAdvertDetail,
  getTagsLoaded,
} from './selectors';

import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
  AUTH_LOGOUT_FAILURE,
  UI_RESET_ERROR,
  ADVERT_CREATED_SUCCESS,
  ADVERT_CREATED_REQUEST,
  ADVERT_CREATED_FAILURE,
  ADVERT_EDIT_SUCCESS,
  ADVERT_EDIT_REQUEST,
  ADVERT_EDIT_FAILURE,
  ADVERT_UPDATE_SUCCESS,
  ADVERT_UPDATE_REQUEST,
  ADVERT_UPDATE_FAILURE,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_FAILURE,
  ADVERTS_LOADED_REQUEST,
  ADVERTS_LOADED_SUCCESS,
  ADVERTS_LOADED_FAILURE,
  TAGS_LOADED_REQUEST,
  TAGS_LOADED_SUCCESS,
  TAGS_LOADED_FAILURE,
  ADVERT_DETAIL_REQUEST,
  ADVERT_DETAIL_SUCCESS,
  ADVERT_DETAIL_FAILURE,
  ADVERT_DELETED_REQUEST,
  ADVERT_DELETED_SUCCESS,
  ADVERT_DELETED_FAILURE,
  AUTH_FORGOT_PASSWORD_FAILURE,
  AUTH_FORGOT_PASSWORD_REQUEST,
  AUTH_FORGOT_PASSWORD_SUCCESS,
  AUTH_NEW_PASSWORD_REQUEST,
  AUTH_NEW_PASSWORD_SUCCESS,
  AUTH_NEW_PASSWORD_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_LOGGED_SUCCESS,
  USER_LOGGED_REQUEST,
  USER_LOGGED_FAILURE,
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
//logout

export const authLogoutSuccess = () => ({
  type: AUTH_LOGOUT,
});

export const advertsLogoutFailure = (error) => ({
  type: AUTH_LOGOUT_FAILURE,
  payload: error,
  error: true,
});

export function authLogoutAction() {
  return async (dispatch, getState, { api, history }) => {
    try {
      dispatch(authLogoutSuccess());
      dispatch(userLogoutSuccess());
      await api.auth.logout();
      history.push('/');
    } catch (error) {
      dispatch(advertsLogoutFailure(error));
    }
  };
}
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
    Swal.fire(
      'Congratulations!',
      'You have successfully registered',
      'success'
    );

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

/**************************GET ADVERTS***********************/

export const advertsLoadedRequest = () => {
  return {
    type: ADVERTS_LOADED_REQUEST,
  };
};

export const advertsLoadedSuccess = (adverts) => {
  return {
    type: ADVERTS_LOADED_SUCCESS,
    payload: adverts,
  };
};

export const advertsLoadedFailure = (error) => {
  return {
    type: ADVERTS_LOADED_FAILURE,
    payload: error,
    error: true,
  };
};

export const advertsLoadAction = () => {
  return async function (dispatch, getState, { api }) {
    const advertsLoaded = getAdvertsLoaded(getState());
    if (advertsLoaded) {
      return;
    }

    dispatch(advertsLoadedRequest());
    try {
      const adverts = await api.adverts.getAllAdverts(); //antes getLatestAdverts(filters, limit, skip);
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

/*****************ADVERT DETAIL************************ */

export const advertDetailRequest = () => {
  return {
    type: ADVERT_DETAIL_REQUEST,
  };
};

export const advertDetailSuccess = (advert) => {
  return {
    type: ADVERT_DETAIL_SUCCESS,
    payload: advert,
  };
};

export const advertDetailFailure = (error) => {
  return {
    type: ADVERT_DETAIL_FAILURE,
    payload: error,
    error: true,
  };
};

export const advertDetailAction = (advertId) => {
  return async function (dispatch, getState, { api, history }) {
    const advertLoaded = getAdvertDetail(getState(), advertId);
    if (advertLoaded) {
      return;
    }
    dispatch(advertDetailRequest());
    try {
      const advert = await api.adverts.getAdvert(advertId);
      //console.log(`advert ACTION ${advert}`);
      dispatch(advertDetailSuccess(advert.result));
      return advert.result;
    } catch (error) {
      dispatch(advertDetailFailure(error));
    }
  };
};

/*******************************TAGS*********************************** */
export const tagsLoadedRequest = () => {
  return {
    type: TAGS_LOADED_REQUEST,
  };
};

export const tagsLoadedSuccess = (tags) => {
  return {
    type: TAGS_LOADED_SUCCESS,
    payload: tags,
  };
};

export const tagsLoadedFailure = (error) => {
  return {
    type: TAGS_LOADED_FAILURE,
    payload: error,
    error: true,
  };
};

export const tagsLoadedAction = () => {
  return async function (dispatch, getState, { api }) {
    const tagsLoaded = getTagsLoaded(getState());
    if (tagsLoaded) {
      return;
    }
    dispatch(tagsLoadedRequest());
    try {
      const tags = await api.adverts.getAllTags();
      dispatch(tagsLoadedSuccess(tags));
    } catch (error) {
      //TODO: pasarle el history y manejar en caso de rror la redireccion para quitarla del componente
      dispatch(tagsLoadedFailure(error));
    }
  };
};

/**************************ADVERT CREATION***************************** */

export const advertCreatedRequest = () => {
  return {
    type: ADVERT_CREATED_REQUEST,
  };
};

export const advertCreatedSuccess = (advert) => {
  return {
    type: ADVERT_CREATED_SUCCESS,
    payload: advert,
  };
};

export const advertCreatedFailure = (error) => {
  return {
    type: ADVERT_CREATED_FAILURE,
    payload: error,
    error: true,
  };
};

export const advertCreatedAction = (advert) => {
  return async function (dispatch, getState, { api, history }) {
    dispatch(advertCreatedRequest());
    try {
      const createdAdvert = await api.adverts.createdAdvert(advert);

      dispatch(advertCreatedSuccess(createdAdvert.result));
      history.push(
        `/adverts/${createdAdvert.result.name}/${createdAdvert.result._id}`
      );
    } catch (error) {
      dispatch(advertCreatedFailure(error));
      if (error?.statusCode === 401) {
        history.push('/login');
      }
    }
  };
};

/**
 * ADVERT EDIT
 */

export const advertEditRequest = () => {
  return {
    type: ADVERT_EDIT_REQUEST,
  };
};

export const advertEditSuccess = (advert) => {
  return {
    type: ADVERT_EDIT_SUCCESS,
    payload: advert,
  };
};

export const advertEditFailure = (error) => {
  return {
    type: ADVERT_EDIT_FAILURE,
    payload: error,
    error: true,
  };
};

export const advertEditAction = (advertId) => {
  return async function (dispatch, getState, { api, history }) {
    const advertEdited = getAdvertDetail(getState(), advertId);
    if (advertEdited) {
      return;
    }
    dispatch(advertEditRequest());
    try {
      const advert = await api.adverts.getAdvert(advertId);
      //console.log(`advert ACTION ${advert}`);
      dispatch(advertEditSuccess(advert.result));
      return advert.result;
    } catch (error) {
      dispatch(advertEditFailure(error));
    }
  };
};

/**
 * ADVERT UPDATE
 */

export const advertUpdateRequest = () => {
  return {
    type: ADVERT_UPDATE_REQUEST,
  };
};

export const advertUpdateSuccess = (advert) => {
  return {
    type: ADVERT_UPDATE_SUCCESS,
    payload: advert,
  };
};

export const advertUpdateFailure = (error) => {
  return {
    type: ADVERT_UPDATE_FAILURE,
    payload: error,
    error: true,
  };
};

export const advertUpdateAction = (advertId, advert) => {
  return async function (dispatch, getState, { api, history }) {
    dispatch(advertUpdateRequest());
    try {
      const updateAdvert = await api.adverts.updateAdvert(advertId, advert);

      dispatch(advertUpdateSuccess(updateAdvert.result));
      history.push(
        `/adverts/${updateAdvert.result.name}/${updateAdvert.result._id}`
      );
    } catch (error) {
      dispatch(advertUpdateFailure(error));
      if (error?.statusCode === 401) {
        history.push('/login');
      }
    }
  };
};

/*******************ADVERT DELETE ************************* */

export const advertDeletedRequest = () => {
  return {
    type: ADVERT_DELETED_REQUEST,
  };
};

export const advertDeletedSuccess = (advertId) => {
  return {
    type: ADVERT_DELETED_SUCCESS,
    payload: advertId,
  };
};

export const advertDeletedFailure = (error) => {
  return {
    type: ADVERT_DELETED_FAILURE,
    payload: error,
    error: true,
  };
};

export const advertDeletedAction = (advertId) => {
  return async function (dispatch, getState, { api, history }) {
    dispatch(advertDeletedRequest());
    try {
      // const advert = await api.adverts.deleteAdvert(advertId);
      // dispatch(advertDeletedSuccess(advert));
      await api.adverts.deleteAdvert(advertId);
      dispatch(advertDeletedSuccess(advertId));
      history.push('/');
      Swal.fire(
        'Advert deleted',
        'El anuncio ha sido borrado con éxito',
        'success'
      );
    } catch (error) {
      dispatch(advertDeletedFailure(error));
      const errorMessage = JSON.stringify(error.message);
      Swal.fire(`${errorMessage}`, error.data.error, 'error');
    }
  };
};
/*******************FORGOT PASSWORD*************/

export const forgotPasswordRequest = (email) => {
  return {
    type: AUTH_FORGOT_PASSWORD_REQUEST,
  };
};

export const forgotPasswordSuccess = () => {
  return {
    type: AUTH_FORGOT_PASSWORD_SUCCESS,
  };
};

export const forgotPasswordFailure = (error) => {
  return {
    type: AUTH_FORGOT_PASSWORD_FAILURE,
    payload: error,
    error: true,
  };
};

// Forgot Password middleware
export const forgotPasswordAction = (email, history) => {
  return async function (dispatch, getState, { api, history }) {
    dispatch(forgotPasswordRequest());
    try {
      await api.auth.forgotPassword(email);
      Swal.fire(
        'You will receive an email if this email address is in our database'
      );
      history.push('/login');
      dispatch(forgotPasswordSuccess());
    } catch (error) {
      dispatch(forgotPasswordFailure(error));
    }
  };
};

/***************************new_password*************************************************/
// Reset Password actions
export const newPasswordRequest = () => {
  return {
    type: AUTH_NEW_PASSWORD_REQUEST,
  };
};

export const newPasswordSuccess = (credentials) => {
  return {
    type: AUTH_NEW_PASSWORD_SUCCESS,
    payload: credentials,
  };
};
export const newPasswordFailure = (error) => {
  return {
    type: AUTH_NEW_PASSWORD_FAILURE,
    payload: error,
    error: true,
  };
};

// Reset Password middleware

export const newPasswordAction = (
  credentials,
  id,
  token,
  history,
  location
) => {
  return async function (dispatch, getState, { api, history }) {
    dispatch(newPasswordRequest());

    try {
      await api.auth.newPassword(credentials, id, token);
      await Swal.fire('updated password!!');
      window.open('about:blank', '_self');
      window.close();
      // Redirect
      // const { from } = location.state || { from: { pathname: '/login' } };
      // history.replace(from);
      dispatch(newPasswordSuccess());
    } catch (error) {
      dispatch(newPasswordFailure(error));
      // const errorMessage = JSON.stringify(error.message);
      // Swal.fire(`${errorMessage}`);
    }
  };
};

/***********************GET USER**************************/
export const userLoggedRequest = () => {
  return {
    type: USER_LOGGED_REQUEST,
  };
};

export const userLoggedFailure = (error) => {
  return {
    type: USER_LOGGED_FAILURE,
    payload: error,
    error: true,
  };
};

export const userLoggedSuccess = (user) => {
  return {
    type: USER_LOGGED_SUCCESS,
    payload: user,
  };
};

export const userLoggedAction = () => {
  return async function (dispatch, getState, { api }) {
    const user = getUser(getState());
    if (user) {
      return;
    }
    dispatch(userLoggedRequest());
    try {
      const user = await api.user.getUserLogged();
      dispatch(userLoggedSuccess(user));
    } catch (err) {
      dispatch(userLoggedFailure(err));
      console.error('error en user token', err);
    }
  };
};

/***********************USER LOGOUT DELETE***********************/
export const userLogoutRequest = () => {
  return {
    type: USER_LOGOUT_REQUEST,
  };
};

export const userLogoutFailure = (error) => {
  return {
    type: USER_LOGOUT_FAILURE,
    payload: error,
    error: true,
  };
};

export const userLogoutSuccess = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
    payload: null,
  };
};
