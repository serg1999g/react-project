import {SET_ERROR, REMOVE_ERROR, SET_AUTH_PROFILE, UPDATE_PROFILE} from './constants'

const initialState = {
    profile: [],
    isAuthenticated: false,
    error: null,
};

export const ProfileReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_AUTH_PROFILE: {
            return {
                ...state,
                isAuthenticated: true,
                profile: payload
            }
        }
        case UPDATE_PROFILE: {
            return {
                ...state,
                isAuthenticated: true,
                profile: payload
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: payload
            }
        }
        case REMOVE_ERROR: {
            return {
                ...state,
                error: null
            }
        }
        default:
            return state;
    }
};

export default ProfileReducer;