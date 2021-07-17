import {
	AUTH_LOGIN_REQUEST,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILURE,
	AUTH_LOGOUT,
	UI_RESET_ERROR,
	AUTH_REGISTER_SUCCESS,
	AUTH_REGISTER_REQUEST,
	AUTH_REGISTER_FAILURE,
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

/**Login de Jorge */
//Login
// export const authLogged = (isLogged) => ({
// 	type: AUTH_LOGGED,
// 	payload: isLogged,
// });

// export function loggedAction(isLogged) {
// 	return (dispatch) => {
// 		dispatch(authLogged(isLogged));
// 	};
// }

// export const authLoginRequest = () => {
// 	return {
// 		type: AUTH_LOGIN_REQUEST,
// 	};
// };

// export const authLoginSuccess = () => {
// 	return {
// 		type: AUTH_LOGIN_SUCCESS,
// 	};
// };

// export const authLoginFailure = (error) => {
// 	return {
// 		type: AUTH_LOGIN_FAILURE,
// 		payload: error,
// 		error: true,
// 	};
// };

// export function loginAction(credentials) {
// 	return async (dispatch) => {
// 		dispatch(authLoginRequest());
// 		try {
// 			await login(credentials);
// 			dispatch(authLoginSuccess());
// 		} catch (error) {
// 			dispatch(authLoginFailure(error));
// 		}
// 	};
// }
/**Login Jorge */

// //Create new advert
// export const advertsCreatedRequest = () =>({
//     type: ADVERTS_CREATED_REQUEST,
//     payload:true
// });

// export const advertCreatedSuccess = (adverts) =>({
//     type: ADVERTS_CREATED_SUCCESS,
//     payload: adverts

// });

// export const advertCreatedFailure = (stateError) =>({
//     type: ADVERTS_CREATED_FAILURE,
//     payload:stateError
// });

// export function createNewAdvertAction(newAdvert, history){
//     return async (dispatch) =>{
//         dispatch (advertsCreatedRequest());
//         try {

//                 const data = new FormData();
//                 data.append('name',newAdvert.name);
//                 data.append('price',newAdvert.price);
//                 data.append('sale',newAdvert.sale);
//                 data.append('tags',newAdvert.tags);
//                 if(newAdvert.photo){
//                     data.append('photo',newAdvert.photo);
//                 }
//                 const { id: advertId } = await createNewAdvert(data);
//                 const createdAdvert = await getAdvertDetail(advertId);
//                 dispatch(advertCreatedSuccess(createdAdvert));
//                 history.push('/');
//         } catch (error) {
//             dispatch(advertCreatedFailure(true));

//         }
//     }

// }

// //Loaded adverts
// export const advertsLoadedRequest = () =>({
//     type: ADVERTS_LOADED_REQUEST,

// });

// export const advertsLoadedSuccess = (adverts) =>({
//     type: ADVERTS_LOADED_SUCCESS,
//     payload: adverts
// });

// export const advertsLoadedFailure = (error)=>({
//     type: ADVERTS_LOADED_FAILURE,
//     payload:error,
//     error:true

// });

// export function advertsLoadAction(){
//     return async(dispatch,getState) =>{
//         dispatch(advertsLoadedRequest());
//         const advertsLoaded = getAdvertsLoaded(getState());
//         if (advertsLoaded) {
//           return;
//         }
//         try {
//             const adverts = await getAdverts();
//             dispatch(advertsLoadedSuccess(adverts));
//         } catch (error) {
//             dispatch(advertsLoadedFailure(error));
//         }
//     }

// }

// //Loaded tags
// export const advertsTagsAPIRequest = () =>({
//     type: TAGS_LOADED_REQUEST,
// });

// export const advertsTagsAPISuccess = (tags) =>({
//     type: TAGS_LOADED_SUCCESS,
//     payload: tags
// });

// export const advertsTagsAPIFailure = (error)=>({
//     type: TAGS_LOADED_FAILURE,
//     payload:error,
//     error:true

// });

// export function tagsAPIAction(){
//     return async(dispatch) =>{
//         dispatch(advertsTagsAPIRequest());
//         try {
//             const tags = await getAdvertsTags();
//             dispatch(advertsTagsAPISuccess(tags));
//         } catch (error) {
//             dispatch(advertsTagsAPIFailure(error));
//         }
//     }

// }

// //Delete advert
// export function deleteAdvertAction(id,history){
//     return async (dispatch) =>{
//         dispatch(advertsDeletedRequest(id));
//         try {
//             await deleteAdvert(id);
//             dispatch(advertsDeletedSuccess());
//             history.push('/');
//         } catch (error) {
//             dispatch(advertsDeletedFailure(error));
//         }

//     }
// }

// export const advertsDeletedRequest = (id) =>({
//     type: ADVERTS_DELETED_REQUEST,
//     payload:id

// });

// export const advertsDeletedSuccess = () =>({
//     type: ADVERTS_DELETED_SUCCESS

// });

// export const advertsDeletedFailure = (error) =>({
//     type: ADVERTS_DELETED_FAILURE,
//     payload:error,
//     error:true

// });

// //detail advert
// export function advertsDetailAction(advertId){

//     return async (dispatch)=>{
//         dispatch(advertsDetailRequest());
//         try {
//             const advert = await getAdvertDetail(advertId);
//             dispatch(advertsDetailSuccess(advert));
//         } catch (error) {
//             dispatch(advertsDetailFailure(error));
//         }

//     }

// }

// export const advertsDetailRequest = () =>({
//     type:ADVERTS_DETAIL_REQUEST
// });

// export const advertsDetailSuccess = (advert) =>({
//     type: ADVERTS_DETAIL_SUCCESS,
//     payload: advert
// });

// export const advertsDetailFailure = (error)=>({
//     type: ADVERTS_DETAIL_FAILURE,
//     payload:error,
//     error:true

// });

// //logout

// export const authLogoutSuccess = () => ({
//     type: AUTH_LOGOUT
// });

// export const advertsLogoutFailure = (error)=>({
//     type:  AUTH_LOGOUT_FAILURE,
//     payload:error,
//     error:true

// });

// export function authLogoutAction(history){
//     return async (dispatch)=>{

//         try {
//             dispatch(authLogoutSuccess());
//             await logout();
//             history.replace('/login');
//         } catch (error) {
//             dispatch(advertsLogoutFailure(error));
//         }
//     }

// }

export const resetError = () => {
	return {
		type: UI_RESET_ERROR,
	};
};
