import {SET_ERROR, SET_AUTH_PROFILE, UPDATE_PROFILE, CHANGE_PASSWORD, DELETE_AVATAR, CREATE_AVATAR} from "./constants";
import ProfileService from "../ProfileService";

export const setAuthProfile = () => async dispatch => {
    try {
        const response = await ProfileService.setAuthProfile()
        dispatch({
            type: SET_AUTH_PROFILE,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.message,
        })
    }
}

export const updateProfile = (data) => async dispatch => {
    try {
        const response = await ProfileService.updateProfile(data)
        dispatch({
            type: UPDATE_PROFILE,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.message,
        })
    }
}

export const changePassword = (data) => async dispatch => {
    try {
        const response = await ProfileService.changePassword(data)
        dispatch({
            type: CHANGE_PASSWORD,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.message,
        })
    }
}

export const deleteAvatar = (id) => async dispatch => {
    try {
        const response = await ProfileService.deleteAvatar(id)
        dispatch({
            type: DELETE_AVATAR,
            payload: response.data,
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.message,
        })
    }
}

export const createAvatar = (data) => async dispatch => {
    try {
        const response = await ProfileService.createAvatar(data)
        dispatch({
            type: CREATE_AVATAR,
            payload: response.data,
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.message,
        })
    }
}