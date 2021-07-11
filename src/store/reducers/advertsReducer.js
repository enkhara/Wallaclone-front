import {
    AUTH_LOGGED,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT,
    ADVERTS_LOADED_REQUEST,
    ADVERTS_LOADED_SUCCESS,
    ADVERTS_CREATED_REQUEST,
    ADVERTS_CREATED_SUCCESS,
    ADVERTS_DELETED_REQUEST,
    ADVERTS_DELETED_SUCCESS,
    ADVERTS_DETAIL_REQUEST,
    ADVERTS_DETAIL_SUCCESS,
    UI_RESET_ERROR
} from '../types';



export const initialState = {
    logged: false,
    adverts: {
        data:[],
        loaded:false,
        deleteAdvert: null,
        detailAdvert:[]
    },
    ui: {
        loading: false,
        error: null,
    }

}

export function logged(state = initialState.logged, action){
    switch (action.type) {
        case AUTH_LOGGED:
            return action.payload;
        case AUTH_LOGIN_SUCCESS:
            return true;
        case AUTH_LOGOUT:
            return false;
        default:
            return state;
    }

}




export function adverts(state = initialState.adverts, action){
    switch (action.type) {
        case ADVERTS_LOADED_SUCCESS:
            return { ...state, loaded: true, data: action.payload };
        case ADVERTS_CREATED_SUCCESS:
            return { ...state, loaded: false, data:[...state.data, action.payload]}
        case ADVERTS_DETAIL_SUCCESS:
            return { ...state, loaded: false, detailAdvert:action.payload };
        case ADVERTS_DELETED_REQUEST:
            return {...state, deleteAdvert:action.payload }
        case ADVERTS_DELETED_SUCCESS:
            return{
                ...state,
                data: state.data.filter( advert => advert.id !== state.deleteAdvert ),
                deleteAdvert:null
            }

        default:
          return state;
      }

}


export function ui(state = initialState.ui, action) {
    if (action.error) {
        return { ...state, loading: false, error: action.payload };
    }
    switch (action.type) {
        case AUTH_LOGIN_REQUEST:
        case ADVERTS_LOADED_REQUEST:
        case ADVERTS_CREATED_REQUEST:
        case ADVERTS_DETAIL_REQUEST:
            return { ...state, loading: true, error: null };
        case AUTH_LOGIN_SUCCESS:
        case ADVERTS_LOADED_SUCCESS:
        case ADVERTS_CREATED_SUCCESS:
        case ADVERTS_DETAIL_SUCCESS:
        case UI_RESET_ERROR:
            return {...state,error: null};
        default:
        return state;
    }
}



