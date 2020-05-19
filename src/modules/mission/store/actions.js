import {SET_ERROR, SET_MISSIONS, SET_MISSION} from "modules/mission/store/constants";
import MissionService from 'modules/mission/MissionService'

export const setMissions = () => async dispatch => {
    try {
        const response = await MissionService.allMission()
        dispatch({
            type: SET_MISSIONS,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.message,
        })
    }
}

export const setMission = (id) => async dispatch => {
    try {
        const response = await MissionService.getMission(id)
        dispatch({
            type: SET_MISSION,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.message,
        })
    }
}