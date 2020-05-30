import {SET_POSTS, SET_ERROR, REMOVE_ERROR, SET_POST} from "./constants";

const initialState = {
    posts: {},
    error: null,
    post:{},
}

export const PostReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: payload,
            }
        }
        case SET_POST: {
            return {
                ...state,
                post: payload,
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

export default PostReducer;