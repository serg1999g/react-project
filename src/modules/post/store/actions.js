import {SET_ERROR, SET_POSTS, SET_POST} from "modules/post/store/constants";
import PostService from 'modules/post/PostService'

export const setPosts = () => async dispatch => {
    try {
        const response = await PostService.allPost()
        dispatch({
            type: SET_POSTS,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.message,
        })
    }
}

export const setPost = (id) => async dispatch => {
    try {
        const response = await PostService.getPost(id)
        dispatch({
            type: SET_POST,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.message,
        })
    }
}