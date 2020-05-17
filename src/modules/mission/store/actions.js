import {SET_ERROR, SET_MISSIONS} from "modules/mission/store/constants";
import MissionService from 'modules/mission/MissionService'

export const setMission = () => async dispatch => {
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