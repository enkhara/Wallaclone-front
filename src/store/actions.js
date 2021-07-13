import { login, logout } from '../api/auth';
import {
    AUTH_LOGGED,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGOUT,
    AUTH_LOGOUT_FAILURE,
    ADVERTS_LOADED_REQUEST,
    ADVERTS_LOADED_SUCCESS,
    ADVERTS_LOADED_FAILURE,
    ADVERTS_CREATED_REQUEST,
    ADVERTS_CREATED_SUCCESS,
    ADVERTS_CREATED_FAILURE,
    ADVERTS_DELETED_REQUEST,
    ADVERTS_DELETED_SUCCESS,
    ADVERTS_DELETED_FAILURE,
    ADVERTS_DETAIL_REQUEST,
    ADVERTS_DETAIL_SUCCESS,
    ADVERTS_DETAIL_FAILURE,
    UI_RESET_ERROR
} from './types';

//Login
// export function loggedAction(isLogged){
//     return (dispatch) =>{
//         dispatch(authLogged(isLogged));
//     }
    
// }

// export const authLogged = (isLogged) =>({
//     type: AUTH_LOGGED,
//     payload: isLogged

// });

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
  
export const authLoginFailure = error => {
    return {
      type: AUTH_LOGIN_FAILURE,
      payload: error,
      error:true
     
    };
};
  
export function loginAction(credentials){
   return async(dispatch) =>{
        dispatch(authLoginRequest());
        try {
            await login(credentials);
            dispatch(authLoginSuccess());
        } catch (error) {
            dispatch(authLoginFailure(error));
        }

   }
};


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


// export const resetError = () => {
//     return {
        
//       type: UI_RESET_ERROR,
//     };
// };