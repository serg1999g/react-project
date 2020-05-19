import {SET_MISSIONS, SET_ERROR, REMOVE_ERROR, SET_MISSION} from "./constants";

const initialState = {
    missions: {},
    error: null,
    mission:{},
}

export const MissionReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_MISSIONS: {
            return {
                ...state,
                missions: payload,
            }
        }
        case SET_MISSION: {
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