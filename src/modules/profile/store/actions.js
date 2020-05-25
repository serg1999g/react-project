import {SET_ERROR, SET_AUTH_PROFILE} from "./constants";
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