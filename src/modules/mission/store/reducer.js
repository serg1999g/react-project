import {SET_MISSIONS, SET_ERROR, REMOVE_ERROR} from "./constants";

const initialState = {
    mission: [],
    error: null
}

export const MissionReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_MISSIONS: {
            return {
                ...state,
                mission: payload,
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
                error: null,
            }
        }
        default:
            return state
    }
}

export default MissionReducer;