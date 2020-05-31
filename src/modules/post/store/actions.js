import {SET_ERROR, SET_POSTS, SET_POST, UPDATE_POST, DELETE_POST} from "modules/post/store/constants";
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

export const updatePost = (id) => async dispatch => {
    try {
        const response = await PostService.updatePost(id)
        console.log(response)
        dispatch({
            type: UPDATE_POST,
            payload: response
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.message,
        })
    }
}

export const deletePost = (id) => async dispatch => {
    try {
        const response = await PostService.deletePost(id)
        dispatch({
            type: DELETE_POST,
            payload: id
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.message
        })
    }
}