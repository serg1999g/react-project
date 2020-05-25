import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import authReducer from 'modules/auth/store/reducer';
import MissionReducer from "modules/mission/store/reducer";
import {ProfileReducer} from "../modules/profile/store/reducer";


export default function createRootReducer(history) {
    return combineReducers({
        auth: authReducer,
        router: connectRouter(history),
        missions: MissionReducer,
        profile: ProfileReducer,
    });
}
