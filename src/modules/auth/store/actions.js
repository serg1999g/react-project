// redux actions
import {SIGN_IN, SET_ERROR, REMOVE_ERROR, SET_USER} from "modules/auth/store/constants";
import AuthService from "modules/auth/AuthService";

export const signIn = (data) => async dispatch => {
    try {
        dispatch({
            type: REMOVE_ERROR
        })
        const response = await AuthService.signIn(data);
        const token = response.data.access_token;
        localStorage.setItem('token', token);
        const user = await AuthService.getUser();
        dispatch({
            type: SIGN_IN,
            payload: user,
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.message
        })
    }
}

export const setUser = () => async dispatch => {
    try {
        const user = await AuthService.getUser()
        dispatch({
            type: SET_USER,
            payload: user
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.message
        })
    }
}