import {
    SET_POSTS,
    SET_ERROR,
    REMOVE_ERROR,
    SET_POST,
    UPDATE_POST,
    DELETE_POST,
    EDIT_POST,
    CREATE_POST, DELETE_IMAGE
} from "./constants";
import {DELETE_AVATAR} from "../../profile/store/constants";

const initialState = {
    posts: [],
    error: null,
    post: {},
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== payload)
            }
        }
        case UPDATE_POST: {
            const post = state.posts.filter(post => post.id !== payload.id);
            return {
                posts: [
                    ...post,
                    payload,
                ]
            }
        }
        case CREATE_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    payload
                ]
            }
        }
        case DELETE_IMAGE: {
            return {
                ...state,
                posts:payload,
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
            return state;
    }
}

export default PostReducer;