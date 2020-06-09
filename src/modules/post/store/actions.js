import {SET_ERROR, SET_POSTS, SET_POST, UPDATE_POST, DELETE_POST, EDIT_POST} from "modules/post/store/constants";
import PostService from 'modules/post/PostService'
import {REMOVE_ERROR} from "../../auth/store/constants";

export const setPosts = () => async dispatch => {
    try {
        const response = await PostService.allPost()
        dispatch({
            type: SET_POSTS,
            payload: response.data,
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

export const editPost = (id) => async dispatch => {
    try {
        const response = await PostService.editPost(id)
        dispatch({
            type: EDIT_POST,
            payload: response,
        })
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.message,
        })
    }
}

export const updatePost = (data, id) => async dispatch => {
    try {
        const response = await PostService.updatePost(data, id)
        dispatch({
            type: UPDATE_POST,
            payload: response.data
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